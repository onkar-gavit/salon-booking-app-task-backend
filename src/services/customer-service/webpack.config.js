const slsw = require('serverless-webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'production',
  externals: [
    // Exclude AWS SDK v3 from bundle (available at runtime)
    /^@aws-sdk\/.*/
    // Note: Prisma client and engines must be included in bundle
  ],
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../../../libs/generated/client'),
          to: 'libs/generated/client/',
          globOptions: {
            ignore: ['**/*.d.ts', '**/index-browser.js']
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.node$/,
        use: 'node-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.node'],
    alias: {
      '.prisma/client/index-browser': '.prisma/client/index.js'
    }
  },
  optimization: {
    minimize: false
  },
  node: {
    __dirname: false,
    __filename: false
  }
};
