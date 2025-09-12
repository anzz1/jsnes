var path = require("path");

module.exports = (env) => {
  const isDevelopmentEnv = env === "development";
  console.log("env:", env);

  const webpackConfig = {
    entry: {
      jsnes: "./src/index.js"
    },
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      library: "jsnes",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          exclude: /node_modules/,
          use: [
            {
              loader: "eslint-loader",
            },
          ],
        },
      ],
    },
    plugins: [],
    watchOptions: {
      poll: true
    }
  }

  if (!isDevelopmentEnv) {
    const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
    webpackConfig.entry["jsnes.min"] = "./src/index.js";
    webpackConfig.plugins.push(new UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true,
    }));
  }

  return webpackConfig;
};
