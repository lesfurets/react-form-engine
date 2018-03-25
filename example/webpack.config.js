module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname ,
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
            },
        ]
    }
}