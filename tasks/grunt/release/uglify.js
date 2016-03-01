
module.exports = {

  indexJS: {
    options: {
      compress: {
        if_return: true,
        comparisons:true,
        dead_code: true,
        properties: true,
        drop_debugger: true,
        //drop_console: true
      },
      mangle: {
        sort: true,
        toplevel: true,
        eval: true
      },
      banner: '/*! <%= pkg.name %> v<%= pkg.version %> UTC:<%= grunt.template.today("UTC:yyyy-mm-dd hh:MM:ss") %> */\n'
    },
    files: [
      {
        'lib/ajax.js': ['.grunt/ajax.js']
      }
    ]
  }

}