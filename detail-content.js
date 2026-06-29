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
<p class="d-sub">macOS 原生常驻应用 · Vibe Coding 驱动开发 · V0.1 → V1.6.0</p>
<div class="d-meta"><span>SwiftUI</span><span>AppKit</span><span>Swift Package</span><span>macOS</span><span>Vibe Coding</span></div>
<img class="d-img" src="desknoteboard.png" alt="DeskNoteBoard">
<div class="d-toc"><div class="toc-title">Índice / 目录</div>
<a href="#" onclick="document.getElementById('db-s1').scrollIntoView()">产品定位与设计理念</a>
<a href="#" onclick="document.getElementById('db-s2').scrollIntoView()">当前能力总览</a>
<a href="#" onclick="document.getElementById('db-s3').scrollIntoView()">完整版本迭代记录</a>
<a href="#" onclick="document.getElementById('db-s4').scrollIntoView()">关键产品判断</a>
<a href="#" onclick="document.getElementById('db-s5').scrollIntoView()">下一阶段迭代方向</a></div>
<div class="d-section" id="db-s1">
  <h3>产品定位与设计理念</h3>
  <p>一个常驻 macOS 桌面左上角的任务管理系统：以高专注 / 探索性 / 杂务 / SOP / 非结构化休息 / 突发响应为核心结构，兼顾任务管理、每日习惯打卡、完成回顾和轻量复盘。</p>
  <p>产品不是传统 To-do App，而是桌面上的个人任务管理系统。核心六区结构稳定：「任务」与「习惯」两种对象的生命周期彻底分开。原生 macOS 常驻桌面方案被证明是有效方向。</p>
</div>
<div class="d-section" id="db-s2">
  <h3>当前版本能力总览（V1.6.0）</h3>
  <ul>
    <li>常驻 macOS 桌面左上角</li>
    <li>高专注 / 探索性 / 杂务 / SOP / 非结构化休息 / 突发响应六块主区域常驻可见</li>
    <li>高专注作为主卡呈现，周边5块为中卡</li>
    <li>SOP 支持每日打卡和连续天数</li>
    <li>任务支持新增、编辑、拖拽、完成归档</li>
    <li>任务支持 P0 / P1 / P2 优先级</li>
    <li>任务支持自定义时间标签</li>
    <li>双击任务可展开详情浮层</li>
    <li>支持查看全部已完成任务</li>
    <li>支持查看「今日已做」并导出 Markdown</li>
    <li>本地持久化保存</li>
  </ul>
</div>
<div class="d-section" id="db-s3">
  <h3>完整版本迭代记录</h3>
  <p><b>版本规则</b>：MAJOR.MINOR.PATCH — 左边看「产品骨架有没有变」，中间看「有没有多出一个正式能力」，右边看「有没有把已有能力修得更稳、更顺、更好看」。0.y.z 为探索期版本。</p>
  <p><b>V0.1.x 原型期：先把东西挂上桌面</b></p>
  <ul><li>V0.1.0 原型立项：明确产品形态为原生 macOS 常驻应用，技术路线 Swift Package + SwiftUI + AppKit</li><li>V0.1.1 本地持久化与基础窗口能力</li></ul>
  <p><b>V0.2.x 结构期：从待办清单变成认知结构</b></p>
  <ul><li>V0.2.0 固定板块信息架构：按认知模型确定高专注/探索性/杂务/非结构化休息/突发响应五大核心板块</li><li>V0.2.1 SOP 独立成每日习惯区：明确区分任务类和习惯类两种数据生命周期，让产品从「记录工具」升级成「认知结构映射工具」</li></ul>
  <p><b>V0.3.x 能用期：基础任务流跑通</b></p>
  <ul><li>V0.3.0 基础任务流完成：新增、编辑、完成、归档、恢复；SOP 每日打卡和连续天数计算</li><li>V0.3.1 输入与点击稳定性修复</li></ul>
  <p><b>V0.4.x 风格期：从窗口感改为桌面感</b></p>
  <ul><li>V0.4.0 桌面感第一轮：去掉强存在感大底板，主承载层趋近透明；板块改为半透明卡片</li><li>V0.4.1 视觉系统细修：多轮调整色彩方向，缩小字号提高同屏密度，去掉系统滚动条白色轨道</li><li>V0.4.2 层级策略修补：视觉上像桌面挂件，技术上保留稳定交互</li></ul>
  <p><b>V0.5.x 交互期：拖拽与详情承载</b></p>
  <ul><li>V0.5.0 拖拽系统上线：整条任务拖拽，跨板块移动，落点高亮反馈</li><li>V0.5.1 拖拽误拖窗口修复</li><li>V0.5.2 双击详情浮层：承载额外信息，避免主页面信息过载</li></ul>
  <p><b>V1.0.0 稳定起点</b>：产品对外心智模型稳定——不是传统 To-do，而是桌面上的个人任务管理系统。核心六区结构稳定，任务与习惯生命周期彻底分开。</p>
  <p><b>V1.1.x 注意力管理：优先级系统</b></p>
  <ul><li>V1.1.0 优先级字段上线：P0/P1/P2，只在双击详情中编辑</li><li>V1.1.1 高优先级前置排序：产品从「记录任务」走向「管理注意力」</li></ul>
  <p><b>V1.2.x 空间重构：1大5中布局</b></p>
  <ul><li>V1.2.0 主卡布局成型：高专注放大为主卡，其余5块围绕排布</li><li>V1.2.1 周边五卡同屏可用</li><li>V1.2.2 窗口空间与定位修补：固定在桌面左上角</li></ul>
  <p><b>V1.3.x 迁移期：Do it! 一次性导入</b></p>
  <ul><li>V1.3.0 Do it! 本地迁移能力：只导入未完成任务，按 sourceTaskID 去重，按象限和关键词映射到当前板块</li><li>V1.3.1 迁移入口回收</li></ul>
  <p><b>V1.4.x 回顾期：完成记录与当日导出</b></p>
  <ul><li>V1.4.0 全量已完成入口</li><li>V1.4.1 今日已做页面</li><li>V1.4.2 Markdown 导出</li></ul>
  <p><b>V1.5.x 时间标签第一步：本周需完成</b></p>
  <ul><li>V1.5.0 本周需完成：任务详情浮层新增标记开关，主页面亮色本周标签</li></ul>
  <p><b>V1.6.0 时间维度升级：自定义时间标签</b>：将固定布尔字段本周升级为用户可自定义的时间标签。系统开始从「平面任务堆叠」走向「带时间语义的任务规划」。时间维度正式成为后续产品演进的一条主线。</p>
</div>
<div class="d-section" id="db-s4">
  <h3>关键产品判断</h3>
  <ul>
    <li>没有把任务和习惯混成一种对象，而是按生命周期拆开</li>
    <li>没有为了「真桌面层」牺牲交互，而是选择「像桌面 + 可稳定操作」的折中方案</li>
    <li>没有让细节信息挤占主页面，而是把扩展信息放进双击浮层</li>
    <li>没有把迁移功能当成长期核心入口，而是迁移后回收</li>
    <li>没有让优先级和时间标签占满注意力，而是做成轻提示</li>
  </ul>
</div>
<div class="d-section" id="db-s5">
  <h3>下一阶段可继续迭代的方向</h3>
  <ul>
    <li>开机自启和后台常驻设置</li>
    <li>板块排序或可折叠能力</li>
    <li>时间标签的单独筛选与聚合视图</li>
    <li>周回顾 / 月回顾导出</li>
    <li>和外部工具的正式同步，而不只是一次性迁移</li>
    <li>正式打包、签名与分发</li>
  </ul>
</div>
<p style="font-size:13px;color:var(--muted);margin-top:16px">下载链接：待打包分发后更新</p>`,

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