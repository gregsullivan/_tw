\_tw
====

This repository tracks the output of the [_tw WordPress starter theme generator](https://underscoretw.com/) with all options left blank.

Right now there isn't a public repository for the generator itself. Please post issues regarding the generator to this repository.

If you're starting a new project, [the generator](https://underscoretw.com/) is the best way to do that. You can also read [the documentation](https://underscoretw.com/docs/) for more details.

---

> **Note**\
> The default contents of `README.md` in a generated theme are as follows:

A custom theme based on \_tw

## Installation

1. Move this folder to `wp-content/themes` in your local development environment
2. Run `npm install && npm run dev` in this folder
3. Activate this theme in WordPress

Looking for live reloading? Learn how to [add Browsersync to your project](https://underscoretw.com/docs/getting-started/#h-using-browsersync).

## Development

4. Run `npm run watch`
5. Add [Tailwind utility classes](https://tailwindcss.com/docs/utility-first) with abandon

See the complete [development documentation](https://underscoretw.com/docs/tailwind-plugins-npm-commands/) for more details.

## Deployment

6. Run `npm run bundle`
7. Upload the resulting zip file to your site using the “Upload Theme” button on the “Add Themes” administration page

Or [deploy with the tool of your choice](https://underscoretw.com/docs/deployment/#h-other-deployment-options)!

> **Note**\
> The default contents of `README.md` end here.

---

## Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### [2023-01-09]
#### Changed
- Use Prettier to format JavaScript files in `./javascript`
- Install ESLint directly and use the `eslint:recommended` configuration

#### Removed
- `@wordpress/eslint-plugin`

### [2022-10-22](https://underscoretw.com/release-notes/october-2022/)
#### Changed
- Update to Tailwind 3.2
- Revisit approach to Tailwind Typography

#### Added
- Tailwind Typography support for comments
- @tailwindcss/container-queries

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

## Roadmap

- Record screencasts covering installation, development and deployment
- Add WooCommerce support
- Create a WP-CLI package
