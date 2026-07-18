const TOOLS_DATA = [

  // ── AI Platforms ──────────────────────────────────────────────────────
  {
    id: 'openai',
    name: 'OpenAI API',
    category: 'AI Platforms',
    what: 'Access GPT-4o, o1, DALL-E, Whisper, and text embeddings through a single REST API.',
    why: 'Industry standard for building AI apps. GPT-4o is the default model for all roadmap projects.',
    when: 'Month 1 onwards — every project that needs a language model, vision, or speech.',
    url: 'https://platform.openai.com/docs'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude API',
    category: 'AI Platforms',
    what: 'Access Claude 3.5 and Claude 4 models — strong instruction following and long context.',
    why: 'Best-in-class for complex reasoning, long documents, and safety-critical deployments.',
    when: 'Month 2–3 — good alternative when you need very long context or structured output.',
    url: 'https://docs.anthropic.com'
  },
  {
    id: 'gemini',
    name: 'Google Gemini API',
    category: 'AI Platforms',
    what: 'Access Gemini Ultra, Pro, and Flash models for text, vision, audio, and code.',
    why: 'Gemini Flash is extremely fast and cheap. Pro has a 1M token context window.',
    when: 'Month 3–5 — evaluate as a third provider, or use 1M context for large document RAG.',
    url: 'https://ai.google.dev/docs'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    category: 'AI Platforms',
    what: 'Hub hosting 500k+ open-source models, datasets, and demo Spaces.',
    why: 'Home of open-source AI. Essential for finding local models, embedding models, and fine-tuning data.',
    when: 'Month 5–6 — running Ollama models, selecting embeddings, and fine-tuning experiments.',
    url: 'https://huggingface.co'
  },

  // ── AI Frameworks ─────────────────────────────────────────────────────
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'AI Frameworks',
    what: 'Python/JS framework for building LLM apps — chains, agents, memory, retrieval, and tool use.',
    why: 'Most widely used AI framework. Handles boilerplate for prompt management, retrieval, and agents.',
    when: 'Month 3 — primary framework for building AI agents. Learn before LangGraph.',
    url: 'https://docs.langchain.com'
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    category: 'AI Frameworks',
    what: 'Build stateful, multi-agent workflows as directed graphs with explicit state transitions.',
    why: 'More control than LangChain for production agents. Industry choice for complex multi-step flows.',
    when: 'Month 3 — after understanding basic agents, use for multi-agent coordination.',
    url: 'https://langchain-ai.github.io/langgraph/'
  },
  {
    id: 'llamaindex',
    name: 'LlamaIndex',
    category: 'AI Frameworks',
    what: 'Data framework connecting PDFs, DBs, and APIs to LLMs with advanced indexing strategies.',
    why: 'Better than LangChain for complex document ingestion and multi-format RAG pipelines.',
    when: 'Month 2 — when building RAG systems with messy or mixed data sources.',
    url: 'https://docs.llamaindex.ai'
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    category: 'AI Frameworks',
    what: 'Framework for creating teams of role-playing AI agents that collaborate on tasks.',
    why: 'Easiest way to get a multi-agent system running — define roles, tasks, and let agents coordinate.',
    when: 'Month 3 — used in the AI Business Automation Agent project.',
    url: 'https://docs.crewai.com'
  },

  // ── Automation Tools ─────────────────────────────────────────────────
  {
    id: 'n8n',
    name: 'n8n',
    category: 'Automation Tools',
    what: 'Self-hosted visual workflow automation — connect APIs, databases, and AI with drag-and-drop.',
    why: 'Open-source alternative to Zapier. Build AI-powered automations visually without writing every integration.',
    when: 'Month 3 — core tool in the AI Business Automation Agent project.',
    url: 'https://n8n.io'
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'Automation Tools',
    what: 'No-code automation that connects 6,000+ apps with simple "Zap" workflows.',
    why: 'Quick demos and simple integrations for clients. No hosting or server setup required.',
    when: 'Month 3 — when clients need simple automations without a self-hosted server.',
    url: 'https://zapier.com'
  },
  {
    id: 'make',
    name: 'Make (Integromat)',
    category: 'Automation Tools',
    what: 'Visual automation builder with more flexibility than Zapier — better branching and data transformation.',
    why: 'More powerful than Zapier for multi-step automations that need conditional logic.',
    when: 'Month 3 — managed cloud alternative to n8n for complex automation workflows.',
    url: 'https://make.com'
  },

  // ── Infrastructure & Deployment ───────────────────────────────────────
  {
    id: 'docker',
    name: 'Docker',
    category: 'Infrastructure & Deployment',
    what: 'Package your app and all dependencies into a portable container that runs identically everywhere.',
    why: 'Non-negotiable for production. Eliminates "works on my machine" and simplifies deployment.',
    when: 'Month 4 — containerize the AI SaaS Platform for repeatable deployment.',
    url: 'https://docs.docker.com'
  },
  {
    id: 'railway',
    name: 'Railway',
    category: 'Infrastructure & Deployment',
    what: 'Simple cloud platform — deploy any Docker app with one command, built-in Postgres and Redis.',
    why: 'Fastest path from code to production. No DevOps complexity for solo and small-team projects.',
    when: 'Months 1–4 — deploy every project to production as you build it.',
    url: 'https://railway.app'
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    category: 'Infrastructure & Deployment',
    what: 'CI/CD automation built into GitHub — run tests, build Docker images, deploy on every push.',
    why: 'Free for public repos. Automates the test → build → deploy pipeline with zero extra tooling.',
    when: 'Month 4 — set up CI/CD for the AI SaaS Platform project.',
    url: 'https://docs.github.com/en/actions'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Infrastructure & Deployment',
    what: 'Frontend deployment platform optimized for Next.js — instant HTTPS, global CDN, zero config.',
    why: 'Simplest way to ship a Next.js frontend. Pair with Railway for the backend API.',
    when: 'Month 1–2 — deploy Next.js frontends while Railway handles the backend.',
    url: 'https://vercel.com/docs'
  },

  // ── Databases & Storage ───────────────────────────────────────────────
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases & Storage',
    what: 'Powerful open-source relational database — the industry standard for structured data.',
    why: 'Primary database in every roadmap project for users, conversations, and structured records.',
    when: 'Month 1 onwards — used in all 7 projects.',
    url: 'https://www.postgresql.org/docs/'
  },
  {
    id: 'pgvector',
    name: 'pgvector',
    category: 'Databases & Storage',
    what: 'PostgreSQL extension that adds vector column types and similarity search operators.',
    why: 'Store embeddings directly in your existing Postgres DB with no extra infrastructure.',
    when: 'Month 2 — the primary vector store for the RAG Enterprise Knowledge Assistant.',
    url: 'https://github.com/pgvector/pgvector'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'Databases & Storage',
    what: 'In-memory key-value store for caching, sessions, pub/sub, and job queue backends.',
    why: 'Required for BullMQ job queues and caching expensive AI responses in production.',
    when: 'Month 4 — used with BullMQ for background AI processing in the SaaS project.',
    url: 'https://redis.io/docs/'
  },
  {
    id: 'chroma',
    name: 'Chroma',
    category: 'Databases & Storage',
    what: 'Lightweight local vector database — zero setup, Python-first, great for rapid prototyping.',
    why: 'Fastest way to prototype RAG locally. No Docker or cloud account needed to get started.',
    when: 'Month 2 — prototype the RAG pipeline locally before switching to pgvector.',
    url: 'https://docs.trychroma.com'
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    category: 'Databases & Storage',
    what: 'Managed cloud vector database — store and search millions of embeddings via a simple API.',
    why: 'Production vector DB when you need managed infrastructure at scale without self-hosting.',
    when: 'Month 2 — learn the API alongside pgvector; use for higher-scale deployments.',
    url: 'https://docs.pinecone.io'
  },

  // ── AI Development Tools ──────────────────────────────────────────────
  {
    id: 'ollama',
    name: 'Ollama',
    category: 'AI Development Tools',
    what: 'Run open-source LLMs (Llama 3, Mistral, Gemma, Phi) locally on your machine.',
    why: 'Free local inference, zero API costs, full privacy. OpenAI-compatible API for easy switching.',
    when: 'Month 5 — compare local vs cloud models; run Llama 3.2 for free.',
    url: 'https://ollama.com'
  },
  {
    id: 'jupyter',
    name: 'Jupyter Notebook',
    category: 'AI Development Tools',
    what: 'Interactive Python environment — run code in cells and see output, plots, and data inline.',
    why: 'Standard for AI experimentation and ML prototyping. Easy to share results with code + output.',
    when: 'Month 1 — use for AI fundamentals experiments and from-scratch ML implementations.',
    url: 'https://jupyter.org'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'AI Development Tools',
    what: 'AI-powered code editor (VS Code fork) with built-in codebase-aware chat and autocomplete.',
    why: 'Dramatically speeds up coding. Understands your full codebase — not just the current file.',
    when: 'All months — your primary development environment throughout the roadmap.',
    url: 'https://cursor.com'
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    category: 'AI Development Tools',
    what: 'Free browser-based whiteboard for drawing system architecture diagrams quickly.',
    why: 'Every portfolio project needs an architecture diagram. Excalidraw is the fastest way to make one.',
    when: 'Month 6 — draw architecture diagrams for every project in the portfolio.',
    url: 'https://excalidraw.com'
  },

  // ── Monitoring & Evaluation ───────────────────────────────────────────
  {
    id: 'langfuse',
    name: 'Langfuse',
    category: 'Monitoring & Evaluation',
    what: 'Open-source LLM observability platform — trace every AI call with tokens, cost, and latency.',
    why: 'Makes your AI app visible in production. Catch bad responses, track costs, debug prompts.',
    when: 'Month 4 — add to the AI SaaS Platform project to monitor all LLM calls in production.',
    url: 'https://langfuse.com'
  },
  {
    id: 'langsmith',
    name: 'LangSmith',
    category: 'Monitoring & Evaluation',
    what: "LangChain's tracing and evaluation platform — debug, test, and monitor LLM app runs.",
    why: 'Built for LangChain/LangGraph apps. Best tool for debugging complex multi-step agent traces.',
    when: 'Month 3 — use while debugging LangChain and LangGraph agent runs.',
    url: 'https://smith.langchain.com'
  },
  {
    id: 'wandb',
    name: 'Weights & Biases',
    category: 'Monitoring & Evaluation',
    what: 'ML experiment tracking — log training runs, compare metrics, and track model versions.',
    why: 'Essential when fine-tuning models. Without it, comparing training runs is guesswork.',
    when: 'Month 6 — use when fine-tuning a model for the capstone project.',
    url: 'https://docs.wandb.ai'
  },

  // ── Voice & Multimodal ────────────────────────────────────────────────
  {
    id: 'whisper',
    name: 'OpenAI Whisper',
    category: 'Voice & Multimodal',
    what: 'Speech-to-text API (and open-source model) — transcribe audio in 99 languages with high accuracy.',
    why: 'Industry standard for voice input. The entry point for every voice feature in any AI app.',
    when: 'Month 5 — core component of the Voice AI Assistant project.',
    url: 'https://platform.openai.com/docs/guides/speech-to-text'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'Voice & Multimodal',
    what: 'Text-to-speech API with ultra-realistic, cloneable voices — the highest quality TTS available.',
    why: 'Makes voice AI responses sound natural. Large quality gap vs basic TTS on longer sentences.',
    when: 'Month 5 — used in the Voice AI Assistant for lifelike audio responses.',
    url: 'https://elevenlabs.io/docs'
  },
  {
    id: 'deepgram',
    name: 'Deepgram',
    category: 'Voice & Multimodal',
    what: 'Real-time speech recognition API with streaming transcription and sub-300ms latency.',
    why: 'Much lower latency than Whisper for live voice apps. Native streaming support.',
    when: 'Month 5 — use instead of Whisper when you need real-time streaming transcription.',
    url: 'https://developers.deepgram.com'
  }
];
