// src/components/NotificationList.tsx
import React from 'react';

const NotificationList = ({ notifications }) => {
  return (
    <div>
      <h2 className="text-xl text-blue-800 font-bold mb-2">Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
