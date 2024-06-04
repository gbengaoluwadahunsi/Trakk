const Settings = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Settings</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Admin Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Admin Email" className="w-full p-2 border border-gray-300 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
