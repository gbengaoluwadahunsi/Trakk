
import React from 'react';
import {  FaBell} from "react-icons/fa";

interface Notification {
  message: string;
  date : string;
}

interface  NotificationProps{
  notifications : Notification[]
}

const NotificationList :React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className='flex'>
    <div className='relative h-[10em] w-2 bg-[#0006df] rounded-l-md '>
        <div className='absolute '></div>
      </div>

      <div className='p-6  w-full'>
    <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaBell className="mr-2" /> Notifications
          </h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <p>{notification.message}</p>
            <p className="text-sm text-[#00047a]">{notification.date}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default NotificationList;
