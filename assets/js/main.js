/* 
  Av_eSAFE Gurukul - Core Logic
  Handles Components, Navigation, and Animations
*/

// Define Curriculum Data (Global access for Certificate, Sidebar & Profile)
// Moved outside loadComponents to ensure immediate availability
window.curriculum = {
    'html': [
        { title: "HTML Tutorial", items: [
            { name: "Introduction", url: "/tutorials/html/intro.html" },
            { name: "Editors", url: "/tutorials/html/intro.html?topic=editors" },
            { name: "Basic", url: "/tutorials/html/intro.html?topic=basic" },
            { name: "Elements", url: "/tutorials/html/intro.html?topic=elements" },
            { name: "Attributes", url: "/tutorials/html/intro.html?topic=attributes" },
            { name: "Headings", url: "/tutorials/html/intro.html?topic=headings" },
            { name: "Paragraphs", url: "/tutorials/html/intro.html?topic=paragraphs" },
            { name: "Styles", url: "/tutorials/html/intro.html?topic=styles" },
            { name: "Formatting", url: "/tutorials/html/intro.html?topic=formatting" },
            { name: "Quotations", url: "/tutorials/html/intro.html?topic=quotations" },
            { name: "Comments", url: "/tutorials/html/intro.html?topic=comments" },
            { name: "Colors", url: "/tutorials/html/intro.html?topic=colors" },
            { name: "CSS", url: "/tutorials/html/intro.html?topic=css" },
            { name: "Links", url: "/tutorials/html/intro.html?topic=links" },
            { name: "Images", url: "/tutorials/html/intro.html?topic=images" },
            { name: "Favicon", url: "/tutorials/html/intro.html?topic=favicon" },
            { name: "Tables", url: "/tutorials/html/intro.html?topic=tables" },
            { name: "Lists", url: "/tutorials/html/intro.html?topic=lists" },
            { name: "Block & Inline", url: "/tutorials/html/intro.html?topic=block" },
            { name: "Classes", url: "/tutorials/html/intro.html?topic=classes" },
            { name: "Id", url: "/tutorials/html/intro.html?topic=id" },
            { name: "Iframes", url: "/tutorials/html/intro.html?topic=iframes" },
            { name: "JavaScript", url: "/tutorials/html/intro.html?topic=javascript" },
            { name: "File Paths", url: "/tutorials/html/intro.html?topic=filepaths" },
            { name: "Head", url: "/tutorials/html/intro.html?topic=head" },
            { name: "Layout", url: "/tutorials/html/intro.html?topic=layout" },
            { name: "Responsive", url: "/tutorials/html/intro.html?topic=responsive" },
            { name: "Computercode", url: "/tutorials/html/intro.html?topic=computercode" },
            { name: "Semantics", url: "/tutorials/html/intro.html?topic=semantics" },
            { name: "Style Guide", url: "/tutorials/html/intro.html?topic=styleguide" },
            { name: "Entities", url: "/tutorials/html/intro.html?topic=entities" },
            { name: "Symbols", url: "/tutorials/html/intro.html?topic=symbols" },
            { name: "Emojis", url: "/tutorials/html/intro.html?topic=emojis" },
            { name: "Charset", url: "/tutorials/html/intro.html?topic=charset" },
            { name: "URL Encode", url: "/tutorials/html/intro.html?topic=urlencode" },
            { name: "XHTML", url: "/tutorials/html/intro.html?topic=xhtml" }
        ]},
        { title: "Forms & Media", items: [
            { name: "Forms", url: "/tutorials/html/intro.html?topic=forms" },
            { name: "Form Attributes", url: "/tutorials/html/intro.html?topic=form_attributes" },
            { name: "Form Elements", url: "/tutorials/html/intro.html?topic=form_elements" },
            { name: "Input Types", url: "/tutorials/html/intro.html?topic=input_types" },
            { name: "Input Attributes", url: "/tutorials/html/intro.html?topic=input_attributes" },
            { name: "Input Form Attributes", url: "/tutorials/html/intro.html?topic=input_form_attributes" }
        ]},
        { title: "HTML Graphics", items: [
            { name: "Canvas", url: "/tutorials/html/intro.html?topic=canvas" },
            { name: "SVG", url: "/tutorials/html/intro.html?topic=svg" }
        ]},
        { title: "HTML Media", items: [
            { name: "Media", url: "/tutorials/html/intro.html?topic=media" },
            { name: "Video", url: "/tutorials/html/intro.html?topic=video" },
            { name: "Audio", url: "/tutorials/html/intro.html?topic=audio" },
            { name: "Plug-ins", url: "/tutorials/html/intro.html?topic=plugins" },
            { name: "YouTube", url: "/tutorials/html/intro.html?topic=youtube" }
        ]},
        { title: "HTML APIs", items: [
            { name: "Geolocation", url: "/tutorials/html/intro.html?topic=geolocation" },
            { name: "Drag/Drop", url: "/tutorials/html/intro.html?topic=dragdrop" },
            { name: "Web Storage", url: "/tutorials/html/intro.html?topic=webstorage" },
            { name: "Web Workers", url: "/tutorials/html/intro.html?topic=webworkers" },
            { name: "SSE", url: "/tutorials/html/intro.html?topic=sse" }
        ]}
    ],
    'css': [
        { title: "CSS Tutorial", items: [
            { name: "Syntax", url: "/tutorials/css/index.html" },
            { name: "Selectors", url: "/tutorials/css/index.html?topic=css_selectors" },
            { name: "How To", url: "/tutorials/css/index.html?topic=css_howto" },
            { name: "Comments", url: "/tutorials/css/index.html?topic=css_comments" },
            { name: "Colors", url: "/tutorials/css/index.html?topic=css_colors" },
            { name: "Backgrounds", url: "/tutorials/css/index.html?topic=css_backgrounds" },
            { name: "Borders", url: "/tutorials/css/index.html?topic=css_borders" },
            { name: "Margins", url: "/tutorials/css/index.html?topic=css_margins" },
            { name: "Padding", url: "/tutorials/css/index.html?topic=css_padding" }
        ]},
        { title: "CSS Layout", items: [
            { name: "Box Model", url: "/tutorials/css/index.html?topic=css_boxmodel" },
            { name: "Flexbox", url: "/tutorials/css/index.html?topic=css_flexbox" },
            { name: "Grid", url: "/tutorials/css/index.html?topic=css_grid" },
            { name: "Responsive", url: "/tutorials/css/index.html?topic=css_responsive" }
        ]}
    ],
    'js': [
        { title: "JS Tutorial", items: [
            { name: "JS Intro", url: "/tutorials/js/index.html" },
            { name: "JS Output", url: "/tutorials/js/index.html?topic=js_output" },
            { name: "JS Statements", url: "/tutorials/js/index.html?topic=js_statements" },
            { name: "JS Syntax", url: "/tutorials/js/index.html?topic=js_syntax" },
            { name: "JS Variables", url: "/tutorials/js/index.html?topic=js_variables" },
            { name: "JS Operators", url: "/tutorials/js/index.html?topic=js_operators" },
            { name: "JS Arithmetic", url: "/tutorials/js/index.html?topic=js_arithmetic" },
            { name: "JS Data Types", url: "/tutorials/js/index.html?topic=js_datatypes" }
        ]},
        { title: "JS Objects", items: [
            { name: "Functions", url: "/tutorials/js/index.html?topic=js_functions" },
            { name: "Objects", url: "/tutorials/js/index.html?topic=js_objects" },
            { name: "Events", url: "/tutorials/js/index.html?topic=js_events" },
            { name: "Strings", url: "/tutorials/js/index.html?topic=js_strings" }
        ]}
    ],
    'python': [
        { title: "Python Tutorial", items: [
            { name: "Python Intro", url: "/tutorials/python/index.html" },
            { name: "Get Started", url: "/tutorials/python/index.html?topic=py_getstarted" },
            { name: "Syntax", url: "/tutorials/python/index.html?topic=py_syntax" },
            { name: "Comments", url: "/tutorials/python/index.html?topic=py_comments" },
            { name: "Variables", url: "/tutorials/python/index.html?topic=py_variables" },
            { name: "Data Types", url: "/tutorials/python/index.html?topic=py_datatypes" },
            { name: "Numbers", url: "/tutorials/python/index.html?topic=py_numbers" },
            { name: "Casting", url: "/tutorials/python/index.html?topic=py_casting" },
            { name: "Strings", url: "/tutorials/python/index.html?topic=py_strings" },
            { name: "Booleans", url: "/tutorials/python/index.html?topic=py_booleans" },
            { name: "Operators", url: "/tutorials/python/index.html?topic=py_operators" },
            { name: "Lists", url: "/tutorials/python/index.html?topic=py_lists" },
            { name: "Tuples", url: "/tutorials/python/index.html?topic=py_tuples" },
            { name: "Sets", url: "/tutorials/python/index.html?topic=py_sets" },
            { name: "Dictionaries", url: "/tutorials/python/index.html?topic=py_dictionaries" },
            { name: "If...Else", url: "/tutorials/python/index.html?topic=py_ifelse" },
            { name: "While Loops", url: "/tutorials/python/index.html?topic=py_while" },
            { name: "For Loops", url: "/tutorials/python/index.html?topic=py_for" },
            { name: "Functions", url: "/tutorials/python/index.html?topic=py_functions" },
            { name: "Lambda", url: "/tutorials/python/index.html?topic=py_lambda" },
            { name: "Classes/Objects", url: "/tutorials/python/index.html?topic=py_classes" },
            { name: "Inheritance", url: "/tutorials/python/index.html?topic=py_inheritance" },
            { name: "Iterators", url: "/tutorials/python/index.html?topic=py_iterators" },
            { name: "Scope", url: "/tutorials/python/index.html?topic=py_scope" },
            { name: "Modules", url: "/tutorials/python/index.html?topic=py_modules" },
            { name: "Dates", url: "/tutorials/python/index.html?topic=py_dates" },
            { name: "Math", url: "/tutorials/python/index.html?topic=py_math" },
            { name: "JSON", url: "/tutorials/python/index.html?topic=py_json" },
            { name: "RegEx", url: "/tutorials/python/index.html?topic=py_regex" },
            { name: "PIP", url: "/tutorials/python/index.html?topic=py_pip" },
            { name: "Try...Except", url: "/tutorials/python/index.html?topic=py_tryexcept" },
            { name: "User Input", url: "/tutorials/python/index.html?topic=py_userinput" },
            { name: "String Formatting", url: "/tutorials/python/index.html?topic=py_stringformatting" }
        ]}
    ],
    'sql': [
        { title: "SQL Tutorial", items: [
            { name: "SQL Intro", url: "/tutorials/sql/index.html" },
            { name: "SQL Syntax", url: "/tutorials/sql/index.html?topic=sql_syntax" },
            { name: "SQL Select", url: "/tutorials/sql/index.html?topic=sql_select" },
            { name: "SQL Select Distinct", url: "/tutorials/sql/index.html?topic=sql_distinct" },
            { name: "SQL Where", url: "/tutorials/sql/index.html?topic=sql_where" },
            { name: "SQL And, Or, Not", url: "/tutorials/sql/index.html?topic=sql_and_or" },
            { name: "SQL Order By", url: "/tutorials/sql/index.html?topic=sql_orderby" },
            { name: "SQL Insert Into", url: "/tutorials/sql/index.html?topic=sql_insert" },
            { name: "SQL Null Values", url: "/tutorials/sql/index.html?topic=sql_null" },
            { name: "SQL Update", url: "/tutorials/sql/index.html?topic=sql_update" },
            { name: "SQL Delete", url: "/tutorials/sql/index.html?topic=sql_delete" },
            { name: "SQL Select Top", url: "/tutorials/sql/index.html?topic=sql_top" },
            { name: "SQL Min and Max", url: "/tutorials/sql/index.html?topic=sql_minmax" },
            { name: "SQL Count, Avg, Sum", url: "/tutorials/sql/index.html?topic=sql_count" },
            { name: "SQL Like", url: "/tutorials/sql/index.html?topic=sql_like" },
            { name: "SQL Wildcards", url: "/tutorials/sql/index.html?topic=sql_wildcards" },
            { name: "SQL In", url: "/tutorials/sql/index.html?topic=sql_in" },
            { name: "SQL Between", url: "/tutorials/sql/index.html?topic=sql_between" },
            { name: "SQL Aliases", url: "/tutorials/sql/index.html?topic=sql_aliases" },
            { name: "SQL Joins", url: "/tutorials/sql/index.html?topic=sql_joins" },
            { name: "SQL Inner Join", url: "/tutorials/sql/index.html?topic=sql_innerjoin" },
            { name: "SQL Left Join", url: "/tutorials/sql/index.html?topic=sql_leftjoin" },
            { name: "SQL Right Join", url: "/tutorials/sql/index.html?topic=sql_rightjoin" },
            { name: "SQL Full Join", url: "/tutorials/sql/index.html?topic=sql_fulljoin" },
            { name: "SQL Self Join", url: "/tutorials/sql/index.html?topic=sql_selfjoin" },
            { name: "SQL Union", url: "/tutorials/sql/index.html?topic=sql_union" },
            { name: "SQL Group By", url: "/tutorials/sql/index.html?topic=sql_groupby" },
            { name: "SQL Having", url: "/tutorials/sql/index.html?topic=sql_having" },
            { name: "SQL Exists", url: "/tutorials/sql/index.html?topic=sql_exists" },
            { name: "SQL Any, All", url: "/tutorials/sql/index.html?topic=sql_any" },
            { name: "SQL Select Into", url: "/tutorials/sql/index.html?topic=sql_selectinto" },
            { name: "SQL Insert Into Select", url: "/tutorials/sql/index.html?topic=sql_insertintoselect" },
            { name: "SQL Case", url: "/tutorials/sql/index.html?topic=sql_case" },
            { name: "SQL Null Functions", url: "/tutorials/sql/index.html?topic=sql_nullfunc" },
            { name: "SQL Stored Procedures", url: "/tutorials/sql/index.html?topic=sql_storedproc" },
            { name: "SQL Comments", url: "/tutorials/sql/index.html?topic=sql_comments" },
            { name: "SQL Operators", url: "/tutorials/sql/index.html?topic=sql_operators" }
        ]}
    ],
    'git': [
        { title: "Git Tutorial", items: [
            { name: "Git Intro", url: "/tutorials/git/index.html" },
            { name: "Git Get Started", url: "/tutorials/git/index.html?topic=git_getstarted" },
            { name: "Git New Files", url: "/tutorials/git/index.html?topic=git_newfiles" },
            { name: "Git Staging", url: "/tutorials/git/index.html?topic=git_staging" },
            { name: "Git Commit", url: "/tutorials/git/index.html?topic=git_commit" },
            { name: "Git Branch", url: "/tutorials/git/index.html?topic=git_branch" },
            { name: "Git Checkout", url: "/tutorials/git/index.html?topic=git_checkout" },
            { name: "Git Merge", url: "/tutorials/git/index.html?topic=git_merge" },
            { name: "Git Remote", url: "/tutorials/git/index.html?topic=git_remote" },
            { name: "Git Push", url: "/tutorials/git/index.html?topic=git_push" },
            { name: "Git Pull", url: "/tutorials/git/index.html?topic=git_pull" },
            { name: "GitHub Flow", url: "/tutorials/git/index.html?topic=github_flow" }
        ]}
    ],
    'java': [
        { title: "Java Tutorial", items: [
            { name: "Java Intro", url: "/tutorials/java/index.html" },
            { name: "Java Syntax", url: "/tutorials/java/index.html?topic=java_syntax" },
            { name: "Java Output", url: "/tutorials/java/index.html?topic=java_output" },
            { name: "Java Comments", url: "/tutorials/java/index.html?topic=java_comments" },
            { name: "Java Variables", url: "/tutorials/java/index.html?topic=java_variables" },
            { name: "Java Data Types", url: "/tutorials/java/index.html?topic=java_datatypes" },
            { name: "Java Type Casting", url: "/tutorials/java/index.html?topic=java_typecasting" },
            { name: "Java Operators", url: "/tutorials/java/index.html?topic=java_operators" },
            { name: "Java Strings", url: "/tutorials/java/index.html?topic=java_strings" },
            { name: "Java Math", url: "/tutorials/java/index.html?topic=java_math" },
            { name: "Java Booleans", url: "/tutorials/java/index.html?topic=java_booleans" },
            { name: "Java If...Else", url: "/tutorials/java/index.html?topic=java_ifelse" },
            { name: "Java Switch", url: "/tutorials/java/index.html?topic=java_switch" },
            { name: "Java While Loop", url: "/tutorials/java/index.html?topic=java_while" },
            { name: "Java For Loop", url: "/tutorials/java/index.html?topic=java_for" },
            { name: "Java Arrays", url: "/tutorials/java/index.html?topic=java_arrays" }
        ]}
    ],
    'methodologies': [
        { title: "SDLC Models", items: [
            { name: "Intro", url: "/tutorials/methodologies/index.html" },
            { name: "Waterfall", url: "/tutorials/methodologies/index.html?topic=waterfall" },
            { name: "Agile", url: "/tutorials/methodologies/index.html?topic=agile" },
            { name: "DevOps", url: "/tutorials/methodologies/index.html?topic=devops" },
            { name: "Lean", url: "/tutorials/methodologies/index.html?topic=lean" },
            { name: "Spiral", url: "/tutorials/methodologies/index.html?topic=spiral" },
            { name: "V-Model", url: "/tutorials/methodologies/index.html?topic=vmodel" }
        ]},
        { title: "Agile Frameworks", items: [
            { name: "Scrum", url: "/tutorials/methodologies/index.html?topic=scrum" },
            { name: "Kanban", url: "/tutorials/methodologies/index.html?topic=kanban" },
            { name: "XP (Extreme)", url: "/tutorials/methodologies/index.html?topic=xp" }
        ]}
    ]
};

// Helper for user-specific storage
window.getUserKey = function(baseKey) {
    try {
        const session = JSON.parse(localStorage.getItem('user_session'));
        if (session && session.email) {
            return `${session.email}_${baseKey}`;
        }
    } catch (e) {}
    return baseKey;
};

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    initVisuals();
    loadPageContent(); // Load dynamic content if ?topic= exists
    initAnimations();
    initSearch(); // Initialize search functionality
    markPageAsVisited(); // Track progress (Moved up to ensure state is ready for nav buttons)
    addNavigationButtons(); // Initialize navigation buttons
    initDarkMode(); // Initialize Dark Mode
    initCopyButtons(); // Initialize Copy Code buttons
    window.resetProgress = resetProgress; // Expose to global scope
    window.logout = logout; // Expose to global scope
    window.openAdminCertificate = openAdminCertificate; // Expose to global scope
});

// --- Component System ---
function loadComponents() {
    // 1. Inject Navbar
    // Calculate root path dynamically to fix links in subfolders
    const isTutorial = window.location.pathname.includes('/tutorials/');
    const root = isTutorial ? '../../' : '';

    // Check User Session
    const userSession = JSON.parse(localStorage.getItem('user_session'));
    const authLink = userSession 
        ? `<a href="${root}profile.html" class="profile-toggle" title="My Profile">👤</a>`
        : `<a href="${root}login.html" class="btn-small" style="margin-left: 1rem; margin-top: 0; padding: 0.5rem 1rem; text-decoration: none; font-size: 0.9rem;">Login</a>`;


    const headerHTML = `
        <div class="brand">
            Av_eSAFE <span>Gurukul</span>
        </div>
        <nav class="nav-links">
            <a href="${root}index.html">Home</a>
            <a href="${root}roadmap.html">Roadmap</a>
            <a href="${root}tutorials/html/intro.html">HTML</a>
            <a href="${root}tutorials/css/index.html">CSS</a>
            <a href="${root}tutorials/js/index.html">JavaScript</a>
            <a href="${root}tutorials/java/index.html">Java</a>
            <a href="${root}tutorials/python/index.html">Python</a>
            <a href="${root}tutorials/sql/index.html">SQL</a>
            <a href="${root}tutorials/git/index.html">Git</a>
            <a href="${root}tutorials/methodologies/index.html">Methodology</a>
        </nav>
        <div class="menu-toggle" onclick="toggleSidebar()">☰</div>
        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search tutorials...">
        </div>
        <button class="theme-toggle" title="Toggle Dark Mode">🌙</button>
        ${authLink}
    `;
    
    const header = document.querySelector('header');
    if(header) header.innerHTML = headerHTML;

    // Inject Progress Bar on tutorial pages
    if (isTutorial) {
        const progressBarHTML = `
            <div class="progress-container">
                <div id="progressBar" class="progress-bar"></div>
            </div>
        `;
        header.insertAdjacentHTML('afterend', progressBarHTML);
    }

    // 2. Inject Sidebar (Only if sidebar container exists)
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        const path = window.location.pathname.toLowerCase();
        let courseType = '';

        // Determine context based on URL
        if (path.includes('/html/')) courseType = 'html';
        else if (path.includes('/css/')) courseType = 'css';
        else if (path.includes('/js/')) courseType = 'js';
        else if (path.includes('/python/')) courseType = 'python';
        else if (path.includes('/sql/')) courseType = 'sql';
        else if (path.includes('/java/')) courseType = 'java';
        else if (path.includes('/git/')) courseType = 'git';
        else if (path.includes('/methodologies/')) courseType = 'methodologies';

        // Render Sidebar
        let sidebarHTML = '';
        // Add Back to Home link for better mobile navigation
        sidebarHTML += `<a href="${root}index.html" style="margin-bottom: 1rem; color: var(--primary); font-weight: 700; border: 1px solid var(--glass-border);">&larr; Back to Home</a>`;

        const links = window.curriculum[courseType] || [];
        const completedTopics = JSON.parse(localStorage.getItem(window.getUserKey('completedTopics'))) || [];
        
        links.forEach(section => {
            sidebarHTML += `<h4>${section.title}</h4>`;
            section.items.forEach(link => {
                // Fix pathing: remove leading slash if present, then prepend root
                const relativeLink = link.url.startsWith('/') ? link.url.substring(1) : link.url;
                const finalUrl = root + relativeLink;
                
                // Generate unique ID for progress tracking (simple URL based)
                const topicId = link.url;

                // Check if current URL (including query params) matches link
                const currentFullUrl = window.location.pathname + window.location.search;
                const isActive = (currentFullUrl.endsWith(link.url) || (link.url.endsWith(path) && window.location.search === '')) ? 'active' : '';
                const isCompleted = completedTopics.includes(topicId) ? 'completed' : '';
                
                sidebarHTML += `<a href="${finalUrl}" class="${isActive} ${isCompleted}">${link.name}</a>`;
            });
        });
        sidebar.innerHTML = sidebarHTML;
    }

    // 3. Inject Footer
    let footer = document.querySelector('footer');
    if (!footer) {
        footer = document.createElement('footer');
        document.body.appendChild(footer);
    }
    
    if (isTutorial) {
        // Short Footer for Tutorial Pages
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-bottom" style="border-top: none; padding-top: 0;">
                    <p>A product of <strong>Av_eSAFE Company</strong> &bull; Founder: <strong>Abhinav Utkarsh</strong></p>
                    <p class="copyright">&copy; ${new Date().getFullYear()} Av_eSAFE Gurukul. All rights reserved.</p>
                    <div style="margin-top: 1rem; display: flex; gap: 10px; justify-content: center;">
                        <button onclick="resetProgress()" class="btn-small" style="background: #ef4444; margin-top: 0; border: none; cursor: pointer;">Reset Progress</button>
                        <button onclick="openAdminCertificate('${root}')" class="btn-small" style="background: #3b82f6; margin-top: 0; border: none; cursor: pointer;">Admin Certificate</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Full Footer for Landing Page
        footer.innerHTML = `
            <div class="footer-container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <div class="brand">Av_eSAFE <span>Gurukul</span></div>
                        <p>Empowering developers with next-gen learning tools. Built for the future of coding.</p>
                    </div>
                    <div class="footer-links">
                        <h4>Platform</h4>
                        <a href="${root}index.html">Home</a>
                        <a href="${root}roadmap.html">Roadmap</a>
                        <a href="${root}tutorials/html/intro.html">HTML</a>
                        <a href="${root}tutorials/css/index.html">CSS</a>
                    </div>
                    <div class="footer-links">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="${root}contact.html">Contact</a>
                        <a href="${root}privacy.html">Privacy Policy</a>
                    </div>
                    <div class="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Join our newsletter for the latest tutorials.</p>
                        <div class="newsletter-box">
                            <input type="email" placeholder="Enter your email">
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>A product of <strong>Av_eSAFE Company</strong> &bull; Founder: <strong>Abhinav Utkarsh</strong></p>
                    <p class="copyright">&copy; ${new Date().getFullYear()} Av_eSAFE Gurukul. All rights reserved.</p>
                    <div style="margin-top: 1rem; display: flex; gap: 10px; justify-content: center;">
                        <button onclick="resetProgress()" class="btn-small" style="background: #ef4444; margin-top: 0; border: none; cursor: pointer;">Reset Progress</button>
                        <button onclick="openAdminCertificate('${root}')" class="btn-small" style="background: #3b82f6; margin-top: 0; border: none; cursor: pointer;">Admin Certificate</button>
                    </div>
                </div>
            </div>
        `;
    }
}

// --- Dynamic Content Engine ---
const tutorialData = {
    'editors': {
        title: "HTML Editors",
        content: `<h1>HTML Editors</h1>
            <p>A simple text editor is all you need to learn HTML.</p>
            <h2>Learn HTML Using Notepad or TextEdit</h2>
            <p>Web pages can be created and modified by using professional HTML editors like VS Code.</p>
            <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'basic': {
        title: "HTML Basic Examples",
        content: `<h1>HTML Basic Examples</h1>
            <p>In this chapter we will show some basic HTML examples.</p>
            <h2>HTML Documents</h2>
            <p>All HTML documents must start with a document type declaration: <code>&lt;!DOCTYPE html&gt;</code>.</p>
            <p>The HTML document itself begins with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>.</p>
            <p>The visible part of the HTML document is between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code>.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which HTML tag is the container for all other HTML tags?",
            options: ["&lt;body&gt;", "&lt;html&gt;", "&lt;head&gt;", "&lt;doctype&gt;"],
            answer: 1
        }
    },
    'elements': {
        title: "HTML Elements",
        content: `<h1>HTML Elements</h1>
            <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
            <h2>Nested HTML Elements</h2>
            <p>HTML elements can be nested (this means that elements can contain other elements).</p>
            <p>All HTML documents consist of nested HTML elements.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "What is the correct end tag for a paragraph?",
            options: ["&lt;/p&gt;", "&lt;end&gt;", "&lt;p/&gt;", "&lt;/paragraph&gt;"],
            answer: 0
        }
    },
    'attributes': {
        title: "HTML Attributes",
        content: `<h1>HTML Attributes</h1>
            <p>HTML attributes provide additional information about HTML elements.</p>
            <h2>The href Attribute</h2>
            <p>The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:</p>
            <pre><code>&lt;a href="https://www.google.com"&gt;Visit Google&lt;/a&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Where are attributes specified in an HTML element?",
            options: ["In the start tag", "In the end tag", "In the content", "Anywhere"],
            answer: 0
        }
    },
    'headings': {
        title: "HTML Headings",
        content: `<h1>HTML Headings</h1>
            <p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.</p>
            <p><code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.</p>
            <pre><code>&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
&lt;h4&gt;Heading 4&lt;/h4&gt;
&lt;h5&gt;Heading 5&lt;/h5&gt;
&lt;h6&gt;Heading 6&lt;/h6&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which HTML tag is used for the largest heading?",
            options: ["&lt;h6&gt;", "&lt;head&gt;", "&lt;h1&gt;", "&lt;header&gt;"],
            answer: 2
        }
    },
    'paragraphs': {
        title: "HTML Paragraphs",
        content: `<h1>HTML Paragraphs</h1>
            <p>The HTML <code>&lt;p&gt;</code> element defines a paragraph.</p>
            <p>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>
            <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;p&gt;This is another paragraph.&lt;/p&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which tag defines a paragraph?",
            options: ["&lt;pg&gt;", "&lt;paragraph&gt;", "&lt;p&gt;", "&lt;text&gt;"],
            answer: 2
        }
    },
    'styles': {
        title: "HTML Styles",
        content: `<h1>HTML Styles</h1>
            <p>The HTML <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
            <pre><code>&lt;p style="color:red;"&gt;I am red&lt;/p&gt;
&lt;p style="color:blue;"&gt;I am blue&lt;/p&gt;
&lt;p style="font-size:50px;"&gt;I am big&lt;/p&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'formatting': {
        title: "HTML Formatting",
        content: `<h1>HTML Formatting</h1>
            <p>HTML contains several elements for defining text with a special meaning.</p>
            <ul>
                <li><code>&lt;b&gt;</code> - Bold text</li>
                <li><code>&lt;strong&gt;</code> - Important text</li>
                <li><code>&lt;i&gt;</code> - Italic text</li>
                <li><code>&lt;em&gt;</code> - Emphasized text</li>
                <li><code>&lt;mark&gt;</code> - Marked text</li>
                <li><code>&lt;small&gt;</code> - Smaller text</li>
                <li><code>&lt;del&gt;</code> - Deleted text</li>
                <li><code>&lt;ins&gt;</code> - Inserted text</li>
                <li><code>&lt;sub&gt;</code> - Subscript text</li>
                <li><code>&lt;sup&gt;</code> - Superscript text</li>
            </ul>
            <pre><code>&lt;p&gt;This text is &lt;b&gt;bold&lt;/b&gt;&lt;/p&gt;
&lt;p&gt;This text is &lt;i&gt;italic&lt;/i&gt;&lt;/p&gt;
&lt;p&gt;This is &lt;sub&gt;subscript&lt;/sub&gt; and &lt;sup&gt;superscript&lt;/sup&gt;&lt;/p&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'quotations': {
        title: "HTML Quotations",
        content: `<h1>HTML Quotations</h1>
            <p>The HTML <code>&lt;blockquote&gt;</code> element defines a section that is quoted from another source.</p>
            <pre><code>&lt;p&gt;Here is a quote from WWF's website:&lt;/p&gt;
&lt;blockquote cite="http://www.worldwildlife.org/who/index.html"&gt;
For 50 years, WWF has been protecting the future of nature.
&lt;/blockquote&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'comments': {
        title: "HTML Comments",
        content: `<h1>HTML Comments</h1>
            <p>HTML comments are not displayed in the browser, but they can help document your HTML source code.</p>
            <pre><code>&lt;!-- This is a comment --&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;!-- Comments are not displayed in the browser --&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'colors': {
        title: "HTML Colors",
        content: `<h1>HTML Colors</h1>
            <p>HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.</p>
            <pre><code>&lt;h1 style="background-color:DodgerBlue;"&gt;Hello World&lt;/h1&gt;
&lt;p style="background-color:Tomato;"&gt;Lorem ipsum...&lt;/p&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css': {
        title: "HTML CSS",
        content: `<h1>HTML CSS</h1>
            <p>CSS stands for Cascading Style Sheets.</p>
            <p>CSS saves a lot of work. It can control the layout of multiple web pages all at once.</p>
            <pre><code>&lt;style&gt;
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
&lt;/style&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'links': {
        title: "HTML Links",
        content: `<h1>HTML Links</h1>
            <p>HTML links are defined with the <code>&lt;a&gt;</code> tag.</p>
            <pre><code>&lt;a href="https://www.example.com/"&gt;Visit Example.com!&lt;/a&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which attribute specifies the link's destination?",
            options: ["src", "link", "href", "dest"],
            answer: 2
        }
    },
    'images': {
        title: "HTML Images",
        content: `<h1>HTML Images</h1>
            <p>HTML images are defined with the <code>&lt;img&gt;</code> tag.</p>
            <p>The source file (src), alternative text (alt), width, and height are provided as attributes.</p>
            <pre><code>&lt;img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which attribute specifies the path to the image?",
            options: ["href", "src", "link", "path"],
            answer: 1
        }
    },
    'favicon': {
        title: "HTML Favicon",
        content: `<h1>HTML Favicon</h1>
            <p>A favicon is a small image displayed next to the page title in the browser tab.</p>
            <p>You can use any image you like as your favicon. You can also create your own favicon on sites like <a href="https://www.favicon.cc" target="_blank">favicon.cc</a>.</p>
            <pre><code>&lt;link rel="icon" type="image/x-icon" href="/images/favicon.ico"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'tables': {
        title: "HTML Tables",
        content: `<h1>HTML Tables</h1>
            <p>HTML tables allow web developers to arrange data into rows and columns.</p>
            <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Company&lt;/th&gt;
    &lt;th&gt;Contact&lt;/th&gt;
    &lt;th&gt;Country&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Alfreds Futterkiste&lt;/td&gt;
    &lt;td&gt;Maria Anders&lt;/td&gt;
    &lt;td&gt;Germany&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'lists': {
        title: "HTML Lists",
        content: `<h1>HTML Lists</h1>
            <p>HTML lists allow web developers to group a set of related items in lists.</p>
            <h2>Unordered List</h2>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;Coffee&lt;/li&gt;
  &lt;li&gt;Tea&lt;/li&gt;
  &lt;li&gt;Milk&lt;/li&gt;
&lt;/ul&gt;</code><button class="copy-btn">Copy</button></pre>
            <h2>Ordered List</h2>
            <pre><code>&lt;ol&gt;
  &lt;li&gt;Coffee&lt;/li&gt;
  &lt;li&gt;Tea&lt;/li&gt;
  &lt;li&gt;Milk&lt;/li&gt;
&lt;/ol&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which tag is used for an unordered list?",
            options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"],
            answer: 1
        }
    },
    'block': {
        title: "HTML Block & Inline",
        content: `<h1>HTML Block and Inline Elements</h1>
            <p>Every HTML element has a default display value, depending on what type of element it is.</p>
            <h2>Block-level Elements</h2>
            <p>A block-level element always starts on a new line and takes up the full width available.</p>
            <pre><code>&lt;div&gt;Hello World&lt;/div&gt;\n&lt;p&gt;This is a paragraph.&lt;/p&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'classes': {
        title: "HTML Classes",
        content: `<h1>HTML Classes</h1>
            <p>The HTML <code>class</code> attribute is used to specify a class for an HTML element.</p>
            <p>Multiple HTML elements can share the same class.</p>
            <pre><code>&lt;style&gt;
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
&lt;/style&gt;

&lt;div class="city"&gt;
  &lt;h2&gt;London&lt;/h2&gt;
  &lt;p&gt;London is the capital of England.&lt;/p&gt;
&lt;/div&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'id': {
        title: "HTML Id",
        content: `<h1>HTML Id</h1>
            <p>The HTML <code>id</code> attribute is used to specify a unique id for an HTML element.</p>
            <p>You cannot have more than one element with the same id in an HTML document.</p>
            <pre><code>&lt;h1 id="myHeader"&gt;My Header&lt;/h1&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'iframes': {
        title: "HTML Iframes",
        content: `<h1>HTML Iframes</h1>
            <p>An HTML iframe is used to display a web page within a web page.</p>
            <pre><code>&lt;iframe src="https://www.example.com" title="Av_eSAFE Gurukul Tutorials"&gt;&lt;/iframe&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'javascript': {
        title: "HTML JavaScript",
        content: `<h1>HTML JavaScript</h1>
            <p>JavaScript makes HTML pages more dynamic and interactive.</p>
            <pre><code>&lt;button type="button" onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'"&gt;Click Me!&lt;/button&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'filepaths': {
        title: "HTML File Paths",
        content: `<h1>HTML File Paths</h1>
            <p>A file path describes the location of a file in a web site's folder structure.</p>
            <pre><code>&lt;img src="/images/picture.jpg" alt="Mountain"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'head': {
        title: "HTML Head",
        content: `<h1>HTML Head</h1>
            <p>The HTML <code>&lt;head&gt;</code> element is a container for the following elements: <code>&lt;title&gt;</code>, <code>&lt;style&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, and <code>&lt;base&gt;</code>.</p>
            <pre><code>&lt;head&gt;\n  &lt;title&gt;Page Title&lt;/title&gt;\n  &lt;meta charset="UTF-8"&gt;\n&lt;/head&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'layout': {
        title: "HTML Layout",
        content: `<h1>HTML Layout</h1>
            <p>HTML has several semantic elements that define the different parts of a web page.</p>
            <pre><code>&lt;header&gt;Header&lt;/header&gt;\n&lt;nav&gt;Nav&lt;/nav&gt;\n&lt;section&gt;Section&lt;/section&gt;\n&lt;footer&gt;Footer&lt;/footer&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'responsive': {
        title: "HTML Responsive",
        content: `<h1>HTML Responsive Web Design</h1>
            <p>Responsive web design is about creating web pages that look good on all devices!</p>
            <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'computercode': {
        title: "HTML Computer Code",
        content: `<h1>HTML Computer Code</h1>
            <p>HTML contains several elements for defining user input and computer code.</p>
            <pre><code>&lt;code&gt;x = 5;&lt;/code&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'semantics': {
        title: "HTML Semantics",
        content: `<h1>HTML Semantic Elements</h1>
            <p>A semantic element clearly describes its meaning to both the browser and the developer.</p>
            <pre><code>&lt;article&gt;\n  &lt;h2&gt;Google Chrome&lt;/h2&gt;\n  &lt;p&gt;Google Chrome is a web browser developed by Google.&lt;/p&gt;\n&lt;/article&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'styleguide': {
        title: "HTML Style Guide",
        content: `<h1>HTML Style Guide</h1>
            <p>Consistent coding style is important.</p>
            <pre><code>&lt;!-- Good --&gt;\n&lt;section&gt;\n  &lt;p&gt;This is a paragraph.&lt;/p&gt;\n&lt;/section&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'entities': {
        title: "HTML Entities",
        content: `<h1>HTML Entities</h1>
            <p>Reserved characters in HTML must be replaced with character entities.</p>
            <pre><code>&amp;lt;p&amp;gt;This is a paragraph&amp;lt;/p&amp;gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'symbols': {
        title: "HTML Symbols",
        content: `<h1>HTML Symbols</h1>
            <p>Many mathematical, technical, and currency symbols are not present on a normal keyboard.</p>
            <pre><code>&lt;p&gt;I will display &amp;euro;&lt;/p&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'emojis': {
        title: "HTML Emojis",
        content: `<h1>HTML Emojis</h1>
            <p>Emojis are characters from the UTF-8 character set.</p>
            <pre><code>&lt;p&gt;&amp;#128512;&lt;/p&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'charset': {
        title: "HTML Charset",
        content: `<h1>HTML Charset</h1>
            <p>To display an HTML page correctly, a web browser must know the character set used in the page.</p>
            <pre><code>&lt;meta charset="UTF-8"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'urlencode': {
        title: "HTML URL Encode",
        content: `<h1>HTML URL Encode</h1>
            <p>URL encoding converts characters into a format that can be transmitted over the Internet.</p>
            <pre><code>https://www.example.com/html/default.asp</code><button class="copy-btn">Copy</button></pre>`
    },
    'xhtml': {
        title: "HTML vs XHTML",
        content: `<h1>HTML vs XHTML</h1>
            <p>XHTML is HTML defined as an XML application.</p>
            <pre><code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"\n"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'form_attributes': {
        title: "HTML Form Attributes",
        content: `<h1>HTML Form Attributes</h1>
            <p>The <code>&lt;form&gt;</code> element has attributes like action, target, method.</p>
            <pre><code>&lt;form action="/action_page.php" method="get"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'form_elements': {
        title: "HTML Form Elements",
        content: `<h1>HTML Form Elements</h1>
            <p>The <code>&lt;form&gt;</code> element can contain various elements.</p>
            <pre><code>&lt;input&gt;\n&lt;label&gt;\n&lt;select&gt;\n&lt;textarea&gt;\n&lt;button&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'forms': {
        title: "HTML Forms",
        content: `<h1>HTML Forms</h1>
            <p>An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
            <pre><code>&lt;form action="/action_page.php"&gt;
  &lt;label for="fname"&gt;First name:&lt;/label&gt;&lt;br&gt;
  &lt;input type="text" id="fname" name="fname" value="John"&gt;&lt;br&gt;
  &lt;label for="lname"&gt;Last name:&lt;/label&gt;&lt;br&gt;
  &lt;input type="text" id="lname" name="lname" value="Doe"&gt;&lt;br&gt;&lt;br&gt;
  &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which element is used to create an input field?",
            options: ["&lt;textfield&gt;", "&lt;input&gt;", "&lt;form&gt;", "&lt;field&gt;"],
            answer: 1
        }
    },
    'input_types': {
        title: "HTML Input Types",
        content: `<h1>HTML Input Types</h1>
            <p>This chapter describes the different types for the HTML <code>&lt;input&gt;</code> element.</p>
            <ul>
                <li><code>&lt;input type="button"&gt;</code></li>
                <li><code>&lt;input type="checkbox"&gt;</code></li>
                <li><code>&lt;input type="color"&gt;</code></li>
                <li><code>&lt;input type="date"&gt;</code></li>
                <li><code>&lt;input type="email"&gt;</code></li>
                <li><code>&lt;input type="file"&gt;</code></li>
                <li><code>&lt;input type="hidden"&gt;</code></li>
                <li><code>&lt;input type="image"&gt;</code></li>
                <li><code>&lt;input type="month"&gt;</code></li>
                <li><code>&lt;input type="number"&gt;</code></li>
                <li><code>&lt;input type="password"&gt;</code></li>
                <li><code>&lt;input type="radio"&gt;</code></li>
                <li><code>&lt;input type="range"&gt;</code></li>
                <li><code>&lt;input type="reset"&gt;</code></li>
                <li><code>&lt;input type="search"&gt;</code></li>
                <li><code>&lt;input type="submit"&gt;</code></li>
                <li><code>&lt;input type="tel"&gt;</code></li>
                <li><code>&lt;input type="text"&gt;</code></li>
                <li><code>&lt;input type="time"&gt;</code></li>
                <li><code>&lt;input type="url"&gt;</code></li>
                <li><code>&lt;input type="week"&gt;</code></li>
            </ul>`
    },
    'input_attributes': {
        title: "HTML Input Attributes",
        content: `<h1>HTML Input Attributes</h1>
            <p>The <code>&lt;input&gt;</code> element has many attributes.</p>
            <pre><code>&lt;input type="text" name="fname" value="John" readonly&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'input_form_attributes': {
        title: "HTML Input Form Attributes",
        content: `<h1>HTML Input Form Attributes</h1>
            <p>HTML5 added several new attributes for <code>&lt;input&gt;</code> related to form submission.</p>
            <pre><code>&lt;input type="submit" formtarget="_blank"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'canvas': {
        title: "HTML Canvas",
        content: `<h1>HTML Canvas</h1>
            <p>The HTML <code>&lt;canvas&gt;</code> element is used to draw graphics, on the fly, via scripting (usually JavaScript).</p>
            <pre><code>&lt;canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"&gt;&lt;/canvas&gt;
&lt;script&gt;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
&lt;/script&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'svg': {
        title: "HTML SVG",
        content: `<h1>HTML SVG</h1>
            <p>SVG stands for Scalable Vector Graphics.</p>
            <p>SVG is used to define graphics for the Web.</p>
            <pre><code>&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /&gt;
&lt;/svg&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'media': {
        title: "HTML Media",
        content: `<h1>HTML Multimedia</h1>
            <p>Multimedia comes in many different formats. It can be almost anything you can hear or see.</p>
            <p>Examples: Images, Music, Sound, Videos, Records, Films, Animations, and more.</p>`
    },
    'video': {
        title: "HTML Video",
        content: `<h1>HTML Video</h1>
            <p>The HTML <code>&lt;video&gt;</code> element specifies a standard way to embed a video in a web page.</p>
            <pre><code>&lt;video width="320" height="240" controls&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'audio': {
        title: "HTML Audio",
        content: `<h1>HTML Audio</h1>
            <p>The HTML <code>&lt;audio&gt;</code> element is used to play an audio file on a web page.</p>
            <pre><code>&lt;audio controls&gt;
  &lt;source src="horse.ogg" type="audio/ogg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'plugins': {
        title: "HTML Plug-ins",
        content: `<h1>HTML Plug-ins</h1>
            <p>Plug-ins are computer programs that extend the standard functionality of the browser.</p>
            <pre><code>&lt;object data="snippet.html"&gt;&lt;/object&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'youtube': {
        title: "HTML YouTube",
        content: `<h1>HTML YouTube</h1>
            <p>The easiest way to play videos in HTML, is to use YouTube.</p>
            <pre><code>&lt;iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY"&gt;
&lt;/iframe&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'geolocation': {
        title: "HTML Geolocation API",
        content: `<h1>HTML Geolocation API</h1>
            <p>The HTML Geolocation API is used to locate a user's position.</p>
            <pre><code>&lt;p&gt;Click the button to get your coordinates.&lt;/p&gt;
&lt;button onclick="getLocation()"&gt;Try It&lt;/button&gt;
&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "&lt;br&gt;Longitude: " + position.coords.longitude;
}
&lt;/script&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'dragdrop': {
        title: "HTML Drag and Drop API",
        content: `<h1>HTML Drag and Drop API</h1>
            <p>In HTML, any element can be dragged and dropped.</p>
            <pre><code>&lt;style&gt;
#div1 { width: 350px; height: 70px; padding: 10px; border: 1px solid #aaaaaa; }
&lt;/style&gt;
&lt;script&gt;
function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;

&lt;p&gt;Drag the image into the rectangle:&lt;/p&gt;
&lt;div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"&gt;&lt;/div&gt;
&lt;br&gt;
&lt;img id="drag1" src="https://via.placeholder.com/88x31.png?text=Drag+Me" draggable="true" ondragstart="drag(event)" width="88" height="31"&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'webstorage': {
        title: "HTML Web Storage API",
        content: `<h1>HTML Web Storage API</h1>
            <p>With web storage, web applications can store data locally within the user's browser.</p>
            <pre><code>&lt;div id="result"&gt;&lt;/div&gt;
&lt;script&gt;
if (typeof(Storage) !== "undefined") {
  localStorage.setItem("lastname", "Smith");
  document.getElementById("result").innerHTML = "Stored Name: " + localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
&lt;/script&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'webworkers': {
        title: "HTML Web Workers API",
        content: `<h1>HTML Web Workers API</h1>
            <p>A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page.</p>
            <pre><code>&lt;p&gt;Count numbers: &lt;output id="result"&gt;&lt;/output&gt;&lt;/p&gt;
&lt;button onclick="startWorker()"&gt;Start Worker&lt;/button&gt; 
&lt;button onclick="stopWorker()"&gt;Stop Worker&lt;/button&gt;

&lt;script&gt;
var w;
function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      // Using Blob to simulate external file for this demo
      const blob = new Blob(['let i=0;function timedCount(){i=i+1;postMessage(i);setTimeout("timedCount()",500);}timedCount();'], {type: "application/javascript"});
      w = new Worker(URL.createObjectURL(blob));
    }
    w.onmessage = function(event) { document.getElementById("result").innerHTML = event.data; };
  } else { document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers..."; }
}
function stopWorker() { if (w) { w.terminate(); w = undefined; } }
&lt;/script&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sse': {
        title: "HTML SSE API",
        content: `<h1>HTML SSE API</h1>
            <p>Server-Sent Events (SSE) allow a web page to get updates from a server.</p>
            <pre><code>&lt;div id="result"&gt;&lt;/div&gt;
&lt;script&gt;
if(typeof(EventSource) !== "undefined") {
  // Note: This requires a backend server to work fully.
  // var source = new EventSource("demo_sse.php");
  // source.onmessage = function(event) {
  //   document.getElementById("result").innerHTML += event.data + "&lt;br&gt;";
  // };
  document.getElementById("result").innerHTML = "SSE requires a backend server. Code structure is shown in the editor.";
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}
&lt;/script&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    
    // --- CSS Topics ---
    'css_selectors': {
        title: "CSS Selectors",
        content: `<h1>CSS Selectors</h1>
            <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
p {
  text-align: center;
  color: red;
} 
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Every paragraph will be affected by the style.&lt;/p&gt;
&lt;p id="para1"&gt;Me too!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css_selectors': {
        title: "CSS Selectors",
        content: `<h1>CSS Selectors</h1>
            <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
p {
  text-align: center;
  color: red;
} 
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Every paragraph will be affected by the style.&lt;/p&gt;
&lt;p id="para1"&gt;Me too!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which character is used to select an element with a specific id?",
            options: [".", "#", "*", "%"],
            answer: 1
        }
    },
    'css_howto': {
        title: "CSS How To",
        content: `<h1>How To Add CSS</h1>
            <p>When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
body {background-color: lightblue;}
h1   {color: blue;}
p    {color: red;}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;This is a heading&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which HTML tag is used to define internal CSS?",
            options: ["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;design&gt;"],
            answer: 2
        }
    },
    'css_comments': {
        title: "CSS Comments",
        content: `<h1>CSS Comments</h1>
            <p>CSS comments are not displayed in the browser, but they can help document your source code.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
p {
  color: red; /* This is a single-line comment */
  text-align: center;
}
/* This is a
multi-line comment */
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Hello World!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css_colors': {
        title: "CSS Colors",
        content: `<h1>CSS Colors</h1>
            <p>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;h1 style="background-color:Tomato;"&gt;Tomato&lt;/h1&gt;
&lt;h1 style="background-color:Orange;"&gt;Orange&lt;/h1&gt;
&lt;h1 style="background-color:DodgerBlue;"&gt;DodgerBlue&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which property is used to change the background color?",
            options: ["color", "bgcolor", "background-color", "background"],
            answer: 2
        }
    },
    'css_backgrounds': {
        title: "CSS Backgrounds",
        content: `<h1>CSS Backgrounds</h1>
            <p>The CSS background properties are used to define the background effects for elements.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
body {
  background-color: lightblue;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css_borders': {
        title: "CSS Borders",
        content: `<h1>CSS Borders</h1>
            <p>The CSS <code>border</code> properties allow you to specify the style, width, and color of an element's border.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p class="dotted"&gt;A dotted border.&lt;/p&gt;
&lt;p class="dashed"&gt;A dashed border.&lt;/p&gt;
&lt;p class="solid"&gt;A solid border.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css_margins': {
        title: "CSS Margins",
        content: `<h1>CSS Margins</h1>
            <p>Margins are used to create space around elements, outside of any defined borders.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div {
  margin: 70px;
  border: 1px solid #4CAF50;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;This div has a margin of 70px.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "How do you create space outside the border?",
            options: ["padding", "margin", "spacing", "border"],
            answer: 1
        }
    },
    'css_padding': {
        title: "CSS Padding",
        content: `<h1>CSS Padding</h1>
            <p>Padding is used to create space around an element's content, inside of any defined borders.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div {
  padding: 70px;
  border: 1px solid #4CAF50;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;This div has a padding of 70px.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "How do you create space inside the border?",
            options: ["margin", "padding", "spacing", "border"],
            answer: 1
        }
    },
    'css_boxmodel': {
        title: "CSS Box Model",
        content: `<h1>CSS Box Model</h1>
            <p>The CSS Box Model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;This text is the content of the box.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css_flexbox': {
        title: "CSS Flexbox",
        content: `<h1>CSS Flexbox</h1>
            <p>The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.flex-container {
  display: flex;
  background-color: DodgerBlue;
}
.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="flex-container"&gt;
  &lt;div&gt;1&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;  
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css_grid': {
        title: "CSS Grid",
        content: `<h1>CSS Grid Layout</h1>
            <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="grid-container"&gt;
  &lt;div class="grid-item"&gt;1&lt;/div&gt;
  &lt;div class="grid-item"&gt;2&lt;/div&gt;
  &lt;div class="grid-item"&gt;3&lt;/div&gt;  
  &lt;div class="grid-item"&gt;4&lt;/div&gt;
  &lt;div class="grid-item"&gt;5&lt;/div&gt;
  &lt;div class="grid-item"&gt;6&lt;/div&gt;  
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'css_responsive': {
        title: "CSS Responsive Design",
        content: `<h1>CSS Responsive Web Design</h1>
            <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div {
  background-color: lightgreen;
  padding: 20px;
}
@media only screen and (max-width: 600px) {
  div {
    background-color: lightblue;
  }
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;Resize the browser window. When the width is less than 600px, the background color changes.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },

    // --- JavaScript Topics ---
    'js_output': {
        title: "JavaScript Output",
        content: `<h1>JavaScript Output</h1>
            <p>JavaScript can "display" data in different ways:</p>
            <ul>
                <li>Writing into an HTML element, using <code>innerHTML</code>.</li>
                <li>Writing into the HTML output using <code>document.write()</code>.</li>
                <li>Writing into an alert box, using <code>window.alert()</code>.</li>
                <li>Writing into the browser console, using <code>console.log()</code>.</li>
            </ul>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Output&lt;/h2&gt;

&lt;button onclick="window.alert('Hello World!');"&gt;Click Me&lt;/button&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which method writes data to the browser console?",
            options: ["console.write()", "console.output()", "console.log()", "console.print()"],
            answer: 2
        }
    },
    'js_statements': {
        title: "JavaScript Statements",
        content: `<h1>JavaScript Statements</h1>
            <p>A computer program is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called statements.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Statements&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4
document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'js_syntax': {
        title: "JavaScript Syntax",
        content: `<h1>JavaScript Syntax</h1>
            <p>JavaScript syntax is the set of rules, how JavaScript programs are constructed.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Syntax&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'js_variables': {
        title: "JavaScript Variables",
        content: `<h1>JavaScript Variables</h1>
            <p>Variables are containers for storing data values.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Variables&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which keyword is NOT used to declare a variable in JavaScript?",
            options: ["var", "let", "const", "int"],
            answer: 3
        }
    },
    'js_operators': {
        title: "JavaScript Operators",
        content: `<h1>JavaScript Operators</h1>
            <p>JavaScript uses arithmetic operators ( + - * / ) to compute values.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Operators&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
let x = 5;
let y = 2;
let z = x * y;
document.getElementById("demo").innerHTML = z;
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'js_arithmetic': {
        title: "JavaScript Arithmetic",
        content: `<h1>JavaScript Arithmetic</h1>
            <p>Arithmetic operators perform arithmetic on numbers (literals or variables).</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Arithmetic&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
let x = 100 + 50 * 3;
document.getElementById("demo").innerHTML = x;
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'js_datatypes': {
        title: "JavaScript Data Types",
        content: `<h1>JavaScript Data Types</h1>
            <p>JavaScript variables can hold many data types: numbers, strings, objects and more.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Data Types&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object

document.getElementById("demo").innerHTML =
length + "&lt;br&gt;" + lastName + "&lt;br&gt;" + x.firstName + " " + x.lastName;
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'js_functions': {
        title: "JavaScript Functions",
        content: `<h1>JavaScript Functions</h1>
            <p>A JavaScript function is a block of code designed to perform a particular task.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Functions&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "How do you create a function in JavaScript?",
            options: ["function:myFunction()", "function myFunction()", "function = myFunction()", "create myFunction()"],
            answer: 1
        }
    },
    'js_objects': {
        title: "JavaScript Objects",
        content: `<h1>JavaScript Objects</h1>
            <p>Real Life Objects, Properties, and Methods. In real life, a car is an object.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Objects&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
const car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("demo").innerHTML = "The car type is " + car.type;
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },
    'js_events': {
        title: "JavaScript Events",
        content: `<h1>JavaScript Events</h1>
            <p>HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Events&lt;/h2&gt;

&lt;button onclick="document.getElementById('demo').innerHTML = Date()"&gt;The time is?&lt;/button&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which event occurs when the user clicks on an HTML element?",
            options: ["onchange", "onmouseover", "onmouseclick", "onclick"],
            answer: 3
        }
    },
    'js_strings': {
        title: "JavaScript Strings",
        content: `<h1>JavaScript Strings</h1>
            <p>JavaScript strings are for storing and manipulating text.</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

&lt;h2&gt;JavaScript Strings&lt;/h2&gt;

&lt;p id="demo"&gt;&lt;/p&gt;

&lt;script&gt;
let text = "John Doe";
document.getElementById("demo").innerHTML = text;
&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</code><button class="copy-btn">Copy</button></pre>`
    },

    // --- Python Topics ---
    'py_getstarted': {
        title: "Python Getting Started",
        content: `<h1>Python Getting Started</h1>
            <p>Python is a widely used general-purpose, high level programming language.</p>
            <pre><code># Python code is often run in a terminal
print("Hello, World!")</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which function is used to output text in Python?",
            options: ["echo()", "output()", "print()", "write()"],
            answer: 2
        }
    },
    'py_syntax': {
        title: "Python Syntax",
        content: `<h1>Python Syntax</h1>
            <p>Python syntax can be executed by writing directly in the Command Line.</p>
            <pre><code>if 5 > 2:
  print("Five is greater than two!")</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "What is used to define a block of code in Python?",
            options: ["Parentheses", "Indentation", "Curly braces", "Quotation marks"],
            answer: 1
        }
    },
    'py_comments': {
        title: "Python Comments",
        content: `<h1>Python Comments</h1>
            <p>Comments can be used to explain Python code.</p>
            <pre><code># This is a comment
print("Hello, World!")</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_variables': {
        title: "Python Variables",
        content: `<h1>Python Variables</h1>
            <p>Variables are containers for storing data values.</p>
            <pre><code>x = 5
y = "John"
print(x)
print(y)</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "How do you create a variable in Python?",
            options: ["var x = 5", "x = 5", "int x = 5", "variable x = 5"],
            answer: 1
        }
    },
    'py_datatypes': {
        title: "Python Data Types",
        content: `<h1>Python Data Types</h1>
            <p>Built-in Data Types. In programming, data type is an important concept.</p>
            <pre><code>x = 5
print(type(x))</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_numbers': {
        title: "Python Numbers",
        content: `<h1>Python Numbers</h1>
            <p>There are three numeric types in Python: <code>int</code>, <code>float</code>, and <code>complex</code>.</p>
            <pre><code>x = 1    # int
y = 2.8  # float
z = 1j   # complex
print(type(x))
print(type(y))
print(type(z))</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_casting': {
        title: "Python Casting",
        content: `<h1>Python Casting</h1>
            <p>Specify a Variable Type. There may be times when you want to specify a type on to a variable. This can be done with casting.</p>
            <pre><code>x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3
print(x)
print(y)
print(z)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_strings': {
        title: "Python Strings",
        content: `<h1>Python Strings</h1>
            <p>Strings in python are surrounded by either single quotation marks, or double quotation marks.</p>
            <pre><code>print("Hello")
print('Hello')</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_booleans': {
        title: "Python Booleans",
        content: `<h1>Python Booleans</h1>
            <p>Booleans represent one of two values: <code>True</code> or <code>False</code>.</p>
            <pre><code>print(10 > 9)
print(10 == 9)
print(10 < 9)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_operators': {
        title: "Python Operators",
        content: `<h1>Python Operators</h1>
            <p>Operators are used to perform operations on variables and values.</p>
            <pre><code>print(10 + 5)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_lists': {
        title: "Python Lists",
        content: `<h1>Python Lists</h1>
            <p>Lists are used to store multiple items in a single variable.</p>
            <pre><code>mylist = ["apple", "banana", "cherry"]
print(mylist)</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which brackets are used for lists?",
            options: ["{}", "()", "[]", "<>"],
            answer: 2
        }
    },
    'py_tuples': {
        title: "Python Tuples",
        content: `<h1>Python Tuples</h1>
            <p>Tuples are used to store multiple items in a single variable. A tuple is a collection which is ordered and unchangeable.</p>
            <pre><code>mytuple = ("apple", "banana", "cherry")
print(mytuple)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_sets': {
        title: "Python Sets",
        content: `<h1>Python Sets</h1>
            <p>Sets are used to store multiple items in a single variable. A set is a collection which is unordered, unchangeable*, and unindexed.</p>
            <pre><code>myset = {"apple", "banana", "cherry"}
print(myset)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_dictionaries': {
        title: "Python Dictionaries",
        content: `<h1>Python Dictionaries</h1>
            <p>Dictionaries are used to store data values in key:value pairs.</p>
            <pre><code>thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_ifelse': {
        title: "Python If...Else",
        content: `<h1>Python If...Else</h1>
            <p>Python supports the usual logical conditions from mathematics.</p>
            <pre><code>a = 33
b = 200
if b > a:
  print("b is greater than a")</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which keyword is used for conditional statements?",
            options: ["switch", "if", "loop", "check"],
            answer: 1
        }
    },
    'py_while': {
        title: "Python While Loops",
        content: `<h1>Python While Loops</h1>
            <p>With the while loop we can execute a set of statements as long as a condition is true.</p>
            <pre><code>i = 1
while i < 6:
  print(i)
  i += 1</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_for': {
        title: "Python For Loops",
        content: `<h1>Python For Loops</h1>
            <p>A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</p>
            <pre><code>fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_functions': {
        title: "Python Functions",
        content: `<h1>Python Functions</h1>
            <p>A function is a block of code which only runs when it is called.</p>
            <pre><code>def my_function():
  print("Hello from a function")

my_function()</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which keyword is used to define a function?",
            options: ["function", "def", "fun", "define"],
            answer: 1
        }
    },
    'py_lambda': {
        title: "Python Lambda",
        content: `<h1>Python Lambda</h1>
            <p>A lambda function is a small anonymous function.</p>
            <pre><code>x = lambda a : a + 10
print(x(5))</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_classes': {
        title: "Python Classes/Objects",
        content: `<h1>Python Classes/Objects</h1>
            <p>Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.</p>
            <pre><code>class MyClass:
  x = 5

p1 = MyClass()
print(p1.x)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_inheritance': {
        title: "Python Inheritance",
        content: `<h1>Python Inheritance</h1>
            <p>Inheritance allows us to define a class that inherits all the methods and properties from another class.</p>
            <pre><code>class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

x = Person("John", "Doe")
x.printname()</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_iterators': {
        title: "Python Iterators",
        content: `<h1>Python Iterators</h1>
            <p>An iterator is an object that contains a countable number of values.</p>
            <pre><code>mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_scope': {
        title: "Python Scope",
        content: `<h1>Python Scope</h1>
            <p>A variable is only available from inside the region it is created. This is called scope.</p>
            <pre><code>def myfunc():
  x = 300
  print(x)

myfunc()</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_modules': {
        title: "Python Modules",
        content: `<h1>Python Modules</h1>
            <p>Consider a module to be the same as a code library.</p>
            <pre><code>import platform

x = platform.system()
print(x)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_dates': {
        title: "Python Dates",
        content: `<h1>Python Dates</h1>
            <p>A date in Python is not a data type of its own, but we can import a module named <code>datetime</code> to work with dates as date objects.</p>
            <pre><code>import datetime

x = datetime.datetime.now()
print(x)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_math': {
        title: "Python Math",
        content: `<h1>Python Math</h1>
            <p>Python has a set of built-in math functions, including an extensive math module, that allows you to perform mathematical tasks on numbers.</p>
            <pre><code>x = min(5, 10, 25)
y = max(5, 10, 25)

print(x)
print(y)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_json': {
        title: "Python JSON",
        content: `<h1>Python JSON</h1>
            <p>JSON is a syntax for storing and exchanging data. Python has a built-in package called <code>json</code>, which can be used to work with JSON data.</p>
            <pre><code>import json

# some JSON:
x = '{ "name":"John", "age":30, "city":"New York"}'

# parse x:
y = json.loads(x)

# the result is a Python dictionary:
print(y["age"])</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_regex': {
        title: "Python RegEx",
        content: `<h1>Python RegEx</h1>
            <p>A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern.</p>
            <pre><code>import re

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)

if x:
  print("YES! We have a match!")
else:
  print("No match")</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_pip': {
        title: "Python PIP",
        content: `<h1>Python PIP</h1>
            <p>PIP is a package manager for Python packages, or modules if you like.</p>
            <pre><code># Check if PIP is installed
# pip --version</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_tryexcept': {
        title: "Python Try...Except",
        content: `<h1>Python Try...Except</h1>
            <p>The <code>try</code> block lets you test a block of code for errors. The <code>except</code> block lets you handle the error.</p>
            <pre><code>try:
  print(x)
except:
  print("An exception occurred")</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_userinput': {
        title: "Python User Input",
        content: `<h1>Python User Input</h1>
            <p>Python allows for user input.</p>
            <pre><code>username = input("Enter username:")
print("Username is: " + username)</code><button class="copy-btn">Copy</button></pre>`
    },
    'py_stringformatting': {
        title: "Python String Formatting",
        content: `<h1>Python String Formatting</h1>
            <p>To make sure a string will display as expected, we can format the result with the <code>format()</code> method.</p>
            <pre><code>price = 49
txt = "The price is {} dollars"
print(txt.format(price))</code><button class="copy-btn">Copy</button></pre>`
    },

    // --- SQL Topics ---
    'sql_syntax': {
        title: "SQL Syntax",
        content: `<h1>SQL Syntax</h1>
            <p>A database most often contains one or more tables. Each table is identified by a name.</p>
            <pre><code>SELECT * FROM Customers;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_select': {
        title: "SQL Select",
        content: `<h1>SQL Select Statement</h1>
            <p>The <code>SELECT</code> statement is used to select data from a database.</p>
            <pre><code>SELECT CustomerName, City FROM Customers;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which SQL statement is used to extract data from a database?",
            options: ["GET", "OPEN", "EXTRACT", "SELECT"],
            answer: 3
        }
    },
    'sql_where': {
        title: "SQL Where",
        content: `<h1>SQL Where Clause</h1>
            <p>The <code>WHERE</code> clause is used to filter records.</p>
            <pre><code>SELECT * FROM Customers
WHERE Country='Mexico';</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which keyword is used to filter records?",
            options: ["FILTER", "SEARCH", "WHERE", "FIND"],
            answer: 2
        }
    },
    'sql_distinct': {
        title: "SQL Select Distinct",
        content: `<h1>SQL Select Distinct</h1>
            <p>The <code>SELECT DISTINCT</code> statement is used to return only distinct (different) values.</p>
            <pre><code>SELECT DISTINCT Country FROM Customers;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_and_or': {
        title: "SQL And, Or, Not",
        content: `<h1>SQL And, Or, Not</h1>
            <p>The <code>WHERE</code> clause can be combined with <code>AND</code>, <code>OR</code>, and <code>NOT</code> operators.</p>
            <pre><code>SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_orderby': {
        title: "SQL Order By",
        content: `<h1>SQL Order By</h1>
            <p>The <code>ORDER BY</code> keyword is used to sort the result-set in ascending or descending order.</p>
            <pre><code>SELECT * FROM Customers
ORDER BY Country;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which keyword sorts the result?",
            options: ["SORT BY", "ORDER BY", "GROUP BY", "ALIGN"],
            answer: 1
        }
    },
    'sql_insert': {
        title: "SQL Insert Into",
        content: `<h1>SQL Insert Into</h1>
            <p>The <code>INSERT INTO</code> statement is used to insert new records in a table.</p>
            <pre><code>INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which statement inserts new data?",
            options: ["ADD NEW", "INSERT INTO", "UPDATE", "CREATE"],
            answer: 1
        }
    },
    'sql_null': {
        title: "SQL Null Values",
        content: `<h1>SQL Null Values</h1>
            <p>A field with a NULL value is a field with no value.</p>
            <pre><code>SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_update': {
        title: "SQL Update",
        content: `<h1>SQL Update</h1>
            <p>The <code>UPDATE</code> statement is used to modify the existing records in a table.</p>
            <pre><code>UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which statement updates data?",
            options: ["SAVE", "MODIFY", "UPDATE", "CHANGE"],
            answer: 2
        }
    },
    'sql_delete': {
        title: "SQL Delete",
        content: `<h1>SQL Delete</h1>
            <p>The <code>DELETE</code> statement is used to delete existing records in a table.</p>
            <pre><code>DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_top': {
        title: "SQL Select Top",
        content: `<h1>SQL Select Top</h1>
            <p>The <code>SELECT TOP</code> clause is used to specify the number of records to return.</p>
            <pre><code>SELECT TOP 3 * FROM Customers;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_minmax': {
        title: "SQL Min and Max",
        content: `<h1>SQL Min and Max</h1>
            <p>The <code>MIN()</code> function returns the smallest value of the selected column. The <code>MAX()</code> function returns the largest value of the selected column.</p>
            <pre><code>SELECT MIN(Price) AS SmallestPrice
FROM Products;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_count': {
        title: "SQL Count, Avg, Sum",
        content: `<h1>SQL Count, Avg, Sum</h1>
            <p>The <code>COUNT()</code> function returns the number of rows that matches a specified criterion.</p>
            <pre><code>SELECT COUNT(ProductID)
FROM Products;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_like': {
        title: "SQL Like",
        content: `<h1>SQL Like</h1>
            <p>The <code>LIKE</code> operator is used in a <code>WHERE</code> clause to search for a specified pattern in a column.</p>
            <pre><code>SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_wildcards': {
        title: "SQL Wildcards",
        content: `<h1>SQL Wildcards</h1>
            <p>A wildcard character is used to substitute for any other character(s) in a string.</p>
            <pre><code>SELECT * FROM Customers
WHERE City LIKE 'ber%';</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_in': {
        title: "SQL In",
        content: `<h1>SQL In</h1>
            <p>The <code>IN</code> operator allows you to specify multiple values in a <code>WHERE</code> clause.</p>
            <pre><code>SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_between': {
        title: "SQL Between",
        content: `<h1>SQL Between</h1>
            <p>The <code>BETWEEN</code> operator selects values within a given range. The values can be numbers, text, or dates.</p>
            <pre><code>SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_aliases': {
        title: "SQL Aliases",
        content: `<h1>SQL Aliases</h1>
            <p>SQL aliases are used to give a table, or a column in a table, a temporary name.</p>
            <pre><code>SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_joins': {
        title: "SQL Joins",
        content: `<h1>SQL Joins</h1>
            <p>A <code>JOIN</code> clause is used to combine rows from two or more tables, based on a related column between them.</p>
            <pre><code>SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_innerjoin': {
        title: "SQL Inner Join",
        content: `<h1>SQL Inner Join</h1>
            <p>The <code>INNER JOIN</code> keyword selects records that have matching values in both tables.</p>
            <pre><code>SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_leftjoin': {
        title: "SQL Left Join",
        content: `<h1>SQL Left Join</h1>
            <p>The <code>LEFT JOIN</code> keyword returns all records from the left table (table1), and the matching records from the right table (table2).</p>
            <pre><code>SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_rightjoin': {
        title: "SQL Right Join",
        content: `<h1>SQL Right Join</h1>
            <p>The <code>RIGHT JOIN</code> keyword returns all records from the right table (table2), and the matching records from the left table (table1).</p>
            <pre><code>SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_fulljoin': {
        title: "SQL Full Join",
        content: `<h1>SQL Full Join</h1>
            <p>The <code>FULL OUTER JOIN</code> keyword returns all records when there is a match in left (table1) or right (table2) table records.</p>
            <pre><code>SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_selfjoin': {
        title: "SQL Self Join",
        content: `<h1>SQL Self Join</h1>
            <p>A self join is a regular join, but the table is joined with itself.</p>
            <pre><code>SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_union': {
        title: "SQL Union",
        content: `<h1>SQL Union</h1>
            <p>The <code>UNION</code> operator is used to combine the result-set of two or more <code>SELECT</code> statements.</p>
            <pre><code>SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_groupby': {
        title: "SQL Group By",
        content: `<h1>SQL Group By</h1>
            <p>The <code>GROUP BY</code> statement groups rows that have the same values into summary rows.</p>
            <pre><code>SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_having': {
        title: "SQL Having",
        content: `<h1>SQL Having</h1>
            <p>The <code>HAVING</code> clause was added to SQL because the <code>WHERE</code> keyword could not be used with aggregate functions.</p>
            <pre><code>SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_exists': {
        title: "SQL Exists",
        content: `<h1>SQL Exists</h1>
            <p>The <code>EXISTS</code> operator is used to test for the existence of any record in a subquery.</p>
            <pre><code>SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_any': {
        title: "SQL Any, All",
        content: `<h1>SQL Any, All</h1>
            <p>The <code>ANY</code> and <code>ALL</code> operators allow you to perform a comparison between a single column value and a range of other values.</p>
            <pre><code>SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_selectinto': {
        title: "SQL Select Into",
        content: `<h1>SQL Select Into</h1>
            <p>The <code>SELECT INTO</code> statement copies data from one table into a new table.</p>
            <pre><code>SELECT * INTO CustomersBackup2017
FROM Customers;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_insertintoselect': {
        title: "SQL Insert Into Select",
        content: `<h1>SQL Insert Into Select</h1>
            <p>The <code>INSERT INTO SELECT</code> statement copies data from one table and inserts it into another table.</p>
            <pre><code>INSERT INTO Customers (CustomerName, City, Country)
SELECT SupplierName, City, Country FROM Suppliers;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_case': {
        title: "SQL Case",
        content: `<h1>SQL Case</h1>
            <p>The <code>CASE</code> expression goes through conditions and returns a value when the first condition is met.</p>
            <pre><code>SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_nullfunc': {
        title: "SQL Null Functions",
        content: `<h1>SQL Null Functions</h1>
            <p>SQL <code>ISNULL()</code>, <code>NVL()</code>, <code>IFNULL()</code> and <code>COALESCE()</code> functions.</p>
            <pre><code>SELECT ProductName, UnitPrice * (UnitsInStock + ISNULL(UnitsOnOrder, 0))
FROM Products;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_storedproc': {
        title: "SQL Stored Procedures",
        content: `<h1>SQL Stored Procedures</h1>
            <p>A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.</p>
            <pre><code>CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_comments': {
        title: "SQL Comments",
        content: `<h1>SQL Comments</h1>
            <p>Comments are used to explain sections of SQL statements, or to prevent execution of SQL statements.</p>
            <pre><code>--Select all:
SELECT * FROM Customers;</code><button class="copy-btn">Copy</button></pre>`
    },
    'sql_operators': {
        title: "SQL Operators",
        content: `<h1>SQL Operators</h1>
            <p>SQL Arithmetic, Bitwise, Comparison, Compound, and Logical Operators.</p>
            <pre><code>SELECT * FROM Products
WHERE Price = 18;</code><button class="copy-btn">Copy</button></pre>`
    },

    // --- Git Topics ---
    'git_getstarted': {
        title: "Git Getting Started",
        content: `<h1>Git Getting Started</h1>
            <p>Git is a version control system. It is used to track changes in source code.</p>
            <pre><code>git --version</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which command initializes a new Git repository?",
            options: ["git start", "git new", "git init", "git create"],
            answer: 2
        }
    },
    'git_newfiles': {
        title: "Git New Files",
        content: `<h1>Git New Files</h1>
            <p>To add new files to a repository, you first create them, then add them to the staging area.</p>
            <pre><code>touch index.html
git status</code><button class="copy-btn">Copy</button></pre>`
    },
    'git_staging': {
        title: "Git Staging",
        content: `<h1>Git Staging Environment</h1>
            <p>One of the core functions of Git is the concepts of the Staging Environment.</p>
            <pre><code>git add index.html
git add .</code><button class="copy-btn">Copy</button></pre>`
    },
    'git_commit': {
        title: "Git Commit",
        content: `<h1>Git Commit</h1>
            <p>The <code>commit</code> command is used to save your changes to the local repository.</p>
            <pre><code>git commit -m "First commit"</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which command records changes to the repository?",
            options: ["git add", "git save", "git commit", "git push"],
            answer: 2
        }
    },
    'git_branch': {
        title: "Git Branch",
        content: `<h1>Git Branch</h1>
            <p>A branch in Git is a separate version of the main repository.</p>
            <pre><code>git branch new-feature
git branch</code><button class="copy-btn">Copy</button></pre>`
    },
    'git_checkout': {
        title: "Git Checkout",
        content: `<h1>Git Checkout</h1>
            <p>The <code>checkout</code> command is used to switch between branches.</p>
            <pre><code>git checkout new-feature</code><button class="copy-btn">Copy</button></pre>`
    },
    'git_merge': {
        title: "Git Merge",
        content: `<h1>Git Merge</h1>
            <p>Merging is the way to combine the work of different branches together.</p>
            <pre><code>git checkout master
git merge new-feature</code><button class="copy-btn">Copy</button></pre>`
    },
    'git_remote': {
        title: "Git Remote",
        content: `<h1>Git Remote</h1>
            <p>To connect your local repository to a remote server (like GitHub), you use the remote command.</p>
            <pre><code>git remote add origin https://github.com/user/repo.git</code><button class="copy-btn">Copy</button></pre>`
    },
    'git_push': {
        title: "Git Push",
        content: `<h1>Git Push</h1>
            <p>The <code>push</code> command uploads your local repository content to a remote repository.</p>
            <pre><code>git push -u origin master</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which command uploads local changes to remote?",
            options: ["git upload", "git push", "git send", "git commit"],
            answer: 1
        }
    },
    'git_pull': {
        title: "Git Pull",
        content: `<h1>Git Pull</h1>
            <p>The <code>pull</code> command is used to fetch and download content from a remote repository and immediately update the local repository to match that content.</p>
            <pre><code>git pull origin master</code><button class="copy-btn">Copy</button></pre>`
    },
    'github_flow': {
        title: "GitHub Flow",
        content: `<h1>GitHub Flow</h1>
            <p>GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly.</p>
            <ul>
                <li>Create a branch</li>
                <li>Add commits</li>
                <li>Open a Pull Request</li>
                <li>Discuss and review your code</li>
                <li>Deploy</li>
                <li>Merge</li>
            </ul>`
    },

    // --- Java Topics ---
    'java_syntax': {
        title: "Java Syntax",
        content: `<h1>Java Syntax</h1>
            <p>Every line of code that runs in Java must be inside a class. In our example, we named the class <strong>Main</strong>.</p>
            <pre><code>public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which keyword is used to define a class?",
            options: ["class", "Class", "define", "struct"],
            answer: 0
        }
    },
    'java_output': {
        title: "Java Output",
        content: `<h1>Java Output</h1>
            <p>You can use the <code>println()</code> method to output values or print text in Java.</p>
            <pre><code>public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
    System.out.println("I am learning Java.");
    System.out.println("It is awesome!");
  }
}</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_comments': {
        title: "Java Comments",
        content: `<h1>Java Comments</h1>
            <p>Comments can be used to explain Java code, and to make it more readable.</p>
            <pre><code>// This is a comment
System.out.println("Hello World"); 
/* The code below will print the words Hello World
to the screen, and it is amazing */</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_variables': {
        title: "Java Variables",
        content: `<h1>Java Variables</h1>
            <p>Variables are containers for storing data values.</p>
            <pre><code>String name = "John";
int myNum = 15;
System.out.println(name);
System.out.println(myNum);</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "How do you declare an integer variable?",
            options: ["num x = 5;", "int x = 5;", "integer x = 5;", "x = 5;"],
            answer: 1
        }
    },
    'java_datatypes': {
        title: "Java Data Types",
        content: `<h1>Java Data Types</h1>
            <p>Data types are divided into two groups: Primitive data types (byte, short, int, long, float, double, boolean, char) and Non-Primitive data types (String, Arrays, Classes).</p>
            <pre><code>int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which data type is used to store text?",
            options: ["String", "Char", "Txt", "string"],
            answer: 0
        }
    },
    'java_typecasting': {
        title: "Java Type Casting",
        content: `<h1>Java Type Casting</h1>
            <p>Type casting is when you assign a value of one primitive data type to another type.</p>
            <pre><code>public class Main {
  public static void main(String[] args) {
    int myInt = 9;
    double myDouble = myInt; // Automatic casting: int to double

    System.out.println(myInt);
    System.out.println(myDouble);
  }
}</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_operators': {
        title: "Java Operators",
        content: `<h1>Java Operators</h1>
            <p>Operators are used to perform operations on variables and values.</p>
            <pre><code>int sum1 = 100 + 50;
int sum2 = sum1 + 250;
int sum3 = sum2 + sum2;
System.out.println(sum1);
System.out.println(sum2);
System.out.println(sum3);</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_strings': {
        title: "Java Strings",
        content: `<h1>Java Strings</h1>
            <p>A String variable contains a collection of characters surrounded by double quotes.</p>
            <pre><code>String greeting = "Hello";
System.out.println(greeting);</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_math': {
        title: "Java Math",
        content: `<h1>Java Math</h1>
            <p>The Java Math class has many methods that allows you to perform mathematical tasks on numbers.</p>
            <pre><code>System.out.println(Math.max(5, 10));
System.out.println(Math.min(5, 10));
System.out.println(Math.sqrt(64));</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_booleans': {
        title: "Java Booleans",
        content: `<h1>Java Booleans</h1>
            <p>Very often, in programming, you will need a data type that can only have one of two values, like: YES / NO, ON / OFF, TRUE / FALSE.</p>
            <pre><code>boolean isJavaFun = true;
boolean isFishTasty = false;
System.out.println(isJavaFun);
System.out.println(isFishTasty);</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_ifelse': {
        title: "Java If...Else",
        content: `<h1>Java If...Else</h1>
            <p>Java supports the usual logical conditions from mathematics.</p>
            <pre><code>if (20 > 18) {
  System.out.println("20 is greater than 18");
}</code><button class="copy-btn">Copy</button></pre>`,
        quiz: {
            question: "Which statement is used to specify a block of code to be executed if a condition is true?",
            options: ["else", "while", "if", "for"],
            answer: 2
        }
    },
    'java_switch': {
        title: "Java Switch",
        content: `<h1>Java Switch</h1>
            <p>Use the switch statement to select one of many code blocks to be executed.</p>
            <pre><code>int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
}</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_while': {
        title: "Java While Loop",
        content: `<h1>Java While Loop</h1>
            <p>The while loop loops through a block of code as long as a specified condition is true.</p>
            <pre><code>int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_for': {
        title: "Java For Loop",
        content: `<h1>Java For Loop</h1>
            <p>When you know exactly how many times you want to loop through a block of code, use the for loop.</p>
            <pre><code>for (int i = 0; i < 5; i++) {
  System.out.println(i);
}</code><button class="copy-btn">Copy</button></pre>`
    },
    'java_arrays': {
        title: "Java Arrays",
        content: `<h1>Java Arrays</h1>
            <p>Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.</p>
            <pre><code>String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]);</code><button class="copy-btn">Copy</button></pre>`
    },

    // --- Methodologies Topics ---
    'waterfall': {
        title: "Waterfall Model",
        content: `<h1>Waterfall Model</h1>
            <p>The Waterfall Model is a linear sequential flow. In which progress is seen as flowing steadily downwards (like a waterfall) through the phases of software implementation.</p>
            <h3>Phases:</h3>
            <ul>
                <li>Requirements</li>
                <li>Design</li>
                <li>Implementation</li>
                <li>Verification</li>
                <li>Maintenance</li>
            </ul>`,
        quiz: {
            question: "Is Waterfall iterative or sequential?",
            options: ["Iterative", "Sequential", "Both", "Neither"],
            answer: 1
        }
    },
    'agile': {
        title: "Agile Methodology",
        content: `<h1>Agile Methodology</h1>
            <p>Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches.</p>
            <p>Instead of betting everything on a "big bang" launch, an agile team delivers work in small, but consumable, increments.</p>`,
        quiz: {
            question: "What is a key characteristic of Agile?",
            options: ["Iterative development", "Linear process", "No documentation", "Fixed requirements"],
            answer: 0
        }
    },
    'scrum': {
        title: "Scrum Framework",
        content: `<h1>Scrum Framework</h1>
            <p>Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems. It organizes work into Sprints.</p>
            <h3>Key Roles:</h3>
            <ul>
                <li>Scrum Master</li>
                <li>Product Owner</li>
                <li>Development Team</li>
            </ul>`,
        quiz: {
            question: "What are the work cycles in Scrum called?",
            options: ["Cycles", "Sprints", "Rounds", "Phases"],
            answer: 1
        }
    },
    'kanban': {
        title: "Kanban",
        content: `<h1>Kanban</h1>
            <p>Kanban is a popular framework used to implement agile and DevOps software development. It requires real-time communication of capacity and full transparency of work.</p>
            <p>Work items are represented visually on a kanban board, allowing team members to see the state of every piece of work at any time.</p>`
    },
    'devops': {
        title: "DevOps",
        content: `<h1>DevOps</h1>
            <p>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.</p>`
    },
    'lean': {
        title: "Lean Software Development",
        content: `<h1>Lean Software Development</h1>
            <p>Lean Software Development is a translation of lean manufacturing principles and practices to the software development domain. It focuses on eliminating waste and delivering fast.</p>`
    },
    'spiral': {
        title: "Spiral Model",
        content: `<h1>Spiral Model</h1>
            <p>The Spiral Model is a risk-driven software development process model. Based on the unique risk patterns of a given project, the spiral model guides a team to adopt elements of one or more process models, such as incremental, waterfall, or evolutionary prototyping.</p>`
    },
    'vmodel': {
        title: "V-Model",
        content: `<h1>V-Model</h1>
            <p>The V-model is an SDLC model where execution of processes happens in a sequential manner in a V-shape. It is also known as Verification and Validation model.</p>`
    },
    'xp': {
        title: "Extreme Programming (XP)",
        content: `<h1>Extreme Programming (XP)</h1>
            <p>Extreme Programming (XP) is an agile software development framework that aims to produce higher quality software, and higher quality of life for the development team. It is the most specific of the agile frameworks regarding appropriate engineering practices for software development.</p>`
    }
    // Add more topics here as needed
};

function loadPageContent() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    
    if (!topic) return; // Default to static HTML content

    const data = tutorialData[topic];
    const contentDiv = document.querySelector('.content');

    if (data && contentDiv) {
        // 1. Construct the new HTML
        let newHTML = data.content;
        
        // 2. Append a fresh Editor if the content has code
        // We extract the code from the <pre> block in data.content to populate the editor
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data.content;
        const codeBlock = tempDiv.querySelector('pre code');

        if (codeBlock) {
            const codeText = codeBlock.textContent;
            newHTML += `
                <h2>Try It Yourself</h2>
                <div class="editor-container">
                    <div class="editor-header">
                        <span>Live Editor</span>
                        <button class="run-btn" onclick="runCode()">Run ▶</button>
                    </div>
                    <div class="editor-body">
                        <textarea id="code-html" class="code-input" spellcheck="false">${codeText}</textarea>
                        <iframe id="preview-frame" class="preview-frame"></iframe>
                    </div>
                </div>
            `;
        }

        contentDiv.innerHTML = newHTML;
        
        // 3. Initialize the editor
        if(window.runCode && codeBlock) window.runCode();

        // 4. Render Quiz if available
        if (data.quiz) {
            const quizHTML = `
                <div class="quiz-container">
                    <h2>Knowledge Check</h2>
                    <p>${data.quiz.question}</p>
                    <div class="quiz-options">
                        ${data.quiz.options.map((opt, index) => 
                            `<button class="quiz-option" onclick="checkQuiz(this, ${index}, ${data.quiz.answer}, '${topic}')">${opt}</button>`
                        ).join('')}
                    </div>
                    <p id="quiz-result" style="margin-top: 1rem; font-weight: bold;"></p>
                </div>
            `;
            contentDiv.insertAdjacentHTML('beforeend', quizHTML);
        }
    }
}

// --- Quiz Logic ---
window.checkQuiz = function(btn, selectedIndex, correctIndex, topicId) {
    const parent = btn.parentElement;
    const result = parent.nextElementSibling;
    const buttons = parent.querySelectorAll('.quiz-option');
    
    // Disable all buttons
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        result.innerHTML = "Correct! 🎉";
        result.style.color = "#10b981";
        
        // Save Quiz Progress
        if (topicId) {
            let passedQuizzes = JSON.parse(localStorage.getItem(window.getUserKey('passedQuizzes'))) || [];
            if (!passedQuizzes.includes(topicId)) {
                passedQuizzes.push(topicId);
                localStorage.setItem(window.getUserKey('passedQuizzes'), JSON.stringify(passedQuizzes));
            }
        }
    } else {
        btn.classList.add('wrong');
        buttons[correctIndex].classList.add('correct'); // Show correct answer
        result.innerHTML = "Incorrect. Try again next time!";
        result.style.color = "#ef4444";
    }
};

// --- Visual Effects Engine ---
function initVisuals() {
    // 1. Inject Background Blobs
    const blobContainer = document.createElement('div');
    blobContainer.className = 'blob-container';
    blobContainer.innerHTML = `
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    `;
    document.body.prepend(blobContainer);

    // 2. Card Spotlight Effect
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
}

// --- Animation Engine ---
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    // Add staggered delay to grid items
    const cards = document.querySelectorAll('.grid-container .card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
    });

    // Observe other reveal elements
    document.querySelectorAll('.reveal:not(.card)').forEach(el => observer.observe(el));
}

// --- Mobile Sidebar Toggle ---
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const nav = document.querySelector('.nav-links');

    if(sidebar) {
        sidebar.classList.toggle('open');
    } else if (nav) {
        nav.classList.toggle('nav-active');
    }
}

// --- Search Logic ---
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // Check if we are on the homepage (no sidebar) or a tutorial page
        const isHomePage = document.querySelector('.sidebar') === null;

        if (isHomePage) {
            filterHomepageCards(query);
        } else {
            filterSidebarLinks(query);
        }
    });
}

function filterHomepageCards(query) {
    const cards = document.querySelectorAll('.grid-container .card');
    cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';
        const isVisible = title.includes(query) || description.includes(query);
        card.style.display = isVisible ? 'block' : 'none';
    });
}

function filterSidebarLinks(query) {
    const sections = document.querySelectorAll('.sidebar h4');
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(link => {
        // Don't filter the 'Back to Home' link
        if (link.textContent.includes('Back to Home')) return;

        const linkText = link.textContent.toLowerCase();
        const isVisible = linkText.includes(query);
        link.style.display = isVisible ? 'block' : 'none';
    });

    // Now, hide section headers if all their links are hidden
    sections.forEach(section => {
        let nextElement = section.nextElementSibling;
        let hasVisibleLink = false;
        while(nextElement && nextElement.tagName === 'A') {
            if (nextElement.style.display !== 'none') {
                hasVisibleLink = true;
                break;
            }
            nextElement = nextElement.nextElementSibling;
        }
        section.style.display = hasVisibleLink ? 'block' : 'none';
    });
}

// --- Navigation Buttons Logic ---
function addNavigationButtons() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return; // Not a tutorial page

    const path = window.location.pathname.toLowerCase();
    let courseType = '';
    if (path.includes('/html/')) courseType = 'html';
    else if (path.includes('/css/')) courseType = 'css';
    else if (path.includes('/js/')) courseType = 'js';
    else if (path.includes('/python/')) courseType = 'python';
    else if (path.includes('/sql/')) courseType = 'sql';
    else if (path.includes('/java/')) courseType = 'java';
    else if (path.includes('/git/')) courseType = 'git';
    else if (path.includes('/methodologies/')) courseType = 'methodologies';

    if (!courseType || !window.curriculum || !window.curriculum[courseType]) return;

    const allItems = [];
    window.curriculum[courseType].forEach(section => {
        allItems.push(...section.items);
    });

    const currentFullUrl = decodeURI(window.location.pathname + window.location.search);
    let currentIndex = -1;

    for (let i = 0; i < allItems.length; i++) {
        if (currentFullUrl.toLowerCase().endsWith(allItems[i].url.toLowerCase())) {
            currentIndex = i;
            break;
        }
    }

    if (currentIndex === -1) return;

    // Update Progress Bar
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const totalItems = allItems.length;
        const progressPercentage = ((currentIndex + 1) / totalItems) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
    const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;
    const contentDiv = document.querySelector('.content');
    const isTutorial = window.location.pathname.includes('/tutorials/');
    const root = isTutorial ? '../../' : '';

    const navDiv = document.createElement('div');
    navDiv.style.cssText = "margin-top: 4rem; display: flex; justify-content: space-between; border-top: 1px solid var(--glass-border); padding-top: 2rem;";

    if (prevItem) {
        const url = root + (prevItem.url.startsWith('/') ? prevItem.url.substring(1) : prevItem.url);
        navDiv.innerHTML += `<a href="${url}" class="btn-small" style="text-decoration:none; margin-top:0;">&larr; Previous</a>`;
    } else { navDiv.innerHTML += `<div></div>`; }

    if (nextItem) {
        const url = root + (nextItem.url.startsWith('/') ? nextItem.url.substring(1) : nextItem.url);
        navDiv.innerHTML += `<a href="${url}" class="btn-small" style="text-decoration:none; margin-top:0;">Next &rarr;</a>`;
    }
    contentDiv.appendChild(navDiv);

    // --- Certificate Unlock Section (Last Chapter Only) ---
    if (currentIndex === allItems.length - 1) {
        const badgeKey = `badge_${courseType}`;
        const isCourseComplete = localStorage.getItem(badgeKey) === 'true';
        
        const certContainer = document.createElement('div');
        certContainer.style.cssText = "margin-top: 3rem; padding: 2rem; text-align: center; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius); box-shadow: 0 10px 30px -5px rgba(0,0,0,0.05);";
        
        if (isCourseComplete) {
            certContainer.innerHTML = `
                <h2 style="color: var(--primary); margin-bottom: 1rem;">🎉 Congratulations!</h2>
                <p style="margin-bottom: 1.5rem; color: var(--text-muted);">You have successfully completed the <strong>${courseType.toUpperCase()}</strong> curriculum.</p>
                <a href="${root}certificate.html?course=${courseType}" class="btn-small" style="background: var(--accent); color: white; text-decoration: none; font-size: 1.1rem; padding: 0.8rem 1.5rem; display: inline-block; border: none; cursor: pointer;">Get Your Certificate 🏆</a>
            `;
        } else {
            certContainer.innerHTML = `
                <h3 style="color: var(--text-muted); margin-bottom: 0.5rem;">Certificate Locked 🔒</h3>
                <p style="color: var(--text-muted); margin-bottom: 1rem;">Complete all topics in this module to unlock your certificate.</p>
                <button disabled class="btn-small" style="background: var(--text-muted); cursor: not-allowed; opacity: 0.5; border: none; padding: 0.8rem 1.5rem; color: white;">Download Certificate</button>
            `;
        }
        contentDiv.appendChild(certContainer);
    }
}

// --- Dark Mode Logic ---
function initDarkMode() {
    const toggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check local storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if(toggle) toggle.textContent = '☀️';
    } else {
        if(toggle) toggle.textContent = '🌙';
    }

    if(toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            toggle.textContent = isDark ? '☀️' : '🌙';

            // If an editor is on the page, re-run the code to update its theme
            if (typeof runCode === 'function' && document.getElementById('code-html')) {
                runCode();
            }
        });
    }
}

// --- Copy Button Logic ---
function initCopyButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('copy-btn')) {
            const codeBlock = e.target.previousElementSibling; // The <code> element
            if (codeBlock) {
                const code = codeBlock.textContent;
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = e.target.textContent;
                    e.target.textContent = 'Copied!';
                    setTimeout(() => e.target.textContent = originalText, 2000);
                });
            }
        }
    });
}

// --- Progress Tracking ---
function markPageAsVisited() {
    // Determine current topic ID based on URL
    // We use the relative URL path + query string as the ID
    const path = window.location.pathname;
    const search = window.location.search;
    
    // Only track tutorial pages
    if (!path.includes('/tutorials/')) return;

    // Construct ID consistent with sidebar generation
    // e.g., /tutorials/html/intro.html?topic=basic
    // We need to match the 'url' property in the curriculum object
    // The curriculum URLs are like "/tutorials/html/intro.html?topic=basic"
    
    // Find the matching item in curriculum to get the exact ID used there
    let topicId = null;
    let courseType = '';
    if (path.includes('/html/')) courseType = 'html';
    else if (path.includes('/css/')) courseType = 'css';
    else if (path.includes('/js/')) courseType = 'js';
    else if (path.includes('/python/')) courseType = 'python';
    else if (path.includes('/sql/')) courseType = 'sql';
    else if (path.includes('/java/')) courseType = 'java';
    else if (path.includes('/git/')) courseType = 'git';
    else if (path.includes('/methodologies/')) courseType = 'methodologies';

    if (window.curriculum && window.curriculum[courseType]) {
        window.curriculum[courseType].forEach(section => {
            section.items.forEach(item => {
                if (path.endsWith(item.url.split('?')[0]) && search === (item.url.split('?')[1] ? '?' + item.url.split('?')[1] : '')) {
                    topicId = item.url;
                }
            });
        });
    }

    if (topicId) {
        let completed = JSON.parse(localStorage.getItem(window.getUserKey('completedTopics'))) || [];
        if (!completed.includes(topicId)) {
            completed.push(topicId);
            localStorage.setItem(window.getUserKey('completedTopics'), JSON.stringify(completed));
            
            // Check for Module Completion Badge
            checkModuleCompletion(courseType, completed);
        }
    }
}

function checkModuleCompletion(courseType, completed) {
    if (!window.curriculum[courseType]) return;

    let totalItems = 0;
    let completedInModule = 0;

    window.curriculum[courseType].forEach(section => {
        section.items.forEach(item => {
            totalItems++;
            if (completed.includes(item.url)) {
                completedInModule++;
            }
        });
    });

    if (totalItems > 0 && totalItems === completedInModule) {
        // Simple alert for badge (can be improved to a modal)
        const badgeId = window.getUserKey(`badge_${courseType}`);
        if (!localStorage.getItem(badgeId)) {
            alert(`🎉 Congratulations! You've completed the ${courseType.toUpperCase()} module and earned a badge!`);
            localStorage.setItem(badgeId, 'true');
        }
    }
}

// --- Reset Progress ---
function resetProgress() {
    const password = prompt("Enter admin password to reset progress:");
    if (password !== "admin") {
        if (password !== null) alert("Incorrect password.");
        return;
    }
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
        localStorage.removeItem(window.getUserKey('completedTopics'));
        localStorage.removeItem(window.getUserKey('passedQuizzes'));
        // We keep 'theme' preference
        // Remove badges
        const badgePrefix = window.getUserKey('badge_');
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(badgePrefix)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => {
            localStorage.removeItem(k);
        });
        alert("Progress has been reset.");
        location.reload();
    }
}

function openAdminCertificate(root) {
    const password = prompt("Enter admin password to access certificate:");
    if (password === "admin") {
        window.location.href = root + 'certificate.html?course=html&admin=true';
    } else if (password !== null) {
        alert("Incorrect password.");
    }
}

function logout() {
    localStorage.removeItem('user_session');
    location.reload();
}