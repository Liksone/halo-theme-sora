import "./main.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // 主题

//import "./test/lapis.css";

export * from "./TOC.js";
export * from "./upvote.js";
export * from "./sponsor.js";
export * from "./linkIcon.js";

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
document.addEventListener("DOMContentLoaded", () => {
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

  hljs.highlightAll();
});

// 字数统计 + 预计阅读时间
//
export function wordCountAndReadTime() {
  // 获取指定的元素
  const element = document.querySelector("#post-content");
  // 计算字数
  const textLength = element.textContent.length;
  // 将字数显示在 HTML 中
  document.getElementById("post-wordcount").textContent = textLength;

  //
  document.getElementById("post-readtime").textContent = (function () {
    const min = Math.round(textLength / 350);
    const max = Math.round(textLength / 250);
    if (min == max) {
      return `${max} min`;
    } else {
      return `${min}~${max} min`;
    }
  })();
}

// 文章时效性提示

function countDaysBetween(isoDate1, isoDate2) {
  // 将 ISO 8601 时间字符串解析为 Date 对象
  const date1 = new Date(isoDate1);
  const date2 = new Date(isoDate2);
  // 转换为时间戳（毫秒）
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  // 计算时间差（毫秒），并转换为天数
  const timeDifference = Math.abs(time2 - time1); // 取绝对值，确保结果为正数
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

export function generateTimeTips() {
  const now = Date.now();
  const date =
    document.getElementById("post-update-time") === null
      ? document.getElementById("post-publish-time").textContent
      : document.getElementById("post-update-time").textContent;

  const prefix =
    document.getElementById("post-update-time") === null
      ? "发布于 "
      : "更新于 ";

  const randomWords = [
    "时过境迁",
    "沧海桑田",
    "天翻地覆",
    "水流花落",
    "斗转星移",
    "物是人非",
    "时移世易",
    "物换星移",
    "春去秋来",
  ];
  const randomIndex = Math.floor(Math.random() * randomWords.length);

  document.getElementById("post-time-tips-span").textContent =
    "本文" +
    prefix +
    countDaysBetween(date, now) +
    " 天前，其中的信息可能已经" +
    randomWords[randomIndex];
}
