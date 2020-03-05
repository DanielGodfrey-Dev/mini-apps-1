module.exports = {
      //entry point for Webpack to start looking for
      //files to transpile
      entry: __dirname + '/client/src/index.jsx',

      //using Babel to transpile es6 (React code in this case)
      //down to es5
      module: {
        rules: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              //load babel
              loader: 'babel-loader',
              //...tell it what to look for and enable transpiling
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
             }
            }
          }
        ]
      },

      //destination for static asset
      output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
      }
    };