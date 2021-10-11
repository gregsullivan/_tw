_tw
===

This repository tracks the output of the [_tw WordPress starter theme generator](https://underscoretw.com/) with all options left blank.

Right now there isn't a public repository for the generator itself. Please post issues regarding the generator to this repository.

If you're starting a new project, [the generator](https://underscoretw.com/) is the best way to do that. You can also read [the documentation](https://underscoretw.com/docs/) for more details.

## Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### 2021-10-11
#### Changed
- Use `.prose` as our Typography selector

### 2021-09-09
#### Added
- Support for Tailwind Typography in the block editor
- Support for theme.json in Tailwind
- Styles for the block editor's content, wide and full widths
- A basic theme.json file
- Classes for `entry-title` and `entry-content`

#### Changed
- There are now multiple .eslintrc files to handle the differences between node and browser linting

### 2021-07-02
#### Changed
- Build process migrated from Laravel Mix to Tailwind's own CLI via `npm-run-all`

### 2021-05-03
#### Added
- Repository made public with initial functionality
