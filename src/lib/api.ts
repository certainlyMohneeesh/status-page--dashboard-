import { Service, Incident, TeamMember } from '@/types';

const API_BASE = '/api';

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`);
    if (!response.ok) throw new Error('API Error');
    return response.json();
  },

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API Error');
    return response.json();
  },

  async put<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API Error');
    return response.json();
  },

  async delete(endpoint: string): Promise<void> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('API Error');
  },
};