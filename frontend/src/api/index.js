import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

// months
export const getMonths = () => api.get('/months')
export const getMonthFull = (id) => api.get(`/months/${id}/full`)
export const updateMonth = (id, data) => api.put(`/months/${id}`, data)

// progress
export const getProgress = () => api.get('/progress')
export const getProgressStats = () => api.get('/progress/stats')
export const markComplete = (item_id, item_type) => api.post('/progress', { item_id, item_type })
export const markIncomplete = (item_id) => api.delete(`/progress/${item_id}`)

// tools
export const getTools = () => api.get('/tools')
export const markToolUsed = (id) => api.post(`/tools/${id}/used`)
export const markToolUnused = (id) => api.delete(`/tools/${id}/used`)

// settings
export const getSettings = () => api.get('/settings')
export const updateSettings = (data) => api.put('/settings', data)
