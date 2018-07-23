var webpack = require('webpack');
var webpackConfig = require('./webpack.config')("development", {mode: "development"});

module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS' ],
        singleRun: true,
        colors: true,
        frameworks: [ 'jasmine' ],
        files: [
            './node_modules/babel-polyfill/dist/polyfill.js',
            'test/**/*Test.js'
        ],
        preprocessors: {
            'test/**/*Test.js': [ 'webpack', 'sourcemap' ]
        },
        reporters: [ 'junit' ],
        webpack: {
            mode: 'development',
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: webpackConfig.module,
            externals: {
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('test')
                })
            ]
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },
        plugins: [
            'karma-jasmine',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-babel-preprocessor',
            'babel-polyfill',
        ],
        junitReporter: {
            outputDir: './target/surefire-reports',
            outputFile: 'TEST-net.courtanet.statics.js.KarmaRunnerTest.xml',
            suite: 'net.courtanet.statics.js',
            useBrowserName: false,
        },
    });
};
