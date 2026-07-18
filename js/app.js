const CODING_SESSIONS = {
  m1_w1: {
    title: 'Build a Neural Network from Scratch',
    why: 'The best way to understand how a neural network learns is to build one yourself — no magic, just math and Python.',
    concepts: ['Matrix multiplication', 'Weights & layers', 'Forward pass', 'Gradient descent', 'Backpropagation'],
    outcome: 'A working 2-layer neural network (using only NumPy) that learns the XOR function and prints its accuracy.',
    tasks: [
      { id: 'cs_m1_w1_t1', text: 'Set up a Python project with NumPy and create a matrix multiply helper' },
      { id: 'cs_m1_w1_t2', text: 'Implement the forward pass: input → hidden layer → output with sigmoid activation' },
      { id: 'cs_m1_w1_t3', text: 'Implement mean squared error loss function' },
      { id: 'cs_m1_w1_t4', text: 'Implement backpropagation to update weights using gradient descent' },
      { id: 'cs_m1_w1_t5', text: 'Train on the XOR dataset (4 examples) and print accuracy after 1000 epochs' },
    ]
  },
  m1_w2: {
    title: 'Build a Token Counter & Cost Estimator CLI',
    why: 'Tokens are money — every AI call costs tokens. Understanding tokenization gives you control over API costs and prompt design.',
    concepts: ['Tokenization', 'Context windows', 'API parameters (temperature, max_tokens)', 'Transformer architecture'],
    outcome: 'A command-line tool that tokenizes any text, shows how an LLM sees it, and estimates the API cost.',
    tasks: [
      { id: 'cs_m1_w2_t1', text: 'Install tiktoken and write a function that tokenizes any string and prints each token' },
      { id: 'cs_m1_w2_t2', text: 'Count tokens for 5 different prompts (short, long, code, JSON, multi-turn)' },
      { id: 'cs_m1_w2_t3', text: 'Add cost estimation: calculate price for GPT-4o vs GPT-3.5 based on token count' },
      { id: 'cs_m1_w2_t4', text: 'Build a CLI loop — user types text, tool shows token count + cost estimate instantly' },
      { id: 'cs_m1_w2_t5', text: 'Test with a 500-word article: compare token counts across 3 different models' },
    ]
  },
  m1_w3: {
    title: 'Build a Structured AI Chatbot with Memory',
    why: 'This is the core skill of LLM engineering: calling the API, managing conversation history, and forcing structured output.',
    concepts: ['System prompts', 'Conversation history', 'JSON output mode', 'Function calling', 'Model selection'],
    outcome: 'A CLI chatbot that remembers the conversation and can answer in plain text OR structured JSON when asked.',
    tasks: [
      { id: 'cs_m1_w3_t1', text: 'Set up OpenAI SDK and write a basic single-message API call' },
      { id: 'cs_m1_w3_t2', text: 'Wrap it in a conversation loop that keeps full message history' },
      { id: 'cs_m1_w3_t3', text: 'Add a system prompt that gives the bot a personality and response rules' },
      { id: 'cs_m1_w3_t4', text: 'Add a /json command that forces the bot to reply with structured JSON output' },
      { id: 'cs_m1_w3_t5', text: 'Add a /tool command that simulates a function call: bot calls a fake get_weather tool' },
    ]
  },
  m2_w1: {
    title: 'Build a Document Chunker & Embedder',
    why: 'Chunking and embedding are the two most important steps in RAG. Build them from scratch to truly understand what every RAG framework does internally.',
    concepts: ['RAG pipeline', 'Chunking strategies', 'Chunk overlap', 'Embeddings API', 'Cosine similarity'],
    outcome: 'A script that reads a text file, splits it into overlapping chunks, embeds them via OpenAI, and answers questions using the top matching chunks.',
    tasks: [
      { id: 'cs_m2_w1_t1', text: 'Write a chunking function: split text every N words with M-word overlap' },
      { id: 'cs_m2_w1_t2', text: 'Call the OpenAI embeddings API and embed 20 chunks from a real article' },
      { id: 'cs_m2_w1_t3', text: 'Implement cosine similarity from scratch (using only NumPy, no libraries)' },
      { id: 'cs_m2_w1_t4', text: 'Ask a question, embed it, find the 3 most similar chunks, and print them' },
      { id: 'cs_m2_w1_t5', text: 'Pass the top 3 chunks as context to GPT-4 and compare answers with/without context' },
    ]
  },
  m2_w2: {
    title: 'Build a Full RAG Pipeline (No Framework)',
    why: 'Building RAG without LangChain or LlamaIndex forces you to understand every step — retrieval quality, context injection, source tracking.',
    concepts: ['Similarity search', 'Metadata filtering', 'Hybrid search', 'Hallucination prevention', 'pgvector'],
    outcome: 'A question-answering system that reads a PDF, stores embeddings in pgvector, retrieves relevant chunks, and cites sources in every answer.',
    tasks: [
      { id: 'cs_m2_w2_t1', text: 'Parse a PDF into plain text using pdf-parse (Node.js) or PyMuPDF (Python)' },
      { id: 'cs_m2_w2_t2', text: 'Chunk the text and store embeddings in a pgvector table with source + page metadata' },
      { id: 'cs_m2_w2_t3', text: 'Write a retrieval function: embed the query, find top 5 nearest chunks using pgvector' },
      { id: 'cs_m2_w2_t4', text: 'Build the answer prompt: inject chunks + tell the model to cite its sources' },
      { id: 'cs_m2_w2_t5', text: 'Test with 10 questions — check for hallucinations and measure retrieval accuracy' },
    ]
  },
  m2_w3: {
    title: 'Build a Chroma-Powered Q&A App',
    why: 'Chroma is the easiest production-quality vector database to run locally. Using it teaches you how real vector DBs handle storage, indexing, and filtering.',
    concepts: ['Chroma vector database', 'Collection management', 'Persistent storage', 'Metadata filtering'],
    outcome: 'A CLI app backed by Chroma that lets you upload multiple documents and ask questions across all of them with source attribution.',
    tasks: [
      { id: 'cs_m2_w3_t1', text: 'Install Chroma and create a persistent collection with a clear schema' },
      { id: 'cs_m2_w3_t2', text: 'Write a batch-add function: chunk, embed, and store 3 different documents' },
      { id: 'cs_m2_w3_t3', text: 'Query by semantic similarity and print results with source document name' },
      { id: 'cs_m2_w3_t4', text: 'Add metadata filtering: query only chunks from a specific document' },
      { id: 'cs_m2_w3_t5', text: 'Build a CLI: add_doc <file>, ask <question> — handle both commands cleanly' },
    ]
  },
  m3_w1: {
    title: 'Build a ReAct Agent with 2 Tools',
    why: 'Building your first agent with LangChain shows you the Reason-Act-Observe loop that every AI automation system uses.',
    concepts: ['Agent loop', 'Tools', 'ReAct pattern', 'LangChain', 'Conversation memory'],
    outcome: 'A LangChain agent that can use a calculator and a web search tool to answer multi-step questions.',
    tasks: [
      { id: 'cs_m3_w1_t1', text: 'Set up LangChain and define a calculator tool that evaluates math expressions' },
      { id: 'cs_m3_w1_t2', text: 'Add a web search tool using SerpAPI or DuckDuckGo search' },
      { id: 'cs_m3_w1_t3', text: 'Create a ReAct agent and test it with a multi-step question (e.g. "What is the GDP of France divided by its population?")' },
      { id: 'cs_m3_w1_t4', text: 'Add conversation memory so the agent remembers the last 5 messages' },
      { id: 'cs_m3_w1_t5', text: 'Re-build the same agent WITHOUT LangChain (just a while loop + API calls) to see what LangChain is really doing' },
    ]
  },
  m3_w2: {
    title: 'Build a Two-Agent Research Pipeline',
    why: 'Coordinating specialized agents is how real automation scales — one agent researches, another writes, they never overlap.',
    concepts: ['CrewAI', 'LangGraph', 'Agent roles', 'Task delegation', 'Sequential execution'],
    outcome: 'A CrewAI pipeline where a Researcher agent finds information and a Writer agent turns it into a polished summary report.',
    tasks: [
      { id: 'cs_m3_w2_t1', text: 'Install CrewAI and define a Researcher agent with web search capability' },
      { id: 'cs_m3_w2_t2', text: 'Define a Writer agent whose only job is to write clean, structured summaries' },
      { id: 'cs_m3_w2_t3', text: 'Create a Research task (find 5 facts about a topic) and a Summary task (write a report)' },
      { id: 'cs_m3_w2_t4', text: 'Run the crew on 3 different topics and review the output quality' },
      { id: 'cs_m3_w2_t5', text: 'Add a third agent: Editor who reviews and improves the final report' },
    ]
  },
  m3_w3: {
    title: 'Build a Webhook-Triggered AI Workflow',
    why: 'Webhooks are how external events trigger your AI — this is the bridge between the real world and your automation.',
    concepts: ['Webhooks', 'Event-driven systems', 'Background jobs', 'API integrations'],
    outcome: 'An Express.js server with a webhook endpoint that receives form data, processes it with AI, and saves the result to a database.',
    tasks: [
      { id: 'cs_m3_w3_t1', text: 'Set up an Express.js server with a POST /webhook endpoint' },
      { id: 'cs_m3_w3_t2', text: 'Parse the incoming JSON payload (simulate a lead form submission)' },
      { id: 'cs_m3_w3_t3', text: 'Send the payload to OpenAI: generate a personalized follow-up email draft' },
      { id: 'cs_m3_w3_t4', text: 'Save the original data + AI-generated email to a PostgreSQL table' },
      { id: 'cs_m3_w3_t5', text: 'Test end-to-end with curl/Postman — verify data saved and email looks correct' },
    ]
  },
  m4_w1: {
    title: 'Build a Secure, Rate-Limited AI API',
    why: 'Security and rate limiting are non-negotiable in production. One unprotected endpoint can drain your API budget overnight.',
    concepts: ['JWT authentication', 'Rate limiting', 'Input validation', 'Security middleware', 'Background queues'],
    outcome: 'A hardened AI endpoint with JWT auth, rate limiting, sanitized inputs, and structured error responses.',
    tasks: [
      { id: 'cs_m4_w1_t1', text: 'Add JWT authentication middleware to an existing AI endpoint' },
      { id: 'cs_m4_w1_t2', text: 'Implement rate limiting: block any user who exceeds 20 requests per minute' },
      { id: 'cs_m4_w1_t3', text: 'Add input validation: reject empty prompts, prompts over 2000 chars, and dangerous patterns' },
      { id: 'cs_m4_w1_t4', text: 'Add a BullMQ + Redis background queue for long-running AI tasks' },
      { id: 'cs_m4_w1_t5', text: 'Test security edge cases: expired JWT, exceeded rate limit, malformed JSON — confirm clean errors' },
    ]
  },
  m4_w2: {
    title: 'Dockerize an AI App with Full Logging',
    why: 'Docker makes your app run identically everywhere. Logging makes it debuggable. Together they are what separates hobby projects from production systems.',
    concepts: ['Docker', 'docker-compose', 'CI/CD', 'Structured logging', 'Cost tracking'],
    outcome: 'A Dockerized AI app with structured logging on every AI call, a cost tracking middleware, and a GitHub Actions deploy workflow.',
    tasks: [
      { id: 'cs_m4_w2_t1', text: 'Write a Dockerfile for your Node.js AI app (multi-stage build)' },
      { id: 'cs_m4_w2_t2', text: 'Write a docker-compose.yml that spins up: app + PostgreSQL + Redis together' },
      { id: 'cs_m4_w2_t3', text: 'Add structured logging to every AI call: log model, tokens, latency, and user ID' },
      { id: 'cs_m4_w2_t4', text: 'Build a cost tracking middleware: calculate USD cost per request and store in DB' },
      { id: 'cs_m4_w2_t5', text: 'Set up a GitHub Actions workflow: on push to main → run tests → build Docker image → deploy' },
    ]
  },
  m4_w3: {
    title: 'Build an Automated ETL Data Pipeline',
    why: 'Real AI apps need fresh, clean data flowing in automatically. Manual data entry is the enemy of scale.',
    concepts: ['ETL pipelines', 'Data cleaning', 'Cron scheduling', 'Database optimization', 'Error handling'],
    outcome: 'A scheduled Node.js script that fetches data from a public API, cleans it, validates it, and loads it into PostgreSQL every morning.',
    tasks: [
      { id: 'cs_m4_w3_t1', text: 'Write a fetcher that pulls data from a public API (e.g. weather, news, or exchange rates)' },
      { id: 'cs_m4_w3_t2', text: 'Add a transformation step: clean nulls, normalize types, remove duplicates' },
      { id: 'cs_m4_w3_t3', text: 'Write the data to a PostgreSQL table with upsert (update if exists, insert if new)' },
      { id: 'cs_m4_w3_t4', text: 'Add an error table: rows that fail validation go here instead of crashing the pipeline' },
      { id: 'cs_m4_w3_t5', text: 'Schedule with node-cron to run at 6am daily — confirm it runs and logs correctly' },
    ]
  },
  m5_w1: {
    title: 'Build an Invoice Data Extractor',
    why: 'This is a real, high-value business tool — companies pay to automate invoice processing. Vision models make it surprisingly easy to build.',
    concepts: ['Vision API', 'Structured extraction', 'JSON schema', 'Image handling', 'OCR concepts'],
    outcome: 'A Node.js script that takes any invoice image or PDF and returns a clean JSON object with vendor, date, total, and line items.',
    tasks: [
      { id: 'cs_m5_w1_t1', text: 'Write a function that sends an image URL to GPT-4o Vision with a structured extraction prompt' },
      { id: 'cs_m5_w1_t2', text: 'Design a JSON schema for invoices: vendor, date, total, currency, line items[]' },
      { id: 'cs_m5_w1_t3', text: 'Test with 5 different invoice images (receipts, PDFs, handwritten) — check extraction accuracy' },
      { id: 'cs_m5_w1_t4', text: 'Add field validation: ensure required fields exist, format currency as numbers, parse dates' },
      { id: 'cs_m5_w1_t5', text: 'Save the structured data to PostgreSQL and verify it can be queried and reported on' },
    ]
  },
  m5_w2: {
    title: 'Build a Browser Voice Transcription Tool',
    why: 'Speech-to-text is the entry point to every voice feature. Whisper makes it accurate and easy — building the full loop in the browser teaches you how voice apps work.',
    concepts: ['Whisper API', 'MediaRecorder API', 'Audio blob handling', 'Text-to-speech'],
    outcome: 'A web page with a record button — you speak, it transcribes your words on screen using OpenAI Whisper, then reads the transcript back to you.',
    tasks: [
      { id: 'cs_m5_w2_t1', text: 'Build a push-to-talk button using MediaRecorder API that records while held' },
      { id: 'cs_m5_w2_t2', text: 'On release, send the audio blob to a backend endpoint that calls OpenAI Whisper' },
      { id: 'cs_m5_w2_t3', text: 'Display the transcript on screen as it arrives — show confidence score if available' },
      { id: 'cs_m5_w2_t4', text: 'Send the transcript to OpenAI TTS and play the audio response back in the browser' },
      { id: 'cs_m5_w2_t5', text: 'Display conversation history on screen (both your transcription and the AI audio response text)' },
    ]
  },
  m6_w1: {
    title: 'Design Architecture for Your Best Project',
    why: 'System design is your highest-leverage interview skill. Drawing before coding reveals scale problems before they are expensive to fix.',
    concepts: ['Component diagrams', 'Data flow', 'Scaling bottlenecks', 'Cost modeling', 'Multi-tenancy'],
    outcome: 'A clear architecture diagram and one-page design document for your RAG or Chatbot project, with cost estimates at 1k, 10k, and 100k users.',
    tasks: [
      { id: 'cs_m6_w1_t1', text: 'Pick your best project and draw a component diagram in Excalidraw (frontend, backend, DB, AI APIs)' },
      { id: 'cs_m6_w1_t2', text: 'Trace the full data flow for one user request — from click to response' },
      { id: 'cs_m6_w1_t3', text: 'Identify 3 scaling bottlenecks and write one sentence on how you would fix each' },
      { id: 'cs_m6_w1_t4', text: 'Calculate monthly API cost at 1k users, 10k users, and 100k users' },
      { id: 'cs_m6_w1_t5', text: 'Write a one-page technical design doc: problem, solution, components, tradeoffs, what you would do differently' },
    ]
  },
  m6_w2: {
    title: 'Build Your Portfolio Showcase',
    why: 'Your portfolio is your job application. A great README and demo video convert "I see your code" into "I want to hire you."',
    concepts: ['README structure', 'Demo recordings', 'Technical writing', 'Interview storytelling'],
    outcome: 'Every project has a polished README with architecture diagram, a 2-minute demo video, and you can explain each project clearly in under 2 minutes.',
    tasks: [
      { id: 'cs_m6_w2_t1', text: 'Write a README for each project: what it does, why it exists, architecture diagram, setup steps' },
      { id: 'cs_m6_w2_t2', text: 'Record a 2-minute screen demo for each project — show the full user flow without narrating slides' },
      { id: 'cs_m6_w2_t3', text: 'Write one technical blog post explaining how RAG works, using your project as the real example' },
      { id: 'cs_m6_w2_t4', text: 'Practice explaining your best project out loud in under 2 minutes — record yourself and review' },
      { id: 'cs_m6_w2_t5', text: 'Pin your 3 best repos on GitHub with one-line descriptions that clearly state the business value' },
    ]
  },
};

const App = {
  currentPage: 'dashboard',
  activeMonth: 1,

  init() {
    this.loadSettings();
    this.setupNavigation();
    const prog = Storage.getProgress();
    this.activeMonth = prog.currentMonth;
    this.updateSidebarProgress();
    this.navigate('dashboard');
  },

  loadSettings() {
    const data = Storage.load();
    const name = data.settings.name || 'AI Engineer';
    const el = document.getElementById('userName');
    const av = document.getElementById('userAvatar');
    if (el) el.textContent = name;
    if (av) av.textContent = name[0].toUpperCase();
  },

  setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        this.navigate(item.dataset.page);
      });
    });
    const toggle = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('sidebarOverlay');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth <= 768) {
          sidebar.classList.toggle('mobile-open');
          overlay && overlay.classList.toggle('active', sidebar.classList.contains('mobile-open'));
        } else {
          sidebar.classList.toggle('collapsed');
        }
      });
    }
    if (overlay) {
      overlay.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
      });
    }
  },

  navigate(page) {
    this.currentPage = page;
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });
    const main = document.getElementById('mainContent');
    main.innerHTML = '<div class="page-loader"><div class="spinner"></div></div>';
    setTimeout(() => {
      switch (page) {
        case 'dashboard': main.innerHTML = this.renderDashboard(); break;
        case 'roadmap':   main.innerHTML = this.renderRoadmap(); break;
        case 'settings':  main.innerHTML = this.renderSettings(); break;
        default:          main.innerHTML = this.renderDashboard();
      }
      this.bindPageEvents(page);
      this.updateSidebarProgress();
    }, 80);
  },

  updateSidebarProgress() {
    const prog = Storage.getProgress();
    const bar = document.getElementById('sidebarProgress');
    const txt = document.getElementById('sidebarProgressText');
    if (bar) bar.style.width = prog.overall + '%';
    if (txt) txt.textContent = prog.overall + '%';
  },

  bindPageEvents(page) {
    if (page === 'roadmap') this.bindRoadmapEvents();
    if (page === 'settings') this.bindSettingsEvents();
  },

  /* ────────────────────────────────────────
     DASHBOARD
  ──────────────────────────────────────── */
  renderDashboard() {
    const prog = Storage.getProgress();
    const data = Storage.load();
    const name = data.settings.name || 'AI Engineer';
    const month = ROADMAP_DATA.months[prog.currentMonth - 1];

    const hr = new Date().getHours();
    const greeting = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';

    // Find next uncompleted topic in current month
    let nextTopic = null;
    let nextSection = null;
    for (const section of month.sections) {
      for (const topic of section.topics) {
        if (!data.completedTopics.includes(topic.id)) {
          nextTopic = topic;
          nextSection = section;
          break;
        }
      }
      if (nextTopic) break;
    }

    const monthProg = Storage.getMonthProgress(prog.currentMonth);
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

    return `
      <div class="page fade-in">
        <div class="dash-header">
          <h1 class="dash-title">${greeting}, <span class="gradient-text">${name}</span></h1>
          <p class="dash-date">${today}</p>
        </div>

        <div class="dash-cards">
          <div class="dash-card" style="--card-accent:${month.color}">
            <div class="dash-card-icon" style="color:${month.color}">
              <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>
            </div>
            <div class="dash-card-num" style="color:${month.color}">Month ${prog.currentMonth}</div>
            <div class="dash-card-label">${month.title}</div>
          </div>
          <div class="dash-card">
            <div class="dash-card-icon" style="color:var(--accent-cyan)">
              <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
            </div>
            <div class="dash-card-num" style="color:var(--accent-cyan)">Week ${prog.currentWeek}</div>
            <div class="dash-card-label">of Month ${prog.currentMonth}</div>
          </div>
          <div class="dash-card">
            <div class="dash-card-icon" style="color:var(--accent-green)">
              <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <div class="dash-card-num" style="color:var(--accent-green)">${prog.overall}%</div>
            <div class="dash-card-label">${prog.completed} / ${prog.totalTopics} topics</div>
          </div>
        </div>

        <div class="dash-progress-section">
          <div class="dash-progress-meta">
            <span>Month ${prog.currentMonth} Progress</span>
            <span>${monthProg}%</span>
          </div>
          <div class="dash-progress-track">
            <div class="dash-progress-fill" style="width:${monthProg}%;background:${month.color}"></div>
          </div>
        </div>

        ${nextTopic ? `
        <div class="dash-next-card">
          <div class="dash-next-pill">Up Next</div>
          <div class="dash-next-topic">${nextTopic.text}</div>
          <div class="dash-next-section">${nextSection.title}</div>
          <button class="btn btn-primary dash-next-btn" onclick="App.navigate('roadmap')">
            Go to Roadmap →
          </button>
        </div>
        ` : `
        <div class="dash-next-card dash-complete-card">
          <div class="dash-next-pill" style="background:rgba(16,185,129,0.15);color:var(--accent-green)">Month Complete!</div>
          <div class="dash-next-topic">All topics in Month ${prog.currentMonth} are done.</div>
          ${prog.currentMonth < 6 ? `<div class="dash-next-section">Move on to Month ${prog.currentMonth + 1}: ${ROADMAP_DATA.months[prog.currentMonth].title}</div>` : '<div class="dash-next-section">You have completed the full 6-month roadmap!</div>'}
          <button class="btn btn-primary dash-next-btn" onclick="App.navigate('roadmap')">
            View Roadmap →
          </button>
        </div>
        `}

        <div class="dash-rule-card">
          <div class="dash-rule-icon">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
          </div>
          <div>
            <div class="dash-rule-title">The Rule</div>
            <div class="dash-rule-text">${ROADMAP_DATA.rule}</div>
          </div>
        </div>
      </div>
    `;
  },

  /* ────────────────────────────────────────
     ROADMAP
  ──────────────────────────────────────── */
  renderRoadmap() {
    const prog = Storage.getProgress();
    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">6 Month Roadmap</h1>
            <p class="page-subtitle">${prog.overall}% complete &middot; ${prog.completed} of ${prog.totalTopics} topics done</p>
          </div>
        </div>

        <div class="month-tabs" id="monthTabs">
          ${ROADMAP_DATA.months.map(m => {
            const mp = Storage.getMonthProgress(m.id);
            return `
              <button class="month-tab ${m.id === this.activeMonth ? 'active' : ''}"
                      data-month="${m.id}"
                      style="--tab-color:${m.color}">
                <span class="tab-num">M${m.id}</span>
                <span class="tab-title">${m.title.split(':')[0].trim()}</span>
                <span class="tab-prog">${mp}%</span>
              </button>
            `;
          }).join('')}
        </div>

        <div id="monthContent">
          ${this.renderMonthContent(this.activeMonth)}
        </div>
      </div>
    `;
  },

  getMonthWeeks(month) {
    const monthId = month.id;
    const learnSections = month.sections.filter(s => s.type !== 'project');
    const projectSections = month.sections.filter(s => s.type === 'project');

    const allLearning = [];
    learnSections.forEach(section => {
      section.topics.forEach(topic => allLearning.push({ topic, section }));
    });

    // Every weekday: 1.5h reading + 1.5h coding = 3h total
    // If section has no code tasks: 3h reading instead
    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const makeDayMeta = (section) => {
      const hasCoding = section && section.note && section.note.code && section.note.code.length > 0;
      return hasCoding
        ? { readHours: '1.5h', codeHours: '1.5h', totalHours: '3h' }
        : { readHours: '3h',   codeHours: null,    totalHours: '3h' };
    };

    const weeks = [];

    for (let w = 0; w < 3; w++) {
      const items = allLearning.slice(w * 5, (w + 1) * 5);
      if (items.length > 0 || w === 0) {
        weeks.push({
          number: w + 1,
          monthId,
          type: 'learning',
          days: items.map((item, i) => ({
            label: dayLabels[i],
            topic: item.topic,
            section: item.section,
            ...makeDayMeta(item.section)
          })),
          emptyDayLabels: dayLabels.slice(items.length),
          weekend: {
            sat: { hours: '5h', task: 'Full Coding Session', desc: 'Re-implement topics from the week, build mini-projects, practice exercises' },
            sun: { hours: '5h', task: 'Full Coding Session', desc: 'Review & extend Saturday\'s work, document what you built, plan next week' }
          }
        });
      }
    }

    const extraLearning = allLearning.slice(15);
    const allProjectItems = [];
    projectSections.forEach(ps => ps.topics.forEach(t => allProjectItems.push({ topic: t, section: ps })));
    const allWeek4 = [
      ...extraLearning.map(i => ({ topic: i.topic, section: i.section })),
      ...allProjectItems
    ];

    weeks.push({
      number: 4,
      monthId,
      type: 'project',
      projectSection: projectSections[0] || null,
      days: allWeek4.slice(0, 5).map((item, i) => ({
        label: dayLabels[i],
        topic: item.topic,
        section: item.section,
        readHours: '1.5h',
        codeHours: '3.5h',
        totalHours: '5h'
      })),
      extraTasks: allWeek4.slice(5),
      weekend: {
        sat: { hours: '5h', task: 'Full Project Build', desc: 'Complete remaining features, refactor, improve UX and code quality' },
        sun: { hours: '5h', task: 'Deploy & Document', desc: 'Write README, record demo video, deploy to production, publish on GitHub' }
      }
    });

    return weeks;
  },

  renderMonthContent(monthId) {
    const month = ROADMAP_DATA.months.find(m => m.id === monthId);
    if (!month) return '';
    const data = Storage.load();
    const completed = data.completedTopics;
    const weeks = this.getMonthWeeks(month);

    return `
      <div class="month-content">
        <div class="month-intro">
          <span class="month-intro-badge" style="background:${month.color}20;color:${month.color}">Month ${month.id}</span>
          <h2 class="month-intro-title">${month.title}</h2>
          <p class="month-intro-goal">${month.mainGoal}</p>
        </div>

        ${weeks.map(week => this.renderWeek(week, completed, month.color)).join('')}
      </div>
    `;
  },

  renderWeekend(weekend, type) {
    if (!weekend) return '';
    const isProject = type === 'project';
    return `
      <div class="weekend-section">
        <div class="weekend-divider">
          <span class="weekend-divider-label">
            Weekend &mdash; <strong>${weekend.sat.hours}/day</strong> Full Coding
          </span>
        </div>
        <div class="weekend-rows">
          <div class="weekend-row">
            <div class="topic-row-main">
              <span class="day-label">Sat</span>
              <span class="hours-pill hours-weekend">${weekend.sat.hours}</span>
              <div class="weekend-content">
                <span class="weekend-task">${weekend.sat.task}</span>
                <span class="weekend-desc">${weekend.sat.desc}</span>
              </div>
            </div>
          </div>
          <div class="weekend-row">
            <div class="topic-row-main">
              <span class="day-label">Sun</span>
              <span class="hours-pill hours-weekend">${weekend.sun.hours}</span>
              <div class="weekend-content">
                <span class="weekend-task">${weekend.sun.task}</span>
                <span class="weekend-desc">${weekend.sun.desc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderWeek(week, completed, color) {
    const isProject = week.type === 'project';
    const extraTasks = week.extraTasks || [];
    return `
      <div class="week-block ${isProject ? 'week-block-project' : ''}">
        <div class="week-header">
          <div class="week-label">
            <span class="week-badge ${isProject ? 'week-badge-project' : ''}">Week ${week.number}</span>
            <span class="week-type-tag ${isProject ? 'week-type-build' : ''}">${isProject ? 'Build Week' : 'Learning Week'}</span>
          </div>
          <div class="week-day-legend">
            ${isProject
              ? `<span class="legend-item legend-build">Mon–Fri: 1.5h study + 3.5h build = 5h/day</span><span class="legend-item legend-weekend">Sat &amp; Sun: 5h/day full coding</span>`
              : `<span class="legend-item legend-read">Each day: 1.5h reading + 1.5h coding = 3h</span><span class="legend-item legend-weekend">Sat &amp; Sun: 5h/day full coding</span>`
            }
          </div>
        </div>
        ${isProject && week.projectSection ? `
          <div class="project-week-info">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/></svg>
            ${week.projectSection.title}
          </div>
        ` : ''}
        <div class="week-days">
          ${week.days.map(day => this.renderTopicRow(day, completed, color)).join('')}
          ${(week.emptyDayLabels || []).map(lbl => `
            <div class="topic-row topic-row-revision">
              <div class="topic-row-main">
                <span class="day-label">${lbl}</span>
                <span class="hours-pill">3h</span>
                <span class="topic-text-muted">Catch-up &amp; revision day</span>
              </div>
            </div>
          `).join('')}
        </div>
        ${extraTasks.length > 0 ? `
          <div class="extra-tasks">
            <div class="extra-tasks-label">${isProject ? 'Remaining build tasks' : 'Remaining tasks'}:</div>
            ${extraTasks.map(item => {
              const isDone = completed.includes(item.topic.id);
              return `
                <label class="extra-task-row ${isDone ? 'extra-task-done' : ''}">
                  <input type="checkbox" class="topic-check" data-topic-id="${item.topic.id}" ${isDone ? 'checked' : ''}>
                  <span>${item.topic.text}</span>
                </label>
              `;
            }).join('')}
          </div>
        ` : ''}
        ${this.renderCodingSession(week.monthId, week.number, completed)}
        ${this.renderWeekend(week.weekend, week.type)}
      </div>
    `;
  },

  renderCodingSession(monthId, weekNum, completed) {
    if (!monthId) return '';
    const key = `m${monthId}_w${weekNum}`;
    const session = CODING_SESSIONS[key];
    if (!session) return '';
    const allDone = session.tasks.every(t => completed.includes(t.id));
    const doneCnt = session.tasks.filter(t => completed.includes(t.id)).length;
    return `
      <div class="coding-session" id="cs-${key}">
        <div class="cs-header">
          <div class="cs-header-left">
            <span class="cs-badge">
              <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              Coding Session
            </span>
            <span class="cs-title">${session.title}</span>
          </div>
          <div class="cs-progress-pill ${allDone ? 'cs-progress-done' : ''}">${doneCnt}/${session.tasks.length}</div>
        </div>
        <div class="cs-meta-row">
          <div class="cs-meta-item">
            <span class="cs-meta-label">Why build this</span>
            <span class="cs-meta-text">${session.why}</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Concepts applied</span>
            <div class="cs-concepts">${session.concepts.map(c => `<span class="cs-concept-tag">${c}</span>`).join('')}</div>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Expected outcome</span>
            <span class="cs-meta-text cs-outcome">${session.outcome}</span>
          </div>
        </div>
        <div class="cs-tasks">
          ${session.tasks.map(task => {
            const isDone = completed.includes(task.id);
            return `
              <label class="cs-task-row ${isDone ? 'cs-task-done' : ''}" id="row-${task.id}">
                <input type="checkbox" class="topic-check" data-topic-id="${task.id}" ${isDone ? 'checked' : ''}>
                <span class="cs-task-check ${isDone ? 'topic-checkmark-done' : 'topic-checkmark'}">
                  <svg class="check-svg" viewBox="0 0 20 20" fill="currentColor" width="10" height="10" style="display:${isDone ? 'block' : 'none'}"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                </span>
                <span class="cs-task-text ${isDone ? 'cs-task-text-done' : ''}">${task.text}</span>
              </label>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderTopicRow(day, completed, color) {
    const isDone = completed.includes(day.topic.id);
    const hasNote = !!(day.section && day.section.note);
    const hours = day.totalHours || '3h';
    const hasCoding = day.codeHours !== null && day.codeHours !== undefined;
    const hoursTitle = hasCoding
      ? `${day.readHours} reading + ${day.codeHours} coding`
      : `${day.readHours} reading`;
    return `
      <div class="topic-row ${isDone ? 'topic-row-done' : ''}" id="row-${day.topic.id}">
        <div class="topic-row-main">
          <span class="day-label">${day.label || ''}</span>
          <span class="hours-pill" title="${hoursTitle}">${hours}</span>
          <label class="topic-check-label">
            <input type="checkbox" class="topic-check" data-topic-id="${day.topic.id}" ${isDone ? 'checked' : ''}>
            <span class="topic-checkmark ${isDone ? 'topic-checkmark-done' : ''}">
              <svg class="check-svg" viewBox="0 0 20 20" fill="currentColor" width="11" height="11" style="display:${isDone ? 'block' : 'none'}"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            </span>
          </label>
          <span class="topic-text ${isDone ? 'topic-text-done' : ''}">${day.topic.text}</span>
          ${hasNote ? `
            <button class="topic-expand-btn" data-topic-id="${day.topic.id}" title="Show learning notes">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </button>
          ` : ''}
        </div>
        ${hasNote ? `
          <div class="topic-detail" id="detail-${day.topic.id}" hidden>
            ${this.renderTopicDetail(day.section)}
          </div>
        ` : ''}
      </div>
    `;
  },

  renderTopicDetail(section) {
    const note = section.note;
    if (!note) return '';
    const isProject = section.type === 'project';
    return `
      <div class="detail-inner">
        <div class="detail-cols">
          <div class="detail-main">
            <div class="detail-section-tag">${section.title}</div>
            ${note.learn && note.learn.length ? `
              <div class="detail-block">
                <div class="detail-block-title">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.357l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/></svg>
                  What to Learn
                </div>
                <ul class="detail-list">
                  ${note.learn.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            ${note.concepts && note.concepts.length ? `
              <div class="detail-block">
                <div class="detail-block-title">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
                  Key Concepts
                </div>
                <ul class="detail-list detail-list-concepts">
                  ${note.concepts.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            ${note.code && note.code.length ? `
              <div class="detail-block">
                <div class="detail-block-title">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  Practice Tasks
                </div>
                <ol class="detail-list detail-list-code">
                  ${note.code.map(item => `<li>${item}</li>`).join('')}
                </ol>
              </div>
            ` : ''}
          </div>
          <div class="detail-sidebar">
            <div class="daily-schedule">
              <div class="daily-schedule-title">Daily Schedule</div>
              ${isProject ? `
                <div class="sch-row">
                  <span class="sch-day">Mon – Fri</span>
                  <div class="sch-split">
                    <span class="sch-badge sch-read">Study 1.5h</span>
                    <span class="sch-badge sch-build">Build 3.5h</span>
                  </div>
                  <span class="sch-time">5h</span>
                </div>
                <div class="sch-row">
                  <span class="sch-day">Saturday</span>
                  <span class="sch-badge sch-build">Build</span>
                  <span class="sch-time">5h</span>
                </div>
                <div class="sch-row">
                  <span class="sch-day">Sunday</span>
                  <span class="sch-badge sch-deploy">Deploy</span>
                  <span class="sch-time">5h</span>
                </div>
              ` : (() => {
                const hasCoding = note.code && note.code.length > 0;
                return `
                <div class="sch-row">
                  <span class="sch-day">Mon – Fri</span>
                  <div class="sch-split">
                    <span class="sch-badge sch-read">Read ${hasCoding ? '1.5h' : '3h'}</span>
                    ${hasCoding ? `<span class="sch-badge sch-code">Code 1.5h</span>` : ''}
                  </div>
                  <span class="sch-time">3h</span>
                </div>
                <div class="sch-row">
                  <span class="sch-day">Sat &amp; Sun</span>
                  <span class="sch-badge sch-code">Coding</span>
                  <span class="sch-time">5h</span>
                </div>
                `;
              })()}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  bindRoadmapEvents() {
    document.querySelectorAll('.month-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const monthId = parseInt(tab.dataset.month);
        this.activeMonth = monthId;
        document.querySelectorAll('.month-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const content = document.getElementById('monthContent');
        if (content) {
          content.innerHTML = this.renderMonthContent(monthId);
          this.bindTopicEvents();
        }
      });
    });
    this.bindTopicEvents();
  },

  bindTopicEvents() {
    // Checkbox toggling
    document.querySelectorAll('.topic-check').forEach(chk => {
      chk.addEventListener('change', () => {
        const topicId = chk.dataset.topicId;
        const isDone = Storage.toggleTopic(topicId);
        const row = document.getElementById('row-' + topicId) || chk.closest('.topic-row, .extra-task-row, .cs-task-row');
        if (row) {
          row.classList.toggle('topic-row-done', isDone);
          row.classList.toggle('extra-task-done', isDone);
          row.classList.toggle('cs-task-done', isDone);
          const text = row.querySelector('.topic-text, .cs-task-text');
          if (text) {
            text.classList.toggle('topic-text-done', isDone);
            text.classList.toggle('cs-task-text-done', isDone);
          }
          const mark = row.querySelector('.topic-checkmark, .cs-task-check');
          if (mark) {
            mark.classList.toggle('topic-checkmark-done', isDone);
            const svg = mark.querySelector('.check-svg');
            if (svg) svg.style.display = isDone ? 'block' : 'none';
          }
          // Update coding session progress pill
          const csBlock = row.closest('.coding-session');
          if (csBlock) {
            const pill = csBlock.querySelector('.cs-progress-pill');
            if (pill) {
              const checks = csBlock.querySelectorAll('.topic-check');
              const doneCount = [...checks].filter(c => c.checked).length;
              pill.textContent = `${doneCount}/${checks.length}`;
              pill.classList.toggle('cs-progress-done', doneCount === checks.length);
            }
          }
        }
        this.updateSidebarProgress();
        this.refreshMonthTabProgress();
      });
    });

    // Expand/collapse detail
    document.querySelectorAll('.topic-expand-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const topicId = btn.dataset.topicId;
        const detail = document.getElementById('detail-' + topicId);
        if (!detail) return;
        const isOpen = !detail.hidden;
        detail.hidden = isOpen;
        btn.classList.toggle('expanded', !isOpen);
      });
    });
  },

  refreshMonthTabProgress() {
    document.querySelectorAll('.month-tab').forEach(tab => {
      const monthId = parseInt(tab.dataset.month);
      const mp = Storage.getMonthProgress(monthId);
      const el = tab.querySelector('.tab-prog');
      if (el) el.textContent = mp + '%';
    });
  },

  /* ────────────────────────────────────────
     SETTINGS
  ──────────────────────────────────────── */
  renderSettings() {
    const data = Storage.load();
    const s = data.settings;
    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">Settings</h1>
            <p class="page-subtitle">Manage your profile and data</p>
          </div>
        </div>

        <div class="settings-card">
          <h3 class="settings-section-title">Profile</h3>
          <div class="settings-field">
            <label class="settings-label" for="settingName">Your Name</label>
            <input type="text" class="settings-input" id="settingName" value="${s.name || ''}" placeholder="AI Engineer">
          </div>
          <div class="settings-field">
            <label class="settings-label" for="settingStartDate">Roadmap Start Date</label>
            <input type="date" class="settings-input" id="settingStartDate" value="${s.startDate || ''}">
            <div class="settings-hint">Used to calculate your current month and week</div>
          </div>
          <button class="btn btn-primary" id="saveSettings">Save Profile</button>
        </div>

        <div class="settings-card">
          <h3 class="settings-section-title">Data Management</h3>
          <div class="settings-actions-grid">
            <div class="settings-action-item">
              <div class="settings-action-title">Export Progress</div>
              <div class="settings-action-desc">Download your progress data as JSON backup</div>
              <button class="btn btn-outline" id="exportData">Export JSON</button>
            </div>
            <div class="settings-action-item">
              <div class="settings-action-title">Import Progress</div>
              <div class="settings-action-desc">Restore from a previously exported file</div>
              <button class="btn btn-outline" id="importData">Import JSON</button>
              <input type="file" id="importFile" accept=".json" style="display:none">
            </div>
            <div class="settings-action-item settings-action-danger">
              <div class="settings-action-title">Reset All Data</div>
              <div class="settings-action-desc">Clear all progress. This cannot be undone.</div>
              <button class="btn btn-danger" id="resetData">Reset Everything</button>
            </div>
          </div>
        </div>

        <div class="settings-card settings-info-card">
          <div class="settings-info-row">
            <span class="settings-info-label">Daily Target</span>
            <span>${ROADMAP_DATA.dailySchedule.total}h/day (${ROADMAP_DATA.dailySchedule.learning}h learning + ${ROADMAP_DATA.dailySchedule.building}h building)</span>
          </div>
          <div class="settings-info-row">
            <span class="settings-info-label">Goal</span>
            <span>${ROADMAP_DATA.positioning}</span>
          </div>
        </div>
      </div>
    `;
  },

  bindSettingsEvents() {
    const saveBtn = document.getElementById('saveSettings');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const name = (document.getElementById('settingName').value || '').trim();
        const startDate = document.getElementById('settingStartDate').value;
        Storage.saveSettings({ name: name || 'AI Engineer', startDate });
        const nameEl = document.getElementById('userName');
        const avEl = document.getElementById('userAvatar');
        const finalName = name || 'AI Engineer';
        if (nameEl) nameEl.textContent = finalName;
        if (avEl) avEl.textContent = finalName[0].toUpperCase();
        this.showToast('Profile saved');
      });
    }

    const exportBtn = document.getElementById('exportData');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const json = Storage.exportData();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-roadmap-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.showToast('Data exported');
      });
    }

    const importBtn = document.getElementById('importData');
    const importFile = document.getElementById('importFile');
    if (importBtn && importFile) {
      importBtn.addEventListener('click', () => importFile.click());
      importFile.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          if (Storage.importData(ev.target.result)) {
            this.showToast('Data imported successfully');
            this.navigate('settings');
          } else {
            this.showToast('Import failed — invalid file', 'error');
          }
        };
        reader.readAsText(file);
      });
    }

    const resetBtn = document.getElementById('resetData');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset all progress? This cannot be undone.')) {
          Storage.resetAll();
          this.showToast('All data cleared');
          location.reload();
        }
      });
    }
  },

  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
