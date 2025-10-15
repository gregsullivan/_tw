\_tw
====

This repository tracks the output of the [_tw WordPress starter theme generator](https://underscoretw.com/) with all options left blank.

Right now there isn't a public repository for the generator itself. Please post issues regarding the generator to this repository.

If you're starting a new project, [the generator](https://underscoretw.com/) is the best way to do that. You can also read [the documentation](https://underscoretw.com/docs/) for more details.

---

> **Note**\
> The default contents of `README.md` in a generated theme are as follows:

A custom theme based on \_tw

## Quickstart

### Installation

1. Move this folder to `wp-content/themes` in your local development environment
2. Run `npm install && npm run dev` in this folder
3. Activate this theme in your local WordPress installation

Using WordPress Multisite? Don’t forget that your theme must first be enabled via the Network Admin in order to be available for activation on a network site.

### Development

4. Run `npm run watch`
5. Add [Tailwind utility classes](https://tailwindcss.com/docs/utility-first) with abandon

### Deployment

6. Run `npm run bundle`
7. Upload the resulting zip file to your site using the “Upload Theme” button on the “Add Themes” administration page

Or [deploy with the tool of your choice](https://underscoretw.com/docs/deployment/#h-other-deployment-options)!

## Full Documentation

### Fundamentals

* [Installation](https://underscoretw.com/docs/installation/)  
  Generate your custom theme, install it in WordPress and run your first Tailwind builds
* [Development](https://underscoretw.com/docs/development/)  
  Watch for changes, build for production and learn more about how _tw, WordPress and Tailwind work together
* [Deployment](https://underscoretw.com/docs/deployment/)  
  Share your new WordPress theme with the world
* [Troubleshooting](https://underscoretw.com/docs/troubleshooting/)  
  Find solutions to potential issues and answers to frequently asked questions

### In Depth

* [Using Tailwind Typography](https://underscoretw.com/docs/tailwind-typography/)  
  Customize front-end and back-end typographic styles
* [JavaScript Bundling with esbuild](https://underscoretw.com/docs/esbuild/)  
  Install and bundle JavaScript libraries (very quickly)
* [Adding custom fonts](https://underscoretw.com/docs/custom-fonts/)
  Host your fonts yourself or use a third party—and then add those fonts to your WordPress theme
* [Linting and Code Formatting](https://underscoretw.com/docs/linting-code-formatting/)  
  Catch bugs and stop thinking about formatting
* [Keeping your theme up-to-date](https://underscoretw.com/docs/updating/)
  How to update (and whether or not you should)

### Extras

* [On Tailwind and WordPress](https://underscoretw.com/docs/wordpress-tailwind/)  
  Understand how WordPress and Tailwind work together
* [Styling HTML from outside the theme](https://underscoretw.com/docs/styling-html-from-outside-the-theme/)
  Work with WordPress core, plugins and JavaScript libraries
* [Managing Styles for Custom Blocks](https://underscoretw.com/docs/custom-blocks/)  
  Learn strategies for using Tailwind in theme-specific custom blocks
* [Setting Up Browsersync](https://underscoretw.com/docs/browsersync/)  
  Add live reloads and synchronized cross-device testing to your workflow

> **Note**\
> The default contents of `README.md` end here.

---

## Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### 2025-10-15
#### Added
- CSS-only Tailwind Typography

### 2025-09-17
#### Added
- `postcss-header`, to support the build process for `tailwind-intellisense.css`, which improves Tailwind CSS language server support

#### Removed
- `postcss-url`, now that the `transformAssetUrls` option has landed in `@tailwindcss/postcss`

### 2025-06-06
#### Added
- `.npmrc` file to force the installation of `devDependencies`
- `cssnano`

#### Changed
- `type` is now set to `module` in `package.json`
- All `.mjs` files renamed to `.js`

### [2025-05-15](https://underscoretw.com/release-notes/may-2025/)
#### Added
- `postcss-url`, PostCSS Advanced Variables, `postcss-import-ext-glob`

#### Fixed
- Minification (following migration from `@tailwindcss/cli` to `@tailwindcss/postcss`)
- Rewritten asset paths in CSS files

#### Changed
- Overhaul and simplify `tailwind.css`
- Move Prettier config to `prettier.config.mjs`
- Limit block editor heading levels to `h2`–`h4`
- Update theme file header

### 2025-03-11
#### Added
- PostCSS, PostCSS CLI and PostCSS Nesting

#### Removed
- Tailwind CLI

### [2025-01-23](https://underscoretw.com/release-notes/january-2025/)
#### Added
- New `theme.json` integration using Tailwind 4’s CSS configuration

#### Changed
- Update to Tailwind 4
- Update to ESLint 9

#### Removed
- PostCSS
- Glob-based imports via `postcss-import-ext-glob`
- `theme.json` parsing via `@_tw/themejson`
- `theme.json` triggering Tailwind rebuilds via `chokidar-cli` and `touch`
- Tailwind class name ordering in PHP files via `eslint-plugin-tailwindcss`, `@angular-eslint/template-parser` and `eslint-plugin-php-markup`
- Tailwind first-party plugins (`@tailwindcss/aspect-ratio`, `@tailwindcss/container-queries` and `@tailwindcss/forms`)

### [2024-04-05](https://underscoretw.com/release-notes/april-2024/)
#### Changed
- Begin importing the contents of `./javascript/tailwind-typography-classes.js` from `@_tw/typography` to `./javascript/block-editor.js`
- Update ESLint configuration to allowlist classes beginning with `wp-block` and `wp-element` 

#### Removed
- `./javascript/tailwind-typography-classes.js`

### [2023-12-22](https://underscoretw.com/release-notes/december-2023/)
#### Changed
- Update to Tailwind 3.4

### [2023-12-08](https://underscoretw.com/release-notes/december-2023/)
#### Added
- Support for block editor–only styles via `./tailwind/tailwind-editor-extra.css`
- `@_tw/typography` to improve Tailwind Typography support in the block editor via a custom fork
- Custom color theme and font weight overrides in `./tailwind/tailwind-typography.config.js`
- A block style for Tailwind Typography’s `.lead` style

#### Changed
- Refactored `./javascript/tailwind-typography-classes.js`, adding new helper classes

#### Removed
- Tailwind Typography tweaks from `./tailwind/tailwind-typography.config.js`
- `@tailwindcss/typography` (replacing it with the above-mentioned fork)

### 2023-11-16
#### Fixed
- Ensure changes to `theme.json` update `tailwind.config.js` during `watch` process ([#79](https://github.com/gregsullivan/_tw/issues/79))
- Support Yarn ([#77](https://github.com/gregsullivan/_tw/issues/77))

### 2023-08-15
#### Fixed
- Support for block editor styles in WordPress 6.3 ([#60](https://github.com/gregsullivan/_tw/issues/60))

### [2023-04-13](https://underscoretw.com/release-notes/april-2023/)
#### Added
- Automatic versioning in the zip file generated by `npm run bundle`
- More detailed documentation in `README.md`

#### Changed
- Update to Tailwind 3.3
- Revisit approach to Tailwind Typography
- Improve comments throughout

#### Removed
- `@tailwindcss/line-clamp` and `postcss-simple-vars`

### [2023-01-11](https://underscoretw.com/release-notes/april-2023/#h-january-s-linting-changes)
#### Added
- `@wordpress/prettier-config` and `eslint-config-prettier`

#### Changed
- Use Prettier to format JavaScript files
- Install ESLint directly and use the `eslint:recommended` configuration
- Set `ecmaVersion` to `latest` throughout

#### Removed
- `@wordpress/eslint-plugin`

### [2022-10-22](https://underscoretw.com/release-notes/october-2022/)
#### Changed
- Update to Tailwind 3.2
- Revisit approach to Tailwind Typography

#### Added
- Tailwind Typography support for comments
- `@tailwindcss/container-queries`

### [2022-09-08](https://underscoretw.com/release-notes/september-2022/)
#### Changed
- Finish restructuring theme files with improvements from [Varia](https://github.com/Automattic/themes/tree/master/varia)
- Update Tailwind Typography selector
- Clean up `package.json` scripts

#### Added
- `composer.lock` and `package-lock.json` files

#### Removed
- Default theme support for core custom background and custom logo functionality
- Default setting for `content_width`

### [2022-06-14](https://underscoretw.com/release-notes/june-2022/)
#### Changed
- Update to Tailwind 3.1

#### Removed
- The postcss-import module, as its functionality is included with Tailwind 3.1

### [2022-05-24](https://underscoretw.com/release-notes/may-2022/)
#### Added
- Include a `style.css` file containing only the WordPress file header
- Add quickstart instructions to `README.md`

#### Changed
- Update documentation to focus on installation without symlinking
- Update file header

### 2022-04-29
#### Added
- JavaScript build process using [esbuild](https://esbuild.github.io/)
- Tailwind plugin for Prettier (for use in CSS files)
- Tailwind plugin for eslint (for use in PHP files)
- A `components` folder, automatically including CSS files within
- Support for nested declarations by default
- Tailwind Typography support for TinyMCE and the classic editor

#### Changed
- Restructure theme files with improvements from [Varia](https://github.com/Automattic/themes/tree/master/varia)
- Base `phpcs.xml.dist` upon [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards) sample file
- Improve Tailwind Typography block editor support

#### Removed
- Customizer and Custom Header support

### 2022-01-11
#### Added
- Schema to `theme.json` file
- `postcss-simple-vars` to change CSS selectors based on build target

#### Changed
- Update `tailwind.config.js` for Tailwind 3
- Move Tailwind Typography modifier classes into `tailwind/custom/components.css`
- Simplify Tailwind Typography configuration file
- Switch from @_tw/typography to @tailwindcss/typography
- Improve comments throughout

#### Removed
- Alpine.js
- Stylelint
- Separate configuration files for front-end and editor builds

### 2021-10-11
#### Changed
- Use `.prose` as our Typography selector

### 2021-09-09
#### Added
- Support for Tailwind Typography in the block editor
- Support for `theme.json` in Tailwind
- Styles for the block editor's content, wide and full widths
- A basic `theme.json` file
- Classes for `entry-title` and `entry-content`

#### Changed
- There are now multiple .eslintrc files to handle the differences between node and browser linting

### 2021-07-02
#### Changed
- Build process migrated from Laravel Mix to Tailwind's own CLI via `npm-run-all`

### 2021-05-03
#### Added
- Repository made public with initial functionality
