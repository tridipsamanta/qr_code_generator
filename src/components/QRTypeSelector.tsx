/**
 * QR Type Selector Component
 * 
 * Tab-style selector for different QR content types
 * with icons and smooth active state transitions
 */

import { qrTypes, QRType } from '@/lib/qr-types';

interface QRTypeSelectorProps {
  activeType: QRType;
  onTypeChange: (type: QRType) => void;
}

const QRTypeSelector = ({ activeType, onTypeChange }: QRTypeSelectorProps) => {
  return (
    <div className="qr-type-selector">
      {qrTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onTypeChange(type.id)}
          className={`qr-type-tab ${activeType === type.id ? 'active' : ''}`}
          title={type.description}
        >
          <span className="qr-type-icon">{type.icon}</span>
          <span className="qr-type-name">{type.name}</span>
        </button>
      ))}
    </div>
  );
};

export default QRTypeSelector;
