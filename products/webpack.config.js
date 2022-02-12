const HtmlWebpackPlugin = require('html-webpack-plugin');
// This plugin actually helps us to embedded the js file with the HTML File automatically

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081, // We have created a dev Server on 8081 port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // We need to give the location of our HTML FIle in which we will embedded the js file which is process or build by webpack
    }),
  ],
};
