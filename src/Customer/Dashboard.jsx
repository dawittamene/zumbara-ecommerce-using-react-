
import Sidebar from './Sidebar';

const Dashboard = () => {
 

  return (
    <>
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-950 mb-20">
      <Sidebar/>
        
      <div className="flex-1 p-10 text-gray-900">
        <button className=' bg-slate-100 text-gray-950 hover:bg-slate-200 dark:bg-gray-900 px-14 py-4 rounded-md dark:hover:bg-gray-950 dark:text-white capitalize text-2xl ml-5'>
          Total Orders
          <h4>100</h4>
        </button>
      </div>

      <div className="flex-1 p-10 text-gray-900">
        <button className=' bg-slate-100 text-gray-950 hover:bg-slate-200 dark:bg-gray-900 px-14 py-4 rounded-md dark:hover:bg-gray-950 dark:text-white capitalize text-2xl ml-5'>
          Total Wishlist
          <h4>100</h4>
        </button>
      </div>

      <div className="flex-1 p-10 text-gray-900">
        <button className=' bg-slate-100 text-gray-950 hover:bg-slate-200 dark:bg-gray-900 px-14 py-4 rounded-md dark:hover:bg-gray-950 dark:text-white capitalize text-2xl ml-5'>
          Total Addresses
          <h4>100</h4>
        </button>
      </div>



    </div>
    </>
  );
 
};

export default Dashboard;
