# ville.Carbon

Demo application to show how Qooxdoo and [IBM's Carbon Styles](https://github.com/carbon-design-system/carbon/tree/main/packages/styles) can work together. Also illustrates how to integrate any standard Sass project into a Qooxdoo project.

## About the Project

This project consists of two namespaces:

* ville.cssuc (library) - Mixins for bypassing layout functionality.
* myapp (application) - Qooxdoo application integrated with IBM Carbon Styles using [Sass](https://sass-lang.com/).

This project is a slight variation from [ville.CssUtilityClasses](https://github.com/sqville/ville.CssUtilityClasses). All inline styles are kept from the DOM by default, relying 100% on CSS for layout (no need for qx.ui.layout).

## Getting Started

### Important Notes

* This requires replacing or updating framework classes. It is advised to use a local installation of the qooxdoo framework.
* The Widget mixin (MCssUtilityClass.js) responsible for bypassing the layout system is set to "true" by default (specifically, excludeBoundsFromDom and clearAllInlineStyles properties). That means bounds (top, left, width, height) and inline styles are kept from being written to the DOM.

### Update locally installed framework classes

Update the following classes in your project's nodes_modules @qooxdoo/framework copy. Instead of replacing you can update your local copy with just the changes. Search replacement files for the "ville.cssuc" environment variable.

* Replace/Update local framework's qx.ui.form.AbstractField.js file with replacements/AbstractField.js
* Replace/Update local framework's local framework's qx.html.Label.js with replacements/Label.js
* Replace/Update local framework's local framework's qx.ui.core.Widget.js with replacements/Widget.js
* Replace/Update local framework's local framework's qx.ui.root.Application.js with replacements/Application.js

### Install Sass

```sh
npm install sass
```

### Install Carbon Styles

```sh
npm install -S @carbon/styles
```

### Serve Applications

Run the included bash scripts to build and serve an application:

```sh
bash carbonserve.sh
```
