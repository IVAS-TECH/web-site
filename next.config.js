const less = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
    [less, { lessLoaderOptions: { javascriptEnabled: true } }]
], isProd ? { basePath: '/web-site' } : {});
