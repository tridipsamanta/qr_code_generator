/**
 * QR History Panel
 * 
 * Side drawer showing previously generated QR codes
 * with re-use and download capabilities
 */

import { QRHistoryItem, formatTimestamp, removeFromHistory, clearHistory } from '@/lib/qr-history';
import { Download, RotateCcw, Trash2, X } from 'lucide-react';

interface QRHistoryProps {
  history: QRHistoryItem[];
  isOpen: boolean;
  onClose: () => void;
  onReuse: (item: QRHistoryItem) => void;
  onRefresh: () => void;
}

const QRHistory = ({ history, isOpen, onClose, onReuse, onRefresh }: QRHistoryProps) => {
  
  const handleDownload = (item: QRHistoryItem) => {
    const link = document.createElement('a');
    link.href = item.dataUrl;
    link.download = `${item.label || 'qrcode'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (id: string) => {
    removeFromHistory(id);
    onRefresh();
  };

  const handleClearAll = () => {
    clearHistory();
    onRefresh();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`history-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={`history-panel ${isOpen ? 'open' : ''}`}>
        <div className="history-header">
          <h3 className="history-title">History</h3>
          <div className="history-actions">
            {history.length > 0 && (
              <button 
                className="history-clear-btn"
                onClick={handleClearAll}
                title="Clear all"
              >
                <Trash2 size={16} />
              </button>
            )}
            <button className="history-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="history-list">
          {history.length === 0 ? (
            <div className="history-empty">
              <p>No QR codes yet</p>
              <span>Generated codes will appear here</span>
            </div>
          ) : (
            history.map((item) => (
              <div key={item.id} className="history-item">
                <div className="history-item-preview">
                  <img src={item.dataUrl} alt="QR Code" />
                </div>
                <div className="history-item-info">
                  <span className="history-item-label">
                    {item.label || item.type.toUpperCase()}
                  </span>
                  <span className="history-item-time">
                    {formatTimestamp(item.timestamp)}
                  </span>
                </div>
                <div className="history-item-actions">
                  <button 
                    className="history-action-btn"
                    onClick={() => onReuse(item)}
                    title="Re-use"
                  >
                    <RotateCcw size={14} />
                  </button>
                  <button 
                    className="history-action-btn"
                    onClick={() => handleDownload(item)}
                    title="Download"
                  >
                    <Download size={14} />
                  </button>
                  <button 
                    className="history-action-btn delete"
                    onClick={() => handleDelete(item.id)}
                    title="Delete"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default QRHistory;
