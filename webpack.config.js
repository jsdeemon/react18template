const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

};