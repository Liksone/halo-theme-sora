var to_top = function () {
  var btn = document.getElementsByClassName("to-top")[0];
  var scroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  scroll >= window.innerHeight / 2
    ? btn.classList.add("active")
    : btn.classList.remove("active");
};

// 返回页首
window.addEventListener("scroll", to_top);

// 使得外部链接在新窗口中打开
document.addEventListener("DOMContentLoaded", function () {
  /* // 获取所有链接
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    // 判断是否为外部链接
    if (link.href.startsWith("https://")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    }
  }); */

  document.querySelectorAll("a[href^='https://']").forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
});
