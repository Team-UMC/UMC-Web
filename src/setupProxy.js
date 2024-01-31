const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/oauth2.0",
    createProxyMiddleware({
       target: "https://nid.naver.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/oauth",
    createProxyMiddleware({
       target: "https://kauth.kakao.com",
      changeOrigin: true,
    })
  );
};