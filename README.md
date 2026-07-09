# 杨坤的博客 · 星港极光

> 深空即深海，极光即航迹。

个人博客，部署在 [alanturing01.github.io](https://alanturing01.github.io)。2026 年 7 月由 Bootstrap 单页模板全面重构为 [Astro](https://astro.build) 静态多页站，设计主题「星港极光」。

## 日常使用

**写一篇新文章**：在 `src/content/posts/` 下新建一个 `.md` 文件即可，文件名就是文章的 URL（如 `my-post.md` → `/posts/my-post/`）：

```markdown
---
title: 文章标题
description: 一句话摘要（会显示在列表和 RSS 里）
pubDate: 2026-07-09T20:00:00+08:00
tags: [随笔]
---

正文，Markdown 语法。图片放到 src/assets/ 后用相对路径引用：
![说明](../../assets/xxx.webp)
```

加 `draft: true` 可以存为草稿（不会发布）。推送到 `main` 分支后，GitHub Actions 会自动构建并部署，约一两分钟生效。

**加相册照片**：放进 `src/assets/gallery/`，然后在 `src/pages/gallery.astro` 的 `photos` 数组里加一行。

**加友链**：编辑 `src/pages/friends.astro` 的 `friends` 数组。

**本地预览**：

```bash
npm install
npm run dev        # http://localhost:4321
```

## 留言板评论（一次性配置）

评论用 [giscus](https://giscus.app)（基于 GitHub Discussions，点击才加载）。仓库 Discussions 已开启、配置已写好，只差一步：

1. 打开 <https://github.com/apps/giscus> 并点击 **Install**，选择本仓库授权即可。

## 技术与安全

- **Astro 7** 静态输出，零前端框架；交互只有约 200 行原生 JS。
- **零外部依赖**：字体、图标、样式全部自托管，不请求任何 CDN——在任何网络环境下都一样快。唯一的例外是留言板的 giscus，且必须用户点击才会加载。
- **CSP**：所有页面带 `Content-Security-Policy` meta（`default-src 'none'` 白名单制）。
- **部署安全**：GitHub Actions 工作流按 commit SHA 锁定所有 action，权限最小化（`contents: read`）；Dependabot 每周检查依赖更新。
- **媒体优化**：相册原图 110MB → 3.5MB（WebP），视频 224MB → 94MB（H.264 CRF 22）。原始文件都在 git 历史里，随时可找回。

## 回滚

旧版站点完整保留在 git 历史中。如需回滚：把 Pages 构建方式改回 legacy（Settings → Pages → Source: Deploy from a branch），然后 `git revert` 重构提交即可。

## 字体版权

标题用 [Space Grotesk](https://github.com/floriankarsten/space-grotesk)（SIL Open Font License 1.1），拉丁子集自托管；中文使用系统字体栈。
