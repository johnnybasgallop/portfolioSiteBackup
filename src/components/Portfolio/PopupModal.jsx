import React from 'react';

import './PopupModal.css'; 

const PopupModal = ({ onClose, title, imageUrl, technologies, description, githubLink }) => {
  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal">
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <img src={imageUrl} alt="Project" className="popup-image" />
        <div className="popup-content">
          <p>{description}</p>
          <div className="popup-technologies">
            <h3>Technologies Used:</h3>
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="github-btn">View on GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupModal