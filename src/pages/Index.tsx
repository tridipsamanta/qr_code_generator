/**
 * Futuristic QR Code Generator
 * 
 * Features:
 * - 8 built-in themes with neon glow effects
 * - 6 QR content types (URL, Text, WiFi, vCard, Email, Phone)
 * - History with localStorage persistence
 * - Real-time QR generation
 * - Download as PNG
 */

import { useState, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import { Download, History, Zap } from "lucide-react";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import QRTypeSelector from "@/components/QRTypeSelector";
import QRInputForm from "@/components/QRInputForm";
import QRHistory from "@/components/QRHistory";

import { themes, getTheme, saveTheme, loadTheme, getSafeQRColor, Theme } from "@/lib/themes";
import { QRType, WiFiData, VCardData, EmailData, generateQRContent } from "@/lib/qr-types";
import { QRHistoryItem, loadHistory, saveToHistory } from "@/lib/qr-history";

const Index = () => {
  // Theme state
  const [activeTheme, setActiveTheme] = useState<string>(loadTheme());
  const [theme, setTheme] = useState<Theme>(getTheme(activeTheme));

  // QR type and content state
  const [qrType, setQrType] = useState<QRType>('url');
  const [label, setLabel] = useState("");
  const [qrColor, setQrColor] = useState(theme.qrDefault);

  // Type-specific data
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [wifi, setWifi] = useState<WiFiData>({ ssid: '', password: '', security: 'WPA' });
  const [vcard, setVcard] = useState<VCardData>({ name: '', phone: '', email: '', organization: '' });
  const [email, setEmail] = useState<EmailData>({ address: '', subject: '' });
  const [phone, setPhone] = useState("");

  // QR output
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // History
  const [history, setHistory] = useState<QRHistoryItem[]>([]);
  const [historyOpen, setHistoryOpen] = useState(false);

  // Load history on mount
  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  // Apply theme CSS variables
  useEffect(() => {
    const t = getTheme(activeTheme);
    setTheme(t);
    saveTheme(activeTheme);
    setQrColor(t.qrDefault);

    const root = document.documentElement;
    root.style.setProperty('--background', t.background);
    root.style.setProperty('--background-gradient', t.backgroundGradient);
    root.style.setProperty('--surface', t.surface);
    root.style.setProperty('--surface-glow', t.surfaceGlow);
    root.style.setProperty('--foreground', t.text);
    root.style.setProperty('--muted-foreground', t.textMuted);
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--accent-glow', t.accentGlow);
    root.style.setProperty('--border', t.border);
  }, [activeTheme]);

  // Generate QR content string
  const getQRContent = useCallback(() => {
    return generateQRContent(qrType, { url, text, wifi, vcard, email, phone });
  }, [qrType, url, text, wifi, vcard, email, phone]);

  // Generate QR code when content or color changes
  useEffect(() => {
    const content = getQRContent();
    
    if (!content.trim()) {
      setQrDataUrl("");
      return;
    }

    setIsUpdating(true);
    
    // Ensure QR color has sufficient contrast against white preview frame
    const safeColor = getSafeQRColor(qrColor, theme);
    
    QRCode.toDataURL(
      content,
      {
        width: 320,
        margin: 2,
        color: {
          dark: safeColor,
          light: "#FFFFFF",
        },
        errorCorrectionLevel: "M",
      },
      (err, dataUrl) => {
        setIsUpdating(false);
        if (!err && dataUrl) {
          setQrDataUrl(dataUrl);
        }
      }
    );
  }, [getQRContent, qrColor, theme]);

  // Download QR code
  const handleDownload = () => {
    if (!qrDataUrl) return;

    // Save to history
    const content = getQRContent();
    if (content) {
      saveToHistory({
        type: qrType,
        content,
        label: label || qrType.toUpperCase(),
        color: qrColor,
        theme: activeTheme,
        dataUrl: qrDataUrl,
      });
      setHistory(loadHistory());
    }

    // Trigger download
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `${label || 'qrcode'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Re-use history item
  const handleReuseHistory = (item: QRHistoryItem) => {
    setQrType(item.type);
    setLabel(item.label);
    setQrColor(item.color);
    setActiveTheme(item.theme);
    
    // Parse content back to appropriate field
    switch (item.type) {
      case 'url':
        setUrl(item.content);
        break;
      case 'text':
        setText(item.content);
        break;
      case 'phone':
        setPhone(item.content.replace('tel:', ''));
        break;
      case 'email':
        const emailMatch = item.content.match(/mailto:([^?]+)/);
        if (emailMatch) setEmail({ ...email, address: emailMatch[1] });
        break;
    }
    
    setHistoryOpen(false);
  };

  return (
    <div className="futuristic-canvas">
      <div className="main-content">
        {/* Header */}
        <header className="futuristic-header">
          <h1 className="futuristic-title">
            <span>QR</span> Generator
          </h1>
          <p className="futuristic-subtitle">Create • Customize • Download</p>
        </header>

        {/* Theme Switcher */}
        <ThemeSwitcher 
          activeTheme={activeTheme} 
          onThemeChange={setActiveTheme} 
        />

        {/* Main Layout */}
        <div className="qr-layout">
          {/* Control Panel */}
          <div className="control-panel">
            <div className="control-panel-header">
              <span className="control-panel-title">Control Panel</span>
              <Zap size={16} style={{ color: `hsl(var(--accent))` }} />
            </div>

            {/* Type Selector */}
            <QRTypeSelector 
              activeType={qrType} 
              onTypeChange={setQrType} 
            />

            {/* Dynamic Input Form */}
            <QRInputForm
              type={qrType}
              url={url}
              setUrl={setUrl}
              text={text}
              setText={setText}
              wifi={wifi}
              setWifi={setWifi}
              vcard={vcard}
              setVcard={setVcard}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            />

            {/* Color and Label Row */}
            <div className="color-label-row">
              <div className="input-group">
                <label className="input-label">File Label</label>
                <input
                  type="text"
                  className="futuristic-input"
                  placeholder="my-qr-code"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label className="input-label">Color</label>
                <div className="color-picker-futuristic">
                  <div className="color-input-wrapper">
                    <input
                      type="color"
                      value={qrColor}
                      onChange={(e) => setQrColor(e.target.value)}
                    />
                  </div>
                  <span className="color-hex">{qrColor.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className="btn-futuristic btn-primary-glow"
                onClick={handleDownload}
                disabled={!qrDataUrl}
              >
                <Download size={18} />
                Download
              </button>
            </div>
          </div>

          {/* QR Hero Preview */}
          <div className="qr-hero-section">
            <div className="qr-hero-container">
              <div className="qr-hero-label">
                <h3>QR Preview</h3>
              </div>
              <div className="qr-preview-frame">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="Generated QR Code"
                    className={`animate-fade-in ${isUpdating ? 'updating' : ''}`}
                  />
                ) : (
                  <div className="qr-empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    <p>Enter content to generate QR</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="futuristic-footer">
          <p>All processing happens in your browser • 100% Private</p>
        </footer>
      </div>

      {/* History Toggle Button */}
      <button 
        className="history-toggle-btn"
        onClick={() => setHistoryOpen(true)}
        title="View History"
      >
        <History size={24} />
        {history.length > 0 && (
          <span className="history-badge">{history.length}</span>
        )}
      </button>

      {/* History Panel */}
      <QRHistory
        history={history}
        isOpen={historyOpen}
        onClose={() => setHistoryOpen(false)}
        onReuse={handleReuseHistory}
        onRefresh={() => setHistory(loadHistory())}
      />
    </div>
  );
};

export default Index;
