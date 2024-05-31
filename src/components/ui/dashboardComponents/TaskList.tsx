
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <>
    <h2 className="text-xl  text-blue-800 font-bold mb-2">Tasks</h2>
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
