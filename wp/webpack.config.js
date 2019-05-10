const path = require("path"); //беремо абсолютний путь
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/app.js"], //додали babel-polifyt корінь дерева
  output: {
    path: path.resolve(__dirname, "build"), //вказуємо що збиратися буде в папку білд
    filename: "bundle.js" //збирається в файл
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, //loader for JS
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("build"),
    new HtmlWebpackPlugin({
      //for HTML
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      //for CSS
      filename: "style.css"
      //   chunkFilename: "[id].css"
    })
  ] //обробка остатоного файлу (стіни)
};
//babel переобразовує в старі в версії JS
////BABEL преобразоветель(треба поставити пакет) настройки в .babelrc
////webpack-dev-server - локалльний сервер розробки
