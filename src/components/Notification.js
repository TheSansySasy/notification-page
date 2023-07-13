import React from 'react';

const Notification = ({ notification, onNotificationClick }) => {
  const handleNotificationClick = () => {
    if (!notification.read) {
      onNotificationClick(notification.id);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    return date.toLocaleString(undefined, options);
  };
  

  return (
    <li
      className={`notification ${notification.read ? 'read' : 'unread'}`}
      onClick={handleNotificationClick}
    >
      <div className="message-container">
        {/* <h3>{notification.title}</h3> */}
        <p>{notification.content}</p>
      </div>
      <div className="timestamp">{formatDate(Date.now())}</div>
    </li>
  );
};

export default Notification;
