/**
 * Dynamic QR Input Form
 * 
 * Renders different input fields based on selected QR type
 * with futuristic styling and smooth transitions
 */

import { QRType, WiFiData, VCardData, EmailData } from '@/lib/qr-types';

interface QRInputFormProps {
  type: QRType;
  url: string;
  setUrl: (v: string) => void;
  text: string;
  setText: (v: string) => void;
  wifi: WiFiData;
  setWifi: (v: WiFiData) => void;
  vcard: VCardData;
  setVcard: (v: VCardData) => void;
  email: EmailData;
  setEmail: (v: EmailData) => void;
  phone: string;
  setPhone: (v: string) => void;
}

const QRInputForm = ({
  type, url, setUrl, text, setText,
  wifi, setWifi, vcard, setVcard, email, setEmail, phone, setPhone
}: QRInputFormProps) => {
  
  const renderURLInputs = () => (
    <div className="input-group">
      <label className="input-label">Website URL</label>
      <input
        type="url"
        className="futuristic-input"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );

  const renderTextInputs = () => (
    <div className="input-group">
      <label className="input-label">Text Content</label>
      <textarea
        className="futuristic-input futuristic-textarea"
        placeholder="Enter any text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
      />
    </div>
  );

  const renderWiFiInputs = () => (
    <>
      <div className="input-group">
        <label className="input-label">Network Name (SSID)</label>
        <input
          type="text"
          className="futuristic-input"
          placeholder="MyWiFi"
          value={wifi.ssid}
          onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Password</label>
        <input
          type="password"
          className="futuristic-input"
          placeholder="••••••••"
          value={wifi.password}
          onChange={(e) => setWifi({ ...wifi, password: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Security</label>
        <select
          className="futuristic-input futuristic-select"
          value={wifi.security}
          onChange={(e) => setWifi({ ...wifi, security: e.target.value as WiFiData['security'] })}
        >
          <option value="WPA">WPA/WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">No Password</option>
        </select>
      </div>
    </>
  );

  const renderVCardInputs = () => (
    <>
      <div className="input-group">
        <label className="input-label">Full Name</label>
        <input
          type="text"
          className="futuristic-input"
          placeholder="John Doe"
          value={vcard.name}
          onChange={(e) => setVcard({ ...vcard, name: e.target.value })}
        />
      </div>
      <div className="input-row">
        <div className="input-group">
          <label className="input-label">Phone</label>
          <input
            type="tel"
            className="futuristic-input"
            placeholder="+1 234 567 890"
            value={vcard.phone}
            onChange={(e) => setVcard({ ...vcard, phone: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label className="input-label">Email</label>
          <input
            type="email"
            className="futuristic-input"
            placeholder="john@example.com"
            value={vcard.email}
            onChange={(e) => setVcard({ ...vcard, email: e.target.value })}
          />
        </div>
      </div>
      <div className="input-group">
        <label className="input-label">Organization</label>
        <input
          type="text"
          className="futuristic-input"
          placeholder="Company Inc."
          value={vcard.organization}
          onChange={(e) => setVcard({ ...vcard, organization: e.target.value })}
        />
      </div>
    </>
  );

  const renderEmailInputs = () => (
    <>
      <div className="input-group">
        <label className="input-label">Email Address</label>
        <input
          type="email"
          className="futuristic-input"
          placeholder="contact@example.com"
          value={email.address}
          onChange={(e) => setEmail({ ...email, address: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label className="input-label">Subject (optional)</label>
        <input
          type="text"
          className="futuristic-input"
          placeholder="Hello!"
          value={email.subject}
          onChange={(e) => setEmail({ ...email, subject: e.target.value })}
        />
      </div>
    </>
  );

  const renderPhoneInputs = () => (
    <div className="input-group">
      <label className="input-label">Phone Number</label>
      <input
        type="tel"
        className="futuristic-input"
        placeholder="+1 234 567 890"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );

  const renderInputs = () => {
    switch (type) {
      case 'url': return renderURLInputs();
      case 'text': return renderTextInputs();
      case 'wifi': return renderWiFiInputs();
      case 'vcard': return renderVCardInputs();
      case 'email': return renderEmailInputs();
      case 'phone': return renderPhoneInputs();
      default: return renderURLInputs();
    }
  };

  return (
    <div className="qr-input-form">
      {renderInputs()}
    </div>
  );
};

export default QRInputForm;
