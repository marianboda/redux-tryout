module.exports = {
  entry: './main.js',
  output: {
    path: './static',
    filename: 'index.js',
  },
  devServer: {
    contentBase: './static',
    inline: true,
    port: 3333,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false,
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

}
