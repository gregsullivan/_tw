/* global wp, tailwindTypographyClasses */

/**
 * Tailwind Typography support from _tw
 *
 * The code below adds your front-end post title and Tailwind Typography
 * classes to the block editor. It also adds some helper classes so you can
 * access the post type when modifying the block editor’s appearance.
 *
 * You should not edit this file. If you would like to use JavaScript to
 * modify the block editor, please use the `block-editor.js` file instead.
 *
 * The JavaScript code you place here will be processed by esbuild. The output
 * file will be created at `../theme/js/tailwind-typography-classes.min.js` and
 * enqueued in `../theme/functions.php`.
 *
 * For esbuild documentation, please see:
 * https://esbuild.github.io/
 */

// Set our target classes and the classes we’ll add to them.
var targetClasses = {
	'edit-post-visual-editor__post-title-wrapper': ['entry-header'],
	'wp-block-post-title': ['entry-title'],
	'wp-block-post-content': ['entry-content', ...tailwindTypographyClasses],
};

wp.domReady(() => {
	// Add the necessary Tailwind Typography classes to the block editor.
	addTypographyClasses();
});

/**
 * Get the class for the current post type from the `body` element. (We would
 * use `wp.data`, but it doesn't work reliably both inside and outside of the
 * post editor `iframe`.)
 */
function getCurrentPostTypeClass() {
	let currentClass = null;

	for (const classToCheck of document.body.classList) {
		if (classToCheck.startsWith('post-type-')) {
			currentClass = classToCheck;
			break;
		}
	}

	return currentClass;
}

/**
 * Because Gutenberg’s `isEditorReady` function remains unstable,
 * we’ll use an interval to watch for the arrival of the elements we need.
 */
function addTypographyClasses() {
	const editorLoadedInterval = setInterval(function () {
		// Wait until elements with all target classes are present.
		if (
			Object.keys(targetClasses).every(
				(className) => document.getElementsByClassName(className).length
			)
		) {
			if (getCurrentPostTypeClass()) {
				// Add the post type class throughout.
				Object.values(targetClasses).forEach((className) =>
					className.push(getCurrentPostTypeClass())
				);
			}

			// Add the classes before creating the mutation observer.
			Object.entries(targetClasses).forEach(([targetClass, classes]) => {
				document
					.getElementsByClassName(targetClass)[0]
					.classList.add(...classes);
			});

			// Add mutation observers to each element.
			Object.keys(targetClasses).forEach((className) => {
				mutationObserver.observe(
					document.querySelector('.' + className),
					{
						attributes: true,
						attributeFilter: ['class'],
					}
				);
			});

			// Stop the interval.
			clearInterval(editorLoadedInterval);
		} else if (document.getElementsByName('editor-canvas').length) {
			// If the block editor has been loaded in an iframe, and this code
			// is running outside of that iframe, stop the interval. (This code
			// will run again inside the iframe.)
			clearInterval(editorLoadedInterval);
		}
	}, 40);
}

/**
 * We need to ensure the class names we add are added again if the React
 * component is updated, removing them in the process. The mutation observer
 * below will check for the needed classes and add them if they’ve been
 * removed.
 */
const mutationObserver = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		const classList = mutation.target.classList;

		Object.entries(targetClasses).forEach(([targetClass, classes]) => {
			if (classList.contains(targetClass)) {
				// Check whether all added classes are present.
				if (
					!classes.every((className) => classList.contains(className))
				) {
					// Add them again if they’re not.
					classList.add(...classes);
				}
			}
		});
	});
});
