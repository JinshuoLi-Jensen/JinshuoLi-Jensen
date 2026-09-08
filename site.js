const app = document.querySelector("#app");
const assetPrefix = document.body.hasAttribute("data-asset-prefix")
    ? document.body.dataset.assetPrefix
    : "../";
const languageKey = "jinshuo-homepage-language";
const pages = {
    home: ["Home", "关于我"],
    education: ["Education", "教育背景"],
    experience: ["Experience", "研究经历"],
    research: ["Research", "研究项目"],
    publications: ["Publications", "论文与成果"],
    awards: ["Awards", "荣誉与活动"],
    contact: ["Contact", "联系我"],
};
const openAquaUrl = "https://doi.org/10.1016/j.watres.2026.126761";
const aeroNoxisUrl = "https://openreview.net/forum?id=CVjsXfBRg9";
const openAquaTitle = "OpenAqua: An automated multi-agent framework for early-stage water treatment train design with retrieval augmentation and critic-based refinement";
const aeroNoxisTitle = "AeroNoxis: Retrieval-Grounded Multi-Agent Design of Industrial Waste-Gas Treatment Trains";
const workshop = "KDD 2026 Workshop SciSoc Agents &amp; LLMs";
// User-confirmed marks; English labels are descriptive, not transcript-certified titles.
const coursework = [
    { names: ["Calculus I", "高等数学 I1"], grade: "98.5" },
    { names: ["Calculus II", "高等数学 I2"], grade: "96.5" },
    { names: ["Mathematical Thinking and Culture", "数学思想与文化"], grade: "100" },
    { names: ["Digital Logic", "数字逻辑"], grade: "95" },
    { names: ["Software Development 2 (Python)", "软件开发 2（Python）"], grade: "94.4" },
];

function savedLanguage() {
    try { return localStorage.getItem(languageKey); } catch { return null; }
}

function locationLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    return ["en", "zh"].includes(requested) ? requested : null;
}

let language = locationLanguage() || (savedLanguage() === "zh" ? "zh" : "en");
let activePage = "home";
const t = (en, zh) => language === "zh" ? zh : en;
const external = (url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;

function renderSite() {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    const description = t(
        "Jinshuo (Jensen) Li works on harness engineering for AI co-scientists across water treatment, atmospheric systems, and Earth science.",
        "李金硕的个人主页。研究方向为 AI Agent 和 AI for Science，相关研究涉及法律、地球科学与环境科学。"
    );
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    const footerCopy = document.body.hasAttribute("data-footer-copy")
        ? t("© 2026 Jinshuo (Jensen) Li · Last updated September 2026", "© 2026 李金硕 · 更新于 2026 年 9 月")
        : t("© 2026 Jinshuo (Jensen) Li · Design option for local review", "© 2026 李金硕 · 设计方案预览");
    // Each language has its own editorial structure; only the underlying facts are shared.
    const homeIntro = t(
        ["I work on <strong>harness engineering for AI co-scientists</strong>: building the infrastructure that connects foundation models and agents with scientific knowledge, tools, simulations, data pipelines, and evaluation. My current applications span water treatment, atmospheric systems, and Earth science."],
        [
            "我目前就读于中国海洋大学，专业为计算机科学与技术。参与英国赫瑞瓦特大学的合作项目，计划大四前往英国国家机器人中心学习一年，专业为robotics（机器人学）",
            "我的研究方向是 <strong>AI Agent 和 AI for Science</strong>。目前主要围绕 Harness Engineering，研究科研 Agent 的工具调用、RAG与结果评估。相关研究涉及法律，地球科学，环境科学。",
        ]
    );

    app.innerHTML = `
    <div class="site-shell">
        <nav class="site-nav" aria-label="${t("Primary navigation", "主导航")}">
            <div class="nav-inner">
                <a class="brand" href="#home" data-page="home">${t("Jinshuo Li", "李金硕")}</a>
                <div class="nav-links">
                    ${Object.entries(pages).map(([page, labels]) => `<a class="nav-link" href="#${page}" data-page="${page}">${t(...labels)}</a>`).join("")}
                </div>
                <div class="language-switch" role="group" aria-label="${t("Language", "语言")}">
                    <button type="button" data-language="en" lang="en" aria-label="Read in English" aria-pressed="${language === "en"}">EN</button>
                    <button type="button" data-language="zh" lang="zh-CN" aria-label="切换为中文" aria-pressed="${language === "zh"}">中文</button>
                </div>
            </div>
        </nav>

        <div class="profile-layout">
            <aside class="profile-column" aria-label="${t("Profile summary", "个人简介")}">
                <div class="profile-identity">
                <img class="portrait" src="${assetPrefix}img/portrait.jpg" alt="${t("Portrait of Jinshuo Li", "李金硕的照片")}">
                <h1 class="profile-name">${t("Jinshuo Li", "李金硕")}</h1>
                <p class="profile-role">${t("Undergraduate Student", "本科生")}</p>
                <p class="profile-school">${t("Computer Science · Ocean University of China<br>Robotics · Heriot-Watt University", "中国海洋大学 · 计算机科学与技术<br>赫瑞瓦特大学 · 机器人学")}</p>
                <div class="profile-links" aria-label="${t("Profile links", "个人链接")}">
                    <a href="mailto:jl4091@hw.ac.uk">${t("Email", "邮箱")}</a>
                    ${external("https://github.com/JinshuoLi-Jensen", "GitHub")}
                    ${external("https://www.linkedin.com/in/jinshuo-jensen-li-441361394", "LinkedIn")}
                </div>
                </div>

                <div class="profile-panels">
                    <section class="profile-panel">
                        <h2>${t("Research Focus", "研究方向")}</h2>
                        <p class="focus-name" lang="${t("en", "zh-CN")}">${t("Harness Engineering for AI Co-Scientists", "AI Agent 和 AI for Science")}</p>
                        <p>${t("Connecting agents with scientific knowledge, tools, simulations, and evaluation.", "科研 Agent 的工具调用、流程设计与评估方法。")}</p>
                    </section>
                    <section class="profile-panel">
                        <h2>${t("Research Toolkit", "技术与工具")}</h2>
                        <div class="compact-list">
                            <span>${t("Agent systems &amp; orchestration", "Agent 系统开发与多 Agent 协作")}</span>
                            <span>${t("RAG &amp; knowledge bases", "RAG 与知识库构建")}</span>
                            <span>${t("Scientific-computing workflows", "科学计算与数值模拟")}</span>
                            <span>${t("Data pipelines &amp; visualization", "数据处理与科研绘图")}</span>
                            <span>Python · C/C++ · Java · Git</span>
                        </div>
                    </section>
                </div>
            </aside>

            <main class="main-column" aria-live="polite">
                <section class="page-panel" id="home" data-panel="home">
                    <p class="eyebrow">${t("Academic Homepage", "个人主页")}</p>
                    ${t('<h2 class="page-title">About</h2>', "")}
                    ${homeIntro.map(paragraph => `<p class="home-intro">${paragraph}</p>`).join("\n                    ")}
                    <h3 class="subheading">${t("Current Research", "研究工作")}</h3>
                    <div class="quick-grid">
                        <article class="quick-card">
                            <span class="quick-label">${t("Primary Direction", "当前项目")}</span>
                            <h3>${t("AI Co-Scientist Infrastructure", "TectonOS · 地球科学")}</h3>
                            <p>${t("Reliable agent workflows for scientific question formation, simulation, data processing, visual analysis, and research outputs.", "在 LAOSHAN国家重点实验室 / KUNLING 主导 TectonOS 的核心研发，负责 Agent 工作流设计、数值模拟工具集成和后端开发。")}</p>
                        </article>
                        <article class="quick-card">
                            <span class="quick-label">${t("Application Domains", "代表论文")}</span>
                            <h3>${t("AI for Earth Systems", "OpenAqua · AeroNoxis")}</h3>
                            <p>${t("Scientific agents for geoscience, water treatment, atmospheric systems, and related scientific-computing workflows.", `两项研究分别面向水处理与工业废气治理。OpenAqua 已发表于 Water Research；AeroNoxis 已被 ${workshop} 接收。`)}</p>
                        </article>
                    </div>

                    <h3 class="subheading">${t("Recent Updates", "近期动态")}</h3>
                    <div class="updates">
                        <article class="update-item">
                            <time datetime="2026-08">${t("August 2026", "2026 年 8 月")}</time>
                            <p>${t(
                                `${external(openAquaUrl, "OpenAqua")} is now published online in <em>Water Research</em>.`,
                                `${external(openAquaUrl, "OpenAqua")} 已发表于 <em>Water Research</em>。`
                            )}</p>
                        </article>
                        <article class="update-item">
                            <time datetime="2026-07">${t("July 2026", "2026 年 7 月")}</time>
                            <p>${t(
                                `${external(aeroNoxisUrl, "AeroNoxis")} accepted as a poster at ${workshop}.`,
                                `${external(aeroNoxisUrl, "AeroNoxis")} 被 ${workshop} 接收为 Poster。`
                            )}</p>
                        </article>
                        <article class="update-item">
                            <time datetime="2026-07">${t("July 2026", "2026 年 7 月")}</time>
                            <p>${t(
                                `Joined the ${external("https://aimm.szbl.ac.cn/", "AIMM Summer Research Program")} at SMART-SZBL.`,
                                `在深圳医学科学院-深圳湾实验室参加官方暑研，加入 ${external("https://aimm.szbl.ac.cn/", "AIMM")} 课题组。`
                            )}</p>
                        </article>
                        <article class="update-item">
                            <time datetime="2026-05">${t("May 2026", "2026 年 5 月")}</time>
                            <p>${t(
                                `Started working with LSlab / KUNLING on ${external("https://kunling-ai.github.io/", "TectonOS")}.`,
                                `加入 LAOSHAN国家重点实验室 / KUNLING，开展 ${external("https://kunling-ai.github.io/", "TectonOS")} 相关研究与开发。`
                            )}</p>
                        </article>
                        <article class="update-item">
                            <time datetime="2026-03">${t("March 2026", "2026 年 3 月")}</time>
                            <p>${t("Joined PKU Shenzhen EMBL Lab and began contributing to OpenAqua.", "加入北京大学深圳研究生院 EMBL Lab，参与 OpenAqua 项目。")}</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="education" data-panel="education" hidden>
                    <p class="eyebrow">${t("Academic Background", "双学位")}</p>
                    <h2 class="page-title">${t("Education", "教育背景")}</h2>
                    <p class="lead">${t("A joint double-degree pathway combining computer science and robotics: three years at OUC followed by fourth-year study at Heriot-Watt University's National Robotarium.", "就读于中国海洋大学与赫瑞瓦特大学的本科双学位项目。根据培养安排，前三年在中国海洋大学学习，第四年赴赫瑞瓦特大学英国国家机器人中心（National Robotarium）学习。")}</p>
                    <div class="education-list">
                        <article class="education-item">
                            <img class="institution-logo" src="${assetPrefix}img/ouc.png" alt="${t("Ocean University of China logo", "中国海洋大学校徽")}">
                            <div>
                                <h3>${t("Ocean University of China", "中国海洋大学")}</h3>
                                <p class="degree">${t("BEng in Computer Science · First three years of the joint double-degree pathway", "计算机科学与技术 · 本科（BEng）<br>培养安排：第 1–3 年在中国海洋大学学习")}</p>
                                <p class="date-line">2025 — 2029</p>
                            </div>
                        </article>
                        <article class="education-item">
                            <img class="institution-logo" src="${assetPrefix}img/hwu.png" alt="${t("Heriot-Watt University logo", "赫瑞瓦特大学校徽")}">
                            <div>
                                <h3>${t("Heriot-Watt University", "赫瑞瓦特大学")}</h3>
                                <p class="degree">${t("BEng in Robotics · Fourth-year study at the UK's National Robotarium", "机器人学（Robotics）· 本科（BEng）<br>培养安排：第 4 年赴英国国家机器人中心（National Robotarium）学习")}</p>
                                <p class="date-line">2025 — 2029</p>
                            </div>
                        </article>
                    </div>
                    <h3 class="subheading" id="coursework-heading">${t("Selected Coursework", "核心课程成绩")}</h3>
                    <table class="coursework-table" aria-labelledby="coursework-heading">
                        <thead>
                            <tr><th scope="col">${t("Course", "课程")}</th><th scope="col">${t("Grade", "成绩")}</th></tr>
                        </thead>
                        <tbody>
                            ${coursework.map(({ names, grade }) => `<tr><th scope="row">${t(...names)}</th><td><strong>${grade}</strong><span> / 100</span></td></tr>`).join("")}
                        </tbody>
                    </table>
                </section>

                <section class="page-panel" id="experience" data-panel="experience" hidden>
                    <p class="eyebrow">${t("Research Appointments", "实验室与项目")}</p>
                    <h2 class="page-title">${t("Research Experience", "研究经历")}</h2>
                    <div class="timeline">
                        <article class="experience-item">
                            <h3>${t("SMART-SZBL (Summer Internship)", "深圳医学科学院-深圳湾实验室（官方暑研）")} · ${external("https://aimm.szbl.ac.cn/", t("AIMM Summer Research Program", "AIMM 课题组"))}</h3>
                            <p class="experience-role">${t("Visiting Student · Dr. Yi Yang's Lab", "访问学生 · 杨弈老师课题组")}</p>
                            <p class="experience-date">${t("July–August 2026", "2026 年 7–8 月")}</p>
                            <p class="experience-detail">${t("Worked on optimizing molecular dynamics simulation models, visualizing research results, testing models, and building a website for users to access the models online.", "负责分子动力学模拟模型优化、科研成果可视化和模型测试，并搭建供用户在线使用模型的网站。")}</p>
                        </article>
                        <article class="experience-item">
                            <h3>${t("LSlab / KUNLING", "LAOSHAN国家重点实验室 / KUNLING")}</h3>
                            <p class="experience-role">${t("Research Assistant · TectonOS", "科研助理 · TectonOS")}</p>
                            <p class="experience-date">${t("May 2026 — Present", "2026 年 5 月至今")}</p>
                            <p class="experience-detail">${t("Leading core research and engineering for a geoscience research environment, including agent workflows, scientific-computing integration, and research infrastructure.", "主导 TectonOS 的核心研发，主要负责 Agent 工作流设计、科学计算工具集成和后端开发。")}</p>
                        </article>
                        <article class="experience-item">
                            <h3>${external("https://embl-pku.github.io/", t("Peking University Shenzhen · EMBL Lab", "北京大学深圳研究生院 · EMBL Lab"))}</h3>
                            <p class="experience-role">${t("Visiting Student · OpenAqua", "访问学生 · OpenAqua")}</p>
                            <p class="experience-date">${t("March 2026 — Present", "2026 年 3 月至今")}</p>
                            <p class="experience-detail">${t("Developing data and retrieval infrastructure for scientific agents, including structured EPA datasets, a RAG knowledge base, and manuscript visualizations.", "参与 OpenAqua 项目，负责 EPA 水处理数据整理、数据处理程序开发、RAG 知识库构建及论文图表绘制。")}</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="research" data-panel="research" hidden>
                    <p class="eyebrow">${t("Selected Work", "代表项目")}</p>
                    <h2 class="page-title">${t("Research", "研究项目")}</h2>
                    <p class="lead">${t("I primarily work on agent harness development and its practical applications in science.", "主要参与Agent Harness的开发，研究其在科学领域的实际应用")}</p>
                    <div class="research-list">
                        <article class="research-card featured">
                            <span class="card-domain">${t("Earth Science", "地球科学")}</span>
                            <h3>${external("https://kunling-ai.github.io/", "TectonOS")}</h3>
                            <p class="card-status">${t("Core research and engineering · ongoing", "核心研发 · 进行中")}</p>
                            <p>${t("A geoscience research environment connecting questions, models, simulation tools, data processing, and research outputs.", "面向地球科学的科研系统，集成数值模拟、数据处理和报告生成工具，通过 Agent 协调各环节的执行。")}</p>
                            <p class="contribution"><strong>${t("My contributions:", "个人贡献：")}</strong> ${t("agent harnesses and workflows, solver integrations, parameter and search spaces, backend systems, and scientific workflow design.", "负责 Agent 工作流和后端服务的设计与开发，以及科学计算求解器集成、模拟参数与搜索空间配置。")}</p>
                        </article>
                        <article class="research-card">
                            <span class="card-domain">${t("Water Treatment", "水处理")}</span>
                            <h3>${external(openAquaUrl, "OpenAqua")}</h3>
                            <p class="card-status">${t("Fourth author · Published in <em>Water Research</em>, 2026", "第四作者 · 已发表于 <em>Water Research</em>，2026")}</p>
                            <p>${t("A multi-agent, retrieval-augmented framework for designing water treatment trains with critic-based refinement.", "用于水处理工艺初步设计的多 Agent 框架，通过知识检索和方案评审，辅助生成与完善处理方案。")}</p>
                            <p class="contribution"><strong>${t("My contributions:", "个人贡献：")}</strong> ${t("EPA data processing and pipeline development, RAG knowledge-base construction, and technical visualizations.", "整理 EPA 水处理数据，开发数据处理程序，构建 RAG 知识库，并绘制论文图表。")}</p>
                        </article>
                        <article class="research-card">
                            <span class="card-domain">${t("Atmosphere &amp; Industry", "工业废气治理")}</span>
                            <h3>${external(aeroNoxisUrl, "AeroNoxis")}</h3>
                            <p class="card-status">${t("Second author", "第二作者")} · ${workshop} · Poster</p>
                            <p>${t("A retrieval-grounded multi-agent system for industrial waste-gas treatment design.", "基于知识检索的多 Agent 系统，结合领域知识和工程案例，辅助设计与评估工业废气处理工艺。")}</p>
                            <p class="contribution"><strong>${t("My contributions:", "个人贡献：")}</strong> ${t("data processing, knowledge-base construction, agent architecture, and all scientific visualizations.", "负责数据处理、知识库构建和 Agent 架构设计，并绘制全部可视化图表。")}</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="publications" data-panel="publications" hidden>
                    <p class="eyebrow">${t("Papers &amp; Systems", "论文与系统")}</p>
                    <h2 class="page-title">${t("Research Outputs", "论文与研究成果")}</h2>
                    <p class="lead">${t("Selected papers and research systems.", "以下列出已发表或被接收的论文，以及正在开发的科研系统。")}</p>
                    <div class="publication-list">
                        <article class="publication-card">
                            <span class="card-domain">${t("Journal Article", "期刊论文")}</span>
                            <h3 lang="en">${external(openAquaUrl, openAquaTitle)}</h3>
                            <p class="paper-authors" lang="en">Hanzhang Liu, Zhaorui Jiang, Huiling Zhong, <strong>Jinshuo Li</strong>, Wei Pang, Yingfang Yuan</p>
                            <p class="card-status"><em>Water Research</em> · 2026 · ${t("Published online · Fourth author", "第四作者")}</p>${t("", `
                            <p class="card-status">中科院 1 区 Top（环境科学与生态学，2025 版）<br>JCR Q1（水资源，2025） · 影响因子 12.8（2025）</p>`)}
                            <p>${t("Multi-agent retrieval and critic-based refinement for water treatment train design.", "将知识检索与多 Agent 协作应用于水处理工艺设计，并通过方案评审进行迭代改进。")}</p>
                            <p class="paper-links">${external(openAquaUrl, t("Paper · DOI", "论文 · DOI"))}</p>
                        </article>
                        <article class="publication-card">
                            <span class="card-domain">Workshop Paper</span>
                            <h3 lang="en">${external(aeroNoxisUrl, aeroNoxisTitle)}</h3>
                            <p class="paper-authors" lang="en">Hanzhang Liu, <strong>Jinshuo Li</strong>, Zhaorui Jiang</p>
                            <p class="card-status">${workshop} · Poster · ${t("Second author", "第二作者")}</p>
                            <p>${t("Retrieval-grounded multi-agent support for industrial waste-gas treatment design.", "结合知识检索与多 Agent 协作，辅助设计工业废气处理工艺。")}</p>
                            <p class="paper-links">${external(aeroNoxisUrl, "OpenReview")}</p>
                        </article>
                        <article class="publication-card">
                            <span class="card-domain">${t("Research System", "科研系统")}</span>
                            <h3>${external("https://kunling-ai.github.io/", "TectonOS")}</h3>
                            <p class="card-status">${t("Ongoing development", "持续开发中")}</p>
                            <p>${t("Agent harnesses, solver integration, parameter exploration, backend services, and scientific workflows for geoscience research.", "面向地球科学的科研系统，主要开发内容包括 Agent 工作流、科学计算工具集成、模拟参数搜索与后端服务。")}</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="awards" data-panel="awards" hidden>
                    <p class="eyebrow">${t("Selected Recognition", "荣誉与活动")}</p>
                    <h2 class="page-title">${t("Awards &amp; Activities", "荣誉与活动")}</h2>
                    <div class="award-list">
                        <article class="award-card">
                            <span class="award-year">${t("Award · 2026", "竞赛 · 2026")}</span>
                            <h3>${t("RUC Legal Rules Computer Expression Competition", "中国人民大学法律规则计算机表达大赛")}</h3>
                            <p>${t("Solo Developer · AI Agent Track · Ranked 14th / 203 teams (829 teams, 1,652 participants overall) · Prize Winner.", "独立开发 · AI Agent 赛道 · 203 支队伍中排名第 14，获奖。赛事总计 829 支队伍、1,652 名参赛者。")}</p>
                        </article>
                        <article class="award-card">
                            <span class="award-year">${t("Award · 2023", "竞赛 · 2023")}</span>
                            <h3>${t("ICC Innovation Capability Competition", "ICC 创新能力大赛")}</h3>
                            <p>${t("Provincial First Prize (High School) · Physics Category.", "高中阶段 · 物理类别 · 省一等奖。")}</p>
                        </article>
                        <article class="award-card">
                            <span class="award-year">${t("Award · 2023", "竞赛 · 2023")}</span>
                            <h3>${t("Shandong Province Debate Competition", "山东省辩论赛")}</h3>
                            <p>${t("Member of the Provincial Championship Team (High School).", "高中阶段 · 省冠军队成员。")}</p>
                        </article>
                        <article class="award-card">
                            <span class="award-year">${t("Activity", "社团活动")}</span>
                            <h3>${t("OUC Underwater Robotics Club", "中国海洋大学水下机器人社团")}</h3>
                            <p>${t("Club Member · Ocean University of China.", "社团成员。")}</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="contact" data-panel="contact" hidden>
                    <p class="eyebrow">${t("Get in Touch", "交流与联系")}</p>
                    <h2 class="page-title">${t("Contact", "联系我")}</h2>
                    <div class="contact-card">
                        <p>${t("I welcome conversations about AI for science, agent systems, scientific machine learning, and Earth-system intelligence.", "欢迎就科研 Agent、科学机器学习与地球科学相关研究交流或探讨合作。联系方式如下。")}</p>
                        <div class="contact-links">
                            <a href="mailto:jl4091@hw.ac.uk">jl4091@hw.ac.uk</a>
                            ${external("https://github.com/JinshuoLi-Jensen", "GitHub")}
                            ${external("https://www.linkedin.com/in/jinshuo-jensen-li-441361394", "LinkedIn")}
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <footer class="footer">${footerCopy}</footer>
    </div>`;
    activatePage(activePage);
}

function updateUrl(mode) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    url.hash = activePage;
    window.history[mode === "push" ? "pushState" : "replaceState"](
        { page: activePage, language }, "", `${url.pathname}${url.search}${url.hash}`
    );
}

function activatePage(requestedPage) {
    activePage = Object.hasOwn(pages, requestedPage) ? requestedPage : "home";
    for (const panel of app.querySelectorAll("[data-panel]")) {
        panel.hidden = panel.dataset.panel !== activePage;
    }
    for (const link of app.querySelectorAll("[data-page]")) {
        if (link.dataset.page === activePage) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    }
    const name = t("Jinshuo Li", "李金硕");
    document.title = `${activePage === "home" ? name : `${t(...pages[activePage])} · ${name}`} | ${t("Academic Homepage", "个人主页")}`;
    // Keep the selected tab reachable when the navigation row is horizontally scrollable.
    const selectedTab = app.querySelector(`.nav-link[data-page="${activePage}"]`);
    const navigation = app.querySelector(".nav-links");
    if (selectedTab && navigation) {
        const tabBounds = selectedTab.getBoundingClientRect();
        const navBounds = navigation.getBoundingClientRect();
        if (tabBounds.left < navBounds.left) navigation.scrollLeft -= navBounds.left - tabBounds.left;
        else if (tabBounds.right > navBounds.right) navigation.scrollLeft += tabBounds.right - navBounds.right;
    }
}

app.addEventListener("click", (event) => {
    const languageButton = event.target.closest("[data-language]");
    if (languageButton) {
        const nextLanguage = languageButton.dataset.language;
        if (nextLanguage === language) return;
        const scrollY = window.scrollY;
        language = nextLanguage;
        try { localStorage.setItem(languageKey, language); } catch { /* Storage is optional. */ }
        renderSite();
        updateUrl("push");
        app.querySelector(`[data-language="${language}"]`).focus({ preventScroll: true });
        window.scrollTo({ top: scrollY, behavior: "auto" });
        return;
    }
    const link = event.target.closest("[data-page]");
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    activatePage(link.dataset.page);
    updateUrl("push");
    window.scrollTo({ top: 0, behavior: "auto" });
});

function restoreLocation() {
    language = locationLanguage() || (savedLanguage() === "zh" ? "zh" : "en");
    activePage = window.location.hash.slice(1);
    renderSite();
}

window.addEventListener("popstate", restoreLocation);
window.addEventListener("hashchange", () => activatePage(window.location.hash.slice(1)));
// The hash selects a page; it should not jump its heading behind the sticky navigation on first load.
window.addEventListener("load", () => window.scrollTo({ top: 0, behavior: "auto" }), { once: true });
activePage = window.location.hash.slice(1);
renderSite();
updateUrl("replace");
