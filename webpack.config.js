module.exports = (env, argv) => ({
  entry: "./src/index.ts",
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'ReactContainerBoilerplate',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
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
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
  },
  devtool: 'source-map'
});