const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })
];

const CssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
]

module.exports = {
  mode: 'production',
  entry: './src/components/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2',  // 包需要被module.exports，这就要用到common
  },
  resolve: {
    // 要解析的文件的扩展名
    extensions: [".js", ".jsx", ".json"],
    // 解析目录时要使用的文件名
    mainFiles: ["index"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        },
      },
      {
        test: /\.css$/,
        use: CssLoader
      },
      {
        test: /\.less$/,
        use: [
          ...CssLoader,
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    open: true
  },
  externals: isProd ? [nodeExternals()] : [], // nodeExternals 使得打包的组件中不包括任何 node_modules 里面的第三方组件，起到减小体积的作用。
  plugins,
};