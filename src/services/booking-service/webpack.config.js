const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'production',
  externals: [
    nodeExternals({
      allowlist: ['@prisma/client', '.prisma/client']
    }),
    // Exclude AWS SDK v3 from bundle (available in Lambda runtime)
    /^@aws-sdk\/.*/
  ],
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
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: true,
    usedExports: true,
    sideEffects: false,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '../../../libs/generated/client',
          to: 'libs/generated/client',
        },
        {
          from: '../../../node_modules/.prisma/client/libquery_engine-*.so.node',
          to: 'libs/generated/client/[name][ext]',
        },
        {
          from: '../../../node_modules/@prisma/engines/libquery_engine-*.so.node',
          to: 'libs/generated/client/[name][ext]',
        },
      ],
    }),
  ],
};
