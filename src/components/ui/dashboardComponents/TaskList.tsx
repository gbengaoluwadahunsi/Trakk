import React from 'react';
import { MdTask } from "react-icons/md";
// Define the interface for a single task
interface Task {
  title: string;
  description: string;
  dueDate: string;
}


interface TaskListProps {
  tasks: Task[]; // An array of Task objects
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className='flex'>
     <div className='relative h-[10em] w-2 bg-[#0006df] rounded-l-md '>
        <div className='absolute '></div>
      </div>

      <div className='p-6  w-full'>
     <h2 className="text-xl font-bold mb-4 flex items-center">
            <MdTask className="mr-2" /> Task List
          </h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-[#00047a]">Due: {task.dueDate}</p>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
};

export default TaskList;
