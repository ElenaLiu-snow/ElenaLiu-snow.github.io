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

<div class="d-toc"><div class="toc-title">Índice / 目录</div>
<a href="#" onclick="document.getElementById('db-pain').scrollIntoView()">1. 痛点</a>
<a href="#" onclick="document.getElementById('db-position').scrollIntoView()">2. 产品定位</a>
<a href="#" onclick="document.getElementById('db-user').scrollIntoView()">3. 目标用户与使用场景</a>
<a href="#" onclick="document.getElementById('db-info').scrollIntoView()">4. 信息架构：六区认知模型</a>
<a href="#" onclick="document.getElementById('db-features').scrollIntoView()">5. 功能详述</a>
<a href="#" onclick="document.getElementById('db-principles').scrollIntoView()">6. 设计原则</a>
<a href="#" onclick="document.getElementById('db-versions').scrollIntoView()">7. 版本迭代日志</a>
<a href="#" onclick="document.getElementById('db-install').scrollIntoView()">8. 下载与安装</a></div>

<div class="d-section" id="db-pain">
  <h3>1. 痛点</h3>
  <p>现有的任务管理工具——无论是 Notion、Things 3 还是系统 Reminders——都遵循同一套范式：把所有待办事项堆进一个列表，用标签或文件夹做分类。下拉刷新的那一刻，几十条任务混在一起：「明天交论文」和「买洗衣液」并列，没有优先级区分，没有认知模式区分。</p>
  <p>更根本的问题在于：<b>传统 Todo App 假设所有任务是同质的</b>。但真实的大脑不是这样工作的。需要深度投入的主线任务、脑力消耗低但不得不做的杂务、临时插入的突发事项、恢复能量的休息活动——它们的认知属性完全不同，却被塞进同一个扁平列表里。用户每次打开清单都要重新做一次「这是什么类型的事、我现在该做哪个」的判断，这本身就是一种认知负荷。</p>
</div>

<div class="d-section" id="db-position">
  <h3>2. 产品定位</h3>
  <p><b>DeskNoteBoard 不是 Todo App，而是一个认知结构映射工具。</b></p>
  <p>它用 6 个固定分区映射用户对任务的天然分类方式，让「信息结构」服务于「认知结构」而非反过来。同时，它明确区分两种数据生命周期：一次性任务（完成后归档）和每日习惯（按天刷新、按天打卡）。</p>
  <p>产品形态是 macOS 原生常驻窗口，半透明卡片悬浮于桌面左上角。它不是用户需要主动打开的目的地，而是桌面的一部分——需要时信息就在那里，不需要时不抢占注意力。与传统工具的差异：</p>
  <table style="width:100%;border-collapse:collapse;margin:0 0 16px"><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">维度</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">传统 Todo App</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">DeskNoteBoard</th></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">信息架构</td><td style="padding:6px 8px;font-size:13px">扁平列表 + 标签文件夹</td><td style="padding:6px 8px;font-size:13px">固定六区，映射认知类型</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">任务 vs 习惯</td><td style="padding:6px 8px;font-size:13px">混在同一列表</td><td style="padding:6px 8px;font-size:13px">分属不同生命周期，分开管理</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">信息密度</td><td style="padding:6px 8px;font-size:13px">依赖滚动，信息过载</td><td style="padding:6px 8px;font-size:13px">同屏可见六区，无须滚动</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">注意力模型</td><td style="padding:6px 8px;font-size:13px">需要主动打开 App</td><td style="padding:6px 8px;font-size:13px">常驻桌面，半透明不抢占注意力</td></tr></table>
  <img class="d-img" src="desknoteboard.png" alt="DeskNoteBoard 主界面">
</div>

<div class="d-section" id="db-user">
  <h3>3. 目标用户与使用场景</h3>
  <p><b>用户画像</b>：需要进行个人任务管理、对认知效率有意识的 Mac 用户。典型场景：学生管理学业+课外+杂务多线并行；独立工作者需要区分深度工作和琐碎事务；任何觉得「为啥我总是被琐事淹没而把重要的事忘了」的人。</p>
  <p><b>核心使用场景</b>：</p>
  <ul>
    <li><b>早晨规划</b>：打开电脑，六区一目了然。在高专注区写下今天最重要的 1-3 件事，在 SOP 区确认每日习惯。不需要从几十条任务里挑重点。</li>
    <li><b>突发中断</b>：临时收到一条消息或 DDL 提醒，直接扔进「突发响应」区，不打断当前任务流，稍后统一处理。</li>
    <li><b>日终回顾</b>：打开「今日已做」，看到当天在各板块完成的所有任务，一键导出 Markdown 写日志或周报。</li>
  </ul>
</div>

<div class="d-section" id="db-info">
  <h3>4. 信息架构：六区认知模型</h3>
  <p>产品的核心结构。六个分区不是随机命名，而是对个人任务认知类型的系统映射。</p>
  <table style="width:100%;border-collapse:collapse;margin:0 0 16px"><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">分区</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">认知属性</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">典型任务</th></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">高专注</td><td style="padding:6px 8px;font-size:13px">深度投入，主线推进</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">西语复习、整理实习材料、写论文</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">探索性</td><td style="padding:6px 8px;font-size:13px">非必要但有获得感</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">试新 AI 工具流、研究一个兴趣课题</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">杂务</td><td style="padding:6px 8px;font-size:13px">低认知消耗，必须处理</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">填表单、买东西、约快递</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">突发响应</td><td style="padding:6px 8px;font-size:13px">临时插入，需优先响应</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">临时消息、DDL 提醒</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">非结构化休息</td><td style="padding:6px 8px;font-size:13px">自由活动，能量恢复</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">散步、拍照、打游戏、冥想</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">SOP</td><td style="padding:6px 8px;font-size:13px">每日习惯，打卡驱动</td><td style="padding:6px 8px;font-size:13px;color:var(--muted)">多喝水、运动、日志、阅读</td></tr></table>
  <p style="font-size:13px;color:var(--muted)">布局采用「1 大 5 中」：高专注作为主卡放大，其余 5 块围绕排布。同屏可见，不需要滚动。</p>
</div>

<div class="d-section" id="db-features">
  <h3>5. 功能详述</h3>
  <p><b>5.1 任务管理</b></p>
  <p>输入 + 回车即添加任务。支持 P0 / P1 / P2 三级优先级——主页面按优先级自动排序，高优先级任务始终出现在视口顶部。支持自定义时间标签（如「DDL 4.30」「周末」「五一假期」），在任务右侧以亮色小徽标呈现。拖拽即可跨分区移动，板块落点有高亮反馈。双击任务展开详情浮层，用于承载优先级编辑、时间标签修改等扩展信息——主页面保持克制，不被细节淹没。</p>
  <div style="display:flex;gap:16px;flex-wrap:wrap;margin:16px 0">
    <div style="flex:1;min-width:240px"><img class="d-img" src="task-detail.png" alt="任务详情浮层" style="border:1px solid var(--border)"><p style="font-size:12px;color:var(--muted);text-align:center;margin-top:4px">双击任务 → 详情浮层：编辑优先级、时间标签等扩展信息</p></div>
  </div>
  <p><b>5.2 SOP 习惯打卡</b></p>
  <p>每日自动刷新，点击打卡。自动计算连续打卡天数并显示。默认预设 6 项：多喝水、西语练习、阅读思考、运动按摩、日志、任务整理。用户可自行增删。</p>
  <p><b>5.3 归档与回顾</b></p>
  <p>完成任务后自动进入归档，按所属板块分类存储。「今日已做」页面按自然日汇总当天完成的所有任务，按板块分组展示。支持一键导出 Markdown——适合写日志、周报、复盘。第二天零点自动切换为新的一页，昨天的记录仍在可查看。</p>
  <div style="display:flex;gap:16px;flex-wrap:wrap;margin:16px 0">
    <div style="flex:1;min-width:240px"><img class="d-img" src="daily-done.png" alt="今日已做" style="border:1px solid var(--border)"><p style="font-size:12px;color:var(--muted);text-align:center;margin-top:4px">今日已做：按自然日 + 板块分组，支持 Markdown 导出</p></div>
  </div>
  <p><b>5.4 数据迁移</b></p>
  <p>支持从 Do it! 应用一次性导入未完成任务。导入逻辑：按 sourceTaskID 去重 + 按象限和关键词自动映射到对应分区。迁移完成后，入口自动回收——不长期占据界面空间。</p>
</div>

<div class="d-section" id="db-principles">
  <h3>6. 设计原则</h3>
  <p>产品开发过程中反复确认的核心判断：</p>
  <ul>
    <li><b>区分而非混合</b>：任务和习惯是两种不同生命周期的对象，不应混在同一列表里。任务完成后归档，习惯按天刷新。</li>
    <li><b>克制信息密度</b>：主页面仅显示标题、优先级标签、时间标签。编辑详情（优先级调整、时间标签修改）全部收敛进双击浮层。不是隐藏功能，而是把认知负担从视觉层移到交互层。</li>
    <li><b>像桌面而非窗口</b>：半透明卡片 + 暗色底板 + 自绘滚动条。视觉上接近桌面挂件，但技术上保留完整的交互能力——不为了「真桌面层」牺牲可用性。</li>
    <li><b>迁移是手段不是功能</b>：Do it! 导入完成后，入口自动回收。迁移工具不应该长期占据核心界面——它完成了使命就该退场。</li>
  </ul>
</div>

<div class="d-section" id="db-versions">
  <h3>7. 版本迭代日志</h3>
  <p style="font-size:13px;color:var(--muted);margin-bottom:16px">MAJOR.MINOR.PATCH 三分层记录：左边看「产品骨架有没有变」，中间看「有没有多出一个正式能力」，右边看「有没有把已有能力修得更稳」。0.y.z 为探索期，1.0.0 为稳定起点。</p>
  <table style="width:100%;border-collapse:collapse;margin:0 0 16px"><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">阶段</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">版本</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">产品变化</th></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">原型期</td><td style="padding:6px 8px;font-size:13px">V0.1.x</td><td style="padding:6px 8px;font-size:13px">确定原生 macOS + SwiftUI/AppKit 路线，跑通本地 JSON 持久化，搭好桌面便笺式窗口外壳</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">结构期</td><td style="padding:6px 8px;font-size:13px">V0.2.x</td><td style="padding:6px 8px;font-size:13px">核心信息架构确立：固定六区认知模型。SOP 独立为每日习惯区。产品从「记录工具」升级为「认知结构映射工具」</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">能用期</td><td style="padding:6px 8px;font-size:13px">V0.3.x</td><td style="padding:6px 8px;font-size:13px">任务新增/编辑/完成/归档全流程跑通。SOP 打卡 + 连续天数计算。修复输入获取焦点等稳定性问题</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">风格期</td><td style="padding:6px 8px;font-size:13px">V0.4.x</td><td style="padding:6px 8px;font-size:13px">窗口感 → 桌面感。半透明卡片系统，统一色板，自绘滚动条。多轮色彩和字号微调</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">交互期</td><td style="padding:6px 8px;font-size:13px">V0.5.x</td><td style="padding:6px 8px;font-size:13px">整条任务拖拽 + 跨板块移动 + 落点高亮反馈。双击展开详情浮层</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600;color:var(--accent)">稳定版</td><td style="padding:6px 8px;font-size:13px;font-weight:600">V1.0.0</td><td style="padding:6px 8px;font-size:13px">心智模型成型。六区结构稳定，任务与习惯双生命周期彻底分离</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">注意力</td><td style="padding:6px 8px;font-size:13px">V1.1.x</td><td style="padding:6px 8px;font-size:13px">P0/P1/P2 优先级系统。产品从「记录任务」走向「管理注意力」</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">空间</td><td style="padding:6px 8px;font-size:13px">V1.2.x</td><td style="padding:6px 8px;font-size:13px">「1 大 5 中」布局重构：高专注放大为主卡</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">迁移</td><td style="padding:6px 8px;font-size:13px">V1.3.x</td><td style="padding:6px 8px;font-size:13px">Do it! 一次性导入 + 完成后入口回收</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">回顾</td><td style="padding:6px 8px;font-size:13px">V1.4.x</td><td style="padding:6px 8px;font-size:13px">归档查看 +「今日已做」+ Markdown 导出</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-weight:600">时间</td><td style="padding:6px 8px;font-size:13px">V1.5~1.6</td><td style="padding:6px 8px;font-size:13px">本周标记 → 自定义时间标签。系统从「平面任务堆叠」走向「带时间语义的任务规划」</td></tr></table>
  <p style="font-size:12px;color:var(--muted)">当前为 V1.6.0，工程名 DeskNoteBoard · Swift 6.0 · SwiftUI · AppKit · macOS 14.0+ · 本地 JSON 持久化 · 无网络请求</p>
</div>

<div class="d-section" id="db-install">
  <h3>8. 下载与安装</h3>
  <p style="padding:16px;background:var(--tag-bg);border-radius:8px">⬇ <a href="https://github.com/ElenaLiu-snow/ElenaLiu-snow.github.io/releases/download/v1.0/DeskNoteBoard-v1.0.zip" target="_blank" style="color:var(--accent);font-weight:600">下载 DeskNoteBoard-v1.0.zip</a>（503KB）<br><span style="font-size:12px;color:var(--muted)">macOS 14.0+ · Apple Silicon · MIT 开源</span></p>
  <p style="margin-top:12px"><b>安装</b>：解压 → 拖入 /Applications → 双击打开。首次打开提示「无法验证开发者」→ 系统设置 → 隐私与安全性 → 拉到底部 → 点击「仍要打开」即可。每台 Mac 只需操作一次。</p>
</div>`,

rae: `
<h2>RAE Atelier — 西语语法智能助手</h2>
<p class="d-sub">面向 B1-B2 级中文母语学习者的 AI 语法助手 · Next.js 全栈 · RAG 驱动</p>
<div class="d-meta"><span>Next.js</span><span>React</span><span>Tailwind</span><span>RAG</span><span>DeepSeek</span><span>西语学习</span></div>
<p style="margin:12px 0;padding:10px 16px;background:var(--tag-bg);border-radius:8px;font-size:14px">🌐 <a href="https://frontend-flax-tau-24.vercel.app" target="_blank" style="color:var(--accent);font-weight:600">frontend-flax-tau-24.vercel.app</a></p>
<img class="d-img" src="screenshots/rae-atelier.jpg" alt="RAE Atelier 界面">

<div class="d-toc"><div class="toc-title">Índice / 目录</div>
<a href="#" onclick="document.getElementById('rae-why').scrollIntoView()">1. 为什么需要它</a>
<a href="#" onclick="document.getElementById('rae-compare').scrollIntoView()">2. 方案对比</a>
<a href="#" onclick="document.getElementById('rae-features').scrollIntoView()">3. 功能详述</a>
<a href="#" onclick="document.getElementById('rae-principles').scrollIntoView()">4. 设计原则</a>
<a href="#" onclick="document.getElementById('rae-how').scrollIntoView()">5. 技术原理</a>
<a href="#" onclick="document.getElementById('rae-faq').scrollIntoView()">6. 常见问题</a>
<a href="#" onclick="document.getElementById('rae-progress').scrollIntoView()">7. 开发进度</a></div>

<div class="d-section" id="rae-why">
  <h3>1. 为什么需要它</h3>
  <p>学西语语法，你大概遇到过这些情况：</p>
  <ul>
    <li><b>语法书太厚，翻了等于没翻。</b> RAE 官方《Nueva gramática de la lengua española》（NGLE）全书 48 章、数千页。你知道答案就在书里，但就是找不到。找到了，学术西语的描述方式也不一定看得懂。</li>
    <li><b>问 AI，答案看起来像那么回事，但不敢信。</b> ChatGPT、DeepSeek 对西语语法的回答常出现术语混淆、规则遗漏、例句尴尬——你用中文提问，它在中文训练数据和西语语法知识之间"脑补"，你分不清哪里对、哪里是编的。</li>
    <li><b>市面上的工具不教"为什么"。</b> Duolingo 练的是语感，西班牙语助手查的是单词。但当你问"为什么这里是虚拟式而不是陈述式？""这个前置词用 de 还是 por？"，这些工具给不了你答案。</li>
    <li><b>写了作文没人改。</b> 或者老师改了，只告诉你"这里不对"，但不解释背后的规则是什么、下次怎么避免。</li>
    <li><b>学了一堆零散知识，不知道怎么串起来。</b> 课本笔记、课堂截图、老师板书散落在各处，你想把它们变成系统的语法学习材料，但没有趁手的工具。</li>
  </ul>
</div>

<div class="d-section" id="rae-compare">
  <h3>2. 方案对比</h3>
  <table style="width:100%;border-collapse:collapse;margin:0 0 16px"><tr style="border-bottom:1px solid var(--border)"><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">方案</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">权威性</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">中文友好</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">个性化</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">练习生成</th><th style="text-align:left;padding:6px 8px;font-weight:600;font-size:13px;color:var(--muted)">成本</th></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">西班牙语助手</td><td style="padding:6px 8px;font-size:13px">无</td><td style="padding:6px 8px;font-size:13px">✅</td><td style="padding:6px 8px;font-size:13px">❌</td><td style="padding:6px 8px;font-size:13px">固定题库</td><td style="padding:6px 8px;font-size:13px">¥98/年</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">Duolingo</td><td style="padding:6px 8px;font-size:13px">无</td><td style="padding:6px 8px;font-size:13px">部分</td><td style="padding:6px 8px;font-size:13px">弱</td><td style="padding:6px 8px;font-size:13px">固定题型</td><td style="padding:6px 8px;font-size:13px">免费/付费</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">直接问 ChatGPT/DeepSeek</td><td style="padding:6px 8px;font-size:13px">弱（幻觉多）</td><td style="padding:6px 8px;font-size:13px">✅</td><td style="padding:6px 8px;font-size:13px">✅</td><td style="padding:6px 8px;font-size:13px">需手动 prompt</td><td style="padding:6px 8px;font-size:13px">免费</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:6px 8px;font-size:13px">找家教</td><td style="padding:6px 8px;font-size:13px">因人而异</td><td style="padding:6px 8px;font-size:13px">✅</td><td style="padding:6px 8px;font-size:13px">✅</td><td style="padding:6px 8px;font-size:13px">✅</td><td style="padding:6px 8px;font-size:13px">¥150-300/h</td></tr>
<tr style="border-bottom:1px solid var(--border);background:var(--tag-bg)"><td style="padding:6px 8px;font-size:13px;font-weight:600">Spanish Grammar Agent</td><td style="padding:6px 8px;font-size:13px;font-weight:600">RAE 原文引述</td><td style="padding:6px 8px;font-size:13px;font-weight:600">✅</td><td style="padding:6px 8px;font-size:13px;font-weight:600">✅</td><td style="padding:6px 8px;font-size:13px;font-weight:600">AI 动态生成</td><td style="padding:6px 8px;font-size:13px;font-weight:600">几乎免费</td></tr></table>
</div>

<div class="d-section" id="rae-features">
  <h3>3. 功能详述</h3>
  <p><b>语法问答（Chat / Auto）</b> — 输入任何西语语法问题，用中文或西语都可以。每个回答都会引用 RAE/NGLE 原文，明确标注规则来源，不是 AI 自由发挥。系统自动检测提问意图，也可手动选择模式。</p>
  <p><b>练习题生成（Drill）</b> — 动态生成填空、选择、改错、翻译四种题型，轮换覆盖不同技能维度。每道题附答案和逐项解析。</p>
  <p><b>作文批改（Correction）</b> — 逐句批改，每个错误标注类型（G语法/O拼写/L词汇/P标点/R语域），给出正确写法和规则解释，同类错误不重复展开。</p>
  <p><b>口语表达升级（Oral）</b> — 输入想表达的意思，给出正式[F]、中性[N]、口语[C]、俚语[S]四个语域版本，附带搭配网络和升级路径。</p>
  <p><b>学习规划（Coach）</b> — 告诉它你的可用时间和薄弱环节，生成具体练习计划。</p>
  <p><b>文化语境（Culture）</b> — 以文化为锚点引出语言现象，解释地域差异和使用场合。</p>
  <p><b>上传学习资料</b> — 支持课堂笔记（Word/Markdown/TXT）或课本扫描图/板书截图（PNG/JPG），自动提取文字、分析语法点、基于材料出题。</p>
  <p><b>浏览 NGLE 官方语法书</b> — 48 章完整内容，中西双语标题，侧边栏目录导航，逐章阅读。</p>
</div>

<div class="d-section" id="rae-principles">
  <h3>4. 设计原则</h3>
  <ul>
    <li><b>权威优先</b> — 每次回答都引用 RAE/NGLE/ASALE 原文。AI 的角色是"翻译官"——把学术语法书的内容用你能理解的方式讲出来，而不是自己编规则</li>
    <li><b>中文友好</b> — 用中西语法对比的方式解释概念（比如西语虚拟式 vs 中文"如果/可能/希望"的逻辑）</li>
    <li><b>不只是"对不对"，而是"为什么"</b> — 批改作文不只告诉你错了，还告诉你规则是什么、下次怎么避免</li>
    <li><b>开箱即用</b> — Web 应用，浏览器打开就能用，不需要安装配置</li>
    <li><b>没有广告，没有订阅</b> — 个人项目，不是商业产品</li>
    <li><b>不做什么</b>：不教发音、不做听力练习、不涉及 C1-C2 学术写作、不是背单词工具</li>
  </ul>
</div>

<div class="d-section" id="rae-how">
  <h3>5. 技术原理</h3>
  <p>它是一个"中间人"，架在学习者和 AI 大模型之间。当你提问时做三件事：</p>
  <p>1. <b>查资料</b> — 提取你问题中的语法关键词，去 RAE 知识库里找到对应的官方语法章节</p>
  <p>2. <b>打包上下文</b> — 把 RAE 原文 + 你的问题 + 当前模式的指令一起发给 AI</p>
  <p>3. <b>返回结果</b> — AI 在 RAE 原文的约束下生成回答，所以不是自由发挥，而是基于权威来源</p>
  <p style="font-size:13px;color:var(--muted)">知识库覆盖词法（名词、动词、代词等）和句法（时态、语式、构式等）核心话题，约 80 个关键词索引，持续扩充。底层使用 DeepSeek 大模型，支持 Anthropic Claude 作为备选。</p>
</div>

<div class="d-section" id="rae-faq">
  <h3>6. 常见问题</h3>
  <p><b>Q: 回答真的可靠吗？</b> A: 核心机制是 RAG——每个回答都以 RAE 知识库原文为"锚点"。但 AI 仍可能犯错，遇到可疑的地方建议对照 RAE 原文或咨询老师。</p>
  <p><b>Q: 和直接问 DeepSeek/ChatGPT 有什么区别？</b> A: 这个产品在提问前自动检索 RAE 原文并注入上下文，相当于给 AI 配了一本随时可查的权威参考书。直接问通用 AI 则没有这个约束。</p>
  <p><b>Q: 适合什么水平？</b> A: B1-B2。A 级可能更需要基础词汇和句型练习；C 级涉及更复杂的语用和文体问题，可部分覆盖。</p>
  <p><b>Q: 数据怎么存储？</b> A: 查询历史存在浏览器 localStorage 里，不上传服务器。API 调用只发送当前问题内容。</p>
  <p><b>Q: 为什么界面长这样？</b> A: 刻意不做蓝白/灰白配色的"AI 产品标准脸"。Saenredam 教堂画背景 + 酒红/橄榄绿暖色系 + 衬线字体，想要的是"学术图书馆"的安静感。</p>
</div>

<div class="d-section" id="rae-progress">
  <h3>7. 开发进度</h3>
  <p><b>已完成</b>：语法问答 RAE 知识库检索增强 · 5 种学习模式 · 模式自动检测 · 流式输出 · NGLE 48 章浏览 · 文件上传（含 OCR）· 查询历史 · 键盘快捷键</p>
  <p><b>计划中</b>：练习历史追踪（错过的语法点优先出题）· 语法掌握度评估雷达图 · 知识库关键词自动提取 · 学习打卡与进度可视化 · 移动端 PWA · 语音输入</p>
</div>`,
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