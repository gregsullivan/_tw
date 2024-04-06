/* global wp */

/**
 * Block editor modifications
 *
 * This file is loaded only by the block editor. Use it to modify the block
 * editor via its APIs.
 *
 * The JavaScript code you place here will be processed by esbuild, and the
 * output file will be created at `../theme/js/block-editor.min.js` and
 * enqueued in `../theme/functions.php`.
 *
 * For esbuild documentation, please see:
 * https://esbuild.github.io/
 */

/**
 * This import adds your front-end post title and Tailwind Typography classes
 * to the block editor. It also adds some helper classes so you can access the
 * post type when modifying the block editor’s appearance.
 */
import '@_tw/typography/block-editor-classes';

wp.domReady(() => {
	/**
	 * Add support for Tailwind Typography’s `lead` class via a block style.
	 */
	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'lead',
		label: 'Lead',
	});

	// Add additional block editor modifications here. For example, you could
	// register another block style:
	//
	// wp.blocks.registerBlockStyle( 'core/quote', {
	// 	name: 'fancy-quote',
	// 	label: 'Fancy Quote',
	// } );
});
