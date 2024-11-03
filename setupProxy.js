// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/youtube',
//     createProxyMiddleware({
//       target: 'https://www.youtube.com',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/youtube': '', // remove /youtube from the request path
//       },
//     })
//   );
// };
