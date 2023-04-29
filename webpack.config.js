const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'src','index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[contenthash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use:['style-loader','css-loader','postcss-loader']
            }
        ]
    },
    devServer:{
        port: 3001
    }
}