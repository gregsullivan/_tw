The three JavaScript files at `../../javascript` will be processed by esbuild,
and the output files will be created in this folder with `.min.js` extensions.
The files `script.min.js`, `block-editor.min.js` and
`tailwind-typography-classes.js` are enqueued by default in `../functions.php`.

If you would like to add new files to be processed by esbuild, add them to the
`../../javascript` folder and then add them to the `development:esbuild` key in
your `package.json` file.

DO NOT directly edit `*.min.js` files, as these files are ignored by git and
will be overwritten the next time esbuild runs.
