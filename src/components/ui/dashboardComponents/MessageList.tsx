

import { FaEnvelope} from "react-icons/fa";

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
    <div className="flex">
   <div className='relative h-[10em] w-2 bg-[#0006df] rounded-l-md '>
        <div className='absolute '></div>
      </div>

      <div className='p-6  w-full'>
    <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaEnvelope className="mr-2" /> Messages
          </h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{message.sender}</h3>
            <p>{message.content}</p>
            <p className="text-sm text-[#00047a]">{message.date}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default MessageList;
