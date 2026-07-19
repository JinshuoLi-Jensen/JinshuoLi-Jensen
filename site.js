const app = document.querySelector("#app");
const assetPrefix = document.body.hasAttribute("data-asset-prefix")
    ? document.body.dataset.assetPrefix
    : "../";
const footerCopy = document.body.dataset.footerCopy
    || "© 2026 Jinshuo (Jensen) Li · Design option for local review";

app.innerHTML = `
    <div class="site-shell">
        <nav class="site-nav" aria-label="Primary navigation">
            <div class="nav-inner">
                <a class="brand" href="#home" data-page="home">Jinshuo Li</a>
                <div class="nav-links">
                    <a class="nav-link" href="#home" data-page="home">Home</a>
                    <a class="nav-link" href="#education" data-page="education">Education</a>
                    <a class="nav-link" href="#experience" data-page="experience">Experience</a>
                    <a class="nav-link" href="#research" data-page="research">Research</a>
                    <a class="nav-link" href="#publications" data-page="publications">Publications</a>
                    <a class="nav-link" href="#awards" data-page="awards">Awards</a>
                    <a class="nav-link" href="#contact" data-page="contact">Contact</a>
                </div>
            </div>
        </nav>

        <div class="profile-layout">
            <aside class="profile-column" aria-label="Profile summary">
                <img class="portrait" src="${assetPrefix}img/portrait.jpg" alt="Portrait of Jinshuo Li">
                <h1 class="profile-name">Jinshuo Li</h1>
                <p class="profile-role">Undergraduate Student</p>
                <p class="profile-school">Computer Science · Ocean University of China<br>Robotics · Heriot-Watt University</p>
                <div class="profile-links" aria-label="Profile links">
                    <a href="mailto:jl4091@hw.ac.uk">Email</a>
                    <a href="https://github.com/JinshuoLi-Jensen" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/jinshuo-jensen-li-441361394" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <div class="profile-panels">
                    <section class="profile-panel">
                        <h2>Research Focus</h2>
                        <p class="focus-name">Harness Engineering for AI Co-Scientists</p>
                        <p>Connecting agents with scientific knowledge, tools, simulations, and evaluation.</p>
                    </section>
                    <section class="profile-panel">
                        <h2>Research Toolkit</h2>
                        <div class="compact-list">
                            <span>Agent systems &amp; orchestration</span>
                            <span>RAG &amp; knowledge bases</span>
                            <span>Scientific-computing workflows</span>
                            <span>Data pipelines &amp; visualization</span>
                            <span>Python · C/C++ · Java · Git</span>
                        </div>
                    </section>
                </div>
            </aside>

            <main class="main-column" aria-live="polite">
                <section class="page-panel" id="home" data-panel="home">
                    <p class="eyebrow">Academic Homepage</p>
                    <h2 class="page-title">About</h2>
                    <p class="home-intro">I work on <strong>harness engineering for AI co-scientists</strong>: building the infrastructure that connects foundation models and agents with scientific knowledge, tools, simulations, data pipelines, and evaluation. My current applications span water treatment, atmospheric systems, and Earth science.</p>

                    <h3 class="subheading">Current Research</h3>
                    <div class="quick-grid">
                        <article class="quick-card">
                            <span class="quick-label">Primary Direction</span>
                            <h3>AI Co-Scientist Infrastructure</h3>
                            <p>Reliable agent workflows for scientific question formation, simulation, data processing, visual analysis, and research outputs.</p>
                        </article>
                        <article class="quick-card">
                            <span class="quick-label">Application Domains</span>
                            <h3>AI for Earth Systems</h3>
                            <p>Scientific agents for geoscience, water treatment, atmospheric systems, and related scientific-computing workflows.</p>
                        </article>
                    </div>

                    <h3 class="subheading">Recent Updates</h3>
                    <div class="updates">
                        <article class="update-item">
                            <time datetime="2026-07">July 2026</time>
                            <p>Joined the <a href="https://aimm.szbl.ac.cn/" target="_blank" rel="noopener noreferrer">AIMM Summer Research Program</a> at Shenzhen Bay Laboratory.</p>
                        </article>
                        <article class="update-item">
                            <time datetime="2026-05">May 2026</time>
                            <p>Started working with LSlab / KUNLING on <a href="https://kunling-ai.github.io/" target="_blank" rel="noopener noreferrer">TectonOS</a>.</p>
                        </article>
                        <article class="update-item">
                            <time datetime="2026-03">March 2026</time>
                            <p>Joined PKU Shenzhen EMBL Lab and began contributing to OpenAqua.</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="education" data-panel="education" hidden>
                    <p class="eyebrow">Academic Background</p>
                    <h2 class="page-title">Education</h2>
                    <p class="lead">A joint double-degree pathway combining computer science and robotics: three years at OUC followed by fourth-year study at Heriot-Watt University's National Robotarium.</p>
                    <div class="education-list">
                        <article class="education-item">
                            <img class="institution-logo" src="${assetPrefix}img/ouc.png" alt="Ocean University of China logo">
                            <div>
                                <h3>Ocean University of China</h3>
                                <p class="degree">BEng in Computer Science · First three years of the joint double-degree pathway</p>
                                <p class="date-line">2025 — 2029</p>
                            </div>
                        </article>
                        <article class="education-item">
                            <img class="institution-logo" src="${assetPrefix}img/hwu.png" alt="Heriot-Watt University logo">
                            <div>
                                <h3>Heriot-Watt University</h3>
                                <p class="degree">BEng in Robotics · Fourth-year study at the UK's National Robotarium</p>
                                <p class="date-line">2025 — 2029</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="experience" data-panel="experience" hidden>
                    <p class="eyebrow">Research Appointments</p>
                    <h2 class="page-title">Research Experience</h2>
                    <div class="timeline">
                        <article class="experience-item">
                            <h3>Shenzhen Bay Laboratory · <a href="https://aimm.szbl.ac.cn/" target="_blank" rel="noopener noreferrer">AIMM Summer Research Program</a></h3>
                            <p class="experience-role">Visiting Student · Dr. Yi Yang's Lab</p>
                            <p class="experience-date">Summer 2026 · Ongoing</p>
                            <p class="experience-detail">Ongoing summer research through the AI for Molecular Medicine program.</p>
                        </article>
                        <article class="experience-item">
                            <h3>LSlab / KUNLING</h3>
                            <p class="experience-role">Research Assistant · TectonOS</p>
                            <p class="experience-date">May 2026 — Present</p>
                            <p class="experience-detail">Leading core research and engineering for a geoscience research environment, including agent workflows, scientific-computing integration, and research infrastructure.</p>
                        </article>
                        <article class="experience-item">
                            <h3><a href="https://embl-pku.github.io/" target="_blank" rel="noopener noreferrer">Peking University Shenzhen · EMBL Lab</a></h3>
                            <p class="experience-role">Visiting Student · OpenAqua</p>
                            <p class="experience-date">March 2026 — Present</p>
                            <p class="experience-detail">Developing data and retrieval infrastructure for scientific agents, including structured EPA datasets, a RAG knowledge base, and manuscript visualizations.</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="research" data-panel="research" hidden>
                    <p class="eyebrow">Selected Work</p>
                    <h2 class="page-title">Research</h2>
                    <p class="lead">Scientific-agent infrastructure across Earth science, water treatment, and atmospheric systems.</p>
                    <div class="research-list">
                        <article class="research-card featured">
                            <span class="card-domain">Earth Science</span>
                            <h3><a href="https://kunling-ai.github.io/" target="_blank" rel="noopener noreferrer">TectonOS</a></h3>
                            <p class="card-status">Core research and engineering · ongoing</p>
                            <p>A geoscience research environment connecting questions, models, simulation tools, data processing, and research outputs.</p>
                            <p class="contribution"><strong>My contributions:</strong> agent harnesses and workflows, solver integrations, parameter and search spaces, backend systems, and scientific workflow design.</p>
                        </article>
                        <article class="research-card">
                            <span class="card-domain">Water Treatment</span>
                            <h3>OpenAqua</h3>
                            <p class="card-status">Fourth author · under revision at <em>Water Research</em></p>
                            <p>A multi-agent, retrieval-augmented framework for designing water treatment trains with critic-based refinement.</p>
                            <p class="contribution"><strong>My contributions:</strong> EPA data processing and pipeline development, RAG knowledge-base construction, and technical visualizations.</p>
                        </article>
                        <article class="research-card">
                            <span class="card-domain">Atmosphere &amp; Industry</span>
                            <h3>Atmospheric &amp; Industrial Waste-Gas Agent</h3>
                            <p class="card-status">Second author · submitted to a KDD 2026 workshop</p>
                            <p>A retrieval-grounded multi-agent system for industrial waste-gas treatment design. Details remain limited during anonymous review.</p>
                            <p class="contribution"><strong>My contributions:</strong> data processing, knowledge-base construction, agent architecture, and all scientific visualizations.</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="publications" data-panel="publications" hidden>
                    <p class="eyebrow">Manuscripts &amp; Systems</p>
                    <h2 class="page-title">Research Outputs</h2>
                    <p class="lead">Current manuscripts and research systems. Submission status is stated conservatively while work remains under review or revision.</p>
                    <div class="publication-list">
                        <article class="publication-card">
                            <span class="card-domain">Manuscript</span>
                            <h3>OpenAqua</h3>
                            <p class="card-status">Fourth author · Under revision at <em>Water Research</em></p>
                            <p>Multi-agent retrieval and critic-based refinement for water treatment train design.</p>
                        </article>
                        <article class="publication-card">
                            <span class="card-domain">Workshop Submission</span>
                            <h3>Atmospheric &amp; Industrial Waste-Gas Agent</h3>
                            <p class="card-status">Second author · Submitted to a KDD 2026 workshop · Anonymous review</p>
                            <p>Retrieval-grounded multi-agent support for industrial waste-gas treatment design.</p>
                        </article>
                        <article class="publication-card">
                            <span class="card-domain">Research System</span>
                            <h3><a href="https://kunling-ai.github.io/" target="_blank" rel="noopener noreferrer">TectonOS</a></h3>
                            <p class="card-status">Ongoing development</p>
                            <p>Agent harnesses, solver integration, parameter exploration, backend services, and scientific workflows for geoscience research.</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="awards" data-panel="awards" hidden>
                    <p class="eyebrow">Selected Recognition</p>
                    <h2 class="page-title">Awards &amp; Activities</h2>
                    <div class="award-list">
                        <article class="award-card">
                            <span class="award-year">Award · 2026</span>
                            <h3>RUC Legal Rules Computer Expression Competition</h3>
                            <p>Solo Developer · AI Agent Track · Ranked 14th / 203 teams (829 teams, 1,652 participants overall) · Prize Winner.</p>
                        </article>
                        <article class="award-card">
                            <span class="award-year">Award · 2023</span>
                            <h3>ICC Innovation Capability Competition</h3>
                            <p>Provincial First Prize (High School) · Physics Category.</p>
                        </article>
                        <article class="award-card">
                            <span class="award-year">Award · 2023</span>
                            <h3>Shandong Province Debate Competition</h3>
                            <p>Member of the Provincial Championship Team (High School).</p>
                        </article>
                        <article class="award-card">
                            <span class="award-year">Activity</span>
                            <h3>OUC Underwater Robotics Club</h3>
                            <p>Club Member · Ocean University of China.</p>
                        </article>
                    </div>
                </section>

                <section class="page-panel" id="contact" data-panel="contact" hidden>
                    <p class="eyebrow">Get in Touch</p>
                    <h2 class="page-title">Contact</h2>
                    <div class="contact-card">
                        <p>I welcome conversations about AI for science, agent systems, scientific machine learning, and Earth-system intelligence.</p>
                        <div class="contact-links">
                            <a href="mailto:jl4091@hw.ac.uk">jl4091@hw.ac.uk</a>
                            <a href="https://github.com/JinshuoLi-Jensen" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/jinshuo-jensen-li-441361394" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <footer class="footer">${footerCopy}</footer>
    </div>
`;

const validPages = new Set(
    Array.from(document.querySelectorAll("[data-panel]"), (panel) => panel.dataset.panel)
);
const pageLinks = Array.from(document.querySelectorAll("[data-page]"));
const panels = Array.from(document.querySelectorAll("[data-panel]"));

function activatePage(requestedPage, historyMode = "none") {
    const page = validPages.has(requestedPage) ? requestedPage : "home";

    for (const panel of panels) {
        panel.hidden = panel.dataset.panel !== page;
    }

    for (const link of pageLinks) {
        const isCurrent = link.dataset.page === page;
        if (isCurrent) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    }

    const url = `${window.location.pathname}${window.location.search}#${page}`;
    if (historyMode === "push") {
        window.history.pushState({ page }, "", url);
    } else if (historyMode === "replace") {
        window.history.replaceState({ page }, "", url);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = `${page === "home" ? "Jinshuo Li" : `${page[0].toUpperCase()}${page.slice(1)} · Jinshuo Li`} | Academic Homepage`;
}

for (const link of pageLinks) {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        activatePage(link.dataset.page, "push");
    });
}

window.addEventListener("popstate", () => {
    activatePage(window.location.hash.slice(1));
});

activatePage(window.location.hash.slice(1), "replace");
