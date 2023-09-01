import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const CustomerCare = () => {
  return (
    <div className="customer-care">
      <div className="customer-care-content">
        <div className="white-text bold large-text">
          Nigerian's Biggest Supermarket Chain
        </div>
        <div className="white-text bold">
          <FaEnvelope className="icon large-icon" />{' '}
          <span className="white-text large-text">support@retailsupermarkets.com</span>
        </div>
        <div className="white-text bold">
          <FaPhone className="icon large-icon rotate-icon" />{' '}
          <span className="white-text large-text">
            +23490 1400 0001 | +23490 1400 0002
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
