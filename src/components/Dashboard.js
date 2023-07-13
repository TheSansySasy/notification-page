import React, { useState } from 'react';
import Tab from './Tab';
import TabAllNotifications from './TabAllNotifications';
import TabUnreadNotifications from './TabUnreadNotifications';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [notifications, setNotifications] = useState([
    { id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', read: true },
    { id: 2, content: 'Duis convallis placerat tellus sed varius.', read: false },
    { id: 3, content: 'Praesent pharetra gravida aliquam.', read: false },
    { id: 4, content: 'Curabitur quis volutpat diam, ut varius justo.', read: true },
    { id: 5, content: 'In egestas lacus quis viverra aliquam.', read: false },
    { id: 6, content: 'Praesent a felis ligula.', read: false },
    { id: 7, content: 'Nulla in lectus tortor.', read: true },
    { id: 8, content: 'Etiam ac bibendum mi.', read: false },
    { id: 9, content: 'Fusce condimentum vestibulum dolor, sed accumsan dui aliquet et.', read: false },
    { id: 10, content: 'Praesent diam enim, commodo suscipit ultricies a, cursus ut arcu.', read: true },
    { id: 11, content: 'Integer elementum, felis in bibendum posuere, risus ante aliquam augue, eget aliquam risus ligula in nisi.', read: false },
    { id: 12, content: 'Suspendisse potenti.', read: false },
  ]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const markNotificationAsRead = (notificationId) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === notificationId) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  const filteredNotifications = selectedTab === 'all'
    ? notifications
    : notifications.filter((notification) => !notification.read);

  return (
    <div className="dashboard">
      <h1>Notifications</h1>
      <div className="tab-container">
        <Tab
          label="All Notifications"
          isSelected={selectedTab === 'all'}
          onClick={() => handleTabClick('all')}
        />
        <Tab
          label="Unread Notifications"
          isSelected={selectedTab === 'unread'}
          onClick={() => handleTabClick('unread')}
        />
      </div>
      {selectedTab === 'all' ? (
        <TabAllNotifications
          notifications={filteredNotifications}
          markNotificationAsRead={markNotificationAsRead}
        />
      ) : (
        <TabUnreadNotifications
          notifications={filteredNotifications}
          markNotificationAsRead={markNotificationAsRead}
        />
      )}
    </div>
  );
};

export default Dashboard;
