# Tuyoly Blog

一个受暗色 Portfolio Hero 风格启发的个人博客主页，只保留主视觉和联系方式。

## 内容

- `index.html`：页面结构、SEO 信息、视频 Hero 和 Contact。
- `style.css`：暗色主视觉、胶囊导航、联系区和响应式布局。
- `script.js`：HLS 视频初始化、角色词轮播、移动端菜单和页面内锚点滚动。

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

页面保持纯 HTML、CSS 和 JavaScript，可直接部署到 GitHub Pages。当前只保留首页主视觉和联系方式，方便后续继续扩展。
