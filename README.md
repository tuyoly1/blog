# Tuyoly Blog

Tuyoly 的个人博客主页，一个偏数字工作台气质的静态站点。页面用于记录 Web 开发、网络安全、AI 工具、自动化脚本和从想法到 MVP 的实践过程。

## Files

- `index.html`：页面结构、SEO、内容区块和社交链接。
- `style.css`：深色主题、响应式布局、卡片和动效。
- `script.js`：导航状态、移动端菜单、首次出现淡入和本地时钟。

## Design Notes

配色选择了石墨黑、深青边界、冰青高光和少量琥珀色状态点。这样比常见蓝紫渐变更接近深夜工作台、终端日志和安全仪表盘的感觉，同时仍然保持文本可读性。

页面刻意避免模板站常见的全屏空洞 hero、等宽技能卡片和过度装饰，把重点放在近期工作日志、关注方向、项目和笔记上。

## Local Preview

直接打开 `index.html` 即可预览。也可以在仓库根目录启动任意静态服务器：

```bash
python -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## GitHub Pages

所有资源都使用相对路径：

```html
<link rel="stylesheet" href="./style.css">
<script src="./script.js" defer></script>
```

因此可以部署在 `https://tuyoly1.github.io/blog/` 这样的子路径下。

## Updating Content

新增项目时，在 `index.html` 的 `#projects` 区域复制一个 `.project-card`，修改项目名、说明、标签和链接。

新增文章时，在 `#notes` 区域复制一个 `.note-card`，修改日期、标题、摘要和链接。以后如果文章变多，可以把 `notes` 拆成独立列表页。
