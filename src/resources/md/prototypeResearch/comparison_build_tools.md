# Comparison of Build Tools

[Unsplash (Public Domain)](https://pixabay.com/en/hitchhiker-thumb-hoodie-backpack-691581/)

Table of contents

[![ads via Carbon](https://srv.carbonads.net/static/30242/7c48a838147e6e7f4e2a6b8ade710e036d437ac7)](https://srv.carbonads.net/ads/click/x/GTND427JCVSD5KJICT7LYKQUC67I6KJUC6SILZ3JCAYICKQICEADV23KC6SICKJNCKBIVK3LCWSILKJJCA7I523KC6SI4KJUC6YDEK3EHJNCLSIZ) [ Fast, reliable email delivery for your app. Integrate via API or SMTP. Try Postmark free. ](https://srv.carbonads.net/ads/click/x/GTND427JCVSD5KJICT7LYKQUC67I6KJUC6SILZ3JCAYICKQICEADV23KC6SICKJNCKBIVK3LCWSILKJJCA7I523KC6SI4KJUC6YDEK3EHJNCLSIZ) [ads via Carbon](http://carbonads.net/?utm_source=survivejscom&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon)

![ads via Carbon](https://ad.doubleclick.net/ddm/trackimp/N2351776.3227239CARBONADS/B31915644.392784704;dc_trk_aid=584426025;dc_trk_cid=213734342;ord=171271355;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$;gdpr_consent=$;ltd=;dc_tdv=1?)

#### Table of Contents

-   [Foreword](https://survivejs.com/webpack/foreword/)
-   [Preface](https://survivejs.com/webpack/preface/)
-   [Introduction](https://survivejs.com/webpack/introduction/)
-   [What is Webpack](https://survivejs.com/webpack/what-is-webpack/)
-   [Developing](https://survivejs.com/webpack/developing/)
-   [Getting Started](https://survivejs.com/webpack/developing/getting-started/)
-   [Development Server](https://survivejs.com/webpack/developing/development-server/)
-   [Composing Configuration](https://survivejs.com/webpack/developing/composing-configuration/)
-   [Styling](https://survivejs.com/webpack/styling/)
-   [Loading Styles](https://survivejs.com/webpack/styling/loading/)
-   [Separating CSS](https://survivejs.com/webpack/styling/separating-css/)
-   [Eliminating Unused CSS](https://survivejs.com/webpack/styling/eliminating-unused-css/)
-   [Autoprefixing](https://survivejs.com/webpack/styling/autoprefixing/)
-   [Loading Assets](https://survivejs.com/webpack/loading/)
-   [Loader Definitions](https://survivejs.com/webpack/loading/loader-definitions/)
-   [Loading Images](https://survivejs.com/webpack/loading/images/)
-   [Loading Fonts](https://survivejs.com/webpack/loading/fonts/)
-   [Loading JavaScript](https://survivejs.com/webpack/loading/javascript/)
-   [Building](https://survivejs.com/webpack/building/)
-   [Source Maps](https://survivejs.com/webpack/building/source-maps/)
-   [Code Splitting](https://survivejs.com/webpack/building/code-splitting/)
-   [Bundle Splitting](https://survivejs.com/webpack/building/bundle-splitting/)
-   [Tidying Up](https://survivejs.com/webpack/building/tidying-up/)
-   [Optimizing](https://survivejs.com/webpack/optimizing/)
-   [Minifying](https://survivejs.com/webpack/optimizing/minifying/)
-   [Tree Shaking](https://survivejs.com/webpack/optimizing/tree-shaking/)
-   [Environment Variables](https://survivejs.com/webpack/optimizing/environment-variables/)
-   [Adding Hashes to Filenames](https://survivejs.com/webpack/optimizing/adding-hashes-to-filenames/)
-   [Separating a Runtime](https://survivejs.com/webpack/optimizing/separating-runtime/)
-   [Build Analysis](https://survivejs.com/webpack/optimizing/build-analysis/)
-   [Performance](https://survivejs.com/webpack/optimizing/performance/)
-   [Output](https://survivejs.com/webpack/output/)
-   [Build Targets](https://survivejs.com/webpack/output/targets/)
-   [Multiple Pages](https://survivejs.com/webpack/output/multiple-pages/)
-   [Server-Side Rendering](https://survivejs.com/webpack/output/server-side-rendering/)
-   [Module Federation](https://survivejs.com/webpack/output/module-federation/)
-   [Techniques](https://survivejs.com/webpack/techniques/)
-   [Dynamic Loading](https://survivejs.com/webpack/techniques/dynamic-loading/)
-   [Web Workers](https://survivejs.com/webpack/techniques/web-workers/)
-   [Internationalization](https://survivejs.com/webpack/techniques/i18n/)
-   [Testing](https://survivejs.com/webpack/techniques/testing/)
-   [Deploying Applications](https://survivejs.com/webpack/techniques/deploying/)
-   [Consuming Packages](https://survivejs.com/webpack/techniques/consuming/)
-   [Extending](https://survivejs.com/webpack/extending/)
-   [Extending with Loaders](https://survivejs.com/webpack/extending/loaders/)
-   [Extending with Plugins](https://survivejs.com/webpack/extending/plugins/)
-   [Conclusion](https://survivejs.com/webpack/conclusion/)
-   [Appendices](https://survivejs.com/webpack/appendices/)
-   Comparison of Build Tools
-   [Hot Module Replacement](https://survivejs.com/webpack/appendices/hmr/)
-   [CSS Modules](https://survivejs.com/webpack/appendices/css-modules/)
-   [Searching with React](https://survivejs.com/webpack/appendices/searching-with-react/)
-   [Troubleshooting](https://survivejs.com/webpack/appendices/troubleshooting/)
-   [Glossary](https://survivejs.com/webpack/appendices/glossary/)

> [RelativeCI - In-depth bundle stats analysis and monitoring - Interview with Viorel Cojocaru](https://survivejs.com/blog/relativeci-interview/)

Back in the day, it was enough to concatenate scripts together. Times have changed, though, and distributing your JavaScript code can be a complicated endeavor. This problem has escalated with the rise of single-page applications (SPAs) as they tend to rely on many big libraries. For this reason, many loading strategies exist. The basic idea is to defer loading instead of loading all at once.

The popularity of Node and [npm](https://www.npmjs.com/), its package manager, provide more context. Before npm became popular, it was hard to consume dependencies. There was a period when people developed frontend specific package managers, but npm won in the end. Now dependency management is more comfortable than before, although there are still challenges to overcome.

> [Tooling.Report](https://bundlers.tooling.report/) provides a feature comparison of the most popular build tools.

## [](https://survivejs.com/webpack/appendices/comparison/#task-runners)Task runners[#](https://survivejs.com/webpack/appendices/comparison/#task-runners)

Historically speaking, there have been many build tools. _Make_ is perhaps the best known, and it's still a viable option. Specialized _task runners_, such as Grunt and Gulp were created particularly with JavaScript developers in mind. Plugins available through npm made both task runners powerful and extendable. It's possible to use even npm `scripts` as a task runner. That's common, particularly with webpack.

### [](https://survivejs.com/webpack/appendices/comparison/#make)Make[#](https://survivejs.com/webpack/appendices/comparison/#make)

[Make](https://en.wikipedia.org/wiki/Make_%28software%29) goes way back, as it was initially released in 1977. Even though it's an old tool, it has remained relevant. Make allows you to write separate tasks for various purposes. For instance, you could have different tasks for creating a production build, minifying your JavaScript or running tests. You can find the same idea in many other tools.

Even though Make is mostly used with C projects, it's not tied to C in any way. James Coglan discusses in detail [how to use Make with JavaScript](https://blog.jcoglan.com/2014/02/05/building-javascript-projects-with-make/). Consider the abbreviated code based on James' post below:

**Makefile**

```bash
PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

source_files := $(wildcard lib.coffee)
build_files  := $(source_files:%.coffee=build/%.js)
app_bundle   := build/app.js
spec_coffee  := $(wildcard spec.coffee)
spec_js      := $(spec_coffee:%.coffee=build/%.js)

libraries    := vendor/jquery.js

.PHONY: all clean test

all: $(app_bundle)

build/%.js: %.coffee
    coffee -co $(dir $@) $<

$(app_bundle): $(libraries) $(build_files)
    uglifyjs -cmo $@ $^

test: $(app_bundle) $(spec_js)
    phantomjs phantom.js

clean:
    rm -rf build
```

With Make, you model your tasks using Make-specific syntax and terminal commands making it possible to integrate with webpack.

### [](https://survivejs.com/webpack/appendices/comparison/#npm-scripts-as-a-task-runner)npm `scripts` as a task runner[#](https://survivejs.com/webpack/appendices/comparison/#npm-scripts-as-a-task-runner)

Even though npm CLI wasn't primarily designed to be used as a task runner, it works as such thanks to `package.json` `scripts` field. Consider the example below:

**package.json**

```json
{
  "scripts": {

    "start": "wp --mode development",
    "build": "wp --mode production",
    "build:stats": "wp --mode production --json > stats.json"

  }
}
```

These scripts can be listed using `npm run` and then executed using `npm run <script>`. You can also namespace your scripts using a convention like `test:watch`. The problem with this approach is that it takes care to keep it cross-platform.

Instead of `rm -rf`, you likely want to use utilities such as [rimraf](https://www.npmjs.com/package/rimraf) and so on. It's possible to invoke other tasks runners here to hide the fact that you are using one. This way you can refactor your tooling while keeping the interface as the same.

### [](https://survivejs.com/webpack/appendices/comparison/#grunt)Grunt[#](https://survivejs.com/webpack/appendices/comparison/#grunt)

[Grunt](http://gruntjs.com/) was the first famous task runner for frontend developers. Its plugin architecture contributed towards its popularity. Plugins are often complicated by themselves. As a result, when configuration grows, it can become tricky to understand what's going on.

Here's an example from [Grunt documentation](http://gruntjs.com/sample-gruntfile). In this configuration, you define a linting and watcher tasks. When the _watch_ task gets run, it triggers the _lint_ task as well. This way, as you run Grunt, you get warnings in real-time in the terminal as you edit the source code.

**Gruntfile.js**

```javascript
module.exports = (grunt) => {
	grunt.initConfig({
		lint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},
		watch: {
			files: ['<%= lint.files %>'],
			tasks: ['lint']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['lint']);
};
```

In practice, you would have many small tasks for specific purposes, such as building the project. An essential part of the power of Grunt is that it hides a lot of the wiring from you.

Taken too far, this can get problematic. It can become hard to understand what's going on under the hood. That's the architectural lesson to take from Grunt.

> [grunt-webpack](https://www.npmjs.com/package/grunt-webpack) plugin allows you to use webpack in a Grunt environment while you leave the heavy lifting to webpack.

### [](https://survivejs.com/webpack/appendices/comparison/#gulp)Gulp[#](https://survivejs.com/webpack/appendices/comparison/#gulp)

[Gulp](http://gulpjs.com/) takes a different approach. Instead of relying on configuration per plugin, you deal with actual code. If you are familiar with Unix and piping, you'll like Gulp. You have _sources_ to match files, _filters_ to operate on these sources, and _sinks_ to pipe the build results.

Here's an abbreviated sample _Gulpfile_ adapted from the project's README to give you a better idea of the approach:

**Gulpfile.js**

```javascript
const gulp = require('gulp');
const coffee = require('gulp-coffee');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const paths = {
	scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee']
};

// Not all tasks need to use streams.
// A gulpfile is another node program
// and you can use all packages available on npm.
gulp.task('clean', () => del(['build']));
gulp.task('scripts', ['clean'], () =>
	// Minify and copy all JavaScript (except vendor scripts)
	// with source maps all the way down.
	gulp
		.src(paths.scripts)
		// Pipeline within pipeline
		.pipe(sourcemaps.init())
		.pipe(coffee())
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))
);
gulp.task('watch', () => gulp.watch(paths.scripts, ['scripts']));

// The default task (called when you run `gulp` from CLI).
gulp.task('default', ['watch', 'scripts']);
```

Given the configuration is code, you can always hack it if you run into troubles. You can wrap existing Node packages as Gulp plugins, and so on. Compared to Grunt, you have a clearer idea of what's going on. You still end up writing a lot of boilerplate for casual tasks, though. That is where newer approaches come in.

> [webpack-stream](https://www.npmjs.com/package/webpack-stream) allows you to use webpack in a Gulp environment.

## [](https://survivejs.com/webpack/appendices/comparison/#script-loaders)Script loaders[#](https://survivejs.com/webpack/appendices/comparison/#script-loaders)

For a while, [RequireJS](http://requirejs.org/), a script loader, was popular. The idea was to provide an asynchronous module definition and build on top of that. Fortunately, the standards have caught up, and RequireJS seems more like a curiosity now.

### [](https://survivejs.com/webpack/appendices/comparison/#requirejs)RequireJS[#](https://survivejs.com/webpack/appendices/comparison/#requirejs)

[RequireJS](http://requirejs.org/) was perhaps the first script loader that became genuinely popular. It gave the first proper look at what modular JavaScript on the web could be. Its greatest attraction was AMD. It introduced a `define` wrapper:

```javascript

define(["./MyModule.js"], function (MyModule) {
  return function() {}; // Export at module root
});

// or
define(["./MyModule.js"], function (MyModule) {
  return {
    hello: function() {...}, // Export as a module function
  };
});
```

Incidentally, it's possible to use `require` within the wrapper:

```javascript

define(["require"], function (require) {
  var MyModule = require("./MyModule.js");

  return function() {...};
});
```

This latter approach eliminates a part of the clutter. You still end up with code that feels redundant. ES2015 and other standards solve this.

> Jamund Ferguson has written an excellent blog series on how to port from [RequireJS to webpack](https://gist.github.com/xjamundx/b1c800e9282e16a6a18e).

### [](https://survivejs.com/webpack/appendices/comparison/#jspm)JSPM[#](https://survivejs.com/webpack/appendices/comparison/#jspm)

Using [JSPM](http://jspm.io/) is entirely different than previous tools. It comes with a command-line tool of its own that is used to install new packages to the project, create a production bundle, and so on. It supports [SystemJS plugins](https://github.com/systemjs/systemjs#plugins) that allow you to load various formats to your project.

## [](https://survivejs.com/webpack/appendices/comparison/#bundlers)Bundlers[#](https://survivejs.com/webpack/appendices/comparison/#bundlers)

Task runners are great tools on a high level. They allow you to perform operations in a cross-platform manner. The problems begin when you need to splice various assets together and produce bundles. _bundlers_, such as Browserify, Brunch, or webpack, exist for this reason and they operate on a lower level of abstraction. Instead of operating on files, they operate on modules and assets.

### [](https://survivejs.com/webpack/appendices/comparison/#browserify)Browserify[#](https://survivejs.com/webpack/appendices/comparison/#browserify)

Dealing with JavaScript modules has always been a bit of a problem. The language itself didn't have the concept of modules till ES2015. Ergo, the language was stuck in the '90s when it comes to browser environments. Various solutions, including [AMD](http://requirejs.org/docs/whyamd.html), have been proposed.

[Browserify](http://browserify.org/) is one solution to the module problem. It allows CommonJS modules to be bundled together. You can hook it up with Gulp, and you can find smaller transformation tools that allow you to move beyond the basic usage. For example, [watchify](https://www.npmjs.com/package/watchify) provides a file watcher that creates bundles for you during development saving effort.

The Browserify ecosystem is composed of a lot of small modules. In this way, Browserify adheres to the Unix philosophy. Browserify is more comfortable to adopt than webpack, and is, in fact, a good alternative to it.

> [Splittable](https://www.npmjs.com/package/splittable) is a Browserify wrapper that allows code splitting, supports ES2015 out of the box, tree shaking, and more. [bankai](https://www.npmjs.com/package/bankai) is another option to consider.

### [](https://survivejs.com/webpack/appendices/comparison/#brunch)Brunch[#](https://survivejs.com/webpack/appendices/comparison/#brunch)

Compared to Gulp, [Brunch](http://brunch.io/) operates on a higher level of abstraction. It uses a declarative approach similar to webpack's. To give you an example, consider the following configuration adapted from the Brunch site:

```javascript
module.exports = {
	files: {
		javascripts: {
			joinTo: {
				'vendor.js': /^(?!app)/,
				'app.js': /^app/
			}
		},
		stylesheets: {
			joinTo: 'app.css'
		}
	},
	plugins: {
		babel: {
			presets: ['react', 'env']
		},
		postcss: {
			processors: [require('autoprefixer')]
		}
	}
};
```

Brunch comes with commands like `brunch new`, `brunch watch --server`, and `brunch build --production`. It contains a lot out of the box and can be extended using plugins.

### [](https://survivejs.com/webpack/appendices/comparison/#rollup)Rollup[#](https://survivejs.com/webpack/appendices/comparison/#rollup)

[Rollup](https://www.npmjs.com/package/rollup) focuses on bundling ES2015 code. _Tree shaking_ is one of its selling points and it supports code splitting as well. You can use Rollup with webpack through [rollup-loader](https://www.npmjs.com/package/rollup-loader).

[vite](https://www.npmjs.com/package/vite) is an opinionated wrapper built on top of Rollup and it has been designed especially with Vue 3 in mind. [nollup](https://www.npmjs.com/package/nollup) is another wrapper and it comes with features like [Hot Module Replacement](https://survivejs.com/webpack/appendices/hmr/) out of the box.

### [](https://survivejs.com/webpack/appendices/comparison/#webpack)Webpack[#](https://survivejs.com/webpack/appendices/comparison/#webpack)

You could say [webpack](https://webpack.js.org/) takes a more unified approach than Browserify. Whereas Browserify consists of multiple small tools, webpack comes with a core that provides a lot of functionality out of the box.

Webpack core can be extended using specific _loaders_ and _plugins_. It gives control over how it _resolves_ the modules, making it possible to adapt your build to match specific situations and workaround packages that don't work correctly out of the box.

Compared to the other tools, webpack comes with initial complexity, but it makes up for this through its broad feature set. It's an advanced tool that requires patience. But once you understand the basic ideas behind it, webpack becomes powerful.

To make it easier to use, tools such as [create-react-app](https://www.npmjs.com/package/create-react-app), [poi](https://poi.js.org/), and [instapack](https://www.npmjs.com/package/instapack) have been built around it.

### [](https://survivejs.com/webpack/appendices/comparison/#vite)Vite[#](https://survivejs.com/webpack/appendices/comparison/#vite)

[Vite](https://vitejs.dev/) is tool comparable to webpack. It comes with features like lazy loading, ESM, JSX, and TypeScript support out of the box. The build functionality relies on Rollup and the development server is custom code. Originally it was developed with Vue in mind but since the scope of the tool has grown to support popular frameworks like React. It's possible to extend the tool using Vite specific plugins and also Rollup plugins are supported making it a versatile solution.

## [](https://survivejs.com/webpack/appendices/comparison/#zero-configuration-bundlers)Zero configuration bundlers[#](https://survivejs.com/webpack/appendices/comparison/#zero-configuration-bundlers)

There's a whole category of _zero configuration_ bundlers. The idea is that they work out of the box without any extra setup. [Parcel](https://parceljs.org/) is perhaps the famous of them.

[FuseBox](https://www.npmjs.com/package/fuse-box) is a bundler focusing on speed. It uses a zero-configuration approach and aims to be usable out of the box.

These tools include [microbundle](https://www.npmjs.com/package/microbundle), [bili](https://www.npmjs.com/package/bili), [asbundle](https://www.npmjs.com/package/asbundle), and [tsdx](https://www.npmjs.com/package/tsdx).

## [](https://survivejs.com/webpack/appendices/comparison/#other-options)Other Options[#](https://survivejs.com/webpack/appendices/comparison/#other-options)

You can find more alternatives as listed below:

-   [Rome](https://romefrontend.dev/) is an entire toolchain built around the problems of linting, compiling, and bundling.
-   [esbuild](https://www.npmjs.com/package/esbuild) is a performance-oriented bundler written in Go.
-   [AssetGraph](https://www.npmjs.com/package/assetgraph) takes an entirely different approach and builds on top of HTML semantics making it ideal for [hyperlink analysis](https://www.npmjs.com/package/hyperlink) or [structural analysis](https://www.npmjs.com/package/assetviz). [webpack-assetgraph-plugin](https://www.npmjs.com/package/webpack-assetgraph-plugin) bridges webpack and AssetGraph together.
-   [StealJS](https://stealjs.com/) is a dependency loader and a build tool focusing on performance and ease of use.
-   [Blendid](https://www.npmjs.com/package/blendid) is a blend of Gulp and bundlers to form an asset pipeline.
-   [swc](https://swc-project.github.io/) is a JavaScript/TypeScript compiler focusing on performance written in Rust.
-   [Packem](https://packem.github.io/) is another Rust based option for bundling JavaScript.
-   [Sucrase](https://www.npmjs.com/package/sucrase) is a light JavaScript/TypeScript compiler focusing on performance and recent language features.

## [](https://survivejs.com/webpack/appendices/comparison/#conclusion)Conclusion[#](https://survivejs.com/webpack/appendices/comparison/#conclusion)

Historically there have been a lot of build tools for JavaScript. Each has tried to solve a specific problem in its way. The standards have begun to catch up, and less effort is required around basic semantics. Instead, tools can compete on a higher level and push towards better user experience. Often you can use a couple of separate solutions together.

To recap:

-   **Task runners** and **bundlers** solve different problems. You can achieve similar results with both, but often it's best to use them together to complement each other.
-   Older tools, such as Make or RequireJS, still have influence even if they aren't as popular in web development as they once were.
-   Bundlers like Browserify or webpack solve an important problem and help you to manage complex web applications.
-   Emerging technologies approach the problem from different angles. Sometimes they build on top of other tools, and at times they can be used together.

## Subscribe to the blog updates

> If you enjoyed this page, consider subscribing to the mailing list below or following [@survivejs](https://twitter.com/survivejs) for occasional updates. There is also [RSS](https://survivejs.com/atom.xml) available for old beards (no pun intended).

Previous chapter

[Appendices](https://survivejs.com/webpack/appendices/)

Next chapter

[Hot Module Replacement](https://survivejs.com/webpack/appendices/hmr/)

> This book is available through [Leanpub (digital)](https://leanpub.com/survivejs-webpack), [Amazon](https://www.amazon.com/dp/B08P2C69PR)
