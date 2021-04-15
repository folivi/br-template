# BrTemplate

This project is a basic starter kit for Banque Raiffeisen angular projects.

Find below the different elements
## Building blocs

> Internationalization:

We are use ngx-translate with the default configuration.
Locale files are in /assets/i18n

> UI/UX

We are using the bootstrap and ng-bootstrap for the html elements.
Stylesheets are written is SCSS.

## File structure

We adopt a feature-oriented folder structure for the projects.

- the app/core directory contains the core business logic.
- The app/config contains non critical and non environment-related constants
- The app/shared directory contains the components we need to shared accross multiple modules/features
- The app/features directory is where the functionalities will be placed.

## Components naming convention
Components must be named as explicitly as possible so that it's easy to distinguish them.
We could have 2 sorts of components:

- Pages
Pages are components that are accessible via routing.

  Example: `LoginPageComponent`.

Page will hold the data and pass it through to the widgets.

- Widgets
Widgets are all the non standalone components. They are injected into pages.

  Example: `LoginFormWidget`.
## CLI
We recommand to use the CLI as much as possible.
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

