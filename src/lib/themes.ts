/**
 * Theme System for Futuristic QR Generator
 * 
 * Each theme defines:
 * - Background gradient/style
 * - Primary accent color (neon glow)
 * - Default QR color
 * - Surface colors for panels
 */

export interface Theme {
  id: string;
  name: string;
  icon: string;
  // CSS custom properties
  background: string;
  backgroundGradient: string;
  surface: string;
  surfaceGlow: string;
  text: string;
  textMuted: string;
  accent: string;
  accentGlow: string;
  qrDefault: string;
  border: string;
  isDark: boolean;
}

export const themes: Theme[] = [
  {
    id: 'neon-blue',
    name: 'Neon Blue',
    icon: '💎',
    background: '220 25% 8%',
    backgroundGradient: 'radial-gradient(ellipse at 20% 30%, hsl(210 80% 20% / 0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, hsl(200 90% 25% / 0.3) 0%, transparent 50%)',
    surface: '220 30% 12%',
    surfaceGlow: '0 0 40px hsl(200 90% 50% / 0.15)',
    text: '200 20% 95%',
    textMuted: '210 15% 55%',
    accent: '200 100% 55%',
    accentGlow: '0 0 20px hsl(200 100% 55% / 0.5)',
    qrDefault: '#00b4ff',
    border: '210 30% 20%',
    isDark: true,
  },
  {
    id: 'cyber-purple',
    name: 'Cyber Purple',
    icon: '🔮',
    background: '270 30% 7%',
    backgroundGradient: 'radial-gradient(ellipse at 30% 20%, hsl(280 80% 25% / 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(300 70% 20% / 0.3) 0%, transparent 50%)',
    surface: '270 35% 12%',
    surfaceGlow: '0 0 40px hsl(280 90% 50% / 0.15)',
    text: '280 20% 95%',
    textMuted: '270 15% 55%',
    accent: '280 100% 65%',
    accentGlow: '0 0 20px hsl(280 100% 65% / 0.5)',
    qrDefault: '#bf5af2',
    border: '280 30% 22%',
    isDark: true,
  },
  {
    id: 'matrix-green',
    name: 'Matrix Green',
    icon: '🌿',
    background: '150 40% 5%',
    backgroundGradient: 'radial-gradient(ellipse at 50% 0%, hsl(140 80% 20% / 0.3) 0%, transparent 50%), linear-gradient(180deg, hsl(150 40% 5%) 0%, hsl(160 50% 3%) 100%)',
    surface: '150 40% 10%',
    surfaceGlow: '0 0 40px hsl(140 100% 45% / 0.12)',
    text: '140 30% 90%',
    textMuted: '150 20% 50%',
    accent: '140 100% 45%',
    accentGlow: '0 0 20px hsl(140 100% 45% / 0.5)',
    qrDefault: '#00ff7f',
    border: '150 35% 18%',
    isDark: true,
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    icon: '🌅',
    background: '15 30% 8%',
    backgroundGradient: 'radial-gradient(ellipse at 0% 100%, hsl(30 90% 30% / 0.4) 0%, transparent 50%), radial-gradient(ellipse at 100% 0%, hsl(350 80% 25% / 0.3) 0%, transparent 50%)',
    surface: '20 35% 12%',
    surfaceGlow: '0 0 40px hsl(25 100% 50% / 0.12)',
    text: '30 30% 95%',
    textMuted: '25 20% 55%',
    accent: '25 100% 55%',
    accentGlow: '0 0 20px hsl(25 100% 55% / 0.5)',
    qrDefault: '#ff9500',
    border: '25 35% 20%',
    isDark: true,
  },
  {
    id: 'midnight-black',
    name: 'Midnight Black',
    icon: '🌑',
    background: '0 0% 5%',
    backgroundGradient: 'radial-gradient(ellipse at 50% 50%, hsl(0 0% 10% / 0.5) 0%, transparent 70%)',
    surface: '0 0% 9%',
    surfaceGlow: '0 0 40px hsl(0 0% 100% / 0.05)',
    text: '0 0% 95%',
    textMuted: '0 0% 50%',
    accent: '0 0% 80%',
    accentGlow: '0 0 15px hsl(0 0% 100% / 0.3)',
    qrDefault: '#000000',
    border: '0 0% 18%',
    isDark: true,
  },
  {
    id: 'arctic-white',
    name: 'Arctic White',
    icon: '❄️',
    background: '200 30% 98%',
    backgroundGradient: 'radial-gradient(ellipse at 0% 0%, hsl(200 60% 90% / 0.5) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, hsl(210 50% 92% / 0.4) 0%, transparent 50%)',
    surface: '0 0% 100%',
    surfaceGlow: '0 4px 30px hsl(200 50% 50% / 0.1)',
    text: '210 30% 15%',
    textMuted: '210 15% 50%',
    accent: '200 90% 50%',
    accentGlow: '0 0 20px hsl(200 90% 50% / 0.3)',
    qrDefault: '#0066cc',
    border: '200 30% 88%',
    isDark: false,
  },
  {
    id: 'retro-future',
    name: 'Retro Future',
    icon: '🎮',
    background: '300 25% 8%',
    backgroundGradient: 'linear-gradient(135deg, hsl(320 40% 12%) 0%, hsl(260 40% 8%) 50%, hsl(200 50% 10%) 100%)',
    surface: '290 30% 13%',
    surfaceGlow: '0 0 40px hsl(320 80% 50% / 0.12)',
    text: '300 20% 95%',
    textMuted: '290 15% 55%',
    accent: '320 100% 65%',
    accentGlow: '0 0 20px hsl(320 100% 65% / 0.5)',
    qrDefault: '#ff69b4',
    border: '300 30% 22%',
    isDark: true,
  },
  {
    id: 'ocean-deep',
    name: 'Ocean Deep',
    icon: '🌊',
    background: '195 50% 8%',
    backgroundGradient: 'radial-gradient(ellipse at 50% 100%, hsl(180 60% 20% / 0.4) 0%, transparent 60%), linear-gradient(180deg, hsl(210 50% 10%) 0%, hsl(190 60% 6%) 100%)',
    surface: '195 45% 12%',
    surfaceGlow: '0 0 40px hsl(180 80% 45% / 0.12)',
    text: '180 25% 95%',
    textMuted: '190 20% 50%',
    accent: '175 90% 50%',
    accentGlow: '0 0 20px hsl(175 90% 50% / 0.5)',
    qrDefault: '#00d4aa',
    border: '190 40% 20%',
    isDark: true,
  },
];

export const getTheme = (id: string): Theme => {
  return themes.find(t => t.id === id) || themes[0];
};

export const saveTheme = (id: string) => {
  localStorage.setItem('qr-theme', id);
};

export const loadTheme = (): string => {
  return localStorage.getItem('qr-theme') || 'neon-blue';
};

/**
 * Ensures QR code color has sufficient contrast against white preview frame
 * QR preview frame background is always white (#FFFFFF)
 * This function validates or adjusts user-selected colors for visibility
 */
export const getSafeQRColor = (userColor: string, theme: Theme): string => {
  // Calculate perceived brightness of the color
  // Formula: (R * 299 + G * 587 + B * 114) / 1000
  const hex = userColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // If color is too light (brightness > 200), use theme's default QR color
  // This ensures QR code remains visible against white background
  // Note: Threshold is 200 to allow slightly lighter colors while blocking near-white
  if (brightness > 200) {
    return theme.qrDefault;
  }
  
  // Otherwise, user's color is dark enough and has good contrast
  return userColor;
};

