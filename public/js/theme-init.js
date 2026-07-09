// 首屏前同步执行：定主题、标记 JS 可用（阻塞极小，文件常驻缓存）
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  function apply() {
    // 视图过渡会把 <html> 属性换回新文档的 class="no-js"，js 标记须随主题一起恢复
    root.classList.remove('no-js');
    root.classList.add('js');
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) { /* 隐私模式 */ }
    var theme = saved === 'light' || saved === 'dark'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    root.dataset.theme = theme;
  }

  apply();
  // Astro 视图过渡换页后 <html> 属性会被新文档覆盖，需要重放
  document.addEventListener('astro:after-swap', apply);
})();
