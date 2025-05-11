# House of Giants Scaffold

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level)

## Dependencies

1. [Node & NPM](https://www.npmjs.com/get-npm) - Build packages and 3rd party dependencies are managed through NPM, so you will need that installed globally.
2. [Webpack](https://webpack.js.org/) - Webpack is used to process the JavaScript, CSS, and other assets.

## Getting Started

### Direct Install

- Clone the repository
- Rename folder theme-scaffold -> your project's name
- If copying files manually to an existing theme directory instead of cloning directly from the repository, make sure to include the following files which may be hidden:

```
.babelrc
.browserslistrc
.editorconfig
.eslintignore
.eslintrc
.gitignore
```

The NPM commands will fail without these files present.

- Do case-sensitive search/replace for the following:

        - HabitatArchuleta
        - habitat-archuleta_SCAFFOLD
        - habitat-archuleta
        - habitat-archuleta_scaffold
        - Habitat Archuleta
        - habitat-archuleta-blocks
        - https://www.habitatarchuleta.org
        - HABITAT_ARCHULETA_VERSION
        - HABITAT_ARCHULETA_TEMPLATE_URL
        - HABITAT_ARCHULETA_PATH
        - HABITAT_ARCHULETA_INC
        - HABITAT_ARCHULETA_BLOCK_DIR

- `cd` into the theme folder
- run `npm run start`

## Webpack config

Webpack config files can be found in `config` folder:

- `webpack.dev.js`
- `webpack.shared.js`
- `webpack.prod.js`
- `webpack.settings.js`

In most cases `webpack.settings.js` is the main file which would change from project to project. For example adding or removing entry points for JS and CSS.

## NPM Commands

- `npm run start` (install dependencies)
- `npm run watch` (watch)
- `npm run build` (build all files)
- `npm run build-release` (build all files for release)
- `npm run dev` (build all files for development)
- `npm run lint-release` (install dependencies and run linting)
- `npm run lint-css` (lint CSS)
- `npm run lint-js` (lint JS)
- `npm run lint` (run all lints)
- `npm run format-js` (format JS using eslint)
- `npm run format` (alias for `npm run format-js`)
