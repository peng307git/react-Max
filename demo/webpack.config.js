const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:[
        './src/app.js'
    ],

    output:{
        filename : "main.js",
        path : path.resolve(__dirname,'dist/assets'),
        publicPath : "/assets/"
    },

    module : {
        rules : [
            {
                test : /\.js$/,
                use : ['babel-loader'],
                include : [
                    path.resolve(__dirname,'./src')
                ]
            },
            {
                test : /\.css$/,
                use :  ['style-loader','css-loader']
            }
        ]
    },

    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename : 'main.html',
            template : './src/index.html'
        })
    ],

    devtool : 'cheap-module-eval-source-map'
}
