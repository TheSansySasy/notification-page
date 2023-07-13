import React from 'react';
import Notification from './Notification';

const TabUnreadNotifications = ({ notifications, markNotificationAsRead }) => {
  return (
    <div className="tab-content">
      {/* <h2>Unread Notifications</h2> */}
      {notifications.length === 0 ? (
        <p>No unread notifications found.</p>
      ) : (
        <ul className='list'>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              onNotificationClick={markNotificationAsRead}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TabUnreadNotifications;
