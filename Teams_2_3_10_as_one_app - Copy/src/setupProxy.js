const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://172.203.226.233:8765',
      changeOrigin: true,
    })
  );
};
