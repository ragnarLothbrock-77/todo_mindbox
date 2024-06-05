import webpack from 'webpack';
import 'webpack-dev-server';
import { BuildMode, BuildPaths } from './config/webpack/types/types';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import path from 'path';


export interface ENVVariables {
  mode?: BuildMode,
  port?: number,
  paths?: BuildPaths,
}

export default (env: ENVVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
    output: path.resolve(__dirname, 'build'),
  }

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths
  });


  return config;
}