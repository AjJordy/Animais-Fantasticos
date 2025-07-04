const path = require("path");

module.exports = {
  entry: "./js/script.js", // ponto de entrada principal
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js", // nome do arquivo gerado
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  devtool: "source-map", // para gerar mapeamento de código
};
