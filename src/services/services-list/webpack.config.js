const path = require('path');
const slsw = require('serverless-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  devtool: slsw.lib.webpack.isLocal ? 'eval-cheap-module-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  externals: [
    'aws-sdk',
    /^@aws-sdk\/.*/,
  ],
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '../../../libs/generated/client',
          to: 'libs/generated/client',
          globOptions: {
            ignore: ['**/*.d.ts', '**/*.js.map'],
          },
        },
      ],
    }),
  ],
  optimization: {
    minimize: false,
  },
};
