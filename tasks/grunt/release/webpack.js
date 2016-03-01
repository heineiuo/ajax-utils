var path = require("path")
var webpack = require("webpack")
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    // 除.bin目录以外的目录
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(moduleName) {
    nodeModules[moduleName] = 'commonjs ' + moduleName;
  });


module.exports.indexJS = {
  cache: false,

  entry: {
    index: "./src/index.js"
  },

  target: 'node',
  externals: nodeModules,

  output: {

    library: "createAjax",
    libraryTarget: 'umd',
    path: './.grunt/',
    //publicPath: "dist/",
    filename: "ajax.js",
    //chunkFilename: "[chunkhash].js"
  }

}
