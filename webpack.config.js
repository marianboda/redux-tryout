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
