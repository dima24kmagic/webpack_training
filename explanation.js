// NOTE: Here is 4 main concepts

// :* 1) ENTRY *:
// Entry is describing, where the heck is entry file, the rot one
// {
//     entry: "./src/app.js"
// }

// :* 2) OUPUT *:
// Tells Webpack **WHERE** and **HOW** to distribute bundles
// (compilations). Works with entry.

// Output is an prop object, that secribing output of bundled files
// {
//     output: {
//         path: __dirname + "./dist",
//         filename: "bundled.js"
//     }
// }

// :* 3) LOADERS + RULES *:
// Tells webpack, how to modify files before it's added to dependency graph
// Loaders is basically js function, that's takes source code and return it's modified version
{
  module: {
    rules: [
      // <-- That's rules set array
      { test: /\.ts$/, use: 'ts-loader' }, // <-- That's loader
      { test: /\.js$/, use: 'babel-loader' }, // <-- That's loader
      { test: /\.css$/, use: 'css-loader  ' } // <-- That's loader
    ];
  }
}
// :* Loader structure:
// {
//     test: regex
//     use: (array/String/Function),
//     include: RegExp[],
//     exclude: RegExp[],
//     issuer: (RegExp/String)[],
//     enforce: "pre"/"post" :*<-- Tells webpack to run this rle before, or after other rules
// }
// NOTE: We can chaining loaders like
// {
//     test: /\.less$/,
//     use: ['style', 'css', 'less'] // <-- NOTE: they apply from right to left
// }

// :* 4) PLUGINS *:
// It's an objects (with an `apply` property)
// Allow you to hook into the entire compilation lifecycle
// Got variety of built in plugins
// const BellOnBundlerErrorPlugin = require('bell-on-error');
// var webpack = require('webpack');
// {
//   plugins: [
//     new BellOnBundlerErrorPlugin(),

//     // just a few of the built in plugins
//     new webpack.optimize.ComminChinkPlugin('vendors'),
//     new webpack.optimize.UglifyJsPlugin()
//   ];
// }
// NOTE: 80% of webpack is made up of it's own plugin system

// :* PASSING ENV VARIABLE TO WEBPACK *:

// *package.json
// npm run webpack -- --env.mode production
//                 ^     ^
//                 |     |-- this is the env variable, passing to webpack module
//                 |
//                 |-- This is passing arguments to the webpack command from npm scripts

// *webpack.config.js
// module.exports = (env) => {
//   console.log(env.mode);
//                ^
//                |-- Passed env variable
//   return {
//     entry: ...,
//     output: {
//       ...
//     }
//   }
// }