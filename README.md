# Portfolio — Elena / 刘婧怡

## 本地预览

```bash
cd portfolio-site
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## 部署到 GitHub Pages

### 首次部署

1. 在 GitHub 创建新仓库，命名为 `<你的用户名>.github.io`
   - 例如用户名叫 `elena-liu`，仓库名就是 `elena-liu.github.io`
2. 等 🪜 恢复后：

```bash
cd /home/ubuntu/实习/portfolio-site
git remote add origin git@github.com:<你的用户名>/<你的用户名>.github.io.git
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

3. 等 1-2 分钟，访问 `https://<你的用户名>.github.io` 即可

### 后续更新

修改 `index.html` → `git add . && git commit -m "更新描述" && git push`

## 待补充

- [ ] Museo de Vanitas 的 salon2.html 和 salon3.html（目前只有主框架文件）
- [ ] RAE Atelier 截图
- [ ] 摄影作品 4-6 张（放到 `photos/` 目录下，在 HTML 中引用）
- [ ] GitHub 用户名（替换 README 中的 `<你的用户名>`）

## 文件结构

```
portfolio-site/
├── index.html              # 主页面（单页，四标签过滤）
├── desknoteboard.png       # DeskNoteBoard 截图
├── photos/                 # 摄影作品（待添加）
├── README.md
└── .gitignore
```
