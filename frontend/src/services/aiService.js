import api from './api';

export const analyze = (resumeData) => api.post('/ai/analyze', resumeData);