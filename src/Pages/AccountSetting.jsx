import React from 'react';
import './AccountSetting.css';

const AccountSetting = () => {
  return (
    <div className="Acard">
      <h3 className="card-title">Account Settings</h3>

      <div className="card-body">
        <div className="user-info">
          <div className="avatar-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Marry Doe"
              className="avatar"
            />
            <span className="camera-icon">📷</span>
          </div>
          <div className="user-text">
            <p className="user-name">Marry Doe</p>
            <p className="user-email">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="user-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="card-footer"></div>
    </div>
  );
};

export default AccountSetting;
