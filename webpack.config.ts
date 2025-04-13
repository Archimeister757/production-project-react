import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths, BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";
  const isAnalyze = env.analyze;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    isAnalyze,
    port: PORT,
  });

  return config;
};
