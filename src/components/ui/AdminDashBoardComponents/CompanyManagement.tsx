const CompanyManagement = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Company Management</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Company Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Company Code" className="w-full p-2 border border-gray-300 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
};

export default CompanyManagement;
