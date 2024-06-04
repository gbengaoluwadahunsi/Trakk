const OverviewCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-bold">Total Employees</h3>
        <p className="text-2xl">50</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-bold">Active Employees</h3>
        <p className="text-2xl">45</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-bold">Pending Tasks</h3>
        <p className="text-2xl">20</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-bold">Completed Tasks</h3>
        <p className="text-2xl">80</p>
      </div>
    </div>
  );
};

export default OverviewCard;
