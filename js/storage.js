const Storage = {
  KEY: 'ai_roadmap_v2',

  getDefault() {
    return {
      completedTopics: [],
      settings: {
        name: 'AI Engineer',
        startDate: new Date().toISOString().split('T')[0]
      }
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return this.getDefault();
      const parsed = JSON.parse(raw);
      const defaults = this.getDefault();
      // Migrate old completedTasks field
      if (parsed.completedTasks && !parsed.completedTopics) {
        parsed.completedTopics = parsed.completedTasks;
      }
      return {
        ...defaults,
        ...parsed,
        settings: { ...defaults.settings, ...(parsed.settings || {}) }
      };
    } catch (e) {
      return this.getDefault();
    }
  },

  save(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  },

  toggleTopic(topicId) {
    const data = this.load();
    const idx = data.completedTopics.indexOf(topicId);
    if (idx === -1) {
      data.completedTopics.push(topicId);
    } else {
      data.completedTopics.splice(idx, 1);
    }
    this.save(data);
    return data.completedTopics.includes(topicId);
  },

  isTopicDone(topicId) {
    return this.load().completedTopics.includes(topicId);
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
      if (!parsed.settings) throw new Error('Invalid data');
      this.save(parsed);
      return true;
    } catch (e) {
      return false;
    }
  },

  resetAll() {
    localStorage.removeItem(this.KEY);
  },

  getProgress() {
    const data = this.load();
    let totalTopics = 0;
    ROADMAP_DATA.months.forEach(m => m.sections.forEach(s => { totalTopics += s.topics.length; }));
    const completed = data.completedTopics.length;
    const overall = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;

    const startDate = new Date(data.settings.startDate);
    const now = new Date();
    const diffDays = Math.max(0, Math.floor((now - startDate) / (1000 * 60 * 60 * 24)));
    const currentMonth = Math.min(Math.max(Math.floor(diffDays / 30) + 1, 1), 6);
    const currentWeek = Math.min(Math.max(Math.floor((diffDays % 30) / 7) + 1, 1), 4);

    return { completed, totalTopics, overall, currentMonth, currentWeek };
  },

  getMonthProgress(monthId) {
    const data = this.load();
    const month = ROADMAP_DATA.months.find(m => m.id === monthId);
    if (!month) return 0;
    let total = 0, done = 0;
    month.sections.forEach(s => {
      s.topics.forEach(t => {
        total++;
        if (data.completedTopics.includes(t.id)) done++;
      });
    });
    return total > 0 ? Math.round((done / total) * 100) : 0;
  }
};
