'use strict';

import pkg from './package.json' with { type: 'json' };
import json from '@rollup/plugin-json';

// The banner to add to the top of each file
// Pulls details from the package.json file
let banner = `/*! ${pkg.name} v${pkg.version} | ${
	pkg.description
} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

// The formats to output
// Full list here: https://rollupjs.org/guide/en/#outputformat
let formats = ['iife', 'es', 'cjs'];

// The files to compile with rollup.js,
// and the settings to use for them
export default formats.map(function (format) {
	return {
		input: './src/library/time.js',
		output: {
			// dir: `./src/library/`,
			file: `time.${format}.js`,
			format: format,
			name: 'Time',
			banner: banner,
			exports: 'auto'
		},
		plugins: [json()]
	};
});
