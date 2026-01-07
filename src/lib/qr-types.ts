/**
 * QR Code Type System
 * 
 * Supports multiple QR content types:
 * - URL: Website links
 * - Text: Plain text content
 * - WiFi: Network credentials
 * - vCard: Contact information
 * - Email: Email address with optional subject
 * - Phone: Phone number for calling
 */

export type QRType = 'url' | 'text' | 'wifi' | 'vcard' | 'email' | 'phone';

export interface QRTypeConfig {
  id: QRType;
  name: string;
  icon: string;
  description: string;
}

export const qrTypes: QRTypeConfig[] = [
  { id: 'url', name: 'URL', icon: '🔗', description: 'Website link' },
  { id: 'text', name: 'Text', icon: '📝', description: 'Plain text' },
  { id: 'wifi', name: 'WiFi', icon: '📶', description: 'Network credentials' },
  { id: 'vcard', name: 'Contact', icon: '👤', description: 'vCard info' },
  { id: 'email', name: 'Email', icon: '✉️', description: 'Email address' },
  { id: 'phone', name: 'Phone', icon: '📞', description: 'Phone number' },
];

export interface WiFiData {
  ssid: string;
  password: string;
  security: 'WPA' | 'WEP' | 'nopass';
}

export interface VCardData {
  name: string;
  phone: string;
  email: string;
  organization: string;
}

export interface EmailData {
  address: string;
  subject: string;
}

/**
 * Generate QR content string based on type and data
 */
export const generateQRContent = (
  type: QRType,
  data: {
    url?: string;
    text?: string;
    wifi?: WiFiData;
    vcard?: VCardData;
    email?: EmailData;
    phone?: string;
  }
): string => {
  switch (type) {
    case 'url':
      return data.url || '';
    
    case 'text':
      return data.text || '';
    
    case 'wifi':
      if (!data.wifi?.ssid) return '';
      const { ssid, password, security } = data.wifi;
      return `WIFI:T:${security};S:${ssid};P:${password};;`;
    
    case 'vcard':
      if (!data.vcard?.name) return '';
      const v = data.vcard;
      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${v.name}`,
        v.phone ? `TEL:${v.phone}` : '',
        v.email ? `EMAIL:${v.email}` : '',
        v.organization ? `ORG:${v.organization}` : '',
        'END:VCARD'
      ].filter(Boolean).join('\n');
    
    case 'email':
      if (!data.email?.address) return '';
      const subject = data.email.subject ? `?subject=${encodeURIComponent(data.email.subject)}` : '';
      return `mailto:${data.email.address}${subject}`;
    
    case 'phone':
      if (!data.phone) return '';
      return `tel:${data.phone}`;
    
    default:
      return '';
  }
};
