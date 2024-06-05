import React from 'react';

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
    <>
      <h2 className="text-xl text-blue-800 font-bold mb-2">Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
