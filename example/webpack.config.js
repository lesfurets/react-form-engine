module.exports = (env, argv) => ({
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {path: __dirname, ctx: argv},
              sourceMap: argv.mode !== "production",
            },
          },
          "less-loader"]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
  },
  devtool: 'source-map'
});