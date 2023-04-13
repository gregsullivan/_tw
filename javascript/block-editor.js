/* global wp, tailwindTypographyClasses */

/**
 * This file is loaded only by the block editor.
 *
 * The JavaScript code you place here will be processed by esbuild, and the
 * output file will be created at `../theme/js/block-editor.min.js` and
 * enqueued in `../theme/functions.php`.
 *
 * For esbuild documentation, please see:
 * https://esbuild.github.io/
 */

wp.domReady(() => {
	/**
	 * Block editor modifications
	 */

	/* Add any custom modifications between this line and the "stop editing" line. */

	// Add your own block editor modifications here. For example, you could
	// register a block style:
	//
	// wp.blocks.registerBlockStyle( 'core/paragraph', {
	// 	name: 'indent',
	// 	label: 'Indent',
	// } );

	/* That's all, stop editing! */

	/*
	 * Add the necessary Tailwind Typography classes to the block editor.
	 * For details, please see the comments below.
	 */
	addTypographyClasses();
});

/**
 * Tailwind Typography support from _tw
 *
 * The code below adds your front-end post title and Tailwind Typography
 * classes to the block editor.
 *
 * Because Gutenberg’s `isEditorReady` function remains unstable,
 * we’ll use an interval to watch for the arrival of the elements we need.
 */
function addTypographyClasses() {
	const editorLoadedInterval = setInterval(function () {
		// Wait until both the post title and post content blocks are present.
		if (
			document.getElementsByClassName('wp-block-post-title').length &&
			document.getElementsByClassName('wp-block-post-content').length
		) {
			// Add the `entry-title` class to the post title block.
			document
				.getElementsByClassName('wp-block-post-title')[0]
				.classList.add('entry-title');

			// Add the Tailwind Typography modifiers to the post content block.
			document
				.getElementsByClassName('wp-block-post-content')[0]
				.classList.add(...tailwindTypographyClasses);

			// Add mutation observers to both blocks.
			['.wp-block-post-title', '.wp-block-post-content'].forEach(
				(className) => {
					mutationObserver.observe(
						document.querySelector(className),
						{
							attributes: true,
							attributeFilter: ['class'],
						}
					);
				}
			);

			// Stop the interval.
			clearInterval(editorLoadedInterval);
		}
	}, 100);
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

		// Check whether the mutated element is a post title or post content
		// block.
		if (classList.contains('wp-block-post-title')) {
			// Check whether the `entry-title` class is present.
			if (!classList.contains('entry-title')) {
				// Add the `entry-title` class.
				classList.add('entry-title');
			}
		} else if (classList.contains('wp-block-post-content')) {
			// Check whether all the Tailwind Typography modifiers are present.
			if (
				!tailwindTypographyClasses.every((className) =>
					classList.contains(className)
				)
			) {
				// Add the Tailwind Typography modifiers.
				classList.add(...tailwindTypographyClasses);
			}
		}
	});
});
