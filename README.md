\_tw
====

This repository tracks the output of the [_tw WordPress starter theme generator](https://underscoretw.com/) with all options left blank.

Right now there isn't a public repository for the generator itself. Please post issues regarding the generator to this repository.

If you're starting a new project, [the generator](https://underscoretw.com/) is the best way to do that. You can also read [the documentation](https://underscoretw.com/docs/) for more details.

## Roadmap

- Complete template overhaul inspired by Varia
- Include concise documentation in README.md
- Add WooCommerce support
- Create a WP-CLI package

## Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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
