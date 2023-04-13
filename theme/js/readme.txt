The JavaScript code at `../../javascript/*.js` will be processed by
esbuild, and the output file(s) will be created in this folder as `*.min.js`.
The files `script.min.js` and `block-editor.min.js` are enqueued by default in
`../functions.php`.

DO NOT directly edit `*.min.js`, as these files are ignored by git and will be
overwritten the next time esbuild runs.
