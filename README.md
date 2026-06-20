# Tuyoly Blog

一个现代风格的个人博客主页，用来展示 Tuyoly 的个人信息和联系方式。

## 内容

- `index.html`：页面结构、SEO 信息和个人联系方式。
- `style.css`：现代配色、响应式布局和基础 hover 样式。
- `script.js`：移动端菜单和页面内锚点滚动。

## 本地预览

可以直接打开 `index.html`，也可以在仓库根目录启动一个静态服务器：

```bash
python -m http.server 4173
```

然后访问：

```text
http://localhost:4173/
```

## 部署

页面使用纯 HTML、CSS 和 JavaScript，不依赖框架或后端。资源路径使用相对路径，适合部署到 GitHub Pages 的 `/blog/` 子路径：

```text
https://tuyoly1.github.io/blog/
```

## 维护

页面保持轻量结构，后续可以在 `index.html` 中按需重新加入项目或文章区域。
