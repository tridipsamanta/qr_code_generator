/**
 * Theme Switcher Component
 * 
 * Horizontal scrollable theme selector with:
 * - Visual preview of each theme
 * - Neon glow on active theme
 * - Smooth transitions
 */

import { themes, Theme } from '@/lib/themes';

interface ThemeSwitcherProps {
  activeTheme: string;
  onThemeChange: (themeId: string) => void;
}

const ThemeSwitcher = ({ activeTheme, onThemeChange }: ThemeSwitcherProps) => {
  return (
    <div className="theme-switcher-container">
      <span className="theme-label">Theme</span>
      <div className="theme-pills">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`theme-pill ${activeTheme === theme.id ? 'active' : ''}`}
            style={{
              '--pill-accent': `hsl(${theme.accent})`,
              '--pill-bg': `hsl(${theme.surface})`,
            } as React.CSSProperties}
            title={theme.name}
          >
            <span className="theme-icon">{theme.icon}</span>
            <span className="theme-name">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
