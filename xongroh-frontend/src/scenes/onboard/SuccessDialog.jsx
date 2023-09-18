import React from 'react';
import Modal from 'react-modal';

const SuccessDialog = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Success Modal"
    >
      <div>
        <h2>Registration Successful</h2>
        <p>Your registration was successful!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default SuccessDialog;
