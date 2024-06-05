const TaskTable = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Task Management</h3>
      <table className="w-full">
        <thead>
        <tr className=" flex justify-between gap-4">
            <th>Task</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr className=" flex justify-between gap-4 ">
            <td>Fix bugs</td>
            <td>John Doe</td>
            <td >Pending</td>
            <td className="">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
