const Notifications = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Notifications</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Notification Title" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Notification Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Notification</button>
      </form>
    </div>
  );
};

export default Notifications;
