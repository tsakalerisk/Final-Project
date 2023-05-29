const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://192.168.43.200:8090",
      pathRewrite: { "^/test_controller": "" }
    })
  );
};
