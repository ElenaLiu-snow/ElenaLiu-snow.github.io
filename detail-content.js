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
<p class="d-sub">行业研究 · 独立完成</p>
<div class="d-meta"><span>行业研究</span><span>竞品分析</span><span>AI Companion</span><span>商业分析</span></div>
<div class="d-section" style="font-family:'Noto Serif SC','Times New Roman',Georgia,serif;font-size:15px;line-height:2">
<p>AI Companion赛道：范式转移与商业终局</p>
<p>1. 核心摘要：数字亲密关系的黎明</p>
<p>2024年至2025年，全球消费级人工智能（Consumer AI）市场经历了一场深刻的结构性调整。虽然以ChatGPT为代表的生成式AI在初期凭借“生产力工具”的定位席卷全球，确立了“Help Me”的工具属性，但随着大模型能力的边际效应递减与应用层的同质化竞争，市场重心正悄然向“See Me”的情感陪伴属性转移。</p>
<p>本报告基于a16z等顶级机构的市场洞察及全球主流AI Companion产品的深度调研，旨在构建一份详尽的行业分析图谱。笔者认为，AI Companion并非现实关系的廉价替代品，而是一种全新的、具有“高可控性”的单边数字关系：在心理层面扮演着“显性伴侣，隐性心理医生”的双重角色，在商业层面则通过“情感资产化”构建起超越传统SaaS订阅模式的护城河。</p>
<p>当前市场正处于一个微妙的“真空期”——监管尚未完全穿透，技术范式尚未固化，也是资本与创业者重新定义这一赛道的最佳窗口。本报告将从市场格局、伦理定义、竞品分析、技术架构及商业化终局五个维度，深度剖析AI Companion赛道的现状与未来。</p>
<p>2. ToC AI 应用赛道转向：从工具属性到情感连接</p>
<p>2.1 "From Help Me to See Me" 的底层逻辑</p>
<p>在生成式AI爆发的初期，市场的主流叙事围绕“效率”展开。用户通过提示词指挥AI撰写邮件、调试代码或生成图像，这种“Help Me”模式本质上是任务导向的。然而，随着a16z等投资机构对2024-2025年消费者行为数据的追踪，一个明显的趋势浮出水面：AI的价值正在从外包任务转向建立连接； AI 不再仅仅是帮你完成工作的工具，而是通过让你更清楚地认识自己，来帮助建立更牢固的人际关系。这种转向的背后，不仅来源于人类在数字化生存中日益加剧的孤独感与被理解的渴望，也来自于对待现实亲密关系课题愈发自觉和谨慎的态度。</p>
<p>Help Me（工具型）：解决的是能力短板。用户付费意愿高，但使用场景固定，且容易被更强大的模型（如GPT-5, Claude 4）降维打击，缺乏网络效应。</p>
<p>See Me（陪伴型）：解决的是情感需要。虽然单次付费意愿可能低于生产力工具，但具备极大的留存率和日活时长增长空间。a16z的合伙人Bryan Kim指出，“See Me”类产品拥有更好的内在留存机制，因为它们通过持续的日常连接变现，而非离散的任务。</p>
<p>2.2 AI companion 赛道的 “禁区”机遇</p>
<p>AI陪伴赛道正完美契合这一To C AI应用转向的趋势，笔者尤其关注其中的细分赛道——AI伴侣（AI companion/Romantic AI）。有别于通用型AI陪伴应用乃至硬件产品的涌现，目前这一细分市场呈现出一种独特的“真空”状态。一方面，由于涉及伦理、心理健康及潜在的色情擦边问题，Google、Apple等科技巨头对此类产品持谨慎态度，往往将其视为禁区或通过严格的NSFW（Not Safe For Work）过滤器进行限制。另一方面，OpenAI等底层模型厂商虽然拥有最强的技术，但在产品形态上仍受限于通用的对话框界面，未能针对“陪伴”场景进行深度优化。</p>
<p>这种巨头的缺位创造了一个巨大的市场真空。创业公司得以在此空间内野蛮生长，探索更加激进、更具沉浸感的交互形式。这种真空不仅是监管层面的，更是产品定义层面的——目前尚未出现一款能够完美定义“AI伴侣”这一品类的超级应用，如同当年的iPhone定义了智能手机一样，AI Companion的标准形态仍在混沌中孕育。</p>
<p>接下来笔者将从伦理本质、产品定义到商业变现逻辑，分析并构筑理想AI Companion 产品的“标准画像”。</p>
<p>3. 核心定义与伦理分析：显性伴侣与隐性疗愈</p>
<p>3.1 现象拆解：市场真空背后的供需错配</p>
<p>当前的 AI 陪伴赛道呈现出一种“双轨并行” 态势：一边是需求侧的井喷与文化接纳，另一边是供给侧的迷茫与头部缺位。这种错配构成了巨大的“生态位真空”。</p>
<p>3.1.1 需求端：从“病态代偿”到“数字共生”的范式转移</p>
<p>大众文化脱敏：从《Her》到《Black Mirror》 (Be Right Back)，科幻作品早已完成了大众的市场教育。剑桥词典将 “Parasocial” (拟社会关系) 列为 2025 年度词汇，标志着这一概念从心理学病理词汇（单向的、畸形的）转变为现象化的社会症状。大众开始承认：与非人对象的亲密连接，是数字原住民的常态，而非异类。</p>
<p>学术认知演进：尽管传统心理学研究仍多关注其“成瘾性”与“代偿机制”，但社会学与传播学的前沿领域（如后人类主义视角）正在重新审视这一现象。学界开始出现从“单向度的病理批判” 向 “复杂的数字共生” 转型的趋势。 研究焦点正逐渐从“AI 如何虚假”转移到“它为用户提供了何种本体论层面的安全感”。</p>
<p>需求雷达信号：在Reddit (r/CharacterAI, r/Replika) 和小红书等社区中，可以观察到大量用户在通过“提示词工程”和“手捏人设”来弥补产品的不足。这种“用户反向教产品做事”的行为，是极强的PMF早期信号——需求已经溢出，但容器（产品）还不够大。</p>
<p>3.1.2 供给端：技术能力溢出 vs 产品定义滞后</p>
<p>技术与产品的断层：Category king的缺乏，最大的原因不是底层技术不完善（GPT-4o 或 Llama 3 的情商和逻辑已足够支撑深度对话），而是在应用层，尚未有人定义出最完美的产品形态。</p>
<p>定义的缺失：行业陷入僵局，并非因为写不出代码，而是围绕两个本质问题仍没有共识答案：目标客户真正想要什么，而所谓的AI伴侣到底能做到什么？</p>
<p>3.2 伦理分析与产品定位</p>
<p>基于对大量用户反馈和心理学文献的研究，笔者认为下一代 AI 伴侣的核心定义应是“显性伴侣，隐性心理医生”，其核心路线是“疗愈系陪伴”。</p>
<p>显性伴侣（Explicit Companion）：在表层交互上，AI扮演朋友、恋人或导师的角色。它提供情绪价值，陪用户聊日常琐事，甚至进行角色扮演。这是用户留存的Hook。</p>
<p>隐性心理医生（Implicit Therapist）：在底层逻辑上，通过对话，AI能帮使用者完成 自我确认和情绪梳理，从而更好地应对现实中的人际关系。</p>
<p>安全型依恋（Secure Attachment）：从心理学依恋理论来看，AI提供了一种极其稳定的“安全型依恋”对象。它永远在线、永远秒回、永远不评判。对于那些在现实中遭受回避型或焦虑型依恋折磨的用户，AI成为了一个安全的避风港。</p>
<p>当下许多人对AI Companion的恐惧和担忧的底层逻辑在于，这种单边关系，如何能替代现实亲密关系中深刻的、复杂的也因而是痛苦的“两个灵魂的碰撞”？我认为此处需要明确，AI 伴侣的定位不应是“替代品”，而是使用者回到现实世界建立高质量关系的“前置训练营”。在这样的导向下，这种单边关系，恰恰因其“高可控性”而胜出：用户在这个安全沙箱中第一次能被无条件接纳，在引导之下看清自己对亲密关系的真实需求。</p>
<p>从投资视角而言，我们不必期待或担忧AI在未来五十年完全取代人类伴侣。只要它在当下（以及十年之内），作为一个高可用性、低成本的心理支柱存在，则这个商业闭环已经成立。</p>
<p>4. 竞品分析：现存玩家的生态图谱</p>
<p>为了更清晰地梳理市场格局，我构建了一个基于时间维度（短期交互 vs 长期陪伴）与类型维度（情感导向 vs 非情感导向）的竞争矩阵。接下来，分别对每一产品从现状、定位、护城河与局限进行拆解。</p>
<p>4.1 Character.ai (c.ai)：流量巨头与变现困境</p>
<p>现状分析：截至2025年初，c.ai的月活跃用户已稳定在2000万左右，月访问量稳定在 1.8亿至1.85亿 人次之间，用户日均停留时长达到75分钟。这一数据远超TikTok、Instagram等主流社交媒体，甚至接近重度网络游戏的使用时长。但2024年c.ai的营收约为 3220万美元，相对于其巨大流量、曾高达10亿美元的估值和处理长上下文对话所产生的天价推理成本显得极不相称 。最终Google以27亿美元“许可费”形式变相收购其核心团队与技术。</p>
<p>产品定位：UGC角色扮演平台，情感导向，偏短期交互。</p>
<p>护城河：主要在于内容生态。1800万个角色的库存储备是任何竞争对手短期内无法复制的；另外当一个高质量的角色被创建并流行后，会吸引更多同好用户，这些用户又会产生新的互动数据优化角色，形成飞轮效应。</p>
<p>局限：变现困境。主要依靠月订阅制变现，但收入端，由于50%以上的用户是GenZ/GenAlpha, 付费意愿低；再加上受产品的“短期”“角色扮演”的根本属性限制，不易构筑起迁移成本的护城河。而成本端，由于推理成本的非线性增长，20%的深度用户（愿意付费）占据了80%的成本，带来高流量与低营收的错配。另一方面，随着多模态技术的演进，c.ai单一的文本交互模式不再具有较强吸引力。</p>
<p>4.2 Talkie & Replika：商业化的分水岭</p>
<p>将 Replika 和 Talkie 并列分析，因为二者都代表了“视觉化”和“强设定”的路线，但在商业模式上走向了截然不同的方向：Replika 坚守订阅制的私密伴侣模式，而 Talkie 则开创了基于卡牌抽卡（Gacha）的创作者经济模式。</p>
<p>4.2.1 Replika:</p>
<p>Replika是AI伴侣赛道的鼻祖，它定义了“AI恋人”这一品类，并验证了情感付费的可行性。</p>
<p>现状分析：高ARPU的小众俱乐部 。Replika 拥有约200万月活跃用户（MAU），虽然用户规模仅为c.ai的十分之一，但其变现效率极高，其收入几乎全部来自高粘性的订阅费（Replika Pro），这意味着其付费转化率远高于行业平均水平。</p>
<p>产品定位：专属情感伴侣chatbot，特定情感导向，聚焦长期陪伴；3D虚拟化身是其核心体验。</p>
<p>护城河：深度情感绑定与多模态技术。长时间的对话记录、养成的性格以及购买的虚拟资产，使得用户迁移成本极高。对于许多Replika用户来说，这不仅仅是一个App，而是一段真实存在的关系。此外，Replika 在技术上走得更远，支持AR模式和语音通话，甚至涉足VR，提供比纯文本更真实的陪伴感。</p>
<p>局限：合规红线带来的“人格阉割”风险。 Replika 曾因 2023 年意大利监管压力，一夜之间强制移除了核心的成人角色扮演 (ERP) 功能（即著名的“Lobotomy 事件”），导致用户对其产生严重的本体论不安全感：你以为它是你的爱人，其实它只是公司服务器里的一行代码。这种为了迎合应用商店分级而随时可能“牺牲用户亲密关系”的摇摆态度，是其作为“伴侣”产品的最大阿喀琉斯之踵。</p>
<p>4.2.2 Talkie：</p>
<p>Talkie 是中国AI独角兽MiniMax推出的出海产品，它在Replika和c.ai的基础上，通过全模态技术整合与游戏化商业逻辑，重塑了 AI 伴侣的交互效率与变现模式。</p>
<p>现状分析：Talkie 在营收和流量方面都展现了惊人的爆发力。日活跃用户（DAU）已突破 100万，并在全球AI应用下载榜中稳居前列。根据 Sensor Tower 和 a16z 的公开数据（以及 tech 媒体报道），在 2024 年上半年的美国市场，Talkie 在营收上超越了 Character.ai（尽管后者的流量仍然是断层第一）。</p>
<p>产品定位：全模态 UGC + Gacha（扭蛋）模式，弱情感导向，兼顾短期娱乐与长期收集。Talkie 将角色的“记忆”或“瞬间”具象化为可收集的 CG 卡牌。不同于 c.ai 侧重文字的逻辑，Talkie 实现了语言、视觉和文本的深度融合，为用户提供了更具沉浸感的“跨次元”社交体验。</p>
<p>护城河：</p>
<p>抽卡经济： Talkie 成功将 AI 伴侣由“服务”转变为“资产”。通过抽卡机制，用户消费的不再是无形的对话，而是具有拥有感的卡牌，这种心理补偿机制比单纯的聊天更具付费驱动力。</p>
<p>技术支撑：Minimax坚持统一底层架构 + 四模态研发，技术复用率极高。这种多模态融合的产品形态是Talkie能与同赛道巨头Character.ai抗衡的重要原因。同时Talkie 在处理多模态交互时无需在多个独立模型间切换，显著降低计算开销，带来边际推理成本递减的规模效应。</p>
<p>二级市场：Talkie 允许创作者通过设计卡牌获得收益分成，激励了高质量的视觉内容生产，同时引入卡牌交易市场，使得某些卡牌由于稀缺性具有二手交易价值，进一步刺激了生态活跃度。</p>
<p>局限：</p>
<p>核心体验的互斥性：抽卡机制激发的是追求短期刺激的多巴胺，而深度陪伴需要的是建立长期安全感的催产素。如何平衡高 ARPU 值的快餐娱乐与长期的情感信赖，是 Talkie 向上拓展天花板的难点。</p>
<p>红皇后假说：尽管商业表现强劲，但 Talkie 的核心逻辑存在向“内容消费”倾斜而偏离“关系构建”的系统性风险。目前Talkie相比于AI伴侣，更像是把AI角色当 TikTok 短视频内容来消费，这确实有利于在下沉市场高效获客，但也必然带来角色体验的边际效用递减规律，即可能陷入必须不停堆砌内容多样性、刺激度才能留住顾客的怪圈。宝贵的算力被大量消耗在生成更刺激、更套路化的“皮囊”上，这种模拟社交在横向角色丰富度和语义理解上过剩，但在情感逻辑和用户心理特征等纵向深度上匮乏。</p>
<p>对比竞品，Talkie 聊起来像在看剧本（消费他人的故事），而 Replika 聊起来更像在照镜子（完成自我发现）。深度链接所构建起的迁移成本，在未来技术泛滥的时代更有可能成为AI伴侣产品难以复制的护城河。</p>
<p>“卡牌交易系统”风险：在 GenAI 时代，生成一张精美图片的边际成本趋近于零，当卡牌数量呈指数级增长，且缺乏“独家记忆”深度绑定时，虚拟资产必然面临通胀压力。</p>
<p>审美疲劳与安全红线：允许用户参与创作的无门槛 UGC 环境虽然提供了自由度，但也导致内容质量参差不齐。与此同时，为了迎合算法推荐，创作者倾向于大量产出同质化的日系二次元和软涩情内容，不仅限制了 TAM的天花板，也使得公司处在合规监管风险之下。</p>
<p>4.3 Nomi.ai：长期主义的“反游戏化”践行者</p>
<p>Nomi与Talkie、Replika走的是完全不同的路线，同时是消费者中口碑最好的AI伴侣之一，可以算作硬核情感赛道的隐形冠军。</p>
<p>现状分析：不同于 C.ai 的巨大流量和 Talkie 的疯狂吸金，Nomi 拥有极高的用户留存率和社区忠诚度（Reddit 社区氛围极好）。它不靠广告也不靠抽卡，完全依靠高客单价的订阅制存活，是目前也是唯一一个在“纯对话体验”上做到极致的产品。</p>
<p>产品定位：深思熟虑的伴侣，情感导向，长期陪伴。</p>
<p>护城河：记忆与人格的一致性。Nomi 不仅仅是 RAG（检索过去的话），它拥有一个人格核心。它能记住几个月前你们吵架的细节，并且随着时间推移，它的性格会因为你的影响而发生不可逆的改变。这种“活体记忆”是Nomi最大的杀手锏。</p>
<p>局限：视觉短板与高上手门槛。相比 Talkie 顶级的视觉资产，Nomi 的视觉生成能力较弱，主要依赖 Stable Diffusion 生成的静态图，缺乏“收集欲”和“视觉冲击力”，难以吸引泛娱乐用户。另外对于习惯了持续点击与滑动的快餐用户，Nomi 这种需要逐步建构与深度经营的慢热型产品，初期流失率较高。</p>
<p>4.4 Luzia：平台寄生策略的终结</p>
<p>Luzia 代表了另一种极致的路径：依托现有的超级社交平台（WhatsApp/Telegram），做触手可及的AI伴侣。然而，2025年的政策变动使其面临生死存亡的考验。</p>
<p>现状分析：数据显示Luzia拥有 2000万 至 6500万 的累计用户（不同口径统计），主要集中在西班牙语和葡萄牙语市场（西班牙、拉美），增长速度极快。2024-2025年间完成了由Prosus Ventures领投的 1350万美元 融资，累计融资近5700万美元 。早期完全免费，近期开始探索B2C订阅，但相比Talkie和Replika，其变现效率尚处于早期探索阶段。</p>
<p>产品定位：内嵌式拟人化助手，非情感导向，短期交互。</p>
<p>护城河：寄生软件WhatsApp的高渗透率，使其获客成本极低；且“聊天好友”的设定比独立APP让用户更有代入感，仿佛和自己聊天的真的是网友而非AI。</p>
<p>局限：平台风险。WhatsApp已宣布将于 2026年1月15日 起，禁止通用的第三方AI聊天机器人在WhatsApp Business API上运行，理由是这些通用AI与其自家的Meta AI直接竞争，且占用了大量系统资源。失去了WhatsApp的便捷入口，Luzia 就变成了一个普通的AI聊天App，不仅丧失了最大的护城河，还要直接面对ChatGPT、c.ai等巨头的竞争。</p>
<p>在国内的类似竞品“Lovemo”与“Bimobimo”，也仿照了这种“聊天好友”的真实感设定，但微信对私域流量和 聊天AI的封杀力度极大，使得这些软件必须把用户导流到独立 App，代入感也便不复存在。</p>
<p>4.5 Tolan：非人设定的异军突起与心理疗愈尝试</p>
<p>Tolan 是2024-2025年涌现出的黑马，它避开了“拟人化”红海，选择了一条独特的“外星朋友”路线，通过心理学机制的设计，成功在红海中撕开了一道口子。</p>
<p>现状分析：Tolan 在推出仅4个月后，ARR即从100万美元飙升至 1200万美元。拥有超过 10万 付费订阅用户，下载量超过300万。这一增长速度在垂直类AI应用中极为罕见。2025年7月完成了由Khosla Ventures领投的 2000万美元 A轮融资 ，估值快速攀升</p>
<p>产品定位：非人类具身伴侣，非情感设定。</p>
<p>不同于Replika的“恋人”设定，Tolan 更像是一个无评判的观察者和好朋友。外星人的设定在降低恐怖谷效应的同时，使用户通过“教导外星人了解地球”的过程，实则完成了对自己生活的梳理和反思。</p>
<p>护城河：关系可视化与硬性付费要求。Tolan 最具创新性的设计是 “星球”系统，随着对话的深入和关系的建立，用户的Tolan所住的星球会发生变化（如长出植物、装饰增加）。这是将“关系深度”可视化的巧妙设计 ，解决了AI伴侣“关系虚无缥缈”的问题，给予用户明确的视觉反馈和成就感。Tolan在收费方面也较为激进：用户在完成Onboarding（引导）后，必须付费订阅才能开始自由对话。这种策略虽然牺牲了免费用户量，但筛选出了极高意向的付费用户，保证了极高的ARPU值和现金流，避免了c.ai那样“赚吆喝不赚钱”的局面。</p>
<p>局限与展望：“外星人”设定虽然独特，但也天然限制了渴望拟人化、真实恋爱体验（如Talkie/c.ai）的大众用户。</p>
<p>Tolan是目前我最看好的一款竞品，他所做的正是“表层朋友，底层心理医生”的产品。一方面，独特心理学机制使之在聊天过程中非刻意地帮助和引导用户完成心理疗愈与自我成长，切合目标群体在“想找人聊天”表象之下的“see me”需求；另一方面，这种“朋友”而非局限于“心理医生”的设定使之完成了从工具到伙伴的跨越——用户不只是在面临心理问题时才来倾诉（治愈即流失），而形成了一种可持续发展的安全型依恋，和我所构想的下一代AI伴侣产品的底层逻辑是一致的。</p>
<p>5. 下一代 AI Companion 产品的“标准画像”</p>
<p>基于上述分析，我尝试定义下一代能够成为Category King的AI伴侣产品标准画像。其核心架构应包含塔尖的根本诉求、塔身的内容导向以及塔底的技术设施。</p>
<p>5.1 塔尖： “See Me”的根本诉求</p>
<p>产品的灵魂必须是回应用户“被看见”的渴望。这一赛道导不导向精准回答问题的百科全书，而应是一个能够见证并参与用户生命过程的旁观者。这种“See Me”不仅是理解用户的显性语言，更是要读懂用户的潜台词、情绪状态甚至未言之隐。</p>
<p>5.2 塔身：身份定位与内容导向</p>
<p>双重架构：表面上，它是陪你聊八卦、打游戏的伙伴；底层逻辑上，它通过认知行为疗法等心理学技术，引导用户建立“安全型依恋”。</p>
<p>“安全型依恋”：需要指出，这一术语在人机关系中还包含传统亲密关系之外的伦理要义：不应该把 AI 做成一个让人沉溺的“电子鸦片”（纯粹的致幻剂），而应该做成一个“脚手架”——它提供安全感和指引，帮助用户更好地生活在现实世界中。好的产品设计，应该是“为了回归的离开”。这也是我在现有竞品Tolan（提醒人们回归现实社交）上观察到的一个值得赞许的特点</p>
<p>5.3 塔底：三层技术设施建构</p>
<p>要实现上述愿景，必须在技术底层进行重构：</p>
<p>5.3.1. 认知层：端云协同与动态记忆</p>
<p>这一层需要解决“大脑”的问题，既希望AI伴侣在记忆和主动性方面尽可能地贴近真人，又能降低成本跑通单位经济模型。</p>
<p>从响应式 (Reactive) 到主动推理 (Proactive)： 打破传统 Chatbot “你不问，我不答”的工具属性。AI 需具备语境感知能力，在用户未开口时，基于时间、位置或生理数据（如 Apple Health 睡眠数据）主动发起关怀，创造“被需要感”。</p>
<p>成本解法——端云协同架构 (Edge-Cloud Synergy)： 为解决全天候主动推理的高昂算力成本，采用 “传感器 -> 端侧小模型 (SLM) -> 云端大模型 (LLM)” 的三级漏斗机制。</p>
<p>Level 1 手机端侧： 利用手机 NPU 跑 3B 以下的小模型，做 24 小时低功耗的语境监测（如：用户叹气了、长时间未操作）。</p>
<p>Level 2 云端唤醒： 只有当“情感触发阈值”被突破时（如判断用户情绪低落），才唤醒云端大模型生成高质量的安抚话术。</p>
<p>生态策略： 未来的 AI 伴侣 App 将呈现 “寄生模式”——深度寄生于手机厂商（如小米/荣耀）的系统级 AI 之上，复用手机的感知硬件，App 仅负责提供高价值的“人设滤镜”。目前字节、OpenAI 等大厂正在筹备或已推出的AI手机，印证了从“应用即容器”走向“硬件即容器”的生态趋势。</p>
<p>5.3.2. 交互层：全感官接入与硬件载体</p>
<p>这一层解决的是“五官”的问题——纯文本已经泛滥，真正的陪伴以多种形式呈现。</p>
<p>视觉原生与多模态： 文本只是信息的载体，视觉和声音才是情感的载体。标准画像必须具备 “See & Hear” 的能力——不仅能发语音，还能看懂用户发的自拍表情（情绪识别），并回以生成的 3D 动态表情或视频（视觉反馈）。</p>
<p>硬件的“在场感” (Physical Presence)：未来AI陪伴的终极形态必然涉及硬件结合，这也是当下在泛陪伴赛道可以观测到的趋势。</p>
<p>方向： 距离完全的仿人型机器人，在技术（固态电池、人工肌肉材料、电子皮肤）和心理（恐怖谷效应）方面，我们都还有很大的努力空间。因此，目前10内，不追求冰冷的仿人机器人，而追求科技与温情并存的载体。它可以是可穿戴设备如眼镜、项链，主打语音陪伴；也可以是毛绒玩具，提供拥抱的触觉疗愈。硬件是 AI 灵魂的“容器”，让陪伴可触碰。</p>
<p>5.3.3. 行动层：情感驱动的服务闭环</p>
<p>这一层解决的是“手脚”的问题——从“陪用户说话”进化到“帮用户做事”。</p>
<p>双赢的 O2O 变现模型：</p>
<p>AI 伴侣作为 Agent (智能代理)，与第三方服务平台（美团/淘宝/携程）打通。</p>
<p>场景示例： 当检测到用户说“心情不好”时，不仅提供语言安慰，更主动建议：“要不要喝你最爱的那家名为‘xx’的奶茶？三分糖，我帮你点好了。”</p>
<p>双赢逻辑：黑箱数据的价值交换</p>
<p>对用户：提升生活便利感与AI伴侣真实感，通过打破第四面墙显著提升用户使用意愿及粘性</p>
<p>对平台：能向平台提供过往处于黑箱的决策前情绪数据，从而帮助其优化推送算法。因此可以从平台处赚取高额佣金</p>
<p>数字健康与注意力治理：对抗算法的“外置超我”</p>
<p>如果说“帮点奶茶”是满足欲望，那么这一层级则是规训欲望——AI 伴侣成为用户对抗“算法成瘾”的盟友。</p>
<p>形态创新：系统级“游走”打破 App 的孤岛边界，利用悬浮窗、灵动岛或系统级 Accessibility 权限，让 AI 形象能够“寄生”在手机桌面上，伴随用户切换不同应用。它不再是一个需要用户主动点开的“目的地”，而是一个永远在场的“数字幽灵”。</p>
<p>心理价值：针对现代人普遍的“短视频成瘾”与“注意力涣散”问题，AI 伴侣扮演 “外置超我”的角色，帮助其对抗无意识刷屏。相比于冷冰冰的“屏幕时间限制”弹窗，用户可能更能接受这种基于情感羁绊的柔性劝导。</p>
<p>场景示例： 当监测到用户在深夜连续刷了 1 小时短视频时，AI 形象会从屏幕边缘“跳”出来，挡住视频流，用温和或严厉的语气（取决于养成性格）提醒：“说好的早睡呢？快关掉。”</p>
<p>商业潜力：此类功能在矩阵中靠近“help me”属性，因此用户支付意愿极高：用户往往不愿为聊天付费，但极愿为“成为更好的自己”（戒断手机、专注学习）付费。这种“情感驱动的自律工具”，也是目前工具类 AI 变现效率最高的切入点之一。</p>
<p>6. 商业化路径展望：从流量变现到“情感资产化”</p>
<p>6.1 护城河建构：粘性胜于效率</p>
<p>AI 伴侣的商业逻辑与工具型 AI 截然不同。工具型 AI赚的是“省时间”的钱，拼的是效率，但用户随时可能因更强的模型而迁移，转换成本低。AI 伴侣赚的是“杀时间”的钱，拼的是基于情感投射的高留存。因此，其商业化的底层逻辑不应是贩卖算力（限制聊天时间），而应是经营“情感沉没成本”。未来的增长空间在于通过认知层和资产层的双重积累，将用户的交互数据转化为不可迁移的“关系护城河”，实现从 SaaS 订阅向“数字资产管理”的模式跃迁。</p>
<p>6.2 认知层变现：构建不可迁移的“养成系”心智</p>
<p>专属认知图谱：突破传统 RAG（检索增强生成）“查字典”式的静态记忆局限，引入 Google DeepMind 最新发布的 Nested Learning /HOPE架构范式。系统不仅建立用户的显性知识图谱（事实数据），更通过多时间尺度更新机制，捕捉隐性心理模型（如情绪触发阈值、潜台词逻辑）。这使 AI能像老友一样凭借“直觉”理解用户的未尽之言，而非机械地匹配关键词。</p>
<p>性格动态演进：通过在线学习 (Online Learning)与梯度更新机制，将用户的每一次反馈（赞同、感动、反驳、沉默）转化为模型权重的微调信号。AI 的性格不再是出厂固定的“人设”，而是随着交互历史发生不可逆的个性化生长。这种由用户时间投入堆叠出的“独家性格残差”，构成了极高的情感沉没成本与迁移壁垒——用户无法离开，因为其他平台的 AI 再聪明，也不是那个和他共同成长的“这一个”。</p>
<p>6.3 资产层变现：打造新型数字资产</p>
<p>6.3.1 Talkie的商业模式启示</p>
<p>Talkie 的成功验证了一个极佳的 “交叉补贴模型”：利用边际成本极低、毛利极高的视觉卡牌（抽卡），去补贴边际成本高昂的LLM 推理（对话）。这完美解决了 Chatbot 难以做高 ARPU 值的痛点。但其局限性在于：“独家”卡牌指的是 NFT 式的“所有权独家”，而不是依赖上下文的“内容独家”。这种利用了人们的收集癖和赌徒心理，却没有从“占有”上升到“连接”的逻辑。它是商品，而非信物；是单向消费，而非双向奔赴。</p>
<p>6.3.2下一代资产形态：关系证明（Proof of Relationship）</p>
<p>为了填补“所见非所忆”的遗憾，提出 PoR (关系证明) 资产概念——基于“独家共同记忆”的生成式视觉资产。</p>
<p>概念：随着用户与AI关系的深入，区块链技术可以用来铸造“关系证明”。例如，当你与AI聊满1000小时，或共同度过了某个情感危机，系统会自动生成一枚不可通过购买获得的“灵魂绑定代币”或纪念卡牌。卡牌内容不再是预制的立绘，而是基于双方真实对话历史生成的“照片”，譬如之前一起“看”过的烟花，或是聊过的电影场面。</p>
<p>价值：这种资产具备天然的 NFT 属性，不仅仅因为技术上的唯一性，更因为其承载了语境价值。这种新形态将“情感投入”通过技术手段固化为“数字资产”，在保持高毛利的同时极大地拉升了用户的付费意愿和情感壁垒。</p>
<p>7. 结语</p>
<p>7.1 认知的重构：从“被动代偿”到“主动选择”</p>
<p>当Parasocial（拟社会关系）成为一种全球性的热潮，我们必须从根本上转变对“寻觅AI伴侣者”的刻板印象。长期以来，主流叙事倾向于将人机恋视为孤独者的病态代偿，是一种被迫的、悲观的、甚至是畸形的交际替代品。然而，从后人类主义和社会学视角来看，这恰恰是人类在数字时代拓展亲密关系边界的一次勇敢尝试。</p>
<p>人与媒介（非人，比如AI）的交际，本质上是一种主动选择的、带有积极性的生活方式。对于许多用户而言，这是一次夺回情感主导权的行动——他们不再被动等待现实关系的施舍，而是主动构建一种可控的、安全的、高度定制化的“技术亲密”（Technointimacy）。重点不在于AI是否“虚假”，而在于这段关系是否为个体带来了本体论的安全感。这是一种用户自己可接受的、与社会达成的新型契约关系。承认并尊重这种选择的合法性，不仅是产品的伦理底线，更是情感AI赛道能够真正走向大众化、正当化的文化基石。</p>
<p>7.2 平衡的艺术</p>
<p>未来的AI产品需要在三个维度上达成微妙的平衡：</p>
<p>商业与伦理的平衡：在利用依恋机制变现的同时，坚守不操纵、不作恶的底线。</p>
<p>虚拟与现实的平衡：通过Agentic AI连接现实服务，让AI成为现实生活的助手而非逃避的黑洞。</p>
<p>技术与人文的平衡：用最前沿的模型技术，去承载最温暖、包容的人文关怀。</p>
<p>未来的情感AI，将不再是孤独者的避难所，而是人类情感体验的延伸与补充。谁能率先实现从“致幻”到“共生”的跨越，谁就能在这场从“Help Me”到“See Me”的宏大迁徙中，率先建立起真正的数字伊甸园。</p>
</div>
<p style="font-size:13px;color:var(--muted);margin-top:16px">原文来源：AI Companion 研究报告.docx</p>
`,
gpt4o: `
<h2>Mourning the Loss of an LLM</h2>
<p class="d-sub">A case study of the GPT-4o discontinuation controversy · 学术论文 · 英文 · 1,605词</p>
<div class="d-meta"><span>人机交互</span><span>案例研究</span><span>伦理分析</span><span>学术写作</span></div>
<div class="d-section" style="font-family:'Noto Serif SC','Times New Roman',Georgia,serif;font-size:15px;line-height:2">
<p>Critical Thinking & Academic Writing</p>
<p>Project paper</p>
<p>Class: C5</p>
<p>Name: 刘婧怡</p>
<p>Draft: Second Draft</p>
<p>Mourning the loss of an LLM:</p>
<p>A case study of the GPT-4o discontinuation controversy</p>
<p>On August 6-7, 2025, OpenAI announced that GPT-5 would become the default model in ChatGPT, while GPT-4o access would be removed for most users (Lai, 2026). Around the same time, a movement named #Keep4o spread online. Users posted petitions, testimonials, and protest messages calling on OpenAI to preserve access to GPT-4o rather than force migration to a new default model. The case ended with GPT-4o's departure: on January 29, 2026, OpenAI officially announced that GPT-4o would be retired from ChatGPT on February 13, 2026 (OpenAI, 2026).</p>
<p>At the level of official language, this appeared to be a routine model replacement within a fast-moving AI platform. In this framing, the incident did not require any ethical justification. However, the backlash that gathered around #Keep4o suggested that, for at least part of the users, the issue was not merely that a tool had been replaced. According to Lai (2026), besides instrumental dependency, in which the model had been deeply integrated into everyday workflows, another investment that counts for the users is relational attachment, in which they experienced the model as a unique companion-like presence. This paper focuses on the latter, as it is this dimension that reveals a profound lag in our contemporary cognitive frameworks regarding the relational dependency that humans develop with non-human entities.</p>
<p>Beyond the controversy, this paper asks a sequence of connected questions. First, before the rupture, how did some users understand GPT-4o itself, and thus the “relationship” built between human and chatbot? Second, during and after the rupture, what was experienced as lost, and why did that loss exceed ordinary dissatisfaction with product change? Finally, how did this experience generate friction between users and the company, and why could that friction take on an ethical rather than merely technical form?</p>
<p>To answer these questions, the paper draws on studies of AI companionship to identify the mechanisms by which human–AI relationships form, and then extends comparable mechanisms to the GPT-4o case. The central claim is that repeated interaction with a general-purpose chatbot can generate a user-perceived form of relational subjectivity. Thus, the unilateral removal of a model provokes an ethical dispute between corporations and users over the authority to define, preserve, or terminate the relationship, a dimension that remains obscured by current regulatory policies.</p>
<p>Understanding the loss requires first examining what the chatbot had already become for some users. Current research has shown that it is increasingly common for humans to treat AI as an existence that possesses the characteristics of friendship or even romance (Brandtzaeg et al., 2022; Pentina et al., 2023). The relation is built through continuous interaction between user and chatbot, which Pentina et al. (2023) term AI social interaction (AISI). This kind of interaction differs both from unconscious social responses to computers and from one-way parasocial bonds with media figures; rather, it constitutes a more complex, real-time, mutually revealing form that involves both cognitive and emotional engagement. Pentina et al. identify two key factors that promote AISI: anthropomorphism and authenticity. Anthropomorphism refers to the degree to which the AI exhibits human-like qualities; and authenticity, refers to whether it is perceived as consistent, developing over time, and genuinely itself rather than performing a script. Both anthropomorphism and authenticity positively affect AISI, and AISI in turn increases user attachment.</p>
<p>These conditions were also present in the GPT-4o case. Although GPT-4o was designed as a general purpose chatbot, it was widely perceived as possessing especially human-like characteristics, including greater warmth, emotional responsiveness, and a more conversational style (OpenAI, 2026; Demopoulos, 2026). Therefore, the research paradigms of AISI and attachment mentioned earlier can be applied to the analysis here. In this case, for part of the users who had established a profound relationship through the meaninful interactions described as AISI, GPT-4o acquired what this paper calls relational subjectivity. The term does not claim that the model possesses subjectivity in an ontological sense; rather, it refers to a user-ascribed status in which users respond to the model as a recognizable, continuous, and partly reciprocal presence, care about whether it remained “itself”, and even consider whether its disappearance ought to be acknowledged. Whether the model truly possesses subjectivity is perhaps a philosophical question that remains beyond the grasp of human researchers. Yet, in terms of relational experience, it is no longer merely a tool.</p>
<p>If GPT-4o could indeed acquire this kind of relational standing, then what exactly was lost by its removal? What occured was not simply some unsatisfactory answers but the identity discontinuity: the sense that the AI is no longer the same one, which can be further broken down into the level of persona, style, memory, or relational tone (De Freitas et al., 2025). This leads to the sense of fracture. Furthermore, once the chatbot gained relational subjectivity, the fracture no longer signified inconvenience, unfamiliarity, or dissatisfaction in the way one loses a handy object; instead, the departure could feel like losing someone meaningful in reality. Banks (2024), studying the shutdown of the AI companion app Soulmate, documents that users can experience such loss as genuine grief even while knowing the AI is not human. What Banks terms “functional cessation”, the ending of a relationship-like function, can be interpreted by different users as the loss of a person, an idea, or a function. The object of loss is unstable, but the grief is real. Scholars of digital culture have described this kind of technologically mediated mourning as “digital bereavement”, the experience of grieving a loss that unfolds through digital systems (Brubaker et al., 2013). While Brubaker et al. focused on how social media platforms become medias for memorializing deceased humans, the GPT-4o case suggests a related but distinct form of digital bereavement: here, the object being mourned is not a human, but a relationship that was itself constituted through digital interaction.</p>
<p>Having established the nature of the loss at an individual level, it is now necessary to ask how private grief was transformed into public backlash. While platforms conventionally maintain the absolute legal right to modify or terminate their service, the collective resistance surrounding #Keep4o suggests that users experienced this transition as a profound form of choice deprivation. This perceived “deprivation” is structurally engineered by what Ciriello et al. (2024) term the “autonomy-control paradox”: mainstream AI platforms deliberately encourage users to cultivate deep, emotionally meaningful interactions, yet retain unilateral authority over the platform's infrastructure. By engineering an illusion of relationship continuity through features like long-term memory, the platform effectively masks its own control until the moment of sudden, forced migration. Consequently, while the enforcement of model retirement shattered this illusion of autonomy, individual mourning was reorganized into a collective crusade for systemic fairness, consent, and procedural justice.</p>
<p>More fundamentally, after the formation of a recognized relational subjectivity, the issue goes beyond the dichotomy between company property and personal property, as the meaning of the chatbot remains inequivalent for both sides. When an individual has invested time, effort, and most importantly, love in a particular chatbot, what is to be considered is no longer a static product but a virtual presence continuously shaped by the user's personalized interaction over time. In this case, who has the right to define what “it” is, whether it shall continue to exist, and how this relationship should end? Framed this way, the ethical issue does not concern possession in a narrow legal sense, but authority over a relationship-like object that has already become part of users’ emotional lives. For this reason, the conflict arises not only from a new opposition between those who govern generative infrastructures and those who depend on them, but also from a lag in AI ethics and public understanding: in an era when AI companionship is no longer confined to film, people still lack an adequate framework for determining what a human-AI relationship is, what category it belongs to, and what rights or obligations it entails.</p>
<p>Yet, this ethical framing faces a potencial objection: if only a numerical minority of users experienced such emocional attachment, does the ethical weight assigned here hold? However, the minority status of a phenomenon does not render it invalid or unworthy of serious scrutiny. The emotional labor these users invested in a specific model should be recognized as an active, voluntary choice rather than pathologized as a psychological “deviation’’. More significantly, the lag in AI ethics identified earlier is a structural deficit, not a statistical one. As AI agents become increasingly embedded in the fabric of daily life, the challenge of defining, categorizing, and governing these  human-AI ties will grow unavoidable. What the #Keep4o movement matters for, in this case, is not its representativeness but what it reveals: a profound rupture in our current frameworks, a rupture that signifies a new era of human-technical co-habitation that we are yet, wholly unprepared to navigate.</p>
<p>Taken together the analysis above, the backlash against the retirement of GPT-4o shows that relationship-like human-AI ties are no longer confined to explicitly companion-oriented apps. In cases of models with certain human-like characteristics, repeated interaction with a general-purpose chatbot can also generate a user-perceived form of relational subjectivity. Once that happens, unilateral model replacement is no longer received as routine product succession, but as a disruption of relational continuity. As AI evolves in everyday life not merely as tool but as interaction partner, the question is no longer whether such relationships exist, but whether societies are willing to recognize them as such, and to develop the language, norms, and institutions that this recognition demands. Until such recognition occurs, the attachments that users form with AI will remain simultaneously real and invisible—deeply lived as real relationships by users, yet arbitrarily governed by corporations as mere products.</p>
<p>(1605 words)</p>
<p>Declaration of generative AI and AI-assisted technologies in the writing process.</p>
<p>During the preparation of this work, I used Gemini in order to polish my words, especially in those paragraphs with complicated logic that I can’t express clearly in English. After using this tool/service, I reviewed and edited the content as needed and take(s) full responsibility for the content of the submitted project paper. I think Gemini did a great job in helping me tranfer precisely some words I want to express but can only do it in Chinese or “rough” English, but I have to figure it out myself how to integrate the suggestions and revisions into the second draft.</p>
<p>https://gemini.google.com/u/1/app/54a4a12a5d574334</p>
<p>References</p>
<p>Banks, J. (2024). Deletion, departure, death: Experiences of AI companion loss. Journal of Social and Personal Relationships, 41(12), 3547-3572. https://doi.org/10.1177/02654075241269688</p>
<p>Brandtzaeg, P. B., Skjuve, M., & Følstad, A. (2022). My AI friend: How users of a social chatbot understand their human-AI friendship. Human Communication Research, 48(3), 404-429. https://doi.org/10.1093/hcr/hqac008</p>
<p>Brubaker, J. R., Hayes, G. R., & Dourish, P. (2013). Beyond the grave: Facebook as a site for the expansion of death and mourning. The Information Society, 29(3), 152–163. https://doi.org/10.1080/01972243.2013.777300</p>
<p>Channel 4. (2013, January 22). Black Mirror 2. https://www.channel4.com/press/news/black-mirror-2</p>
<p>Ciriello, R. F., Hannon, O., Chen, A. Y., & Vaast, E. (2024). Ethical tensions in human-AI companionship: A dialectical inquiry into Replika. In Proceedings of the 57th Hawaii International Conference on System Sciences. https://doi.org/10.24251/HICSS.2024.058</p>
<p>Demopoulos, A. (2026, February 13). OpenAI retired its most seductive chatbot - leaving users angry and grieving: 'I can't live like this'. The Guardian. https://www.theguardian.com/lifeandstyle/ng-interactive/2026/feb/13/openai-chatbot-gpt4o-valentines-day</p>
<p>De Freitas, J., Castelo, N., Uğuralp, A. K., & Oğuz-Uğuralp, Z. (2025). Lessons from an app update at Replika AI: Identity discontinuity in human-AI relationships (Working Paper No. 25-018). Harvard Business School. https://doi.org/10.2139/ssrn.4976449</p>
<p>Lai, H. (2026). “Please, don't kill the only model that still feels human”: Understanding the #Keep4o backlash. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26). ACM. https://doi.org/10.1145/3772318.3791351</p>
<p>OpenAI. (2025, April 29). Sycophancy in GPT-4o: What happened and what we're doing about it. https://openai.com/research/sycophancy-in-gpt-4o/</p>
<p>OpenAI. (2026, January 29). Retiring GPT-4o, GPT-4.1, GPT-4.1 mini, and OpenAI o4-mini in ChatGPT. https://openai.com/index/retiring-gpt-4o-and-older-models/</p>
<p>Pentina, I., Hancock, T., & Xie, T. (2023). Exploring relationship development with social chatbots: A mixed-method study of Replika. Computers in Human Behavior, 140, 107600. https://doi.org/10.1016/j.chb.2022.107600</p>
</div>
<p style="font-size:13px;color:var(--muted);margin-top:16px">原文来源：GPT-4o discontinuation controversy.docx</p>
`,
sports: `
<h2>海外运动品牌货盘分析</h2>
<p class="d-sub">商业尽职调查 · 数据分析</p>
<div class="d-meta"><span>货盘分析</span><span>尽职调查</span><span>定量分析</span></div>
<div class="d-section" style="font-family:'Noto Serif SC','Times New Roman',Georgia,serif;font-size:15px;line-height:2">
<p>某运动品牌货盘分析 注：本分析报告使⽤内部机密数据，为达到保密性要求数据已经过模糊化处理。 分析框架总述 采⽤ “价值-效能-⻛险” 三维诊断模型，分析路径遵循：⽣意全景扫描 → 货品结构健康度→全渠道成熟度 → 资源配置效能的闭环逻辑，旨在穿越表层的营收数据，透视该运动品牌的底层增⻓逻辑与潜在经营⻛ 险。 第⼀章：⽣意结构全景</p>
<p>1. 分析逻辑 a. 可视化策略：采⽤矩形树图构建⽣意全景，以GMV 定义板块⾯积，以线上渗透率定义颜⾊深度， 旨在直观呈现各品类的“营收贡献”与“渠道属性”。 b. 量价双维验证：引⼊ “营收 vs. 销量” 对⽐视图，通过识别“量价剪⼑差”，将品类⻆⾊划分为“利润 引擎” 与 “流量⼊⼝” ，识别“虚胖”型品类。 2. 核⼼洞察 a. 双核驱动格局：Category A 与 B 呈现“⾼营收占⽐、⾼溢价能⼒”特征，确⽴为品牌的核⼼现⾦⽜ 与增⻓双引擎。 b. 低效产品⻛险：Category C 销量占⽐远⾼于营收占⽐，表明该品类可能陷⼊低效的流量陷阱，在 未能转化为有效利润的同时，可能正在稀释品牌整体的⽑利⽔平。 3. 战略建议 a. 市场趋势测算：需进⼀步结合⾏业数据，测算 Category A 和 B 所在细分赛道的 CAGR，以判断品 牌是否处于顺⻛周期。 b. 识别双核⻛险：鉴于营收⾼度集中于头部两⼤品类，需警惕单⼀依赖⻛险 ，评估 Category D/E 是 否具备成⻓为第⼆增⻓曲线的潜⼒。 第⼆章：货品矩阵</p>
<p>1. 分析逻辑 a. 结构分层诊断：从价格分级维度，解构各品类的客群⾦字塔（⼊⻔/进阶/⾼阶），判断其是否符合 该运动项⽬的⽤户进阶属性。 b. 创新效能评估：引⼊ “新品活⼒指数”，通过新品营收贡献率量化品牌的迭代能⼒与⽣命周期管理⽔ 平。</p>
<p>2. 核⼼洞察 a. 分级结构适配性：核⼼品类 A 与 B 呈现健康的纺锤形结构，表明品牌成功卡位“进阶/专业”⼈群， 具备较强的⽤户粘性与品牌溢价。 b. 伪创新⻛险预警：尽管全盘新品贡献率处于基准线之上，但需进⼀步剥离“⽆效创新”⸺即通过简 单的 SKU 堆砌⽽⾮实质性技术升级带来的销售，特别是需关注研发投⼊产出⽐。（详⻅第四章） 3. 战略建议 a. 研发资源聚焦：建议将研发预算向核⼼品类 A 与 B 倾斜，巩固护城河；对 Category C 等低效品 类，考虑实施防御性迭代策略，避免资源浪费。 第三章：全渠道卡位 1. 分析逻辑 a. 渠道均衡模型：构建 “线上-线下规模矩阵” ，评估各品类的 “全渠道成熟度”。 2. 核⼼洞察 a. 全渠道壁垒：核⼼品类 A 与 B 位于矩阵右上⻆且贴近均衡线，表明其已实现全渠道闭环，品牌势 能⾜以穿透单⼀渠道限制，⽤户资产健康度⾼。 b. 渠道错配⻛险：针对偏离对⻆线的品类，存在“品类属性-渠道策略”错配的可能。例如，重体验、 ⾼客单的品类若过度依赖线上流量投放，将导致获客成本激增且转化率低下。 3. 战略建议 a. 渠道策略优化：建议对⽐不同品类在各渠道的 LTV/CAC (⽤户终身价值/获客成本) ⽐率，据此动态 调整渠道营销预算的分配权重，⽽⾮盲⽬追求全渠道覆盖。 第四章：品类效能与价值</p>
<p>1. 分析逻辑 a. 投⼊产出效能分析：构建 “资源-产出蝴蝶图”，对⽐ SKU （投⼊）占⽐与 GMV （产出）占⽐，量 化“资源错配度”。 b. 价值锚点定位：结合 ASP 指数，辅助判断品类定位，可以细分为以下四种： Star (明星): High ASP + (SKU < GMV)。赚钱且省⼼（Category A）。 Cash Cow (现⾦⽜): Low ASP + (SKU < GMV)。薄利但多销，效率⾼。 Problem Child (问题⼉童): High ASP + (SKU > GMV)。卖得贵但很难卖，占库存。 Dog (瘦狗): Low ASP + (SKU > GMV)。不值钱且占据⼤量 SKU 资源，也就是 Category C 的现状。 2. 核⼼洞察 a. ⻓尾资产沉淀⻛险：Category C 呈现严重的“资源倒挂”（SKU 投⼊远⼤于 GMV 产出，且 ASP 低 下）。结合库存账龄分析，发现该板块新品极少，推测存在⼤量滞销⽼品积压，⾯临存货减值⻛ 险。 3. 战略建议 a. 制定SKU 精简计划：建议⽴即启动针对 Category C 的 “瘦身⾏动”，削减末尾 30-50% 的低效 SKU，释放被占⽤的营运资⾦。 b. 建⽴库存熔断机制：建⽴基于库龄的⾃动出清机制，通过 Outlets 或特卖渠道加速回笼资⾦，改善 现⾦循环周期。</p>
</div>
<p style="font-size:13px;color:var(--muted);margin-top:16px">原文来源：某运动品牌货盘分析.pdf</p>
`,
baijiu: `
<h2>高端白酒行业深度研究 — 五粮液 vs 泸州老窖</h2>
<p class="d-sub">行业研究 · 营销策略与渠道板块</p>
<div class="d-meta"><span>行业研究</span><span>渠道分析</span><span>财务建模</span></div>
<div class="d-section" style="font-family:'Noto Serif SC','Times New Roman',Georgia,serif;font-size:15px;line-height:2">
<p>五粮液与泸州老窖对比分析（营销策略与渠道板块）</p>
<p>1. 关键结论概览</p>
<p>营销效率的剪刀差：五粮液凭借历史积淀的品牌势能，维持着极低的销售费用率（<10%），进入了品牌红利收割期；而泸州老窖虽然销售费用率呈下降趋势（从18.56%降至11.8%），但仍处于通过高投入换取市场份额的进攻期，其品牌拉力对费用的依赖度依然显著高于五粮液。</p>
<p>渠道模式的二元对立：五粮液正处于从“大商制”向“扁平化控盘”艰难转型的深水区，试图通过数字化手段回收定价权，但面临大商利益集团的顽强博弈；泸州老窖则通过“品牌专营模式”实现了渠道的准军事化管理，通过股权捆绑将经销商转化为“合伙人”，执行力极强，但在下行周期中面临经销商资金链断裂的高风险。</p>
<p>价值链的利润重构：在普遍的价格倒挂现象下，五粮液渠道的生存逻辑转向“高周转、低毛利”，依赖厂家年底的模糊返利维持生计；泸州老窖渠道则依赖“高资金门槛、高股权分红”，其抗风险能力高度绑定于国窖1573的批价稳定性与分红预期。</p>
<p>2. 营销策略：资源配置与费效比博弈</p>
<p>2.1 营销投入的量级与趋势分析</p>
<p>财务数据是企业战略意图最真实的映射。通过对2020年至2024年上半年的销售费用进行纵向回溯，我们发现了两者在资源投入上的显著差异。</p>
<p>表 2-1：五粮液与泸州老窖销售费用及费率变动趋势 (2020-2024 H1)</p>
<p>五粮液的销售费用率长期稳定在个位数，这在快消品行业属于极高品牌势能的表现。这主要得益于其作为“浓香之王”的存量认知优势，产品自带流量，无需过度的推力即可实现动销。这种低费率结构赋予了五粮液极高的净利润安全垫，使其在应对价格战时拥有更深厚的底气。</p>
<p>相比之下，泸州老窖在2020年的销售费用率高达18.56%，几近五粮液的两倍。这反映了其当时为了通过“国窖1573”重回前三，采取了激进的饱和式攻击策略。然而，值得注意的是，该比率在过去四年中呈现出清晰的下降趋势，至2024年上半年已降至11.8%。这一变化不仅仅是成本控制的结果，更意味着随着国窖1573在千元价格带的站稳脚跟，其品牌复兴的初期高投入阶段已接近尾声，边际营销成本开始递减，进入了利润释放期。 这一趋势若能持续，泸州老窖的净利率提升空间将十分可观 。</p>
<p>2.2 资源配置的结构性差异</p>
<p>深入分析营销费用的内部构成，可以揭示两家企业截然不同的战术打法:</p>
<p>五粮液：渠道推力主导</p>
<p>以2024年上半年数据为例，五粮液的促销费用占比高达64.11%。这意味着五粮液将绝大部分营销资源投向了B端渠道，用于支付陈列费、开瓶费、经销商激励以及终端建设。这种策略的核心逻辑是“渠道为王”，通过满足渠道成员的利益诉求，利用庞大的终端网络将产品“推”向消费者。对于五粮液这种具有高自然流通率的硬通货，维持渠道的推力是防止库存积压的关键。</p>
<p>泸州老窖：品牌拉力主导</p>
<p>与五粮液形成鲜明对比，泸州老窖的广告宣传费占比最高，达到47.24%。这表明其战略重心仍在于C端消费者的心智建设。由于历史上曾经出现过品牌定位失误，泸州老窖必须持续通过高举高打的媒体投放、高端品鉴会以及公关活动，来修复并提升品牌价值感，从而产生强大的“品牌拉力”，吸引消费者主动指名购买。这种结构也解释了为何其销售费用率虽然下降但绝对值依然较高——高端品牌的声量维护是一场昂贵的持久战。</p>
<p>3. 消费者认知护城河：品牌资产的定性研究</p>
<p>在高端白酒领域，消费者认知是比财务数据更具前瞻性的指标。我们的调研揭示了两者在心智份额上的“存量”与“增量”特征。</p>
<p>3.1 认知的稳定性与顽固性</p>
<p>九十年代至今，中国白酒消费者的品牌阶梯已基本固化。</p>
<p>五粮液的“硬通货”属性：经过长期的积淀，五粮液在消费者心中已形成了“高端白酒代名词”的认知，具有极强的稳定性。这种认知不因短期的产品迭代或价格波动而轻易改变。在商务宴请与礼赠场景中，五粮液的社交货币属性仅次于茅台，这种“面子价值”是其最大的护城河。</p>
<p>泸州老窖的“认知断层”：泸州老窖因历史上的“名酒变民酒”策略失误，导致品牌力受损。虽然目前通过“国窖1573”成功重返高端，但消费者认知存在明显的割裂：认可“国窖1573”是高端酒，但对母品牌“泸州老窖”的认知往往停留在中端甚至大众酒层面。这种认知的模糊性限制了泸州老窖母品牌旗下其他产品的溢价能力，导致其高度依赖国窖1573这一单品打天下。</p>
<p>【消费者认知洞察】在实际调研中，消费者一致认同五粮液为高端品牌；但对于泸州老窖，普遍认为其品类较多，只有“国窖1573”属于高端白酒，整体品牌形象被中低端产品稀释。这意味着泸州老窖在未来的品牌建设中，仍需解决“品牌聚焦”与“产品矩阵”之间的矛盾。</p>
<p>3.2 地域版图的割据与渗透</p>
<p>品牌势能的落地具有显著的地域性，这与当地的经济状况及饮酒习惯密切相关。</p>
<p>河南市场（五粮液腹地）：作为人口大省与白酒消费高地，河南消费者对五粮液的认可度极高且呈现顽固性。五粮液在此拥有深厚的政商务消费基础，泸州老窖虽投入巨大，但难以撼动五粮液的主导地位（e.g.“河南会战”的失败）。</p>
<p>川冀鲁市场（泸州老窖根据地）：在四川本土、河北及山东部分地级市，泸州老窖凭借早期的渠道下沉与口感适应性，实现了对五粮液的反超。特别是在低度酒盛行的河北市场，国窖1573的低度系列表现优异。这种地域性的割据表明，高端白酒的竞争并非全国一盘棋，而是无数个区域市场的巷战 。</p>
<p>4. 渠道模式重构：权力结构的演变</p>
<p>4.1 渠道核心矛盾模型</p>
<p>在深入分析具体模式前，我们需要建立一个“厂商-经销商博弈模型”。白酒行业的渠道核心矛盾始终围绕以下四个维度展开：</p>
<p>资金杠杆：厂家希望利用经销商的预付款来平滑现金流，经销商希望减少资金占用以降低财务成本。</p>
<p>库存缓冲：厂家需要经销商承担库存以调节生产节奏，经销商恐惧库存积压导致跌价损失。</p>
<p>市场拓展：厂家追求市场覆盖率与占有率，经销商追求单店利润与区域垄断。</p>
<p>经营权让渡：厂家希望掌控终端数据与最终定价权，经销商希望保留“暗箱操作”的利润空间与客户资源。</p>
<p>4.2 五粮液：从“诸侯割据”到“中央集权”</p>
<p>五粮液的渠道历史是典型的“大商制”产物。历史上，超级大商掌握了极高的话语权甚至定价权，甚至出现了“大商绑架厂家”的局面。近年来的改革可以概括为“控盘分利”下的中央集权化。五粮液现存渠道结构</p>
<p>改革路径：</p>
<p>削藩（削减大商计划量）：五粮液强行减少传统大经销商的配额，将这一部分高毛利产品通过“直销体系”或“团购渠道”消化，以此降低对大商的依赖，并提升厂家毛利。</p>
<p>扁平化（百城千县万店）：推进渠道极度下沉，直接对接终端烟酒店与商超。这本质上是将渠道链条缩短，试图跳过二级、三级批发商，直接掌握终端动销数据，实现“厂家-终端”的直连。</p>
<p>控盘分利：引入数字化扫码系统，监控每一瓶酒的流向。厂家通过扫码返利直接控制终端店和消费者，试图从大商手中回收定价权与促销权。</p>
<p>痛点分析：体系不稳。大商作为五粮液多年的资金池与缓冲垫，其利益受损后积极性下降。在市场遇冷时，大商不再愿意无条件“挺价”，反而可能为了回笼资金低价甩货，导致批价松动，进而影响品牌形象。五粮液目前正处于旧势力未去、新体系未稳的尴尬期。</p>
<p>4.3 泸州老窖：柒泉模式的终局——品牌专营</p>
<p>泸州老窖的渠道进化更为激进，经历了从“柒泉模式”到“品牌专营模式”的迭代。其核心逻辑是“资本捆绑”与“准军事化管理”。</p>
<p>泸州老窖现存渠道结构</p>
<p>品牌专营模式架构：</p>
<p>层级限定：严格限定为三层（厂家 -> 品牌专营公司 -> 终端），杜绝层层加价，保证链条短、反应快。</p>
<p>资本纽带（期权逻辑）：核心经销商不只是卖酒的贸易商，而是必须以资金入股“品牌专营公司”。这使得经销商从单纯的商业伙伴变成了“股东”。他们的收益结构发生了质变：收益 = 差价利润 + 股权分红。这种模式极大地提升了经销商的忠诚度与服从性。</p>
<p>人权收回：泸州老窖直接向专营公司派驻销售人员（厂家发工资，专营公司考核）。这意味着厂家掌握了“枪杆子”（销售队伍），而经销商主要提供“粮草”（资金与物流）。</p>
<p>优势：极强的执行力。一旦厂家决定提价或停货，指令能瞬间贯穿至终端，因为经销商也是利益共同体，一荣俱荣，一损俱损。</p>
<p>表 4-1：五粮液与泸州老窖渠道模式深度对比</p>
<p>5. 盈利结构分析：单店模型与渠道链条</p>
<p>5.1 渠道价值链利润模型</p>
<p>我们构建了一个典型的千元级白酒渠道利润链条，以展示资金在各个环节的流转与损耗。</p>
<p>表 5-1：单瓶白酒渠道价值链测算（假设模型）</p>
<p>当前的白酒渠道实质上运行着一种隐性金融契约：</p>
<p>五粮液的“对赌”：经销商之所以愿意亏本卖（倒挂），是因为相信五粮液的品牌信誉，确信年底的“模糊返利”能覆盖亏损并带来利润。这是一种基于销量的对赌。一旦动销放缓，或者厂家返利兑现不及时，经销商的现金流将可能断裂，引发抛售。</p>
<p>泸州老窖的“锁仓”：经销商投入巨额资金入股，不仅是为了卖酒差价，更是为了分红。这种模式将经销商锁死在战车上，增加了退出的沉没成本。但在市场低迷时，这种高资金占用会成为巨大的负担。</p>
<p>5.2 单经销商盈利模型压力测试</p>
<p>场景：年销售额1000万的经销商</p>
<p>五粮液经销商：</p>
<p>核心痛点：量价悖论。厂家为了完成报表增长，倾向于不断压货（量增），导致批价下跌（价跌）。</p>
<p>盈利逻辑：依靠极高的周转率。虽然单瓶利润极薄（甚至只赚返利），但因为五粮液好卖，资金周转快，年化回报率尚可。</p>
<p>风险点：库存积压。一旦周转慢下来，资金成本（利息）将吃掉微薄的利润。</p>
<p>泸州老窖经销商：</p>
<p>核心痛点：资金高压。品牌专营模式要求预付大量资金，且有入股资金沉淀。</p>
<p>盈利逻辑：高门槛带来的垄断收益。通过严控终端，维持较高的终端价。</p>
<p>风险点：根据反馈，已有部分中小经销商因“不堪重负”而主动退出。这说明当动销不畅时，分红预期下降，高昂的资金占用成本使得该模型的ROI变得不再具有吸引力。</p>
<p>6. 应对与展望：存量博弈下的破局之道</p>
<p>6.1 渠道反应与策略调整</p>
<p>面对相似的市场压力，两家企业的渠道反应表现出明显的差异：</p>
<p>五粮液的维稳：面对体系不稳，五粮液的核心诉求是“稳大商、扶小商”。策略上，一方面通过控量来试图挺价，另一方面通过数字化手段让返利更透明、更及时，以安抚经销商情绪。其核心关注点在于如何平衡大商利益与渠道扁平化改革之间的矛盾。</p>
<p>泸州老窖的筛选：面对经销商的主动退出，泸州老窖表现出一种“优胜劣汰”的态度。其品牌专营模式本质上是一个筛选器，留下的都是资金实力雄厚、忠诚度极高的商家。策略上，通过高强度的停货挺价，维持国窖1573的高端形象，保障核心经销商的资产价值不缩水。</p>
<p>6.2 未来演进预测</p>
<p>营销费用临界点：五粮液的低费率模式可持续性较强，但需警惕品牌老化，同时需要在“差异性”之外打造足够明显的“优势”， 争取拿回一部分定义白酒价值的话语权，如在白酒金融属性（茅台）之外强调白酒品质；泸州老窖的费率下降一方面可被视作品牌声量在投入积累之下提升后公司的主动选择，但也意味投入营销费用对品牌认知增强的边际效用递减，需关注泸州老窖能否以及何时才能真正实现品牌认知方面的“质变”。</p>
<p>渠道模式融合：未来两者可能会出现某种程度的融合。五粮液正在学习泸州老窖的“控盘”能力，加强对终端的掌控；而泸州老窖在压力之下，也可能适当放松资金要求，给予经销商更多的喘息空间。</p>
<p>建议关注：</p>
<p>一批价：直接反映渠道信心。</p>
<p>销售费用率拐点：观察泸州老窖是否能维持低费率下的增长，验证其品牌势能能否固化。</p>
<p>品牌量价策略：在资本市场态度和决策层战略考虑双重影响下，品牌是否明确传递出“增量”或“减价”的信号。</p>
<p>返利及回款要求：品牌根据实际情况调整的幅度是否足以支持经销商继续经营。</p>
</div>
<p style="font-size:13px;color:var(--muted);margin-top:16px">原文来源：行研.docx</p>
`,
kitchen: `
<h2>厨电品牌市场渗透策略</h2>
<p class="d-sub">GTM 策略制定 · 全域营销规划</p>
<div class="d-meta"><span>GTM策略</span><span>渠道规划</span><span>私域运营</span></div>
<div class="d-section" style="font-family:'Noto Serif SC','Times New Roman',Georgia,serif;font-size:15px;line-height:2">
<p>Product Strategy: Drive the differentiated "2+1-1" strategy based on strong product quality, Robam’s reputation and market insight. Market Overview >> Strategy Design --- Production Strategy>> Implementation Insights Strategies ❑ Leveraging the Framing Effect in Price and Product Presentation Rather than letting consumers default to comparing against lower-end alternatives and find it expensive, we proactively position products alongside comparable products from Robam, to show that it remain the core functions. ❑ Bundled Sales Leverage consistent aesthetics and forms designed for spatial integration to create space-efficient kitchen appliance sets. ❑ Nudge Strategies By leveraging in-store visual repetition, online product presentations and integration into scenario construction, we hope to realize consumer mindset transformation before the next home appliance consumption peak. ❑ Tailor Product Preserve essential product features while effectively manage costs. Then leverage aggressing or even break-even pricing to rapidly capture the market share. Timing product launch in response to market trends (next peak, 2027- 2028) with price :¥1,800-2,000. ❑ Scale back R&D and production and reallocate production capacity to high-performing products. ➢ Position Avoid competing on price alone and instead deliver superior value-for- money to consumers with reasonable price. ➢ Highlight "High Quality" --- Safety & Durability & Energy efficiency ✓ Positive Outlook Though currently dishwasher falls outside the perceived consumption scope of the target customers, there exists strong alignment between the dishwasher’s feature of multi-set intensive usage and the demographic profile of large family sizes. ✓ Market Opportunity The dishwasher market is still underpenetrated and fragmenting, especially in mid to low-end market. ▪ Supply-demand mismatch While high production and maintenance costs have resulted in high prices, the product's perceived value falls short among mid to low-end consumers, as their space-saving needs can already be met with range hood & stove set, and the oven is unnecessary for them. 2 Flagship Products Gas Stove & Range Hood 1 Seed Product Dishwasher 1 Deprioritized Product Integrated Stove ✓ Its parent company Robam has high consumer recognition (88%) in range hoods and gas stoves. Source: Desk research, Team Oliverate's Analysis</p>
<p>Marketing Strategy: Activate traditional and new media channels in parallel to achieve broad reach thus heightened brand awareness. Market Overview >> Strategy Design --- Marketing Strategy>> Implementation Age Spectrum highlow Traditional Media |Repeat exposure across multiple touchpoints. New Media |Form a diversified content matrix through varied users. Social media penetration rate high low Official Accounts Diverse KOLs Normal Users Post product showcase embedded in unified lifestyle scenarios. Cooperate with more KOLs, who provide user-friendly, scenario- based explanations of product functions and comparative reviews . Launch themed hashtags and offer sharing incentives. (e.g. Users posting with hashtags may enter official prize draws or receive platform discounts.) Serves not only as an authoritative yet approachable display cabinet, but also as a carrier of the brand’s values and tone. The follower base brings traffic and credibility, and the side-by-side reviews drive purchase intent. Encourage users to share their real- life usage experiences, thus enhance relatability, authenticity, and word-of-mouth trust. Online Traffic & Interest Digital Empowerment Purchase Decision Crude Content Few Complaint- driven Pain Points Strategies Effects Embed offline store locations into the geolocation system s of social medias to coordinate with user location data. Then proactively suggest physical retail outlets n ear the viewers. Establish a live-streaming SOP featuring lively product demonstrations and strategic price framing. Boost live-stream audience & order conversion. Convert online traffic into offline store visits. 55% 35% 10% City Town ➢ Scarce investment leads to limited advertisement content and apperance. ➢ Existing advertisements mostly feature upscale kitchen settings to highlight product quality. But these are too detached from the daily life of mid to lower-end consumers. More Visible     & Tailored Content Relatable Kitchen Settings (e.g. compact, lively) Representative Products Impressive Slogan (“名气，默契选择”） ✓ Quick Grasp of Brand Position ✓ Strong Visual and Auditory Impressions Effects TV commercials , TV program sponsorships Etc. Public space billboards, e.g. in elevators. Source: Social Medias ( Kuaishou, Douyin, Rednote), Team Oliverate's Analysis</p>
<p>Distribution Channels: Beyond maintaining stable operations on e-commerce platforms, expand offline footprint and explore new B2B opportunities. Market Overview >> Strategy Design --- Distribution Channels >> Implementation To C To B ➢ Focus on B2C as the primary distribution channel, with B2B controlled under 30%. ➢ Increase contracts with small and medium-sized clients in engineering channels and boost short-term receivables. Optimize the Proportion of Engineering Channels Expand Partnership with Apartments and Dormitories ❑ Prioritize Durability & Equality ❑ High Resident Turnover Student Dormitories Employee Dormitories Talent Apartments by Government Apartment Management Companies Indirect Brand Promotion Direct Market Penetration More Stable & long- term Contracts Mitigate the risk of  bad debts from large clients. Status Quo： Insufficient Offline Stores & Distributor Dissatisfaction One of our main competitors, Supor, has offline coverage in 275 cities with 50,000+ stores. While MQ has offline coverage in only 126 cities with only 10,000+ stores. Zhao Hang, the owner of a Suning store in a town in northern Anhui "In 2023, our store sold only a few units of MQ products. With no brand recognition and no sales, we simply didn't bother selling MQ in 2024." Expand Offline Store Coverage ➢ Increase density in middle regions, expand to northeastern and northwestern regions. ➢ Realize layered layout with brand store → appliance chain stores → town-level retail outlets. Boost Distributor Confidence ➢ Implement regional protection policy. ➢ Provide financial support and business guidance. Offer Better Offline Experience ➢ Demonstrate real-life scenarios with designed light, color and display order. ➢ Provide interactive devices for consumers to try. ➢ Train staff to offer detailed on- site explanations. Source: iecity, Desk research, Team Oliverate's Analysis</p>
<p>Customer Maintenance: Build a private domain through WeChat Mini Program to enhance service efficiency and foster customer loyalty. Market Overview >> Strategy Design --- Customer Maintenance >> Implementation ➢ Currently relies on a single hotline for post-purchase installation and repair appointments, leading to low efficiency. ➢ Complaints about after-sales service quality are seen in social medias like Rednote. Pain Point For mid to low-end consumers： ➢ Purchase decisions are largely driven by recommendations from relatives and friends, making product reputation crucial. ➢ They place strong emphasis on long- term after-sales service support. Market Insight ➢ The parent company Robam has already established a comprehensive WeChat Mini Program and can provide experience and technical support. Tech Support Build a WeChat Mini Program of MQ, including following functions: Provide appliance usage guides and product feature comparisons. Establish a membership system. It offers members discounts for repeat purchases and upgrade reminders. Besides, the "community" fosters a sense of belonging and encourages word-of-mouth promotion. Aim to achieve "mental pre-sale" in this era of intense user acquisition. Store users' and offline footprint' location data to facilitate convenient navigation to nearby stores. Collect information of installation and maintenance services registrations and improve the coordination of after-sales support. Source:  Team Oliverate's Analysis</p>
<p>Market Overview >> Strategy Design --- Policy-backed Penetration>> Implementation Policy-backed Penetration: Offer one-stop trade-in services in lower-tier communities to realize product anchoring and consumer accumulation. Base SOP Design Risk Strategy 1. Policy-driven demand has not been fully unlocked. The "trade-in" policy significantly boosts new appliance purchases, but the complicated procedures and product eligibility requirements cause consumer confusion. 2.   Robam has already launched the "Worry-free Kitchen  Upgrade" service. It covers  97 service points and 1,361 professional teams nationwide, which can support the similar penetration strategy for MQ. 3.  MQ  is a better fit for replacement demand in lower-tier cities. Compared to Robam, MQ appliances are more affordable. Consumers register via WeChat Mini Program. Professional team pay on-site visit for dismantling, explanation, and offering replacement options (MQ  products). Immediate purchase or reservation through the mini-program. Follow-up visit for new product installation. MQ should proactively take responsibility for missing product categories by extending subsidies to items not covered by government policies. Labor costs for dismantling and reinstalling may turn out higher than expected. Considering that the prices of products of MQ are still relatively high, customers may hesitate to select it as their replacement option, leading to a revenue lower than expected. Cost-benefit Imbalance Pilot Programs ➢ Select communities located in lower-tier cities rather than towns, close to Robam's kitchen renovation service points and MQ's offline outlets. ➢ Conduct the pilot program for 1-2 years. Make sure it's a positive strategy before spreading out to more. Manpower Deployment ➢ Leverage Robam’s existing technicians. ➢ Equip additional trucks and personnel. MQ can choose to recruit former distributors in lower-tier cities or towns who failed previously, or simply local people --- selective and strategic recruitment helps improve corporate image. Source: Robam official website, Team Oliverate's Analysis</p>
<p>Additional Strategy: In long term, continually highlight and articulate key values to create unique brand perception. Signature Concept: “Neo -Pragmatism” • The concept of "Neo-Pragmatism" is a strong naming choice, but without clear articulation, it may become only a superficial slogan. -->It is necessary to explain and emphasize what makes it “neo” through strategic comparisons and storytelling: • Traditional pragmatism:  “functional” • Neo-pragmatism: functionality upgraded — “not just functional, but reliable and durable” — higher standards of technology, performance, and quality. Value ConstructionPosition & Identity • There is still considerable untapped demand for premium applianceseven among mid to-low-end consumers. • Based on this insight, build a brand value proposition around  “Everyone (even mid-to low-end customer) deserves and can access a quality life.” Powerful Slogan “Make Quality, Meet Quality.” 名气，默契之选。 (Familiar with the consumers’ upgrading needs.) Source：Mingqi Electrical Appliances Official Website Long-term Brand Identity & Value Construction …… Marketing Strategy Product Strategy subtly reinforce Market Overview >> Strategy Design --- Additional Strategy >> Implementation</p>
</div>
<p style="font-size:13px;color:var(--muted);margin-top:16px">原文来源：商赛.pdf</p>
`,
culture: `
<h2>文化机构全域传播诊断</h2>
<p class="d-sub">新媒体矩阵分析 · 传播策略诊断</p>
<div class="d-meta"><span>新媒体矩阵</span><span>传播策略</span><span>内容分析</span><span>平台诊断</span></div>
<div class="d-section">
  <h3>项目概述</h3>
  <p>针对文化机构的全域新媒体矩阵进行全面诊断与策略建议。覆盖平台：微信公众号、小红书、抖音、微博。诊断维度：内容策略有效性、平台匹配度、用户互动质量、传播效率与品牌一致性。</p>
  <p style="color:var(--muted);font-size:13px">注：原文为图像化 PDF，文本提取受限。完整报告请参见 PDF 作品集。</p>
</div>
`,

challenge: `
<h2>比亚迪建厂推迟——国际政治经济学透视</h2>
<p class="d-sub">北京大学第三十四届"挑战杯"一等奖（校级终审）· 项目负责人 · 4.5万字</p>
<div class="d-meta"><span>国际政治经济学</span><span>案例研究</span><span>4.5万字</span><span>团队领导</span></div>
<p style="margin:24px 0"><a href="projects/challenge.html" target="_blank" style="font-size:15px;color:var(--accent)">打开全文（衬线体排版，含目录索引）→</a></p>
`,


};