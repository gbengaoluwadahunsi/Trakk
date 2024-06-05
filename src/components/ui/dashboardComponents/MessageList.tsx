// src/components/MessageList.tsx
import React from 'react';

interface Message {
  sender: string;
  content: string;
  date : string
}


interface MessageListProps {
 messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div>
      <h2 className="text-xl text-blue-800 font-bold mb-2">Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{message.sender}</h3>
            <p>{message.content}</p>
            <p className="text-sm text-gray-500">{message.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
