const DETAILS = {

vanitas: `
<h2>Museo de Vanitas — 虚空数字艺术馆</h2>
<p class="d-sub">数字策展实验 · 独立完成策展叙事、视觉设计及前端开发</p>
<div class="d-meta"><span>HTML/CSS/JS</span><span>Tailwind CSS</span><span>Canvas</span><span>数字策展</span><span>西班牙文学</span><span>艺术史</span></div>
<div class="d-toc"><div class="toc-title">Índice / 目录</div>
<a href="#" onclick="document.getElementById('van-s1').scrollIntoView()">策展概述</a>
<a href="#" onclick="document.getElementById('van-s2').scrollIntoView()">展厅结构与跨模态逻辑</a>
<a href="#" onclick="document.getElementById('van-s3').scrollIntoView()">策展手记</a>
<a href="#" onclick="document.getElementById('van-s4').scrollIntoView()">技术实现与访问</a></div>
<div class="d-section" id="van-s1">
  <h3>策展概述</h3>
  <p>Este museo digital constituye un experimento curatorial centrado en la evolución de la noción de la muerte en la intersección entre la pintura y la literatura españolas de los siglos XV al XVII. Sus tres salas trazan un arco que parte del pánico físico medieval, atraviesa la domesticación doctrinal contrarreformista y desemboca en la disolución barroca del orden de lo real. Cada sala despliega un mecanismo de contrapunto intermodal: el texto poético o dramático no es un apéndice ornamental de la imagen, ni esta se limita a ilustrarlo. En la fricción generada por el acercamiento digital, el desplazamiento del plano visual y la aparición y desaparición del texto, emerge una ganancia cognitiva que ninguno de los dos lenguajes produciría por separado.</p>
  <p style="font-size:14px;color:var(--muted);margin-top:12px">本数字策展实验聚焦于15至17世纪西班牙文学与绘画交汇处死亡观的演进。三间展厅构成一条逻辑弧线：从中世纪晚期对肉体毁灭的绝对恐慌，到反宗教改革时期教义对死亡的驯服与仪式化，最终抵达巴洛克幻灭对现实秩序的彻底消解。每一展厅均采用跨模态对应机制，诗歌或戏剧文本不是图像的附庸装饰，图像也非仅限于增色的华丽插图。在镜头的动态聚焦、视窗的移动避让与文字的显现消失之中，期望观展者在探索画作与文本的交互中能收获一种认知增益，对于「死亡观」这一主题达成视觉与语言各自无法独立完成的深层理解。</p>
</div>
<div class="d-section" id="van-s2">
  <h3>展厅结构与跨模态逻辑</h3>
  <p><b>展厅一 · El Triunfo del Alma</b>：中世纪晚期。《死亡之舞》与勃鲁盖尔的画笔构筑了一座肉体无法设防的剧场，揭示了黑死病大流行与社会危机遗留下的集体恐慌。在此处，死亡是冰冷的官僚，平等只是生灵被暴虐压制后的副产品。</p>
  <p><b>展厅二 · La Domesticación Doctrinal</b>：反宗教改革时期。曼里克的诗句与格列柯的画面完成了对死亡的「天主教制度化驯服」。尘世的消亡不再是暴力的毁灭，而被重塑为一种严密的秩序和礼仪性的层层过渡。生命之河汇入的海不是虚无与遗忘，而是神圣的收容居所。</p>
  <p><b>展厅三 · La Disolución Barroca</b>：17世纪巴洛克。卡尔德隆与佩雷达不再试图用神圣礼仪去掩盖死亡，而是直接对整个现实的重量进行了抽空：骑士睡着，天使展开拉丁文的末日判决，骷髅清点着一个已经解体的帝国留下的尘世财产。物质、繁华、地缘野心与绝对王权被重新编码为一场短暂大梦。</p>
</div>
<div class="d-section" id="van-s3">
  <h3>作者策展手记（节选）</h3>
  <p>我最初的创意始于在阅读《人生如梦》时，脑海中联想到佩雷达的《骑士的梦想》这幅有名的画作。这种关联也让我想到在《西班牙语文学选读》的授课中，老师也经常使用经典绘画作为直观的视觉线索。串联起过去的课程，我发现「死亡」这一话题在多个时期的文学作品中反复出现，每个时期又带有自身极其微妙的神学阐释与心灵防御机制。因此，我决定沿着「死亡观的系统演进」进行深挖，并采用「视觉+文本互文」的形式来完成这次探索。</p>
  <p>不过必须承认的是，试图通过三幅画作与三段文本来勾勒西班牙数百年的死亡观变迁，显然是以小见大、存在历史线索缺漏的。但我的探索重点并非完成一部通史编纂，而是进行视觉与文本、图像学与语文学的互文尝试。采用让读者自己交互的网页形式，也是希望这种动态碰撞、逐步揭示的过程能带来一种解谜感，相当于是从感官和能动性两个方面翻新了「阅读」这一过程。</p>
  <p>这一数字策展实验的核心命题，在于探索视觉意象与文学文本之间跨模态互文的认知增益。当两种语言体系进入了一种动态对位关系，这正是数字交互对传统艺术史与文学观察方法的系统革新：它不改变被观看的对象，但改变观看的结构；视觉与文本不再停留在同一层面彼此解释，而是在交互中产生了一种二者独立存在时无法生成的认知维度。</p>
</div>
<div class="d-section" id="van-s4">
  <h3>技术实现与访问</h3>
  <p>纯前端实现：HTML/CSS/JS + Tailwind CSS + Canvas 粒子星空系统。三间展厅通过 base64 内嵌 iframe 实现自包含部署，无需服务器。</p>
  <p><a href="vanitas/" target="_blank">在线观展 →</a></p>
</div>`,

deskboard: `
<h2>DeskNoteBoard — 桌面任务管理系统</h2>
<p class="d-sub">macOS 原生常驻应用 · Vibe Coding 驱动开发 · V1.6.0</p>
<div class="d-meta"><span>Swift 6.0</span><span>SwiftUI</span><span>AppKit</span><span>macOS 14+</span><span>Vibe Coding</span></div>
<img class="d-img" src="desknoteboard.png" alt="DeskNoteBoard 主界面">
<div class="d-toc"><div class="toc-title">Índice / 目录</div>
<a href="#" onclick="document.getElementById('db-about').scrollIntoView()">概述</a>
<a href="#" onclick="document.getElementById('db-grid').scrollIntoView()">六个分区</a>
<a href="#" onclick="document.getElementById('db-screenshots').scrollIntoView()">截图</a>
<a href="#" onclick="document.getElementById('db-features').scrollIntoView()">核心功能</a>
<a href="#" onclick="document.getElementById('db-design').scrollIntoView()">设计约束</a>
<a href="#" onclick="document.getElementById('db-versions').scrollIntoView()">版本迭代</a>
<a href="#" onclick="document.getElementById('db-tech').scrollIntoView()">技术</a>
<a href="#" onclick="document.getElementById('db-dl').scrollIntoView()">下载与安装</a></div>
<div class="d-section" id="db-about">
  <h3>概述</h3>
  <p>一个常驻 macOS 桌面的个人任务管理工具。<b>不是 Todo App</b>——传统待办清单把所有事堆在一个列表里，看不出什么是主线、什么是杂务。这个工具用 6 个固定分区映射认知结构，区分「一次性任务」和「每日习惯」两种生命周期。半透明卡片常驻桌面左上角，像桌面的一部分而不是弹窗。</p>
</div>
<div class="d-section" id="db-grid">
  <h3>六个分区，一张桌面</h3>
  <table style="width:100%;border-collapse:collapse;margin:0 0 16px"><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">分区</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">定位</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">例子</th></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">高专注</td><td style="padding:6px 8px">主线任务，需要深度投入</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">西语复习、整理实习材料</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">探索性</td><td style="padding:6px 8px">支线探索，不必须但有获得感</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">试一个新的 AI 工具流</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">杂务</td><td style="padding:6px 8px">脑力消耗低但必须处理</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">填表单、买东西</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">突发响应</td><td style="padding:6px 8px">临时插入，需要优先响应</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">临时消息、DDL 提醒</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">非结构化休息</td><td style="padding:6px 8px">恢复能量的自由活动</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">散步、拍照、游戏</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">SOP</td><td style="padding:6px 8px">每日习惯打卡</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">喝水、运动、日志</td></tr></table>
  <p style="font-size:13px;color:var(--muted)">高专注是主卡，占最大面积。其余 5 块围绕排布，同屏可见不需要滚动。</p>
</div>
<div class="d-section" id="db-screenshots">
  <h3>截图</h3>
  <div style="display:flex;gap:16px;flex-wrap:wrap;margin:16px 0">
    <div style="flex:1;min-width:240px;max-width:calc(50% - 8px)"><img class="d-img" src="task-detail.png" alt="任务详情浮层" style="border:1px solid var(--border)"><p style="font-size:12px;color:var(--muted);text-align:center;margin-top:4px">双击任务展开详情浮层，编辑优先级和时间标签</p></div>
    <div style="flex:1;min-width:240px;max-width:calc(50% - 8px)"><img class="d-img" src="daily-done.png" alt="今日已做" style="border:1px solid var(--border)"><p style="font-size:12px;color:var(--muted);text-align:center;margin-top:4px">今日已做页面，按板块分组展示当天完成的任务</p></div>
  </div>
</div>
<div class="d-section" id="db-features">
  <h3>核心功能</h3>
  <p><b>任务管理</b> — 输入回车即添加。支持 P0/P1/P2 三级优先级（自动排序）、自定义时间标签（如 DDL 4.30、周末、五一假期）。拖拽即可跨分区移动。双击展开详情编辑。</p>
  <p><b>SOP 习惯打卡</b> — 每日刷新，点击打卡。自动计算连续打卡天数。默认预设：多喝水、西语练习、阅读思考、运动按摩、日志、任务整理。</p>
  <p><b>归档与回顾</b> — 完成的任务进入归档，按板块分类。「今日已做」按自然日汇总当天完成的所有任务。一键导出 Markdown，适合写日志、周报、复盘。第二天自动切换新页。</p>
  <p><b>迁移</b> — 如果你之前用 Do it!，支持一次性导入未完成任务，按象限和关键词自动映射到对应分区，按 sourceTaskID 去重。</p>
</div>
<div class="d-section" id="db-design">
  <h3>设计约束</h3>
  <ul>
    <li>不做全功能。不是 Notion，不是 Things 3。只做「每天都在用的核心循环」</li>
    <li>不堆信息。主页面只显示标题、优先级标签、时间标签。其余在双击浮层里</li>
    <li>不强占注意力。半透明卡片 + 暗色背景，视觉上像桌面一部分</li>
  </ul>
</div>
<div class="d-section" id="db-versions">
  <h3>版本迭代（V0.1 → V1.6.0）</h3>
  <p><b>V0.1.x 原型期</b>：确定原生 macOS + SwiftUI/AppKit 路线，跑通本地 JSON 持久化</p>
  <p><b>V0.2.x 结构期</b>：固定板块信息架构定型。SOP 独立为每日习惯区，区分「任务」和「习惯」两种对象生命周期</p>
  <p><b>V0.3.x 能用期</b>：任务新增、编辑、完成、归档跑通。SOP 打卡 + 连续天数计算</p>
  <p><b>V0.4.x 风格期</b>：从窗口感改为桌面感。半透明卡片系统，统一色板，去除强存在感底板</p>
  <p><b>V0.5.x 交互期</b>：拖拽跨板块移动 + 落点高亮。双击任务展开详情浮层</p>
  <p><b>V1.0.0 稳定起点</b>：六区结构稳定，任务与习惯双生命周期彻底分离，对外心智模型成型</p>
  <p><b>V1.1.x ~ V1.6.0</b>：优先级系统 → 高专注放大为主卡的布局重构 → Do it! 一次性迁移 → 今日已做 + Markdown 导出 → 自定义时间标签取代固定「本周」标记</p>
</div>
<div class="d-section" id="db-tech">
  <h3>技术</h3>
  <p>Swift 6.0 · SwiftUI · AppKit · macOS 14.0+ · 本地 JSON 持久化 · 无网络请求</p>
</div>
<div class="d-section" id="db-dl">
  <h3>下载与安装</h3>
  <p style="padding:16px;background:var(--tag-bg);border-radius:8px">⬇ <a href="https://github.com/ElenaLiu-snow/ElenaLiu-snow.github.io/releases/download/v1.0/DeskNoteBoard-v1.0.zip" target="_blank" style="color:var(--accent);font-weight:600">下载 DeskNoteBoard-v1.0.zip</a> （503KB）<br><span style="font-size:12px;color:var(--muted)">支持 macOS 14.0+ · Apple Silicon（M1/M2/M3/M4）· 开源（MIT）</span></p>
  <p style="margin-top:12px"><b>安装步骤</b>：1. 解压 zip 得到 DeskNoteBoard.app → 2. 拖到 /Applications（或直接双击）→ 3. 首次打开提示「无法验证开发者」→ 系统设置 → 隐私与安全性 → 拉到底部 → 仍要打开（每台 Mac 只需一次）</p>
</div>`,

rae: `
<h2>RAE Atelier — 西语语法学习 Agent</h2>
<p class="d-sub">复古风西语语法问答助手 · Next.js 全栈 · AI 辅助开发 · 内测中</p>
<div class="d-meta"><span>Next.js</span><span>React</span><span>Tailwind</span><span>AI Agent</span><span>西语学习</span></div>
<img class="d-img" src="screenshots/rae-atelier.jpg" alt="RAE Atelier">
<div class="d-section">
  <h3>产品思路</h3>
  <p>针对西班牙语学习者（尤其是中文母语者）在冠词、介词等语法难点上的学习需求，构建复古风格的 AI 语法问答助手。以 RAE（西班牙皇家语言学院）标准为底层知识框架，通过 AI 辅助生成解释和例句。</p>
  <p>视觉设计采用复古学术风格（暖色调纸张质感、衬线体），营造「语言学习工作室」的氛围感，与 Museo de Vanitas 的数字人文美学一脉相承。</p>
</div>
<div class="d-section">
  <h3>技术栈</h3>
  <p>Next.js 全栈应用，React 前端 + Tailwind CSS。AI Agent 驱动语法解析与回答生成。Claude Code 辅助全流程开发，从项目初始化到页面布局到 Agent 逻辑均由 AI 辅助完成。</p>
</div>
<p style="font-size:13px;color:var(--muted)">在线地址：待部署后更新</p>`,
aicompanion: `
<h2>AI Companion 赛道：范式转移与商业终局</h2>
<p class="d-sub">行业研究 · 独立完成 · 基于 a16z、Sensor Tower 等数据源</p>
<div class="d-meta"><span>行业研究</span><span>竞品分析</span><span>AI Companion</span><span>商业分析</span></div>
<iframe src="projects/aicompanion.html" style="width:100%;min-height:80vh;border:none;margin-top:16px"></iframe>
`,
gpt4o: `
<h2>Mourning the Loss of an LLM</h2>
<p class="d-sub">A case study of the GPT-4o discontinuation controversy · 学术论文 · 英文 · 1,605词</p>
<div class="d-meta"><span>人机交互</span><span>案例研究</span><span>伦理分析</span><span>学术写作</span></div>
<iframe src="projects/gpt4o.html" style="width:100%;min-height:80vh;border:none;margin-top:16px"></iframe>
`,
sports: `
<h2>海外运动品牌货盘分析</h2>
<p class="d-sub">商业尽职调查 · 数据分析</p>
<div class="d-meta"><span>货盘分析</span><span>尽职调查</span><span>定量分析</span></div>
<iframe src="projects/sports.pdf" style="width:100%;min-height:85vh;border:none;margin-top:16px"></iframe>
`,
baijiu: `
<h2>高端白酒行业深度研究 — 五粮液 vs 泸州老窖</h2>
<p class="d-sub">行业研究 · 营销策略与渠道板块对比</p>
<div class="d-meta"><span>行业研究</span><span>渠道分析</span><span>财务建模</span><span>竞品对比</span></div>
<iframe src="projects/baijiu.html" style="width:100%;min-height:80vh;border:none;margin-top:16px"></iframe>
`,
kitchen: `
<h2>厨电品牌市场渗透策略</h2>
<p class="d-sub">GTM 策略制定 · 全域营销规划</p>
<div class="d-meta"><span>GTM策略</span><span>渠道规划</span><span>私域运营</span></div>
<iframe src="projects/kitchen.pdf" style="width:100%;min-height:85vh;border:none;margin-top:16px"></iframe>
`,
culture: `
<h2>文化机构全域传播诊断</h2>
<p class="d-sub">新媒体矩阵分析 · 传播策略诊断</p>
<div class="d-meta"><span>新媒体矩阵</span><span>传播策略</span><span>内容分析</span><span>平台诊断</span></div>
<iframe src="projects/culture.pdf" style="width:100%;min-height:85vh;border:none;margin-top:16px"></iframe>
`,

challenge: `
<h2>比亚迪建厂推迟——国际政治经济学透视</h2>
<p class="d-sub">北京大学第三十四届"挑战杯"一等奖（校级终审）· 项目负责人 · 4.5万字</p>
<div class="d-meta"><span>国际政治经济学</span><span>案例研究</span><span>4.5万字</span><span>团队领导</span></div>
<iframe src="projects/challenge.html" style="width:100%;min-height:80vh;border:none;margin-top:16px"></iframe>
`,


};