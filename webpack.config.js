const path = require("path");  // Certifique-se de importar o módulo 'path'

module.exports = {
  entry: "./src/index.js",  // Altere para o arquivo de entrada do seu projeto
  output: {
    path: path.resolve(__dirname, "dist"),  // Aqui usamos o 'path.resolve' corretamente
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],  // Suporte a JSX e TSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",  // Usando o 'babel-loader' para compilar o código
        },
      },
    ],
  },
  stats: {
    children: true,  // Detalhes sobre compilações de filhos
  },
};
