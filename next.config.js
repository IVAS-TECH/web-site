const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd ? { basePath: '/web-site', assetPrefix: '/web-site' } : {};
