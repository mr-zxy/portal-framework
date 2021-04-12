const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const WebpackLifeCyclePlugin = require('./src/plugins/webpack-plugin');
// const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.module.rule('html').test(/\.html$/)
            .use('ejs-loader').loader('ejs-loader').end()
        config.module.rule('ejs').test(/\.ejs$/)
            .use('ejs-loader').loader('ejs-loader').end()
        config.module.rule('js').test(/\.js$/)
            .use('babel-loader').loader('babel-loader').end()
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer') // 可视化分析包大小
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)

            }
            config.plugins.delete('prefetch-index');
            config.plugins.delete('preload-index');
        }
    },
    configureWebpack: config => {

        if (process.env.NODE_ENV === 'production') {
            // console.log(process.env.NODE_ENV)
            return {
                plugins: [
                    new WebpackLifeCyclePlugin(),
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$/,
                        threshold: 10240,
                        deleteOriginalAssets: false,
                    }),
                    new webpack.optimize.MinChunkSizePlugin({
                        minChunkSize: 10000 // Minimum number of characters
                    }),
                ],
                externals: {
                    'jquery': '$',
                    'swiper': 'Swiper',
                    'echarts': 'echarts',
                }
            }
        } else {
            return {
                externals: {
                    'jquery': '$',
                    'swiper': 'Swiper',
                    'echarts': 'echarts',
                }
            }
        }
    },
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: '首页',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        new: {
            entry: 'src/new.js',
            template: 'public/new.html',
            filename: 'new.html',
            title: '新闻',
            chunks: ['chunk-vendors', 'chunk-common', 'new']
        },

    },
    devServer: {
        open: true,
        proxy: {
            '/': {
                target: '0.0.0.0:8000',
                changeOrigin: true
            }
        }
    },
    parallel: true
}