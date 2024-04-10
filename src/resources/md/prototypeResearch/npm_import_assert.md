# rollup-plugin-import-assert

![TypeScript icon, indicating that this package has built-in type declarations](https://static-production.npmjs.com/255a118f56f5346b97e56325a1217a16.svg "This package contains built-in TypeScript declarations")

3.0.1 • Public • Published a year ago

- [Readme](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=readme)
- [Code Beta](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=code)
- [1 Dependency](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=dependencies)
- [4 Dependents](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=dependents)
- [7 Versions](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=versions)

# [](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=readme#rollup-plugin-import-assert)rollup-plugin-import-assert

🍣 A Rollup plugin which enables [import assertions](https://github.com/tc39/proposal-import-assertions) for top-level CSS and JSON modules.

## [](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=readme#installation)Installation

This package is available on the npm registry under the name `rollup-plugin-import-assert` and can be installed with npm, yarn or however else you consume dependencies.

### [](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=readme#example-commands)Example commands

npm:

```shell
npm i -D rollup-plugin-import-assert
```

yarn:

```shell
yarn add -D rollup-plugin-import-assert
```

## [](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=readme#usage)Usage

Once the plugin is installed, you will also need to make sure you have the `acorn-import-assertions` package installed. You can then add both items to your Rollup configuration as below:

```js
import { importAssertionsPlugin } from 'rollup-plugin-import-assert';
import { importAssertions } from 'acorn-import-assertions';

export default {
  input: 'path/to/file.js'
  output: {
    format: 'esm',
    dir: 'lib' // only necessary to enable dynamic imports
  },
  acornInjectPlugins: [ importAssertions ],
  plugins: [ importAssertionsPlugin() ]
}
```

These two plugins will enable the import assertion syntax and behavior in your Rollup build. In your input file, you can import files using type assertions as follows:

```js
import styles from './styles.css' assert { type: 'css' };

class MyCustomElement extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<h1>Hello world</h1>`;
    root.adoptedStyleSheets = [ styles ];
  }
}

customElements.define('my-custom-element', MyCustomElement);
```

Assuming valid CSS in `styles.css`, the contents of the the CSS will be transformed to use CSS module scripts for use with `DocumentOrShadowRoot.prototype.adoptedStyleSheets`. Currently this API only exists in Chrome, but a [polyfill exists](https://www.npmjs.com/package/construct-style-sheets-polyfill) to port the behavior back to IE11.

## [](https://www.npmjs.com/package/rollup-plugin-import-assert?activeTab=readme#limitations)Limitations

This plugin will ignore dynamic imports with dynamic values, e.g.:

```js
import(`./foo/${bar}.json`, { assert: { type: 'json' } }); // will be ignored

const foo = './foo.json';
import(foo, { assert: { type: 'json' } }); // will be ignored
```

## Readme

### Keywords

- [Rollup](https://www.npmjs.com/search?q=keywords:Rollup)
- [constructible stylesheets](https://www.npmjs.com/search?q=keywords:constructible%20stylesheets)
- [json](https://www.npmjs.com/search?q=keywords:json)
- [css](https://www.npmjs.com/search?q=keywords:css)
- [web components](https://www.npmjs.com/search?q=keywords:web%20components)
- [acorn](https://www.npmjs.com/search?q=keywords:acorn)

## Package Sidebar

### Install

`npm i rollup-plugin-import-assert`

### Repository

[Gitgithub.com/calebdwilliams/rollup-plugin-import-assert](https://github.com/calebdwilliams/rollup-plugin-import-assert)

### Homepage

[github.com/calebdwilliams/rollup-plugin-import-assert#readme](https://github.com/calebdwilliams/rollup-plugin-import-assert#readme)

### DownloadsWeekly Downloads