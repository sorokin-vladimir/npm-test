const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = env => {
  // console.log(`webpack.config:7 | `, env.NODE_ENV);
  return {
    // entry: './src/index.tsx',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle-[hash].js',
      publicPath: '',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
      contentBase: 'dist',
      compress: true,
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // hmr: process.env.NODE_ENV === 'development',
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                  // importLoaders: 1,
                  localIdentName: env.NODE_ENV === 'development' ?
                    '[name]__[local]___[hash:base64:5]' : '[hash:base64:6]',
                },
              },
            },
            {
              loader: 'postcss-loader'
            }
          ],
        },
        {
          test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]'
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/index.html',
            to: './index.html',
          },
          {
            from: 'src/assets/**/*',
            to: './assets',
            transformPath: (targetPath) => {
              return targetPath.replace('src/assets', '');
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'style-[hash].css',
        // allChunks: true,
      }),
    ],
  }
};
