module.exports = {
  proxy: "http://localhost:58263",
  files: ["templates/"],
  // open: false, // 是否自动打开浏览器
  // notify: false, // 是否显示通知
  // ghostMode: false, // 是否启用跨设备同步
  /* middleware: [
    function (req, res, next) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // 禁用缓存
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      next();
    },
  ], */
};
