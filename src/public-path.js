if (window.__MICRO_APP_ENVIRONMENT__) {
  // 针对微前端 资源标签（link、a、img、script）地址自动补全
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__
}