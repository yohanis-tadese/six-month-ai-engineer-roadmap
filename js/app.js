/* ============================================================
   AI Engineer Roadmap Tracker — Main Application
   ============================================================ */

const App = {
  currentPage: 'dashboard',

  init() {
    this.loadSettings();
    this.setupNavigation();
    this.setupModal();
    this.updateSidebarStats();
    this.navigate('dashboard');
  },

  loadSettings() {
    const data = Storage.load();
    const settings = data.settings;
    const nameEl = document.getElementById('userName');
    const avatarEl = document.getElementById('userAvatar');
    if (nameEl) nameEl.textContent = settings.name || 'AI Engineer';
    if (avatarEl) avatarEl.textContent = (settings.name || 'A')[0].toUpperCase();
  },

  setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        this.navigate(item.dataset.page);
      });
    });

    document.getElementById('sidebarToggle').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('collapsed');
      document.getElementById('mainContent').classList.toggle('expanded');
    });
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
        case 'daily':     main.innerHTML = this.renderDaily(); break;
        case 'projects':  main.innerHTML = this.renderProjects(); break;
        case 'research':  main.innerHTML = this.renderResearch(); break;
        case 'resources': main.innerHTML = this.renderResources(); break;
        case 'settings':  main.innerHTML = this.renderSettings(); break;
        default:          main.innerHTML = this.renderDashboard();
      }
      this.bindPageEvents(page);
      this.updateSidebarStats();
    }, 80);
  },

  updateSidebarStats() {
    const stats = Storage.getStats();
    const prog = document.getElementById('sidebarProgress');
    const progText = document.getElementById('sidebarProgressText');
    const streak = document.getElementById('streakCount');
    const badge = document.getElementById('roadmapBadge');
    if (prog) prog.style.width = stats.overallProgress + '%';
    if (progText) progText.textContent = stats.overallProgress + '%';
    if (streak) streak.textContent = stats.streak;
    if (badge) badge.textContent = stats.overallProgress + '%';
  },

  /* ──────────────────────────────────────────────
     DASHBOARD
  ────────────────────────────────────────────── */
  renderDashboard() {
    const stats = Storage.getStats();
    const data = Storage.load();
    const today = new Date().toISOString().split('T')[0];
    const todayLog = data.dailyLogs[today];
    const name = data.settings.name || 'AI Engineer';

    const recentLogs = Object.entries(data.dailyLogs)
      .sort((a, b) => b[0].localeCompare(a[0]))
      .slice(0, 5);

    const monthProgress = this.getMonthProgress(stats.currentMonth);
    const currentMonthData = ROADMAP_DATA.months[stats.currentMonth - 1];

    const progressColor = stats.overallProgress < 30 ? '#ef4444' :
                          stats.overallProgress < 60 ? '#f59e0b' : '#10b981';

    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">Good ${this.getGreeting()}, <span class="gradient-text">${name}</span></h1>
            <p class="page-subtitle">${this.formatDate(new Date())} · Month ${stats.currentMonth} of 6</p>
          </div>
          <button class="btn btn-primary" onclick="App.navigate('daily')">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/></svg>
            Log Today
          </button>
        </div>

        <!-- Overall Progress Banner -->
        <div class="progress-banner">
          <div class="progress-banner-content">
            <div class="progress-banner-left">
              <div class="progress-title">AI Engineer Journey</div>
              <div class="progress-subtitle">${stats.completedTasks} of ${stats.totalTasks} topics completed</div>
              <div class="big-progress-bar">
                <div class="big-progress-fill" style="width:${stats.overallProgress}%; background:${progressColor}"></div>
              </div>
              <div class="progress-blocks">${this.renderProgressBlocks(stats.overallProgress)}</div>
            </div>
            <div class="progress-banner-right">
              <div class="big-percent" style="color:${progressColor}">${stats.overallProgress}%</div>
              <div class="big-percent-label">Complete</div>
            </div>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon" style="background:rgba(99,102,241,0.15);color:#6366f1">
              <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.357l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>
            </div>
            <div class="stat-value">${stats.totalLearningHours}h</div>
            <div class="stat-label">Learning Hours</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:rgba(34,211,238,0.15);color:#22d3ee">
              <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </div>
            <div class="stat-value">${stats.totalResearchHours}h</div>
            <div class="stat-label">Research & Building Hours</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:rgba(16,185,129,0.15);color:#10b981">
              <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8zm2 1a1 1 0 100 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/></svg>
            </div>
            <div class="stat-value">${stats.codingDays}</div>
            <div class="stat-label">Coding Days</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:rgba(245,158,11,0.15);color:#f59e0b">
              <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <div class="stat-value">${stats.completedProjects}</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:rgba(239,68,68,0.15);color:#ef4444">
              <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/></svg>
            </div>
            <div class="stat-value">${stats.streak}</div>
            <div class="stat-label">Day Streak</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background:rgba(139,92,246,0.15);color:#8b5cf6">
              <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>
            </div>
            <div class="stat-value">Month ${stats.currentMonth}</div>
            <div class="stat-label">Current Month</div>
          </div>
        </div>

        <div class="two-col">
          <!-- Current Month Focus -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">
                <span class="month-dot" style="background:${currentMonthData.color}"></span>
                Month ${stats.currentMonth}: ${currentMonthData.title}
              </h3>
            </div>
            <p class="card-subtitle">${currentMonthData.mainGoal}</p>
            <div class="month-progress-row">
              <div class="month-progress-bar">
                <div class="month-progress-fill" style="width:${monthProgress}%;background:${currentMonthData.color}"></div>
              </div>
              <span class="month-progress-label">${monthProgress}%</span>
            </div>
            <div class="card-actions">
              <button class="btn btn-outline" onclick="App.navigate('roadmap')">View Full Roadmap →</button>
            </div>
          </div>

          <!-- Today's Log -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Today's Activity</h3>
              <span class="badge ${todayLog ? 'badge-success' : 'badge-muted'}">${todayLog ? 'Logged' : 'Not logged'}</span>
            </div>
            ${todayLog ? `
              <div class="today-stats">
                <div class="today-stat"><span class="today-stat-val">${todayLog.learningHours || 0}h</span><span class="today-stat-lbl">Learning</span></div>
                <div class="today-stat"><span class="today-stat-val">${todayLog.researchHours || 0}h</span><span class="today-stat-lbl">Building</span></div>
                <div class="today-stat"><span class="today-stat-val">${todayLog.coded ? '✓' : '–'}</span><span class="today-stat-lbl">Coded</span></div>
              </div>
              ${todayLog.learned ? `<div class="today-note"><strong>Learned:</strong> ${todayLog.learned}</div>` : ''}
            ` : `
              <p class="empty-state-small">No log for today yet.</p>
              <button class="btn btn-primary" onclick="App.navigate('daily')">Log today's progress →</button>
            `}
          </div>
        </div>

        <!-- The Rule -->
        <div class="rule-card">
          <div class="rule-icon">💡</div>
          <div class="rule-content">
            <div class="rule-title">The Golden Rule</div>
            <div class="rule-text">${ROADMAP_DATA.rule}</div>
          </div>
        </div>

        <!-- Recent Activity -->
        ${recentLogs.length > 0 ? `
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Recent Activity</h3>
            <button class="btn btn-ghost btn-sm" onclick="App.navigate('daily')">View all</button>
          </div>
          <div class="activity-list">
            ${recentLogs.map(([date, log]) => `
              <div class="activity-item">
                <div class="activity-date">${this.formatDate(new Date(date + 'T12:00:00'))}</div>
                <div class="activity-hours">
                  <span class="activity-pill learning">${log.learningHours || 0}h learning</span>
                  <span class="activity-pill building">${log.researchHours || 0}h building</span>
                  ${log.coded ? '<span class="activity-pill coded">coded</span>' : ''}
                </div>
                ${log.learned ? `<div class="activity-note">${log.learned.substring(0, 80)}${log.learned.length > 80 ? '…' : ''}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <!-- Goal Reminder -->
        <div class="goal-card">
          <div class="goal-header">Your Goal</div>
          <div class="goal-text">${ROADMAP_DATA.goal}</div>
          <div class="goal-tags">
            <span class="goal-tag">AI Engineer</span>
            <span class="goal-tag">AI Automation Engineer</span>
            <span class="goal-tag">AI Product Builder</span>
          </div>
        </div>
      </div>
    `;
  },

  /* ──────────────────────────────────────────────
     ROADMAP
  ────────────────────────────────────────────── */
  renderRoadmap() {
    const data = Storage.load();
    const stats = Storage.getStats();

    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">6 Month Roadmap</h1>
            <p class="page-subtitle">${stats.completedTasks} of ${stats.totalTasks} topics completed · ${stats.overallProgress}% overall</p>
          </div>
          <div class="overall-pill">${stats.overallProgress}% complete</div>
        </div>

        <div class="roadmap-overall-bar">
          <div class="roadmap-overall-fill" style="width:${stats.overallProgress}%"></div>
        </div>

        <div class="month-tabs" id="monthTabs">
          ${ROADMAP_DATA.months.map((m, i) => {
            const prog = this.getMonthProgress(m.id);
            return `<button class="month-tab ${i === 0 ? 'active' : ''}" data-month="${m.id}" style="--tab-color:${m.color}">
              <span class="tab-num">M${m.id}</span>
              <span class="tab-title">${m.title.split(' ')[0]} ${m.title.split(' ')[1] || ''}</span>
              <span class="tab-prog">${prog}%</span>
            </button>`;
          }).join('')}
        </div>

        <div id="monthContent">
          ${this.renderMonthContent(1, data.completedTasks)}
        </div>
      </div>
    `;
  },

  renderMonthContent(monthId, completedTasks) {
    const month = ROADMAP_DATA.months.find(m => m.id === monthId);
    if (!month) return '';
    const prog = this.getMonthProgress(monthId);
    const totalInMonth = month.sections.reduce((s, sec) => s + sec.topics.length, 0);
    const completedInMonth = month.sections.reduce((s, sec) =>
      s + sec.topics.filter(t => completedTasks.includes(t.id)).length, 0);

    return `
      <div class="month-content fade-in" data-month="${monthId}">
        <div class="month-hero" style="border-color:${month.color}">
          <div class="month-hero-left">
            <div class="month-badge" style="background:${month.color}20;color:${month.color}">Month ${month.id}</div>
            <h2 class="month-title">${month.title}</h2>
            <p class="month-goal">${month.mainGoal}</p>
          </div>
          <div class="month-hero-right">
            <svg class="month-ring" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="32" fill="none" stroke="#2d3748" stroke-width="8"/>
              <circle cx="40" cy="40" r="32" fill="none" stroke="${month.color}" stroke-width="8"
                stroke-dasharray="${2 * Math.PI * 32}" stroke-dashoffset="${2 * Math.PI * 32 * (1 - prog/100)}"
                stroke-linecap="round" transform="rotate(-90 40 40)"/>
              <text x="40" y="45" text-anchor="middle" fill="${month.color}" font-size="16" font-weight="bold">${prog}%</text>
            </svg>
            <div class="month-counts">${completedInMonth}/${totalInMonth} topics</div>
          </div>
        </div>

        ${month.sections.map(section => this.renderSection(section, completedTasks, month.color)).join('')}
      </div>
    `;
  },

  renderNote(note, color) {
    if (!note) return '';
    return `
      <div class="section-note">
        <div class="note-tabs">
          <button class="note-tab active" data-tab="learn">What to Learn</button>
          <button class="note-tab" data-tab="concepts">Key Concepts</button>
          <button class="note-tab" data-tab="code">Coding Tasks</button>
          <button class="note-tab" data-tab="time">Time Guide</button>
        </div>
        <div class="note-panels">
          <div class="note-panel active" data-panel="learn">
            <ul class="note-list">
              ${note.learn.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="note-panel" data-panel="concepts">
            <ul class="note-list note-list-concepts">
              ${note.concepts.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="note-panel" data-panel="code">
            <ol class="note-list note-list-code">
              ${note.code.map(item => `<li><code>${item}</code></li>`).join('')}
            </ol>
          </div>
          <div class="note-panel" data-panel="time">
            <div class="note-time-box" style="border-color:${color}">
              <span class="note-time-icon">⏱</span>
              <span>${note.time}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderSection(section, completedTasks, color) {
    const completed = section.topics.filter(t => completedTasks.includes(t.id)).length;
    const total = section.topics.length;
    const isProject = section.type === 'project';

    return `
      <div class="section-card ${isProject ? 'section-project' : ''}" style="${isProject ? `border-color:${color}40` : ''}">
        <div class="section-header">
          <div class="section-title-row">
            ${isProject
              ? `<span class="section-badge project-badge" style="background:${color}20;color:${color}">PROJECT</span>`
              : `<span class="section-badge learn-badge">LEARN</span>`
            }
            <h3 class="section-title">${section.title}</h3>
          </div>
          <div class="section-count">${completed}/${total}</div>
        </div>
        <div class="section-progress-bar">
          <div class="section-progress-fill" style="width:${total > 0 ? Math.round(completed/total*100) : 0}%;background:${color}"></div>
        </div>

        ${this.renderNote(section.note, color)}

        <div class="task-list">
          ${section.topics.map(topic => {
            const done = completedTasks.includes(topic.id);
            return `
              <label class="task-item ${done ? 'task-done' : ''}">
                <input type="checkbox" class="task-checkbox" data-task-id="${topic.id}" ${done ? 'checked' : ''}>
                <span class="task-checkmark" style="${done ? `background:${color};border-color:${color}` : ''}">
                  ${done ? '<svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : ''}
                </span>
                <span class="task-text">${topic.text}</span>
              </label>
            `;
          }).join('')}
        </div>
        ${isProject ? `
          <div class="section-project-footer">
            <button class="btn btn-outline btn-sm" onclick="App.navigate('projects')">View Project Details →</button>
          </div>
        ` : ''}
      </div>
    `;
  },

  /* ──────────────────────────────────────────────
     DAILY TRACKER
  ────────────────────────────────────────────── */
  renderDaily() {
    const today = new Date().toISOString().split('T')[0];
    const allLogs = Storage.getAllLogs();
    const todayLog = allLogs[today] || {};

    const recentDates = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      recentDates.push(d.toISOString().split('T')[0]);
    }

    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">Daily Tracker</h1>
            <p class="page-subtitle">Track your daily learning and building hours</p>
          </div>
        </div>

        <!-- Date Navigator -->
        <div class="date-nav">
          <button class="btn btn-ghost btn-sm" id="prevDay">← Prev</button>
          <input type="date" class="date-input" id="logDate" value="${today}" max="${today}">
          <button class="btn btn-ghost btn-sm" id="nextDay">Next →</button>
        </div>

        <!-- Daily Log Form -->
        <div class="daily-form-grid">
          <div class="card daily-card">
            <div class="card-header">
              <h3 class="card-title">Log Your Day</h3>
              <span class="daily-date-badge" id="currentDateLabel">${this.formatDate(new Date())}</span>
            </div>

            <div class="hours-row">
              <div class="hours-input-group">
                <label class="input-label">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" style="color:#6366f1"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.357l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/></svg>
                  Learning Hours
                </label>
                <div class="number-input-wrapper">
                  <button class="num-btn" data-target="learningHours" data-action="dec">−</button>
                  <input type="number" id="learningHours" class="number-input" min="0" max="12" step="0.5" value="${todayLog.learningHours || 0}">
                  <button class="num-btn" data-target="learningHours" data-action="inc">+</button>
                </div>
                <div class="hours-presets">
                  ${[0.5, 1, 1.5, 2, 2.5, 3].map(h => `<button class="preset-btn" data-target="learningHours" data-val="${h}">${h}h</button>`).join('')}
                </div>
              </div>
              <div class="hours-divider"></div>
              <div class="hours-input-group">
                <label class="input-label">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" style="color:#22d3ee"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  Research & Building Hours
                </label>
                <div class="number-input-wrapper">
                  <button class="num-btn" data-target="researchHours" data-action="dec">−</button>
                  <input type="number" id="researchHours" class="number-input" min="0" max="12" step="0.5" value="${todayLog.researchHours || 0}">
                  <button class="num-btn" data-target="researchHours" data-action="inc">+</button>
                </div>
                <div class="hours-presets">
                  ${[0.5, 1, 1.5, 2, 2.5, 3].map(h => `<button class="preset-btn" data-target="researchHours" data-val="${h}">${h}h</button>`).join('')}
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="toggle-label">
                <input type="checkbox" id="codedToday" ${todayLog.coded ? 'checked' : ''}>
                <span class="toggle-track"></span>
                <span class="toggle-text">I wrote code today</span>
              </label>
            </div>

            <div class="form-group">
              <label class="input-label">What I learned today</label>
              <textarea id="learnedToday" class="textarea" rows="3" placeholder="Key concepts, insights, breakthroughs...">${todayLog.learned || ''}</textarea>
            </div>

            <div class="form-group">
              <label class="input-label">What I built / practiced</label>
              <textarea id="builtToday" class="textarea" rows="3" placeholder="Projects, exercises, experiments...">${todayLog.built || ''}</textarea>
            </div>

            <div class="form-group">
              <label class="input-label">Notes / Questions for next session</label>
              <textarea id="notesToday" class="textarea" rows="2" placeholder="Questions to research, things to revisit...">${todayLog.notes || ''}</textarea>
            </div>

            <div class="form-actions">
              <button class="btn btn-primary" id="saveLogBtn">Save Log</button>
              <div class="autosave-hint">Changes save automatically</div>
            </div>
          </div>

          <!-- Target Schedule -->
          <div class="card schedule-card">
            <div class="card-header">
              <h3 class="card-title">Daily Target</h3>
            </div>
            <div class="schedule-items">
              <div class="schedule-item">
                <div class="schedule-icon" style="color:#6366f1">📖</div>
                <div class="schedule-info">
                  <div class="schedule-name">Learning</div>
                  <div class="schedule-hours">2.5 hours/day</div>
                </div>
                <div class="schedule-meter">
                  <div class="schedule-fill" id="learningMeter" style="width:0%;background:#6366f1"></div>
                </div>
              </div>
              <div class="schedule-item">
                <div class="schedule-icon" style="color:#22d3ee">💻</div>
                <div class="schedule-info">
                  <div class="schedule-name">Building & Research</div>
                  <div class="schedule-hours">2.5 hours/day</div>
                </div>
                <div class="schedule-meter">
                  <div class="schedule-fill" id="researchMeter" style="width:0%;background:#22d3ee"></div>
                </div>
              </div>
            </div>
            <div class="focus-areas">
              <div class="focus-col">
                <div class="focus-title" style="color:#6366f1">Learning Focus</div>
                <ul class="focus-list">
                  <li>AI concepts & docs</li>
                  <li>Architecture</li>
                  <li>Mathematics</li>
                  <li>Research papers</li>
                  <li>Industry practices</li>
                </ul>
              </div>
              <div class="focus-col">
                <div class="focus-title" style="color:#22d3ee">Building Focus</div>
                <ul class="focus-list">
                  <li>Build projects</li>
                  <li>Analyze AI products</li>
                  <li>Study problems</li>
                  <li>Improve portfolio</li>
                  <li>Write docs</li>
                </ul>
              </div>
            </div>
            <div class="weekly-plan">
              <div class="weekly-title">Weekly Routine</div>
              <div class="weekly-days">
                <div class="weekly-day"><span>Mon–Fri</span><span>Learn + Build</span></div>
                <div class="weekly-day"><span>Saturday</span><span>Refactor + Publish</span></div>
                <div class="weekly-day"><span>Sunday</span><span>Review + Plan</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Logs Table -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">History</h3>
          </div>
          <div class="log-table-wrapper">
            <table class="log-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Learning</th>
                  <th>Building</th>
                  <th>Total</th>
                  <th>Coded</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody id="logTableBody">
                ${recentDates.filter(d => allLogs[d]).map(d => {
                  const log = allLogs[d];
                  const total = (parseFloat(log.learningHours)||0) + (parseFloat(log.researchHours)||0);
                  return `
                    <tr class="log-row" data-date="${d}">
                      <td class="log-date">${this.formatDate(new Date(d + 'T12:00:00'))}</td>
                      <td><span class="log-hours-pill learning">${log.learningHours || 0}h</span></td>
                      <td><span class="log-hours-pill building">${log.researchHours || 0}h</span></td>
                      <td><strong>${Math.round(total * 10) / 10}h</strong></td>
                      <td>${log.coded ? '✅' : '—'}</td>
                      <td class="log-notes-cell">${log.learned ? log.learned.substring(0,40) + (log.learned.length > 40 ? '…' : '') : '—'}</td>
                    </tr>
                  `;
                }).join('') || '<tr><td colspan="6" class="empty-row">No logs yet. Start tracking today!</td></tr>'}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  /* ──────────────────────────────────────────────
     PROJECTS
  ────────────────────────────────────────────── */
  renderProjects() {
    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">Projects</h1>
            <p class="page-subtitle">7 portfolio projects across 6 months</p>
          </div>
        </div>

        <div class="projects-grid">
          ${ROADMAP_DATA.projects.map(p => this.renderProjectCard(p)).join('')}
        </div>
      </div>
    `;
  },

  renderProjectCard(project) {
    const saved = Storage.getProjectData(project.id) || {};
    const status = saved.status || 'not-started';
    const progress = saved.progress || 0;
    const month = ROADMAP_DATA.months[project.month - 1];
    const statusConfig = {
      'not-started': { label: 'Not Started', color: '#64748b', bg: '#64748b20' },
      'in-progress': { label: 'In Progress', color: '#f59e0b', bg: '#f59e0b20' },
      'completed':   { label: 'Completed',   color: '#10b981', bg: '#10b98120' }
    };
    const sc = statusConfig[status] || statusConfig['not-started'];

    return `
      <div class="project-card" id="project-card-${project.id}">
        <div class="project-card-header" style="border-color:${month.color}">
          <div class="project-month-tag" style="background:${month.color}20;color:${month.color}">Month ${project.month}</div>
          <span class="project-status-badge" style="background:${sc.bg};color:${sc.color}">${sc.label}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-name">Project ${project.id}: ${project.name}</h3>
          <p class="project-desc">${project.portfolioResult}</p>

          <div class="project-progress-row">
            <span class="project-prog-label">Progress: ${progress}%</span>
            <span class="project-prog-num">${progress}%</span>
          </div>
          <div class="project-progress-bar">
            <div class="project-progress-fill" style="width:${progress}%;background:${month.color}"></div>
          </div>
          <input type="range" class="project-slider" min="0" max="100" value="${progress}"
            data-project-id="${project.id}" style="accent-color:${month.color}">

          <div class="tech-tags">
            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-links">
            <input type="url" class="link-input" placeholder="GitHub URL" value="${saved.github || ''}"
              data-project-id="${project.id}" data-field="github">
            <input type="url" class="link-input" placeholder="Live Demo URL" value="${saved.demo || ''}"
              data-project-id="${project.id}" data-field="demo">
          </div>

          <textarea class="textarea project-notes" rows="2" placeholder="Project notes, progress, blockers..."
            data-project-id="${project.id}" data-field="notes">${saved.notes || ''}</textarea>

          <div class="project-status-row">
            <span class="status-label">Status:</span>
            <select class="status-select" data-project-id="${project.id}" style="accent-color:${month.color}">
              <option value="not-started" ${status === 'not-started' ? 'selected' : ''}>Not Started</option>
              <option value="in-progress" ${status === 'in-progress' ? 'selected' : ''}>In Progress</option>
              <option value="completed"   ${status === 'completed'   ? 'selected' : ''}>Completed</option>
            </select>
          </div>
        </div>
      </div>
    `;
  },

  /* ──────────────────────────────────────────────
     RESEARCH NOTES
  ────────────────────────────────────────────── */
  renderResearch() {
    const data = Storage.load();
    const notes = data.researchNotes || [];

    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">Research Notes</h1>
            <p class="page-subtitle">${notes.length} note${notes.length !== 1 ? 's' : ''}</p>
          </div>
          <button class="btn btn-primary" id="addNoteBtn">
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/></svg>
            New Note
          </button>
        </div>

        <div class="search-bar-wrapper">
          <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" class="search-icon"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/></svg>
          <input type="text" id="noteSearch" class="search-input" placeholder="Search notes...">
        </div>

        <div class="notes-grid" id="notesGrid">
          ${notes.length === 0
            ? `<div class="empty-state">
                <div class="empty-icon">📝</div>
                <h3>No notes yet</h3>
                <p>Start capturing your research, insights, and ideas.</p>
                <button class="btn btn-primary" id="addNoteBtn2">Add your first note</button>
               </div>`
            : notes.map(note => this.renderNoteCard(note)).join('')
          }
        </div>
      </div>
    `;
  },

  renderNoteCard(note) {
    const date = new Date(note.createdAt);
    const tags = (note.tags || '').split(',').map(t => t.trim()).filter(Boolean);
    return `
      <div class="note-card" data-note-id="${note.id}">
        <div class="note-header">
          <h3 class="note-title">${note.title || 'Untitled'}</h3>
          <div class="note-actions">
            <button class="icon-btn" data-edit-note="${note.id}" title="Edit">✏️</button>
            <button class="icon-btn danger" data-delete-note="${note.id}" title="Delete">🗑️</button>
          </div>
        </div>
        <div class="note-date">${this.formatDate(date)}</div>
        <div class="note-preview">${(note.content || '').substring(0, 200)}${(note.content||'').length > 200 ? '…' : ''}</div>
        ${tags.length > 0 ? `
          <div class="note-tags">
            ${tags.map(t => `<span class="note-tag">${t}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    `;
  },

  /* ──────────────────────────────────────────────
     RESOURCES
  ────────────────────────────────────────────── */
  renderResources() {
    const data = Storage.load();
    const custom = data.customResources || [];

    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">Resources</h1>
            <p class="page-subtitle">Curated tools, docs, and learning materials</p>
          </div>
          <button class="btn btn-primary" id="addResourceBtn">+ Add Resource</button>
        </div>

        <div class="resources-grid">
          ${ROADMAP_DATA.resources.map(cat => `
            <div class="resource-category">
              <div class="resource-cat-header">
                <span class="resource-cat-icon">${cat.icon}</span>
                <h3 class="resource-cat-title">${cat.category}</h3>
              </div>
              <div class="resource-list">
                ${cat.items.map(item => `
                  <a href="${item.url}" target="_blank" rel="noopener" class="resource-item">
                    <div class="resource-name">${item.name}</div>
                    <div class="resource-desc">${item.description}</div>
                    <span class="resource-arrow">↗</span>
                  </a>
                `).join('')}
              </div>
            </div>
          `).join('')}

          ${custom.length > 0 ? `
            <div class="resource-category">
              <div class="resource-cat-header">
                <span class="resource-cat-icon">⭐</span>
                <h3 class="resource-cat-title">My Resources</h3>
              </div>
              <div class="resource-list">
                ${custom.map(item => `
                  <div class="resource-item custom-resource">
                    <div class="resource-main">
                      <div class="resource-name">${item.name}</div>
                      <div class="resource-desc">${item.description || ''}</div>
                    </div>
                    <div class="resource-item-actions">
                      <a href="${item.url}" target="_blank" rel="noopener" class="resource-arrow">↗</a>
                      <button class="icon-btn danger" data-delete-resource="${item.id}">🗑️</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  /* ──────────────────────────────────────────────
     SETTINGS
  ────────────────────────────────────────────── */
  renderSettings() {
    const data = Storage.load();
    const settings = data.settings;
    const stats = Storage.getStats();

    return `
      <div class="page fade-in">
        <div class="page-header">
          <div>
            <h1 class="page-title">Settings</h1>
            <p class="page-subtitle">Configure your tracker</p>
          </div>
        </div>

        <div class="settings-grid">
          <div class="card settings-card">
            <h3 class="settings-section-title">Profile</h3>
            <div class="form-group">
              <label class="input-label">Your Name</label>
              <input type="text" id="settingsName" class="text-input" value="${settings.name || ''}" placeholder="Your name">
            </div>
            <div class="form-group">
              <label class="input-label">Roadmap Start Date</label>
              <input type="date" id="settingsStartDate" class="text-input" value="${settings.startDate || ''}">
              <div class="input-hint">Current month is calculated from this date</div>
            </div>
            <button class="btn btn-primary" id="saveSettingsBtn">Save Settings</button>
          </div>

          <div class="card settings-card">
            <h3 class="settings-section-title">Progress Summary</h3>
            <div class="settings-stat-list">
              <div class="settings-stat"><span>Overall Progress</span><strong>${stats.overallProgress}%</strong></div>
              <div class="settings-stat"><span>Topics Completed</span><strong>${stats.completedTasks} / ${stats.totalTasks}</strong></div>
              <div class="settings-stat"><span>Total Hours</span><strong>${stats.totalHours}h</strong></div>
              <div class="settings-stat"><span>Days Logged</span><strong>${Object.keys(data.dailyLogs).length}</strong></div>
              <div class="settings-stat"><span>Notes Written</span><strong>${data.researchNotes.length}</strong></div>
              <div class="settings-stat"><span>Last Updated</span><strong>${data.lastUpdated ? this.formatDate(new Date(data.lastUpdated)) : '—'}</strong></div>
            </div>
          </div>

          <div class="card settings-card">
            <h3 class="settings-section-title">Data Management</h3>
            <div class="settings-actions">
              <div class="settings-action-item">
                <div>
                  <div class="settings-action-title">Export Data</div>
                  <div class="settings-action-desc">Download all your progress as JSON</div>
                </div>
                <button class="btn btn-outline" id="exportDataBtn">Export</button>
              </div>
              <div class="settings-action-item">
                <div>
                  <div class="settings-action-title">Import Data</div>
                  <div class="settings-action-desc">Restore from a previously exported file</div>
                </div>
                <button class="btn btn-outline" id="importDataBtn">Import</button>
                <input type="file" id="importFileInput" accept=".json" style="display:none">
              </div>
            </div>
          </div>

          <div class="card settings-card danger-zone">
            <h3 class="settings-section-title danger-title">Danger Zone</h3>
            <div class="settings-action-item">
              <div>
                <div class="settings-action-title">Reset All Progress</div>
                <div class="settings-action-desc">This will permanently delete all your logs, notes, and task completions.</div>
              </div>
              <button class="btn btn-danger" id="resetDataBtn">Reset</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  /* ──────────────────────────────────────────────
     EVENT BINDING
  ────────────────────────────────────────────── */
  bindPageEvents(page) {
    switch (page) {
      case 'roadmap':   this.bindRoadmapEvents(); break;
      case 'daily':     this.bindDailyEvents(); break;
      case 'projects':  this.bindProjectEvents(); break;
      case 'research':  this.bindResearchEvents(); break;
      case 'resources': this.bindResourceEvents(); break;
      case 'settings':  this.bindSettingsEvents(); break;
    }
  },

  bindRoadmapEvents() {
    document.getElementById('monthTabs')?.addEventListener('click', e => {
      const tab = e.target.closest('.month-tab');
      if (!tab) return;
      document.querySelectorAll('.month-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const monthId = parseInt(tab.dataset.month);
      const data = Storage.load();
      document.getElementById('monthContent').innerHTML = this.renderMonthContent(monthId, data.completedTasks);
      this.bindCheckboxEvents();
    });
    this.bindCheckboxEvents();
  },

  bindNoteTabEvents() {
    document.querySelectorAll('.section-note').forEach(note => {
      note.querySelectorAll('.note-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const tabName = tab.dataset.tab;
          note.querySelectorAll('.note-tab').forEach(t => t.classList.remove('active'));
          note.querySelectorAll('.note-panel').forEach(p => p.classList.remove('active'));
          tab.classList.add('active');
          note.querySelector(`.note-panel[data-panel="${tabName}"]`)?.classList.add('active');
        });
      });
    });
  },

  bindCheckboxEvents() {
    this.bindNoteTabEvents();
    document.querySelectorAll('.task-checkbox').forEach(cb => {
      cb.addEventListener('change', e => {
        const taskId = e.target.dataset.taskId;
        const done = Storage.toggleTask(taskId);
        const label = e.target.closest('.task-item');
        if (label) label.classList.toggle('task-done', done);
        const checkmark = label?.querySelector('.task-checkmark');
        if (checkmark) {
          if (done) {
            checkmark.innerHTML = '<svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
          } else {
            checkmark.innerHTML = '';
          }
        }
        this.updateSidebarStats();
        this.refreshMonthProgress();
      });
    });
  },

  refreshMonthProgress() {
    const activeTab = document.querySelector('.month-tab.active');
    if (!activeTab) return;
    const monthId = parseInt(activeTab.dataset.month);
    const data = Storage.load();
    document.getElementById('monthContent').innerHTML = this.renderMonthContent(monthId, data.completedTasks);
    this.bindCheckboxEvents();
    const prog = this.getMonthProgress(monthId);
    activeTab.querySelector('.tab-prog').textContent = prog + '%';
  },

  bindDailyEvents() {
    const loadLog = (date) => {
      const log = Storage.getLog(date) || {};
      const lh = document.getElementById('learningHours');
      const rh = document.getElementById('researchHours');
      const ct = document.getElementById('codedToday');
      const lt = document.getElementById('learnedToday');
      const bt = document.getElementById('builtToday');
      const nt = document.getElementById('notesToday');
      if (lh) lh.value = log.learningHours || 0;
      if (rh) rh.value = log.researchHours || 0;
      if (ct) ct.checked = !!log.coded;
      if (lt) lt.value = log.learned || '';
      if (bt) bt.value = log.built || '';
      if (nt) nt.value = log.notes || '';
      updateMeters();
      const label = document.getElementById('currentDateLabel');
      if (label) label.textContent = this.formatDate(new Date(date + 'T12:00:00'));
    };

    const saveLog = () => {
      const date = document.getElementById('logDate').value;
      const log = {
        learningHours: parseFloat(document.getElementById('learningHours')?.value) || 0,
        researchHours: parseFloat(document.getElementById('researchHours')?.value) || 0,
        coded: document.getElementById('codedToday')?.checked || false,
        learned: document.getElementById('learnedToday')?.value || '',
        built: document.getElementById('builtToday')?.value || '',
        notes: document.getElementById('notesToday')?.value || ''
      };
      Storage.saveLog(date, log);
      this.updateSidebarStats();
      this.showToast('Log saved!', 'success');
      this.refreshLogTable();
    };

    const updateMeters = () => {
      const lh = parseFloat(document.getElementById('learningHours')?.value) || 0;
      const rh = parseFloat(document.getElementById('researchHours')?.value) || 0;
      const lm = document.getElementById('learningMeter');
      const rm = document.getElementById('researchMeter');
      if (lm) lm.style.width = Math.min(lh / 2.5 * 100, 100) + '%';
      if (rm) rm.style.width = Math.min(rh / 2.5 * 100, 100) + '%';
    };

    document.getElementById('saveLogBtn')?.addEventListener('click', saveLog);

    document.getElementById('logDate')?.addEventListener('change', e => {
      loadLog(e.target.value);
    });

    document.getElementById('prevDay')?.addEventListener('click', () => {
      const dateInput = document.getElementById('logDate');
      const d = new Date(dateInput.value + 'T12:00:00');
      d.setDate(d.getDate() - 1);
      dateInput.value = d.toISOString().split('T')[0];
      loadLog(dateInput.value);
    });

    document.getElementById('nextDay')?.addEventListener('click', () => {
      const dateInput = document.getElementById('logDate');
      const d = new Date(dateInput.value + 'T12:00:00');
      d.setDate(d.getDate() + 1);
      const today = new Date().toISOString().split('T')[0];
      if (d.toISOString().split('T')[0] <= today) {
        dateInput.value = d.toISOString().split('T')[0];
        loadLog(dateInput.value);
      }
    });

    document.querySelectorAll('.num-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const input = document.getElementById(target);
        if (!input) return;
        const step = 0.5;
        let val = parseFloat(input.value) || 0;
        if (btn.dataset.action === 'inc') val = Math.min(val + step, 12);
        else val = Math.max(val - step, 0);
        input.value = val;
        updateMeters();
      });
    });

    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const input = document.getElementById(target);
        if (input) { input.value = btn.dataset.val; updateMeters(); }
      });
    });

    ['learningHours', 'researchHours'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', updateMeters);
    });

    let autoSaveTimer;
    ['learnedToday', 'builtToday', 'notesToday', 'codedToday'].forEach(id => {
      document.getElementById(id)?.addEventListener('input', () => {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(saveLog, 1000);
      });
    });
    document.getElementById('codedToday')?.addEventListener('change', saveLog);

    updateMeters();
  },

  refreshLogTable() {
    const allLogs = Storage.getAllLogs();
    const today = new Date().toISOString().split('T')[0];
    const recentDates = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      recentDates.push(d.toISOString().split('T')[0]);
    }
    const tbody = document.getElementById('logTableBody');
    if (!tbody) return;
    const rows = recentDates.filter(d => allLogs[d]).map(d => {
      const log = allLogs[d];
      const total = (parseFloat(log.learningHours)||0) + (parseFloat(log.researchHours)||0);
      return `
        <tr class="log-row">
          <td class="log-date">${this.formatDate(new Date(d + 'T12:00:00'))}</td>
          <td><span class="log-hours-pill learning">${log.learningHours || 0}h</span></td>
          <td><span class="log-hours-pill building">${log.researchHours || 0}h</span></td>
          <td><strong>${Math.round(total * 10) / 10}h</strong></td>
          <td>${log.coded ? '✅' : '—'}</td>
          <td class="log-notes-cell">${log.learned ? log.learned.substring(0,40) + (log.learned.length > 40 ? '…' : '') : '—'}</td>
        </tr>
      `;
    });
    tbody.innerHTML = rows.join('') || '<tr><td colspan="6" class="empty-row">No logs yet.</td></tr>';
  },

  bindProjectEvents() {
    const saveProject = (projectId) => {
      const card = document.getElementById(`project-card-${projectId}`);
      if (!card) return;
      const data = {
        status: card.querySelector('.status-select')?.value || 'not-started',
        progress: parseInt(card.querySelector('.project-slider')?.value) || 0,
        notes: card.querySelector('[data-field="notes"]')?.value || '',
        github: card.querySelector('[data-field="github"]')?.value || '',
        demo: card.querySelector('[data-field="demo"]')?.value || ''
      };
      Storage.saveProjectData(projectId, data);
    };

    document.querySelectorAll('.project-slider').forEach(slider => {
      const pid = parseInt(slider.dataset.projectId);
      slider.addEventListener('input', e => {
        const card = document.getElementById(`project-card-${pid}`);
        const label = card?.querySelector('.project-prog-label');
        const num = card?.querySelector('.project-prog-num');
        const fill = card?.querySelector('.project-progress-fill');
        if (label) label.textContent = `Progress: ${e.target.value}%`;
        if (num) num.textContent = `${e.target.value}%`;
        if (fill) fill.style.width = `${e.target.value}%`;
        saveProject(pid);
      });
    });

    document.querySelectorAll('.status-select').forEach(sel => {
      sel.addEventListener('change', () => saveProject(parseInt(sel.dataset.projectId)));
    });

    document.querySelectorAll('.project-notes').forEach(ta => {
      let timer;
      ta.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => saveProject(parseInt(ta.dataset.projectId)), 800);
      });
    });

    document.querySelectorAll('.link-input').forEach(input => {
      input.addEventListener('blur', () => saveProject(parseInt(input.dataset.projectId)));
    });
  },

  bindResearchEvents() {
    const openNoteEditor = (note = null) => {
      const isEdit = !!note;
      document.getElementById('modalTitle').textContent = isEdit ? 'Edit Note' : 'New Research Note';
      document.getElementById('modalBody').innerHTML = `
        <div class="form-group">
          <label class="input-label">Title</label>
          <input type="text" id="noteTitle" class="text-input" placeholder="Note title" value="${note ? note.title : ''}">
        </div>
        <div class="form-group">
          <label class="input-label">Content</label>
          <textarea id="noteContent" class="textarea" rows="10" placeholder="Your research notes, insights, links...">${note ? note.content : ''}</textarea>
        </div>
        <div class="form-group">
          <label class="input-label">Tags (comma separated)</label>
          <input type="text" id="noteTags" class="text-input" placeholder="llm, rag, agents" value="${note ? (note.tags || '') : ''}">
        </div>
      `;
      document.getElementById('modalFooter').innerHTML = `
        <button class="btn btn-ghost" id="cancelNoteBtn">Cancel</button>
        <button class="btn btn-primary" id="saveNoteBtn">${isEdit ? 'Update Note' : 'Save Note'}</button>
      `;
      this.openModal();
      document.getElementById('cancelNoteBtn').addEventListener('click', () => this.closeModal());
      document.getElementById('saveNoteBtn').addEventListener('click', () => {
        const title = document.getElementById('noteTitle').value.trim();
        const content = document.getElementById('noteContent').value.trim();
        const tags = document.getElementById('noteTags').value.trim();
        if (!title && !content) { this.showToast('Please add a title or content', 'error'); return; }
        if (isEdit) {
          Storage.updateNote(note.id, { title, content, tags });
          this.showToast('Note updated!', 'success');
        } else {
          Storage.addNote({ title, content, tags });
          this.showToast('Note saved!', 'success');
        }
        this.closeModal();
        this.navigate('research');
      });
    };

    document.getElementById('addNoteBtn')?.addEventListener('click', () => openNoteEditor());
    document.getElementById('addNoteBtn2')?.addEventListener('click', () => openNoteEditor());

    document.getElementById('notesGrid')?.addEventListener('click', e => {
      const editBtn = e.target.closest('[data-edit-note]');
      const delBtn = e.target.closest('[data-delete-note]');
      if (editBtn) {
        const id = parseInt(editBtn.dataset.editNote);
        const data = Storage.load();
        const note = data.researchNotes.find(n => n.id === id);
        if (note) openNoteEditor(note);
      }
      if (delBtn) {
        const id = parseInt(delBtn.dataset.deleteNote);
        if (confirm('Delete this note?')) {
          Storage.deleteNote(id);
          this.showToast('Note deleted', 'success');
          this.navigate('research');
        }
      }
    });

    document.getElementById('noteSearch')?.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      const data = Storage.load();
      const filtered = data.researchNotes.filter(n =>
        (n.title || '').toLowerCase().includes(q) ||
        (n.content || '').toLowerCase().includes(q) ||
        (n.tags || '').toLowerCase().includes(q)
      );
      const grid = document.getElementById('notesGrid');
      if (grid) {
        grid.innerHTML = filtered.length > 0
          ? filtered.map(n => this.renderNoteCard(n)).join('')
          : '<div class="empty-state"><p>No notes match your search.</p></div>';
        this.bindResearchEvents();
      }
    });
  },

  bindResourceEvents() {
    document.getElementById('addResourceBtn')?.addEventListener('click', () => {
      document.getElementById('modalTitle').textContent = 'Add Resource';
      document.getElementById('modalBody').innerHTML = `
        <div class="form-group">
          <label class="input-label">Name</label>
          <input type="text" id="resourceName" class="text-input" placeholder="Resource name">
        </div>
        <div class="form-group">
          <label class="input-label">URL</label>
          <input type="url" id="resourceUrl" class="text-input" placeholder="https://...">
        </div>
        <div class="form-group">
          <label class="input-label">Description</label>
          <input type="text" id="resourceDesc" class="text-input" placeholder="What is this resource about?">
        </div>
      `;
      document.getElementById('modalFooter').innerHTML = `
        <button class="btn btn-ghost" id="cancelResourceBtn">Cancel</button>
        <button class="btn btn-primary" id="saveResourceBtn">Add Resource</button>
      `;
      this.openModal();
      document.getElementById('cancelResourceBtn').addEventListener('click', () => this.closeModal());
      document.getElementById('saveResourceBtn').addEventListener('click', () => {
        const name = document.getElementById('resourceName').value.trim();
        const url = document.getElementById('resourceUrl').value.trim();
        const desc = document.getElementById('resourceDesc').value.trim();
        if (!name || !url) { this.showToast('Name and URL are required', 'error'); return; }
        const d = Storage.load();
        d.customResources = d.customResources || [];
        d.customResources.push({ id: Date.now(), name, url, description: desc });
        Storage.save(d);
        this.closeModal();
        this.showToast('Resource added!', 'success');
        this.navigate('resources');
      });
    });

    document.querySelectorAll('[data-delete-resource]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.deleteResource);
        const d = Storage.load();
        d.customResources = (d.customResources || []).filter(r => r.id !== id);
        Storage.save(d);
        this.showToast('Resource removed', 'success');
        this.navigate('resources');
      });
    });
  },

  bindSettingsEvents() {
    document.getElementById('saveSettingsBtn')?.addEventListener('click', () => {
      const name = document.getElementById('settingsName').value.trim();
      const startDate = document.getElementById('settingsStartDate').value;
      Storage.saveSettings({ name, startDate });
      this.loadSettings();
      this.updateSidebarStats();
      this.showToast('Settings saved!', 'success');
    });

    document.getElementById('exportDataBtn')?.addEventListener('click', () => {
      const json = Storage.exportData();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai-roadmap-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('Data exported!', 'success');
    });

    document.getElementById('importDataBtn')?.addEventListener('click', () => {
      document.getElementById('importFileInput').click();
    });

    document.getElementById('importFileInput')?.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (Storage.importData(ev.target.result)) {
          this.showToast('Data imported successfully!', 'success');
          this.loadSettings();
          this.updateSidebarStats();
          this.navigate('dashboard');
        } else {
          this.showToast('Import failed — invalid file format', 'error');
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('resetDataBtn')?.addEventListener('click', () => {
      document.getElementById('modalTitle').textContent = 'Reset All Data';
      document.getElementById('modalBody').innerHTML = `
        <div class="warning-message">
          <div class="warning-icon">⚠️</div>
          <p>This will permanently delete <strong>all</strong> your progress, logs, notes, and settings.</p>
          <p>This action cannot be undone.</p>
          <p>Type <strong>RESET</strong> to confirm:</p>
          <input type="text" id="resetConfirmInput" class="text-input" placeholder="Type RESET to confirm">
        </div>
      `;
      document.getElementById('modalFooter').innerHTML = `
        <button class="btn btn-ghost" id="cancelResetBtn">Cancel</button>
        <button class="btn btn-danger" id="confirmResetBtn">Reset Everything</button>
      `;
      this.openModal();
      document.getElementById('cancelResetBtn').addEventListener('click', () => this.closeModal());
      document.getElementById('confirmResetBtn').addEventListener('click', () => {
        const val = document.getElementById('resetConfirmInput').value;
        if (val !== 'RESET') { this.showToast('Please type RESET to confirm', 'error'); return; }
        Storage.resetAll();
        this.closeModal();
        this.showToast('All data reset', 'success');
        this.loadSettings();
        this.updateSidebarStats();
        this.navigate('dashboard');
      });
    });
  },

  /* ──────────────────────────────────────────────
     MODAL
  ────────────────────────────────────────────── */
  setupModal() {
    document.getElementById('modalClose')?.addEventListener('click', () => this.closeModal());
    document.getElementById('modalOverlay')?.addEventListener('click', e => {
      if (e.target === document.getElementById('modalOverlay')) this.closeModal();
    });
  },

  openModal() {
    document.getElementById('modalOverlay').classList.add('open');
  },

  closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.getElementById('modalTitle').textContent = '';
    document.getElementById('modalBody').innerHTML = '';
    document.getElementById('modalFooter').innerHTML = '';
  },

  /* ──────────────────────────────────────────────
     TOAST
  ────────────────────────────────────────────── */
  showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  },

  /* ──────────────────────────────────────────────
     HELPERS
  ────────────────────────────────────────────── */
  getMonthProgress(monthId) {
    const month = ROADMAP_DATA.months.find(m => m.id === monthId);
    if (!month) return 0;
    const data = Storage.load();
    let total = 0, done = 0;
    month.sections.forEach(s => {
      total += s.topics.length;
      done += s.topics.filter(t => data.completedTasks.includes(t.id)).length;
    });
    return total > 0 ? Math.round(done / total * 100) : 0;
  },

  renderProgressBlocks(percent) {
    const total = 20;
    const filled = Math.round(percent / 100 * total);
    let blocks = '';
    for (let i = 0; i < total; i++) {
      blocks += `<span class="prog-block ${i < filled ? 'filled' : ''}"></span>`;
    }
    return blocks;
  },

  formatDate(d) {
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  },

  getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'morning';
    if (h < 17) return 'afternoon';
    return 'evening';
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
