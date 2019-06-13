const path = require("path");
const HtmlWebPuckPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minmize: true }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader"
            // options: {
            //   limit: 5000,
            //   name: "./misc/fonts/[name].[ext]"
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPuckPlugin({
      template: "./src/index.pug",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
