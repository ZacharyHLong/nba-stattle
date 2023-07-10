import React from 'react';

function WinModal({ show, children, onClose }) {
    if (!show) {
      return null;
    }

    return (
      <div className="modal" id="modal">
        <div className="modal-content">
          {children}
          <button onClick={onClose} className="submit-button">Next Matchup</button>
        </div>
      </div>      
    );
}

export default WinModal;