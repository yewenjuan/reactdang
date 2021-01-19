const proxy = require("http-proxy-middleware").createProxyMiddleware;
module.exports = function(app) {
  app.use("/miaov", proxy({
    "target": "https://data.miaov.com/",
    "changeOrigin": true,
    "secure": true,
    "pathRewrite": {
      "^/miaov": ""
    },
    "cookieDomainRewrite": "https://data.miaov.com/"
  }))
}