import api from './api';

export const getAll = () => api.get('/resumes');
export const getById = (id) => api.get(`/resumes/${id}`);
export const create = (data) => api.post('/resumes', data);
export const update = (id, data) => api.put(`/resumes/${id}`, data);
export const deleteResume = (id) => api.delete(`/resumes/${id}`);