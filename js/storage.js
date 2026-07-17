const Storage = {
  KEY: 'ai_roadmap_v2',

  getDefault() {
    return {
      completedTasks: [],
      dailyLogs: {},
      projects: [],
      researchNotes: [],
      customResources: [],
      settings: {
        name: 'AI Engineer',
        startDate: new Date().toISOString().split('T')[0],
        theme: 'dark'
      },
      lastUpdated: new Date().toISOString()
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return this.getDefault();
      const parsed = JSON.parse(raw);
      const defaults = this.getDefault();
      return {
        ...defaults,
        ...parsed,
        settings: { ...defaults.settings, ...(parsed.settings || {}) }
      };
    } catch (e) {
      console.warn('Storage load failed, using defaults:', e);
      return this.getDefault();
    }
  },

  save(data) {
    try {
      data.lastUpdated = new Date().toISOString();
      localStorage.setItem(this.KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Storage save failed:', e);
      return false;
    }
  },

  toggleTask(taskId) {
    const data = this.load();
    const idx = data.completedTasks.indexOf(taskId);
    if (idx === -1) {
      data.completedTasks.push(taskId);
    } else {
      data.completedTasks.splice(idx, 1);
    }
    this.save(data);
    return data.completedTasks.includes(taskId);
  },

  isTaskCompleted(taskId) {
    const data = this.load();
    return data.completedTasks.includes(taskId);
  },

  saveLog(date, log) {
    const data = this.load();
    data.dailyLogs[date] = { ...data.dailyLogs[date], ...log };
    this.save(data);
  },

  getLog(date) {
    const data = this.load();
    return data.dailyLogs[date] || null;
  },

  getAllLogs() {
    const data = this.load();
    return data.dailyLogs;
  },

  saveProjectData(projectId, projectData) {
    const data = this.load();
    const idx = data.projects.findIndex(p => p.id === projectId);
    if (idx === -1) {
      data.projects.push({ id: projectId, ...projectData });
    } else {
      data.projects[idx] = { ...data.projects[idx], ...projectData };
    }
    this.save(data);
  },

  getProjectData(projectId) {
    const data = this.load();
    return data.projects.find(p => p.id === projectId) || null;
  },

  addNote(note) {
    const data = this.load();
    const newNote = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...note
    };
    data.researchNotes.unshift(newNote);
    this.save(data);
    return newNote;
  },

  updateNote(id, updates) {
    const data = this.load();
    const idx = data.researchNotes.findIndex(n => n.id === id);
    if (idx !== -1) {
      data.researchNotes[idx] = {
        ...data.researchNotes[idx],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      this.save(data);
      return data.researchNotes[idx];
    }
    return null;
  },

  deleteNote(id) {
    const data = this.load();
    data.researchNotes = data.researchNotes.filter(n => n.id !== id);
    this.save(data);
  },

  saveSettings(settings) {
    const data = this.load();
    data.settings = { ...data.settings, ...settings };
    this.save(data);
    return data.settings;
  },

  exportData() {
    return JSON.stringify(this.load(), null, 2);
  },

  importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.settings) throw new Error('Invalid data structure');
      this.save(parsed);
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  },

  resetAll() {
    localStorage.removeItem(this.KEY);
    return this.getDefault();
  },

  getStats() {
    const data = this.load();
    const logs = Object.values(data.dailyLogs);
    const totalLearningHours = logs.reduce((sum, l) => sum + (parseFloat(l.learningHours) || 0), 0);
    const totalResearchHours = logs.reduce((sum, l) => sum + (parseFloat(l.researchHours) || 0), 0);
    const codingDays = logs.filter(l => l.coded).length;
    const completedProjects = data.projects.filter(p => p.status === 'completed').length;

    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      const log = data.dailyLogs[key];
      if (log && (parseFloat(log.learningHours) > 0 || parseFloat(log.researchHours) > 0)) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }

    let totalTasks = 0;
    ROADMAP_DATA.months.forEach(m => m.sections.forEach(s => { totalTasks += s.topics.length; }));
    const completedTasks = data.completedTasks.length;
    const overallProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const currentMonth = (() => {
      const startDate = new Date(data.settings.startDate);
      const now = new Date();
      const diffMs = now - startDate;
      const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30));
      return Math.min(Math.max(diffMonths + 1, 1), 6);
    })();

    return {
      totalLearningHours: Math.round(totalLearningHours * 10) / 10,
      totalResearchHours: Math.round(totalResearchHours * 10) / 10,
      totalHours: Math.round((totalLearningHours + totalResearchHours) * 10) / 10,
      codingDays,
      completedProjects,
      streak,
      overallProgress,
      completedTasks,
      totalTasks,
      currentMonth
    };
  }
};
