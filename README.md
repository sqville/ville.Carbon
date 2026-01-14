# ville.Carbon

Demo application to show how Qooxdoo and [IBM's Carbon Styles](https://github.com/carbon-design-system/carbon/tree/main/packages/styles) can work together. Also illustrates how to integrate any standard [Sass](https://sass-lang.com/) project into a Qooxdoo project.

## About the Project

This project consists of two namespaces:

* ville.cssuc (library) - Mixins for bypassing layout functionality.
* myapp (application) - Qooxdoo application integrated with IBM Carbon Styles using [Sass](https://sass-lang.com/).

All inline styles are kept from the DOM by default, relying 100% on CSS for layout (no need for qx.ui.layout).

## Getting Started

### Important Notes

* This requires patching framework classes using qx.Class.patch().
* The LayoutItem mixin (MLayoutItem.js) responsible for bypassing the layout system is set to "true" by default (specifically, excludeBoundsFromDom). That means bounds (top, left, width, height) and inline styles are kept from being written to the DOM.

### Patch framework classes

Add an environment variable named "ville.cssuc" to your project's compile.json file. This variable is only used during builds.

```json
"environment": {
    "ville.cssuc": true
}
```

Any standalone application wanting to use utility classes must include the block of code below:

```javascript
// Add this to the top of the application class
if (qx.core.Environment.get("ville.cssuc")) {
    qx.Class.patch(qx.ui.core.LayoutItem, ville.cssuc.patch.MLayoutItem);
    qx.Class.patch(qx.ui.core.Widget, ville.cssuc.patch.MWidget);
    qx.Class.patch(qx.html.Label, ville.cssuc.patch.MLabel);
    qx.Class.patch(qx.ui.form.AbstractField, ville.cssuc.patch.MAbstractField);

    // Adds a property initialize method to all widgets, to clear sytles by default 
    qx.Class.include(qx.ui.core.Widget, ville.cssuc.MClearAllStyles);
}
```

### Install Sass

```sh
npm i sass
```

### Install Carbon Styles

```sh
npm i -S @carbon/styles
```

### Serve Applications

Run dev scripts to build and serve an application:

```sh
npm run dev
```
