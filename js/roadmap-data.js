const ROADMAP_DATA = {
  goal: "Become a confident AI Engineer who can join an AI company or provide AI solutions for businesses.",
  positioning: "I am an AI Engineer who builds production AI applications, automation systems, and AI-powered business solutions.",
  dailySchedule: { total: 5, learning: 2.5, building: 2.5 },
  rule: "Do not only watch tutorials. Every concept must become: Learn → Understand → Build → Deploy → Explain",
  weeklyRoutine: [
    { day: "Monday–Friday", tasks: ["2.5h Learning", "2.5h Research + Coding"] },
    { day: "Saturday", tasks: ["Refactor projects", "Improve architecture", "Write documentation", "Publish content"] },
    { day: "Sunday", tasks: ["Review week", "Research AI industry", "Plan next week"] }
  ],
  months: [
    {
      id: 1,
      title: "AI Foundation & LLM Engineering",
      mainGoal: "Understand how modern AI applications work.",
      color: "#6366f1",
      sections: [
        {
          id: "m1-s1",
          title: "AI Fundamentals",
          type: "learning",
          note: {
            learn: [
              "The difference between AI, Machine Learning, and Deep Learning",
              "How a neural network learns — what training and inference mean",
              "What weights, layers, and parameters actually are",
              "Just enough math: vectors, matrices, and gradient descent"
            ],
            concepts: [
              "Training = teaching the model using data. Inference = using the trained model to get answers.",
              "Parameters = the numbers inside a model that get adjusted during training.",
              "Gradient descent = how the model slowly improves by correcting its own mistakes.",
              "Embedding = converting words or data into numbers (vectors) so a model can work with them.",
              "You do NOT need to become a mathematician. Understand the ideas, not the full formulas."
            ],
            code: [
              "Write a Python script that multiplies two matrices using NumPy",
              "Implement a simple linear regression from scratch (no libraries)",
              "Print the weights of a small neural network using PyTorch or TensorFlow",
              "Write a function that applies gradient descent to minimize a simple equation"
            ],
            time: "2 weeks · 1h reading per day + 1.5h coding per day"
          },
          topics: [
            { id: "m1-t1", text: "Artificial Intelligence — concepts, history, current state" },
            { id: "m1-t2", text: "Machine Learning basics — supervised, unsupervised, reinforcement" },
            { id: "m1-t3", text: "Deep Learning basics — how neural nets learn" },
            { id: "m1-t4", text: "Neural networks — Layers, Weights, Training, Inference, Parameters" },
            { id: "m1-t5", text: "Linear Algebra — Vectors, Matrices, Embeddings" },
            { id: "m1-t6", text: "Probability — Predictions, Probability distributions" },
            { id: "m1-t7", text: "Calculus basics — Optimization, Gradient descent" }
          ]
        },
        {
          id: "m1-s2",
          title: "Large Language Models",
          type: "learning",
          note: {
            learn: [
              "How an LLM actually works at a high level (you don't need to build one)",
              "What tokenization is and why it matters for cost and limits",
              "How to write good prompts — system prompts, user prompts, few-shot examples",
              "How to call AI APIs and get structured responses back"
            ],
            concepts: [
              "Token = the unit an LLM reads. 1 token ≈ 0.75 words. You pay per token.",
              "Context window = the LLM's working memory. It can only see what fits in it.",
              "Temperature = how creative/random the output is. 0 = deterministic, 1 = creative.",
              "System prompt = the instructions you give the AI before the user talks to it.",
              "Function calling = telling the AI to return structured data instead of plain text.",
              "The transformer architecture is what makes modern LLMs work. You should understand the idea, not implement it."
            ],
            code: [
              "Write a script that calls the OpenAI API and prints the response",
              "Write 5 different system prompts for the same task and compare the outputs",
              "Build a simple CLI chat loop that keeps conversation history",
              "Write a prompt that forces JSON output and parse the result",
              "Implement a basic function call — tell the AI it can call a 'get_weather' function"
            ],
            time: "2 weeks · 1h reading per day + 1.5h coding per day"
          },
          topics: [
            { id: "m1-t8", text: "What is an LLM? How are they trained?" },
            { id: "m1-t9", text: "How transformers work — architecture deep dive" },
            { id: "m1-t10", text: "Attention mechanism — self-attention, multi-head" },
            { id: "m1-t11", text: "Tokens, Context window, Model parameters, Limitations" },
            { id: "m1-t12", text: "Prompt Engineering — System prompts, User prompts, Few-shot" },
            { id: "m1-t13", text: "Chain of thought, Structured output, JSON output" },
            { id: "m1-t14", text: "Function calling and Tool calling" },
            { id: "m1-t15", text: "AI APIs — OpenAI, Anthropic, Gemini, Open-source models" },
            { id: "m1-t16", text: "Model selection — Speed, Cost, Accuracy tradeoffs" }
          ]
        },
        {
          id: "m1-s3",
          title: "Project 1: AI Chatbot Platform",
          type: "project",
          projectId: 1,
          note: {
            learn: [
              "How to wire a real frontend to an AI backend with streaming",
              "How to store and retrieve conversation history from a database",
              "How to handle user authentication in a full-stack AI app"
            ],
            concepts: [
              "Streaming = sending the AI response word by word as it generates, not waiting for it all.",
              "Conversation history = passing previous messages back to the API so the AI has context.",
              "You already know React and Node.js. Use that. This project is about connecting AI, not learning a new stack."
            ],
            code: [
              "Set up a Next.js + Node.js project with JWT authentication",
              "Create a /api/chat endpoint that calls OpenAI and returns a stream",
              "Build a chat UI that renders streaming tokens in real time",
              "Save each message to PostgreSQL and reload history on page load",
              "Let users create multiple separate conversations",
              "Write a Dockerfile and deploy to Railway or Render"
            ],
            time: "2 weeks (weeks 3–4 of Month 1)"
          },
          topics: [
            { id: "m1-p1-t1", text: "User authentication system" },
            { id: "m1-p1-t2", text: "Chat interface with streaming responses" },
            { id: "m1-p1-t3", text: "Conversation history — multiple chat sessions" },
            { id: "m1-p1-t4", text: "Database storage (PostgreSQL)" },
            { id: "m1-p1-t5", text: "File upload support" },
            { id: "m1-p1-t6", text: "AI settings configuration" },
            { id: "m1-p1-t7", text: "Deploy to production with documentation" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "RAG Engineering",
      mainGoal: "Build AI systems that understand company information.",
      color: "#8b5cf6",
      sections: [
        {
          id: "m2-s1",
          title: "RAG Architecture",
          type: "learning",
          note: {
            learn: [
              "Why LLMs hallucinate and what RAG does to fix it",
              "The full pipeline: document → chunks → embeddings → vector DB → search → answer",
              "What chunking is and why chunk size matters",
              "What an embedding is and how similarity search works"
            ],
            concepts: [
              "RAG = instead of relying on the model's memory, you give it the relevant text at query time.",
              "Chunk = a small piece of a document (e.g. 300–500 words). You split docs into chunks before storing.",
              "Embedding = converting a chunk of text into a list of numbers that captures its meaning.",
              "Similarity search = find the chunks whose embeddings are closest to the user's question embedding.",
              "Hallucination = when an LLM confidently makes something up. RAG reduces this by giving it real context."
            ],
            code: [
              "Write a script that reads a PDF and splits it into chunks of 500 words with 50-word overlap",
              "Call the OpenAI embeddings API and turn 10 text chunks into vectors",
              "Store those vectors in a plain Python list and write a cosine similarity function from scratch",
              "Ask a question, embed it, find the 3 most similar chunks, and print them",
              "Pass those chunks as context to GPT-4 and ask it to answer using only that context"
            ],
            time: "2 weeks · 1h reading per day + 1.5h coding per day"
          },
          topics: [
            { id: "m2-t1", text: "Retrieval Augmented Generation — what, why, how" },
            { id: "m2-t2", text: "Document processing pipeline — extraction, cleaning" },
            { id: "m2-t3", text: "Chunking strategies and chunk size optimization" },
            { id: "m2-t4", text: "Embeddings — what they are, how to generate them" },
            { id: "m2-t5", text: "Vector databases — storing and indexing embeddings" },
            { id: "m2-t6", text: "Similarity search — cosine similarity, dot product" },
            { id: "m2-t7", text: "Metadata filtering and hybrid search" },
            { id: "m2-t8", text: "Retrieval quality, hallucination prevention, source citation" }
          ]
        },
        {
          id: "m2-s2",
          title: "Vector Database Tools",
          type: "learning",
          note: {
            learn: [
              "How to use a real vector database instead of a Python list",
              "The basics of Chroma (local, easy to start) and pgvector (PostgreSQL extension)"
            ],
            concepts: [
              "A vector database is optimized to store and search millions of vectors quickly.",
              "Chroma = local vector DB, great for development. No setup required.",
              "pgvector = adds vector search to your existing PostgreSQL database. Best for production.",
              "You don't need to learn all four tools deeply. Learn Chroma first, then pgvector."
            ],
            code: [
              "Set up Chroma locally and store 50 text chunks with their embeddings",
              "Query Chroma with a question and retrieve the top 5 results",
              "Install pgvector, create a table with a vector column, and insert 50 embeddings",
              "Write a SQL query that finds the 5 nearest neighbors to a given vector"
            ],
            time: "1 week · focus on hands-on setup, not theory"
          },
          topics: [
            { id: "m2-t9", text: "PostgreSQL pgvector — setup and usage" },
            { id: "m2-t10", text: "Pinecone — cloud vector database" },
            { id: "m2-t11", text: "Weaviate — open-source vector search" },
            { id: "m2-t12", text: "Chroma — lightweight local vector DB" }
          ]
        },
        {
          id: "m2-s3",
          title: "Project 2: Enterprise Knowledge Assistant",
          type: "project",
          projectId: 2,
          note: {
            learn: [
              "How to build an end-to-end RAG product that non-technical users can actually use",
              "How to process documents server-side and make them queryable via a chat interface"
            ],
            concepts: [
              "The upload → process → store → query flow is the core of every RAG product.",
              "Always include source citations so users can verify AI answers.",
              "Use pgvector in PostgreSQL since you already know Postgres — no need for a separate DB."
            ],
            code: [
              "Build a file upload endpoint that accepts PDFs",
              "Write a background job that processes the PDF into chunks and stores embeddings in pgvector",
              "Build a chat interface where users ask questions about their uploaded documents",
              "Show the source document and page number alongside each AI answer",
              "Add a document list page so users can manage their uploaded files",
              "Deploy and write a clear README explaining what the app does"
            ],
            time: "2 weeks (weeks 3–4 of Month 2)"
          },
          topics: [
            { id: "m2-p2-t1", text: "Document upload system (PDF, manuals, contracts)" },
            { id: "m2-p2-t2", text: "Full RAG processing pipeline" },
            { id: "m2-p2-t3", text: "Q&A over private company documents" },
            { id: "m2-p2-t4", text: "Document summarization feature" },
            { id: "m2-p2-t5", text: "Source citation in all responses" },
            { id: "m2-p2-t6", text: "Deploy to production with documentation" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "AI Agents & Automation",
      mainGoal: "Build AI systems that perform business tasks.",
      color: "#ec4899",
      sections: [
        {
          id: "m3-s1",
          title: "AI Agent Concepts",
          type: "learning",
          note: {
            learn: [
              "What makes an agent different from a simple API call",
              "How an agent uses tools to interact with the real world",
              "How to give an agent memory so it remembers previous steps",
              "How to use LangChain to build your first agent"
            ],
            concepts: [
              "Agent = an LLM that can decide which action to take next, take it, observe the result, and repeat.",
              "Tool = a function the agent can call (e.g. search_web, run_sql_query, send_email).",
              "ReAct pattern = Reason → Act → Observe. The agent thinks, does something, sees the result, then thinks again.",
              "Memory = either passing previous steps back in the prompt (short-term) or storing them in a DB (long-term).",
              "Start with LangChain. It handles the loop for you so you can focus on building tools."
            ],
            code: [
              "Build a simple LangChain agent that has 2 tools: calculator and web search",
              "Ask the agent a multi-step question that requires using both tools",
              "Add a tool that queries your PostgreSQL database and returns results",
              "Add simple conversation memory so the agent remembers the last 5 messages",
              "Write the same agent without LangChain (just a while loop) to understand what's really happening"
            ],
            time: "2 weeks · 1h reading per day + 1.5h coding per day"
          },
          topics: [
            { id: "m3-t1", text: "Agents — planning, reasoning, acting" },
            { id: "m3-t2", text: "Memory — short-term, long-term, episodic" },
            { id: "m3-t3", text: "Tools — what tools agents can use" },
            { id: "m3-t4", text: "Workflows and Human-in-the-loop approval" },
            { id: "m3-t5", text: "LangChain — chains, agents, tools" },
            { id: "m3-t6", text: "LangGraph — stateful multi-agent workflows" },
            { id: "m3-t7", text: "LlamaIndex — data agents and indexing" },
            { id: "m3-t8", text: "CrewAI — multi-agent role-based systems" }
          ]
        },
        {
          id: "m3-s2",
          title: "Automation Skills",
          type: "learning",
          note: {
            learn: [
              "How to connect systems together using webhooks and automation tools",
              "How to trigger AI workflows from external events (form submission, new email, new lead)"
            ],
            concepts: [
              "Webhook = a URL your server exposes. Another service sends data to it when something happens.",
              "n8n = a visual tool where you connect blocks together to build workflows. Like Zapier but self-hosted.",
              "The pattern is always: Trigger → AI Processing → Action (e.g. new lead → AI summarizes → sends email)."
            ],
            code: [
              "Install n8n locally and build a workflow: HTTP trigger → format data → send to OpenAI → log result",
              "Write a simple Express.js webhook endpoint that receives JSON and processes it with AI",
              "Connect your webhook to n8n so n8n triggers when your app receives new data",
              "Build a workflow: user submits a form → AI writes a personalized reply → reply is saved to DB"
            ],
            time: "1 week · focus on building the automation, not memorizing tool docs"
          },
          topics: [
            { id: "m3-t9", text: "n8n — visual workflow automation" },
            { id: "m3-t10", text: "Zapier and Make concepts" },
            { id: "m3-t11", text: "Webhooks and API integrations" },
            { id: "m3-t12", text: "Event-driven systems architecture" },
            { id: "m3-t13", text: "Background jobs and task queues" }
          ]
        },
        {
          id: "m3-s3",
          title: "Project 3: AI Business Automation Agent",
          type: "project",
          projectId: 3,
          note: {
            learn: [
              "How to build an agent that does real business work without human intervention",
              "How to connect the agent to external APIs and databases"
            ],
            concepts: [
              "A useful agent is not just a chatbot — it takes actions and produces results in the real world.",
              "Keep it simple: one clear workflow with 3–5 steps is better than a complex multi-agent system."
            ],
            code: [
              "Build an agent that takes a company name and researches it (web search + LinkedIn)",
              "Add a tool that writes a personalized outreach email based on the research",
              "Add a tool that saves the lead and generated email to your PostgreSQL database",
              "Build a simple UI where you type a company name and the agent runs the full workflow",
              "Deploy and document the workflow so a non-technical person can understand it"
            ],
            time: "2 weeks (weeks 3–4 of Month 3)"
          },
          topics: [
            { id: "m3-p3-t1", text: "Lead research automation — auto-research new leads" },
            { id: "m3-p3-t2", text: "Customer analysis with AI" },
            { id: "m3-p3-t3", text: "Automated email generation and sending" },
            { id: "m3-p3-t4", text: "CRM integration and update" },
            { id: "m3-p3-t5", text: "Follow-up task creation automation" },
            { id: "m3-p3-t6", text: "Deploy to production with documentation" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Production AI Engineering",
      mainGoal: "Move from demo projects to professional systems.",
      color: "#f59e0b",
      sections: [
        {
          id: "m4-s1",
          title: "Backend Engineering",
          type: "learning",
          note: {
            learn: [
              "How to structure an AI app so it is secure, reliable, and ready for real users",
              "How to add proper authentication, rate limiting, and background jobs to an existing app"
            ],
            concepts: [
              "JWT = a token the server gives the user after login. The user sends it with every request.",
              "Rate limiting = blocking users who send too many requests in a short time (protects your API costs).",
              "Background job = work that runs separately from the main request, so the user doesn't wait.",
              "You already know Node.js. This is about applying professional patterns, not learning new languages."
            ],
            code: [
              "Add JWT authentication to one of your existing projects",
              "Add rate limiting middleware that blocks more than 20 requests per minute per user",
              "Add a job queue using BullMQ + Redis for processing document uploads in the background",
              "Add input validation and sanitization to all API endpoints"
            ],
            time: "1 week"
          },
          topics: [
            { id: "m4-t1", text: "API architecture, Authentication, Authorization" },
            { id: "m4-t2", text: "Security best practices for AI apps" },
            { id: "m4-t3", text: "Background workers, Queues, Caching, Rate limiting" }
          ]
        },
        {
          id: "m4-s2",
          title: "AI Production Systems",
          type: "learning",
          note: {
            learn: [
              "How to know if your AI app is working well once real users are using it",
              "How to track costs and catch bad AI responses before they become a problem"
            ],
            concepts: [
              "Evaluation = a test that scores your AI's output. E.g. is the answer relevant? is it accurate?",
              "Logging every AI interaction is essential — you need the data to debug and improve.",
              "Cost tracking = knowing how many tokens you are spending per user, per feature, per day."
            ],
            code: [
              "Add logging to every AI API call: log the prompt, response, model, tokens used, and latency",
              "Write a simple evaluator function that scores a response on 3 criteria (1–5 scale)",
              "Build a simple admin page that shows total tokens used and estimated cost per day",
              "Write a test that runs 10 sample prompts and checks if the responses match expected patterns"
            ],
            time: "1 week"
          },
          topics: [
            { id: "m4-t4", text: "AI monitoring — logging, tracing, observability" },
            { id: "m4-t5", text: "Evaluation frameworks for LLM output quality" },
            { id: "m4-t6", text: "Cost tracking and prompt optimization" }
          ]
        },
        {
          id: "m4-s3",
          title: "Cloud & DevOps",
          type: "learning",
          note: {
            learn: [
              "How to containerize your app so it runs the same everywhere",
              "How to set up automatic deployment so every git push deploys your app"
            ],
            concepts: [
              "Docker image = a snapshot of your app and everything it needs to run.",
              "Container = a running instance of that image. Isolated, consistent, portable.",
              "CI/CD = every time you push to main, GitHub automatically runs tests and deploys.",
              "Start simple: Railway or Render handle the infrastructure for you. No need for AWS complexity yet."
            ],
            code: [
              "Write a Dockerfile for your Node.js AI app",
              "Write a docker-compose.yml that runs your app + PostgreSQL + Redis together",
              "Set up a GitHub Actions workflow that runs on push to main: install → test → deploy",
              "Deploy your Dockerized app to Railway with environment variables set"
            ],
            time: "1 week"
          },
          topics: [
            { id: "m4-t7", text: "Docker — containerizing AI applications" },
            { id: "m4-t8", text: "CI/CD pipelines for AI apps" },
            { id: "m4-t9", text: "Cloud deployment — AWS/GCP/Azure/Vercel" }
          ]
        },
        {
          id: "m4-s4",
          title: "Data Engineering",
          type: "learning",
          note: {
            learn: [
              "How to reliably move and clean data as part of your AI pipeline",
              "How to schedule data processing jobs so they run automatically"
            ],
            concepts: [
              "ETL = Extract (read data from source) → Transform (clean and reshape it) → Load (save it to DB).",
              "A data pipeline is just code that runs on a schedule to keep your data fresh and clean."
            ],
            code: [
              "Write a script that reads a CSV of customer data, cleans it (remove blanks, fix types), and inserts it into PostgreSQL",
              "Add a scheduled cron job that runs this script every morning at 6am",
              "Write a script that fetches data from an external API and stores it in your DB",
              "Add error handling: if a row fails validation, log it to an errors table instead of crashing"
            ],
            time: "0.5 weeks"
          },
          topics: [
            { id: "m4-t10", text: "ETL pipelines — extract, transform, load" },
            { id: "m4-t11", text: "Data cleaning and processing at scale" },
            { id: "m4-t12", text: "Database optimization for AI workloads" }
          ]
        },
        {
          id: "m4-s5",
          title: "Project 4: AI SaaS Platform",
          type: "project",
          projectId: 4,
          note: {
            learn: [
              "How to turn your AI app into a real product that multiple users can pay for and use",
              "How production systems are structured differently from personal projects"
            ],
            concepts: [
              "SaaS = Software as a Service. Multiple customers, each with their own data and plan.",
              "Take one of your previous projects and upgrade it — don't build from scratch."
            ],
            code: [
              "Add team accounts and roles (admin, member) to your existing chatbot or RAG app",
              "Add a usage dashboard: show each user how many AI requests they've made this month",
              "Integrate Stripe for subscription billing (free tier + paid tier)",
              "Add Docker + CI/CD deployment with proper environment variable management",
              "Set up basic monitoring: alert if error rate exceeds 5% or if response time exceeds 3 seconds"
            ],
            time: "2 weeks (weeks 3–4 of Month 4)"
          },
          topics: [
            { id: "m4-p4-t1", text: "AI chatbot with knowledge base" },
            { id: "m4-p4-t2", text: "Team accounts, roles, permissions" },
            { id: "m4-p4-t3", text: "Analytics dashboard and usage tracking" },
            { id: "m4-p4-t4", text: "Billing integration" },
            { id: "m4-p4-t5", text: "Automation workflows" },
            { id: "m4-p4-t6", text: "Deploy production-ready with monitoring" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Multimodal AI",
      mainGoal: "Work with text, images, and voice.",
      color: "#10b981",
      sections: [
        {
          id: "m5-s1",
          title: "Computer Vision",
          type: "learning",
          note: {
            learn: [
              "How to send images to AI and extract useful structured information from them",
              "How to use OCR to pull text out of scanned documents"
            ],
            concepts: [
              "Vision model = an LLM that also accepts images as input. GPT-4o and Claude can do this.",
              "OCR = Optical Character Recognition. Converts an image of text into actual text you can work with.",
              "You don't need to train any vision models. You just call APIs that already do this."
            ],
            code: [
              "Send a photo of a receipt to GPT-4o and ask it to extract: vendor, date, total, line items as JSON",
              "Send a scanned PDF page to the API and ask it to transcribe all the text",
              "Use Tesseract.js (Node.js) to extract text from a local image file without an API",
              "Build a function that takes any image URL, sends it to GPT-4o, and returns structured data"
            ],
            time: "1 week"
          },
          topics: [
            { id: "m5-t1", text: "Image understanding and vision models (GPT-4V, Claude Vision)" },
            { id: "m5-t2", text: "OCR — optical character recognition techniques" },
            { id: "m5-t3", text: "Document processing — layouts, tables, forms" }
          ]
        },
        {
          id: "m5-s2",
          title: "Project 5: AI Document Processing System",
          type: "project",
          projectId: 5,
          note: {
            learn: [
              "How to build a real document automation workflow that saves hours of manual data entry"
            ],
            concepts: [
              "The value of this project is clear to any business: upload a document, get structured data out. No manual work.",
              "Focus on making the extraction accurate and the output clean — that's what makes it useful."
            ],
            code: [
              "Build a file upload page that accepts PDF or image invoices",
              "Send the uploaded file to GPT-4o Vision and extract fields into a structured JSON",
              "Validate the extracted data (check required fields, format amounts as numbers)",
              "Save the structured data to PostgreSQL",
              "Build a simple dashboard that shows all processed documents and their extracted data"
            ],
            time: "1 week"
          },
          topics: [
            { id: "m5-p5-t1", text: "Invoice/document upload and processing" },
            { id: "m5-p5-t2", text: "AI-powered information extraction" },
            { id: "m5-p5-t3", text: "Data validation and database storage" },
            { id: "m5-p5-t4", text: "Automated report generation" }
          ]
        },
        {
          id: "m5-s3",
          title: "Voice AI",
          type: "learning",
          note: {
            learn: [
              "How to convert spoken audio into text (speech-to-text)",
              "How to convert AI text responses into spoken audio (text-to-speech)",
              "How to combine both into a working voice conversation"
            ],
            concepts: [
              "ASR (Automatic Speech Recognition) = converts audio to text. OpenAI Whisper does this well.",
              "TTS (Text-to-Speech) = converts text to spoken audio. ElevenLabs and OpenAI TTS do this.",
              "Latency is the main challenge in voice AI. Users expect a response within 1–2 seconds.",
              "The pipeline is: record audio → transcribe → send to LLM → get response text → convert to speech → play."
            ],
            code: [
              "Record a short audio clip in the browser using MediaRecorder API",
              "Send the audio blob to the OpenAI Whisper API and get the transcript back",
              "Send the transcript to GPT-4 and get a text response",
              "Send the response text to OpenAI TTS and get an audio file back",
              "Play the audio file in the browser — completing the full voice loop"
            ],
            time: "1 week"
          },
          topics: [
            { id: "m5-t4", text: "Speech-to-text — Whisper, Deepgram, AssemblyAI" },
            { id: "m5-t5", text: "Text-to-speech — ElevenLabs, OpenAI TTS" },
            { id: "m5-t6", text: "Voice agents — real-time conversation systems" }
          ]
        },
        {
          id: "m5-s4",
          title: "Project 6: Voice AI Assistant",
          type: "project",
          projectId: 6,
          note: {
            learn: [
              "How to build a working voice product end-to-end in the browser"
            ],
            concepts: [
              "This is not about perfect latency or production-grade streaming — it's about completing the voice loop.",
              "A working demo is far more impressive to employers than a half-finished perfect version."
            ],
            code: [
              "Build a push-to-talk button in the browser that records audio while held",
              "On release, send audio to Whisper, show the transcript on screen",
              "Send transcript to an AI agent that can answer questions or take simple actions",
              "Convert the AI response to speech and auto-play it",
              "Show the conversation history on screen (both the transcript and the AI reply)"
            ],
            time: "1.5 weeks (weeks 3–4 of Month 5)"
          },
          topics: [
            { id: "m5-p6-t1", text: "Real-time speech recognition integration" },
            { id: "m5-p6-t2", text: "AI agent processing voice commands" },
            { id: "m5-p6-t3", text: "Database actions triggered from voice" },
            { id: "m5-p6-t4", text: "Natural voice response generation and playback" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "AI Architect + Career Preparation",
      mainGoal: "Become ready for AI engineering jobs.",
      color: "#22d3ee",
      sections: [
        {
          id: "m6-s1",
          title: "AI System Design",
          type: "learning",
          note: {
            learn: [
              "How to design AI systems on paper before writing code",
              "How to think about scalability, cost, and reliability for AI products",
              "How to communicate your architecture clearly to other engineers"
            ],
            concepts: [
              "System design = drawing and describing how your app's components connect and scale.",
              "For AI apps: think about where the LLM sits, how context is managed, and where costs are highest.",
              "Multi-tenancy = many customers sharing one system, each with isolated data.",
              "Caching AI responses = storing repeated answers so you don't call the API again for the same query."
            ],
            code: [
              "Draw an architecture diagram for each of your 5 previous projects using Excalidraw or draw.io",
              "Write a one-page technical design document for your RAG app: components, data flow, scaling decisions",
              "Design (on paper) how you would handle 10,000 users on your chatbot — what breaks first?",
              "Write down the cost breakdown of each project: how much does 1,000 users cost per month?"
            ],
            time: "2 weeks · focus on thinking and writing, not just coding"
          },
          topics: [
            { id: "m6-t1", text: "Chat system architecture — scalable AI chat design" },
            { id: "m6-t2", text: "Search system design — semantic and hybrid search" },
            { id: "m6-t3", text: "Recommendation systems — collaborative and content-based" },
            { id: "m6-t4", text: "AI automation platform architecture" },
            { id: "m6-t5", text: "AI SaaS multi-tenant architecture" }
          ]
        },
        {
          id: "m6-s2",
          title: "Career Preparation",
          type: "learning",
          note: {
            learn: [
              "How to present your 6 months of work in a way that gets you hired",
              "How to explain what you built clearly in a technical interview"
            ],
            concepts: [
              "A great README answers: what does it do, why is it useful, how do I run it?",
              "A demo video should show the full user flow in under 3 minutes. No slides, just the working product.",
              "In interviews, explain: the problem, your solution, the tradeoffs you made, and what you would do differently."
            ],
            code: [
              "Write a README for each project: problem, solution, architecture diagram, setup instructions",
              "Record a 2–3 minute demo video for each project — screen record while using the app",
              "Write one technical blog post about how RAG works, using your project as the example",
              "Practice explaining your chatbot project out loud in under 2 minutes without looking at notes"
            ],
            time: "1 week"
          },
          topics: [
            { id: "m6-t6", text: "Portfolio review and polishing all 6 projects" },
            { id: "m6-t7", text: "Architecture diagrams for each project" },
            { id: "m6-t8", text: "Video demonstrations of all projects" },
            { id: "m6-t9", text: "Write technical blog posts about AI learnings" },
            { id: "m6-t10", text: "Practice explaining AI systems in interviews" }
          ]
        },
        {
          id: "m6-s3",
          title: "Final Project: AI Business Operating System",
          type: "project",
          projectId: 7,
          note: {
            learn: [
              "How to combine everything you've learned into one coherent product",
              "How to scope a large project so it gets finished and is actually useful"
            ],
            concepts: [
              "This is your capstone. It does not need to be perfect — it needs to be complete and demonstrable.",
              "Combine: the chatbot (Month 1) + RAG (Month 2) + agents (Month 3) + production quality (Month 4).",
              "One app, one codebase, one deployment. Clean code and a great README matter more than extra features."
            ],
            code: [
              "Build a single app with: AI chat assistant + document knowledge base + one automation workflow",
              "Add a simple analytics page that shows usage across features",
              "Write a full README with architecture diagram, setup guide, and feature list",
              "Record a demo video walking through every feature",
              "Deploy to production with a real domain name"
            ],
            time: "2 weeks (weeks 3–4 of Month 6)"
          },
          topics: [
            { id: "m6-p7-t1", text: "AI assistant with persistent memory and knowledge base" },
            { id: "m6-p7-t2", text: "Multi-agent automation system with workflows" },
            { id: "m6-p7-t3", text: "Business integrations (CRM, email, calendar)" },
            { id: "m6-p7-t4", text: "Analytics dashboard with AI-generated insights" },
            { id: "m6-p7-t5", text: "GitHub: clean code, README, architecture diagrams" },
            { id: "m6-p7-t6", text: "Demo: screenshots, video walkthrough, live deployment" }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      month: 1,
      name: "AI Chatbot Platform",
      portfolioResult: "Built a production AI chatbot platform with memory and streaming responses.",
      tech: ["React / Next.js", "Node.js or Python", "PostgreSQL", "LLM API"]
    },
    {
      id: 2,
      month: 2,
      name: "Enterprise Knowledge Assistant",
      portfolioResult: "Built a private company AI assistant using RAG technology.",
      tech: ["RAG Pipeline", "Vector Database", "PostgreSQL", "LLM API"]
    },
    {
      id: 3,
      month: 3,
      name: "AI Business Automation Agent",
      portfolioResult: "Built an AI agent that automates business workflows.",
      tech: ["LangChain / CrewAI", "n8n", "CRM APIs", "LLM API"]
    },
    {
      id: 4,
      month: 4,
      name: "AI SaaS Platform",
      portfolioResult: "Built a complete AI SaaS product with team accounts and billing.",
      tech: ["Docker", "CI/CD", "Cloud (AWS/GCP)", "Full-Stack"]
    },
    {
      id: 5,
      month: 5,
      name: "AI Document Processing System",
      portfolioResult: "Built an intelligent document processing system with AI extraction.",
      tech: ["Computer Vision", "OCR", "PostgreSQL", "Vision API"]
    },
    {
      id: 6,
      month: 5,
      name: "Voice AI Assistant",
      portfolioResult: "Built a voice-controlled AI assistant with speech recognition and synthesis.",
      tech: ["Whisper / Deepgram", "ElevenLabs / OpenAI TTS", "AI Agent", "WebSockets"]
    },
    {
      id: 7,
      month: 6,
      name: "AI Business Operating System",
      portfolioResult: "Built a complete AI-powered business platform — the capstone project.",
      tech: ["Full-Stack", "Multi-Agent AI", "RAG", "Voice", "Analytics"]
    }
  ],
  resources: [
    {
      category: "AI APIs & Documentation",
      icon: "📡",
      items: [
        { name: "OpenAI Platform Docs", url: "https://platform.openai.com/docs", description: "GPT-4, DALL-E, Whisper, Embeddings" },
        { name: "Anthropic Docs", url: "https://docs.anthropic.com", description: "Claude API, tool use, prompt guide" },
        { name: "Google AI (Gemini)", url: "https://ai.google.dev/docs", description: "Gemini API and Google AI Studio" },
        { name: "Hugging Face", url: "https://huggingface.co", description: "Open-source models, datasets, spaces" }
      ]
    },
    {
      category: "AI Frameworks",
      icon: "🔧",
      items: [
        { name: "LangChain Docs", url: "https://docs.langchain.com", description: "LLM chains, agents, tools" },
        { name: "LangGraph", url: "https://langchain-ai.github.io/langgraph", description: "Stateful multi-agent graphs" },
        { name: "LlamaIndex", url: "https://docs.llamaindex.ai", description: "Data indexing and RAG" },
        { name: "CrewAI", url: "https://docs.crewai.com", description: "Multi-agent role-based system" }
      ]
    },
    {
      category: "Vector Databases",
      icon: "🗄️",
      items: [
        { name: "Pinecone", url: "https://docs.pinecone.io", description: "Managed vector database" },
        { name: "Weaviate", url: "https://weaviate.io/developers/weaviate", description: "Open-source vector search" },
        { name: "Chroma", url: "https://docs.trychroma.com", description: "Lightweight local vector DB" },
        { name: "pgvector", url: "https://github.com/pgvector/pgvector", description: "Vectors in PostgreSQL" }
      ]
    },
    {
      category: "Automation Tools",
      icon: "⚡",
      items: [
        { name: "n8n", url: "https://n8n.io", description: "Open-source workflow automation" },
        { name: "Zapier", url: "https://zapier.com", description: "No-code automation platform" },
        { name: "Make (Integromat)", url: "https://make.com", description: "Visual automation builder" }
      ]
    },
    {
      category: "Learning Resources",
      icon: "📚",
      items: [
        { name: "Fast.ai", url: "https://fast.ai", description: "Practical deep learning for coders" },
        { name: "DeepLearning.AI", url: "https://deeplearning.ai", description: "Andrew Ng's AI courses" },
        { name: "Andrej Karpathy — YouTube", url: "https://www.youtube.com/@AndrejKarpathy", description: "Deep neural net lectures by ex-Tesla AI" },
        { name: "Chip Huyen — MLOps Blog", url: "https://huyenchip.com", description: "Production ML engineering" }
      ]
    },
    {
      category: "Voice & Multimodal",
      icon: "🎙️",
      items: [
        { name: "OpenAI Whisper", url: "https://platform.openai.com/docs/guides/speech-to-text", description: "Speech-to-text API" },
        { name: "ElevenLabs", url: "https://elevenlabs.io/docs", description: "Realistic text-to-speech" },
        { name: "Deepgram", url: "https://developers.deepgram.com", description: "Real-time speech recognition" }
      ]
    }
  ]
};
