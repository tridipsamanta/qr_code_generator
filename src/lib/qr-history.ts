/**
 * QR History Management
 * 
 * Stores generated QR codes in localStorage with:
 * - Type, content, color, theme, timestamp
 * - Thumbnail data URL for quick preview
 */

import { QRType } from './qr-types';

export interface QRHistoryItem {
  id: string;
  type: QRType;
  content: string;
  label: string;
  color: string;
  theme: string;
  timestamp: number;
  dataUrl: string;
}

const STORAGE_KEY = 'qr-history';
const MAX_ITEMS = 20;

export const loadHistory = (): QRHistoryItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveToHistory = (item: Omit<QRHistoryItem, 'id' | 'timestamp'>): QRHistoryItem => {
  const history = loadHistory();
  
  const newItem: QRHistoryItem = {
    ...item,
    id: `qr-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
  };
  
  // Add to beginning, limit size
  const updated = [newItem, ...history].slice(0, MAX_ITEMS);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  
  return newItem;
};

export const removeFromHistory = (id: string): void => {
  const history = loadHistory();
  const updated = history.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const clearHistory = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const formatTimestamp = (ts: number): string => {
  const date = new Date(ts);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  
  return date.toLocaleDateString();
};
