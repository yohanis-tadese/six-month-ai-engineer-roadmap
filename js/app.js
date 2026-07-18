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
    title: 'Build a Secure, Structured AI Chatbot',
    why: 'Every production LLM endpoint needs three layers: input validation, conversation management, and output parsing. Building all three in one session makes them stick.',
    concepts: ['System prompts', 'Conversation history', 'Prompt injection', 'JSON output mode', 'Output validation'],
    outcome: 'A CLI chatbot with conversation memory, a 3-layer input guard against prompt injection, and reliable JSON output with automatic retry on parse failure.',
    tasks: [
      { id: 'cs_m1_w3_t1', text: 'Set up OpenAI SDK, write a conversation loop that maintains full message history across turns' },
      { id: 'cs_m1_w3_t2', text: 'Add a system prompt with clear constraints — then run 5 prompt injection attempts against it and document which succeed' },
      { id: 'cs_m1_w3_t3', text: 'Build an input guard function: reject messages containing "ignore instructions", "reveal system prompt", or similar injection patterns' },
      { id: 'cs_m1_w3_t4', text: 'Add a /json command that forces structured output — implement retry-on-parse-failure: retry up to 3 times if JSON.parse() throws' },
      { id: 'cs_m1_w3_t5', text: 'Add a PII check: if user input contains an email or phone number pattern, warn the user before sending to the API' },
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
    title: 'Build a Full RAG Pipeline with Reranking',
    why: 'Building RAG without a framework forces you to understand every step. Adding reranking reveals the quality gap between naive retrieval and production retrieval.',
    concepts: ['Similarity search', 'Metadata filtering', 'Hybrid search', 'Reranking', 'pgvector'],
    outcome: 'A RAG system that reads a PDF, stores embeddings in pgvector, retrieves with hybrid search, reranks with Cohere, and cites sources in every answer.',
    tasks: [
      { id: 'cs_m2_w2_t1', text: 'Parse a PDF into plain text using pdf-parse (Node.js) or PyMuPDF (Python)' },
      { id: 'cs_m2_w2_t2', text: 'Chunk the text and store embeddings in a pgvector table with source + page metadata' },
      { id: 'cs_m2_w2_t3', text: 'Write a retrieval function: embed the query, find top 20 nearest chunks using pgvector' },
      { id: 'cs_m2_w2_t4', text: 'Add Cohere Rerank: pass your top-20 chunks to the Cohere Rerank API — receive top-5 reranked results and compare quality before vs. after on 10 questions' },
      { id: 'cs_m2_w2_t5', text: 'Build the answer prompt: inject top-5 reranked chunks + enforce source citation (document name + page number) in every response' },
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
    title: 'Build a ReAct Agent from Scratch, Then with LangChain',
    why: 'Understanding the agent loop before using a framework means you can debug anything. Build it from scratch first — LangChain second.',
    concepts: ['Agent loop', 'ReAct pattern', 'Tool calling', 'Iteration limits', 'LangChain comparison'],
    outcome: 'A working ReAct agent built with only a while loop and API calls, then rebuilt with LangChain — with a written comparison of what each approach abstracts.',
    tasks: [
      { id: 'cs_m3_w1_t1', text: 'Write a ReAct agent from scratch: a while loop that calls the LLM, parses tool calls from the response text, executes them, and feeds results back' },
      { id: 'cs_m3_w1_t2', text: 'Add two tools: calculator (evaluates math expressions) and web search (DuckDuckGo API) — log the full Reason → Act → Observe cycle to the console' },
      { id: 'cs_m3_w1_t3', text: 'Test with a multi-step question requiring both tools (e.g. "What is the population of France times the GDP per capita of Germany?")' },
      { id: 'cs_m3_w1_t4', text: 'Add a max_iterations=10 limit and a graceful failure message: "Could not complete this task in the allowed steps"' },
      { id: 'cs_m3_w1_t5', text: 'Rebuild the same agent using LangChain — compare code length side-by-side and write a one-paragraph explanation of what LangChain abstracted' },
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
    title: 'Build a Secure AI API with PII Filtering and Injection Defense',
    why: 'Security and rate limiting are non-negotiable in production. Prompt injection and PII leakage are the two most common AI-specific vulnerabilities — fix both.',
    concepts: ['JWT authentication', 'Rate limiting', 'PII redaction', 'Prompt injection defense', 'OWASP LLM Top 10'],
    outcome: 'A hardened AI endpoint with JWT auth, rate limiting, Presidio PII redaction, and a 3-layer prompt injection defense — tested against 5 real injection attempts.',
    tasks: [
      { id: 'cs_m4_w1_t1', text: 'Add JWT authentication middleware using httpOnly cookies (not Authorization header) to an existing AI endpoint' },
      { id: 'cs_m4_w1_t2', text: 'Implement rate limiting: block users who exceed 20 requests per minute with a clean 429 response and retry-after header' },
      { id: 'cs_m4_w1_t3', text: 'Install Microsoft Presidio: add PII redaction middleware that detects and masks emails, phone numbers, and SSNs from user input before the LLM call' },
      { id: 'cs_m4_w1_t4', text: 'Add a BullMQ + Redis background queue for long-running AI tasks — document processing must not block the HTTP response' },
      { id: 'cs_m4_w1_t5', text: 'Run 5 prompt injection attempts against your secured endpoint — document which succeed and add input guards to block all of them' },
    ]
  },
  m4_w2: {
    title: 'Dockerize an AI App with Langfuse Observability',
    why: 'Docker makes your app run identically everywhere. Langfuse makes every AI call visible. Together they are what separate hobby projects from production systems.',
    concepts: ['Docker', 'docker-compose', 'CI/CD', 'Langfuse tracing', 'Cost alerts'],
    outcome: 'A Dockerized AI app with Langfuse tracing on every LLM call, a Slack cost alert when daily spend exceeds $5, and a GitHub Actions CI/CD pipeline.',
    tasks: [
      { id: 'cs_m4_w2_t1', text: 'Write a Dockerfile for your Node.js AI app using a multi-stage build for a smaller production image' },
      { id: 'cs_m4_w2_t2', text: 'Write a docker-compose.yml that spins up: app + PostgreSQL + Redis + Langfuse together with one command' },
      { id: 'cs_m4_w2_t3', text: 'Integrate Langfuse: add tracing to every LLM call — open the Langfuse UI and verify each trace shows model, tokens, latency, and user ID' },
      { id: 'cs_m4_w2_t4', text: 'Build a cost alert: calculate running daily spend in a middleware — fire a Slack webhook notification when it exceeds $5' },
      { id: 'cs_m4_w2_t5', text: 'Set up GitHub Actions: on push to main → run tests → build Docker image → deploy to Railway with environment variables injected from secrets' },
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
  m5_w3: {
    title: 'Run Local AI Models with Ollama',
    why: 'Local models eliminate API costs and privacy concerns. Every professional AI engineer should know how to run and evaluate open-source models for the right use cases.',
    concepts: ['Ollama', 'GGUF quantization', 'Hugging Face Hub', 'Local inference', 'Model comparison'],
    outcome: 'A local AI chat CLI powered by Llama 3.2 via Ollama, plus a written benchmark comparing it to GPT-4o on 10 identical prompts across speed, quality, and cost.',
    tasks: [
      { id: 'cs_m5_w3_t1', text: 'Install Ollama and run `ollama run llama3.2` — test with 10 prompts and measure average response time vs. GPT-4o' },
      { id: 'cs_m5_w3_t2', text: 'Build a local chat CLI using Ollama\'s OpenAI-compatible API: replace base_url with http://localhost:11434/v1 — no other code changes needed' },
      { id: 'cs_m5_w3_t3', text: 'Pull Llama 3.2 and Mistral — run the same 5 prompts on both and document quality differences in format, accuracy, and tone' },
      { id: 'cs_m5_w3_t4', text: 'Search Hugging Face Hub for the top 3 text embedding models by download count — compare their model cards, context windows, and benchmark scores' },
      { id: 'cs_m5_w3_t5', text: 'Write a decision matrix: for each of your 5 projects, evaluate whether a local model would work — document privacy, cost, quality, and latency tradeoffs' },
    ]
  },
  m6_w3: {
    title: 'Fine-Tune a Model for a Specific Task',
    why: 'Knowing when and how to fine-tune separates a junior AI engineer from a senior one. Building it once makes the decision framework concrete and the process familiar.',
    concepts: ['Fine-tuning', 'JSONL dataset', 'LoRA', 'Model evaluation', 'Fine-tuning vs. RAG'],
    outcome: 'A fine-tuned OpenAI model trained on a customer support dataset, evaluated against the base model on 20 test cases with documented score comparison.',
    tasks: [
      { id: 'cs_m6_w3_t1', text: 'Prepare a fine-tuning dataset in JSONL format: 50 customer support (system, user, assistant) pairs — prioritize quality and variety over quantity' },
      { id: 'cs_m6_w3_t2', text: 'Validate the dataset format using the OpenAI CLI validation tool — fix any formatting errors before submitting' },
      { id: 'cs_m6_w3_t3', text: 'Submit a fine-tuning job via the OpenAI API — monitor training progress in the dashboard and note the total cost' },
      { id: 'cs_m6_w3_t4', text: 'Run the base model and the fine-tuned model on 20 held-out test cases — score both on accuracy, format adherence, and tone — document the difference' },
      { id: 'cs_m6_w3_t5', text: 'Write your conclusion: did fine-tuning justify the cost and effort for this use case? When would you use it vs. RAG vs. prompt engineering?' },
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
        case 'dashboard':  main.innerHTML = this.renderDashboard(); break;
        case 'roadmap':    main.innerHTML = this.renderRoadmap(); break;
        case 'resources':  main.innerHTML = this.renderResources(); break;
        case 'settings':   main.innerHTML = this.renderSettings(); break;
        default:           main.innerHTML = this.renderDashboard();
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
    if (page === 'roadmap')    this.bindRoadmapEvents();
    if (page === 'resources')  this.bindResourcesEvents();
    if (page === 'settings')   this.bindSettingsEvents();
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
                ${mp > 0 ? `<span class="tab-prog">${mp}%</span>` : ''}
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

  getMonthWeeks(month, startDate, today) {
    const monthId = month.id;
    const learnSections = month.sections.filter(s => s.type !== 'project');
    const projectSections = month.sections.filter(s => s.type === 'project');

    const allLearning = [];
    learnSections.forEach(section => {
      section.topics.forEach(topic => allLearning.push({ topic, section }));
    });

    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const globalWeekBase = (monthId - 1) * 4;

    const makeDayMeta = (section) => {
      const hasCoding = section && section.note && section.note.code && section.note.code.length > 0;
      return hasCoding
        ? { readHours: '1.5h', codeHours: '1.5h', totalHours: '3h' }
        : { readHours: '3h',   codeHours: null,    totalHours: '3h' };
    };

    // dateInfo for a given global week + day-of-week index (0=Mon … 6=Sun)
    const makeDateInfo = (globalWeek, dayIndex) => {
      if (!startDate) return null;
      const d = new Date(startDate);
      d.setDate(d.getDate() + globalWeek * 7 + dayIndex);
      d.setHours(0, 0, 0, 0);
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const isToday = today ? d.getTime() === today.getTime() : false;
      const isPast  = today ? d.getTime() < today.getTime() : false;
      return { label, isToday, isPast };
    };

    const weeks = [];

    for (let w = 0; w < 3; w++) {
      const globalWeek = globalWeekBase + w;
      const items = allLearning.slice(w * 5, (w + 1) * 5);
      if (items.length > 0 || w === 0) {
        weeks.push({
          number: w + 1,
          monthId,
          type: 'learning',
          days: items.map((item, i) => ({
            label: dayLabels[i],
            dateInfo: makeDateInfo(globalWeek, i),
            topic: item.topic,
            section: item.section,
            ...makeDayMeta(item.section)
          })),
          emptyDayLabels: dayLabels.slice(items.length),
          emptyDayDates: dayLabels.slice(items.length).map((_, i) => makeDateInfo(globalWeek, items.length + i)),
          weekend: {
            sat: { hours: '5h', task: 'Full Coding Session', desc: 'Re-implement topics from the week, build mini-projects, practice exercises', dateInfo: makeDateInfo(globalWeek, 5) },
            sun: { hours: '5h', task: 'Full Coding Session', desc: "Review & extend Saturday's work, document what you built, plan next week", dateInfo: makeDateInfo(globalWeek, 6) }
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
    const gw4 = globalWeekBase + 3;

    weeks.push({
      number: 4,
      monthId,
      type: 'project',
      projectSection: projectSections[0] || null,
      days: allWeek4.slice(0, 5).map((item, i) => ({
        label: dayLabels[i],
        dateInfo: makeDateInfo(gw4, i),
        topic: item.topic,
        section: item.section,
        readHours: '1.5h',
        codeHours: '3.5h',
        totalHours: '5h'
      })),
      extraTasks: allWeek4.slice(5),
      weekend: {
        sat: { hours: '5h', task: 'Full Project Build', desc: 'Complete remaining features, refactor, improve UX and code quality', dateInfo: makeDateInfo(gw4, 5) },
        sun: { hours: '5h', task: 'Deploy & Document', desc: 'Write README, record demo video, deploy to production, publish on GitHub', dateInfo: makeDateInfo(gw4, 6) }
      }
    });

    return weeks;
  },

  renderMonthContent(monthId) {
    const month = ROADMAP_DATA.months.find(m => m.id === monthId);
    if (!month) return '';
    const data = Storage.load();
    const completed = data.completedTopics;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let startDate = null;
    if (data.settings.startDate) {
      const sd = new Date(data.settings.startDate + 'T00:00:00');
      if (!isNaN(sd.getTime())) {
        // Always align to the nearest coming Monday so week slots map correctly
        const dow = sd.getDay(); // 0=Sun 1=Mon … 6=Sat
        if (dow !== 1) {
          const daysToMon = dow === 0 ? 1 : 8 - dow;
          sd.setDate(sd.getDate() + daysToMon);
        }
        startDate = sd;
      }
    }
    const weeks = this.getMonthWeeks(month, startDate, today);

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
    const renderDay = (dayName, day) => {
      const di = day.dateInfo;
      const isToday = di && di.isToday;
      return `
        <div class="weekend-row${isToday ? ' topic-row-today' : ''}">
          <div class="topic-row-main">
            <div class="day-label${isToday ? ' day-today' : ''}">
              <span class="day-name">${dayName}</span>
              ${di ? `<span class="day-date-label">${di.label}</span>` : ''}
            </div>
            <span class="hours-pill hours-weekend">${day.hours}</span>
            <div class="weekend-content">
              <span class="weekend-task">${day.task}</span>
              <span class="weekend-desc">${day.desc}</span>
            </div>
            ${isToday ? `<span class="day-status-badge badge-today">Today</span>` : ''}
          </div>
        </div>`;
    };
    return `
      <div class="weekend-section">
        <div class="weekend-divider">
          <span class="weekend-divider-label">
            Weekend &mdash; <strong>${weekend.sat.hours}/day</strong> Full Coding
          </span>
        </div>
        <div class="weekend-rows">
          ${renderDay('Sat', weekend.sat)}
          ${renderDay('Sun', weekend.sun)}
        </div>
      </div>
    `;
  },

  renderWeek(week, completed, color) {
    const isProject = week.type === 'project';
    const extraTasks = week.extraTasks || [];
    const weekId = `wk-${week.monthId}-${week.number}`;

    const sectionMap = new Map();
    week.days.forEach(d => { if (d.section) sectionMap.set(d.section.id, d.section); });
    const sections = [...sectionMap.values()];
    const weekSubtitle = isProject && week.projectSection
      ? week.projectSection.title
      : sections.map(s => s.title).join(' · ');

    const scheduleNote = isProject
      ? 'Mon–Fri: 1.5h study + 3.5h build = 5h/day. Sat & Sun: 5h full project work.'
      : 'Mon–Fri: 1.5h reading + 1.5h coding = 3h/day. Sat & Sun: 5h full coding.';

    return `
      <div class="week-block ${isProject ? 'week-block-project' : ''}" id="${weekId}">
        <div class="week-header week-toggle-header" data-week-body="${weekId}-body">
          <div class="week-label">
            <span class="week-badge ${isProject ? 'week-badge-project' : ''}">Week ${week.number}</span>
            <span class="week-type-tag ${isProject ? 'week-type-build' : ''}">${isProject ? 'Build Week' : 'Learning Week'}</span>
            ${weekSubtitle ? `<span class="week-subtitle">${weekSubtitle}</span>` : ''}
          </div>
          <span class="week-chevron expanded">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </span>
        </div>

        <div class="week-body" id="${weekId}-body">
          <p class="week-schedule-note">${scheduleNote}</p>

          <div class="daily-plan-section">
            <button class="daily-plan-header" data-plan-body="${weekId}-plan">
              <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>
              Daily Plan
              <span class="daily-plan-count">${week.days.length} topic${week.days.length !== 1 ? 's' : ''}</span>
              <svg class="daily-plan-chevron" viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </button>
            <div class="daily-plan-body" id="${weekId}-plan" hidden>
              <div class="week-days">
                ${week.days.map(day => this.renderTopicRow(day, completed, color)).join('')}
                ${(week.emptyDayLabels || []).map((lbl, i) => {
                  const di = week.emptyDayDates && week.emptyDayDates[i];
                  return `
                  <div class="topic-row topic-row-revision">
                    <div class="topic-row-main">
                      <div class="day-label">
                        <span class="day-name">${lbl}</span>
                        ${di ? `<span class="day-date-label">${di.label}</span>` : ''}
                      </div>
                      <span class="hours-pill">3h</span>
                      <span class="topic-text-muted">Catch-up &amp; revision day</span>
                    </div>
                  </div>`;
                }).join('')}
              </div>
            </div>
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

          <div class="week-weekend-note">
            <div class="week-weekend-row">
              <span class="week-weekend-label">Sat</span>
              <span class="week-weekend-text">${week.weekend.sat.task} — ${week.weekend.sat.desc}</span>
            </div>
            <div class="week-weekend-row">
              <span class="week-weekend-label">Sun</span>
              <span class="week-weekend-text">${week.weekend.sun.task} — ${week.weekend.sun.desc}</span>
            </div>
          </div>
        </div>
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
          <span class="cs-title">${session.title}</span>
          <span class="cs-progress-pill ${allDone ? 'cs-progress-done' : ''}">${doneCnt}/${session.tasks.length}</span>
        </div>
        <div class="cs-context">
          <p class="cs-why">${session.why}</p>
          <div class="cs-concepts">${session.concepts.map(c => `<span class="cs-concept-tag">${c}</span>`).join('')}</div>
          <p class="cs-outcome-text">${session.outcome}</p>
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

    const di = day.dateInfo;
    const isToday  = di && di.isToday;
    const isMissed = di && di.isPast && !isDone;

    let rowClass = 'topic-row';
    if (isDone)        rowClass += ' topic-row-done';
    else if (isToday)  rowClass += ' topic-row-today';
    else if (isMissed) rowClass += ' topic-row-missed';

    return `
      <div class="${rowClass}" id="row-${day.topic.id}">
        <div class="topic-row-main">
          <div class="day-label${isToday ? ' day-today' : isMissed ? ' day-missed' : ''}">
            <span class="day-name">${day.label || ''}</span>
            ${di ? `<span class="day-date-label">${di.label}</span>` : ''}
          </div>
          <span class="hours-pill" title="${hoursTitle}">${hours}</span>
          <label class="topic-check-label">
            <input type="checkbox" class="topic-check" data-topic-id="${day.topic.id}" ${isDone ? 'checked' : ''}>
            <span class="topic-checkmark ${isDone ? 'topic-checkmark-done' : ''}">
              <svg class="check-svg" viewBox="0 0 20 20" fill="currentColor" width="11" height="11" style="display:${isDone ? 'block' : 'none'}"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            </span>
          </label>
          <span class="topic-text ${isDone ? 'topic-text-done' : ''}">${day.topic.text}</span>
          ${isToday && !isDone ? `<span class="day-status-badge badge-today">Today</span>` : ''}
          ${isMissed ? `<span class="day-status-badge badge-catchup">Catch up</span>` : ''}
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
    return `
      <div class="detail-inner">
        ${note.learn && note.learn.length ? `
          <ul class="detail-list detail-section-learn">
            ${note.learn.map(item => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}
        ${note.concepts && note.concepts.length ? `
          <ul class="detail-list detail-list-concepts detail-section-concepts">
            ${note.concepts.map(item => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}
        ${note.code && note.code.length ? `
          <ol class="detail-list detail-list-code detail-section-code">
            ${note.code.map(item => `<li>${item}</li>`).join('')}
          </ol>
        ` : ''}
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
    // Week collapse/expand
    document.querySelectorAll('.week-toggle-header').forEach(header => {
      header.addEventListener('click', () => {
        const bodyId = header.dataset.weekBody;
        const body = document.getElementById(bodyId);
        const chevron = header.querySelector('.week-chevron');
        if (!body) return;
        const isOpen = !body.hidden;
        body.hidden = isOpen;
        if (chevron) chevron.classList.toggle('expanded', !isOpen);
      });
    });

    // Daily plan toggle
    document.querySelectorAll('.daily-plan-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const planId = btn.dataset.planBody;
        const plan = document.getElementById(planId);
        const chevron = btn.querySelector('.daily-plan-chevron');
        if (!plan) return;
        const isOpen = !plan.hidden;
        plan.hidden = isOpen;
        if (chevron) chevron.classList.toggle('rotated', !isOpen);
      });
    });

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
      let el = tab.querySelector('.tab-prog');
      if (mp > 0) {
        if (!el) {
          el = document.createElement('span');
          el.className = 'tab-prog';
          tab.appendChild(el);
        }
        el.textContent = mp + '%';
      } else if (el) {
        el.remove();
      }
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
            <div class="settings-hint">Set to the Monday you start — every day in the roadmap will show its exact date. Missed days (past &amp; unchecked) will be highlighted so you can catch up.</div>
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

  /* ────────────────────────────────────────
     RESOURCES
  ──────────────────────────────────────── */
  renderResources() {
    const data = Storage.load();
    const used = data.usedResources || [];
    const categories = [...new Set(TOOLS_DATA.map(t => t.category))];

    const renderCard = (tool) => {
      const isUsed = used.includes(tool.id);
      return `
        <div class="tool-card ${isUsed ? 'tool-card-used' : ''}" data-id="${tool.id}" data-cat="${tool.category}">
          <div class="tool-card-top">
            <span class="tool-name">${tool.name}</span>
            <button class="tool-used-btn ${isUsed ? 'tool-used-active' : ''}" data-id="${tool.id}">
              ${isUsed ? `<svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Used` : 'Not Used'}
            </button>
          </div>
          <p class="tool-what">${tool.what}</p>
          <div class="tool-detail">
            <div class="tool-detail-row"><span class="tool-dl">Why</span><span class="tool-dt">${tool.why}</span></div>
            <div class="tool-detail-row"><span class="tool-dl">When</span><span class="tool-dt">${tool.when}</span></div>
          </div>
          <a class="tool-link" href="${tool.url}" target="_blank" rel="noopener noreferrer">Documentation →</a>
        </div>
      `;
    };

    const groupsHtml = categories.map(cat => {
      const tools = TOOLS_DATA.filter(t => t.category === cat);
      return `
        <div class="tool-group" data-cat="${cat}">
          <h3 class="tool-group-title">${cat}</h3>
          <div class="tool-grid">
            ${tools.map(renderCard).join('')}
          </div>
        </div>
      `;
    }).join('');

    const catPills = categories.map(c =>
      `<button class="tool-cat-pill" data-cat="${c}">${c}</button>`
    ).join('');

    return `
      <div class="page resources-page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">AI Engineering Toolbox</h1>
            <p class="page-subtitle">Tools and technologies you will use throughout the 6-month roadmap</p>
          </div>
        </div>

        <div class="tool-controls">
          <div class="res-search-wrap">
            <svg class="res-search-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>
            <input class="res-search" id="toolSearch" placeholder="Search tools..." autocomplete="off">
          </div>
          <div class="tool-filter-row">
            <div class="tool-cat-pills">
              <button class="tool-cat-pill active" data-cat="">All</button>
              ${catPills}
            </div>
            <div class="res-status-btns">
              <button class="res-status-btn active" data-status="all">All</button>
              <button class="res-status-btn" data-status="used">Used</button>
              <button class="res-status-btn" data-status="unused">Not Used</button>
            </div>
          </div>
        </div>

        <div id="toolGroups">${groupsHtml}</div>
        <div id="toolEmpty" class="res-empty" hidden>
          <svg viewBox="0 0 20 20" fill="currentColor" width="32" height="32"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>
          <p>No tools match your search.</p>
          <button class="btn btn-outline" id="toolClearFilters">Clear Filters</button>
        </div>
      </div>
    `;
  },

  bindResourcesEvents() {
    let activeCat = '';
    let activeStatus = 'all';

    const applyFilters = () => {
      const query = (document.getElementById('toolSearch')?.value || '').toLowerCase().trim();
      const data = Storage.load();
      const used = data.usedResources || [];

      let visible = 0;
      document.querySelectorAll('.tool-card').forEach(card => {
        const id = card.dataset.id;
        const cat = card.dataset.cat;
        const tool = TOOLS_DATA.find(t => t.id === id);
        if (!tool) return;

        const matchesCat = !activeCat || cat === activeCat;
        const isUsed = used.includes(id);
        const matchesStatus =
          activeStatus === 'all' ||
          (activeStatus === 'used' && isUsed) ||
          (activeStatus === 'unused' && !isUsed);
        const matchesQuery = !query || `${tool.name} ${tool.what} ${tool.why} ${tool.when} ${tool.category}`.toLowerCase().includes(query);

        const show = matchesCat && matchesStatus && matchesQuery;
        card.hidden = !show;
        if (show) visible++;
      });

      // Hide empty groups
      document.querySelectorAll('.tool-group').forEach(group => {
        const anyVisible = [...group.querySelectorAll('.tool-card')].some(c => !c.hidden);
        group.hidden = !anyVisible;
      });

      const emptyEl = document.getElementById('toolEmpty');
      if (emptyEl) emptyEl.hidden = visible > 0;
    };

    // Search
    const searchEl = document.getElementById('toolSearch');
    if (searchEl) {
      let timer;
      searchEl.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(applyFilters, 180);
      });
    }

    // Category pills
    document.querySelectorAll('.tool-cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.tool-cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCat = pill.dataset.cat;
        applyFilters();
      });
    });

    // Status buttons
    document.querySelectorAll('.res-status-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.res-status-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeStatus = btn.dataset.status;
        applyFilters();
      });
    });

    // Clear filters
    document.getElementById('toolClearFilters')?.addEventListener('click', () => {
      if (searchEl) searchEl.value = '';
      activeCat = '';
      activeStatus = 'all';
      document.querySelectorAll('.tool-cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === ''));
      document.querySelectorAll('.res-status-btn').forEach(b => b.classList.toggle('active', b.dataset.status === 'all'));
      applyFilters();
    });

    // Used toggle
    document.querySelectorAll('.tool-used-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const isNowUsed = Storage.toggleUsed(id);
        const card = btn.closest('.tool-card');
        if (card) card.classList.toggle('tool-card-used', isNowUsed);
        btn.classList.toggle('tool-used-active', isNowUsed);
        btn.innerHTML = isNowUsed
          ? `<svg viewBox="0 0 20 20" fill="currentColor" width="11" height="11"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Used`
          : 'Not Used';
        // Re-apply filters so status filter reflects new state
        applyFilters();
      });
    });
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
