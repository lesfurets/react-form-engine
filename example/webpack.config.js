module.exports = (env, argv) => ({
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname ,
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
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
    }
});