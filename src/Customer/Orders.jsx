import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Orders = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row h-screen bg-white dark:bg-gray-950 mb-20">
      <Sidebar/>
        
      
  
      
      

      <div className="overflow-x-auto items-center ml-10 mt-5">
     <Link className=" font-bold  text-white dark:text-gray-950 bg-gray-950 dark:bg-white px-6 py-2 text-xl items-center">continue shopping  </Link>

      <table className="table-auto w-full border-collapse text-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-white text-left dark:bg-gray-950 text-gray-900 dark:text-white">Order ID</th>
            <th className="px-6 py-3 bg-white text-left dark:bg-gray-950 text-gray-900 dark:text-white">Image</th>

            <th className="px-6 py-3 bg-white text-left dark:bg-gray-950 text-gray-900 dark:text-white">Customer Name</th>
            <th className="px-6 py-3 bg-white text-left dark:bg-gray-950 text-gray-900 dark:text-white">Date Placed</th>
            <th className="px-6 py-3 bg-white text-left dark:bg-gray-950 text-gray-900 dark:text-white">Total Amount</th>
            <th className="px-6 py-3 bg-white text-left dark:bg-gray-950 text-gray-900 dark:text-white">Status</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">001</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">
              <img src="https://via.placeholder.com/50" alt="Order" className="w-20 h-20 object-cover rounded dark:bg-gray-900 text-gray-950 dark:text-white" />
              <h4>Name Product</h4>
            </td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">John Doe</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">2024-05-18</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">$120.00</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">Pending</td>
            
          </tr>
          <tr>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">002</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">
              <img src="https://via.placeholder.com/50" alt="Order" className="w-20 h-20 object-cover rounded dark:bg-gray-950 text-gray-950 dark:text-white" />
              <h4>Name Product</h4>

            </td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">Jane Smith</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">2024-05-18</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">$85.50</td>
            <td className="border dark:border-gray-700 border-gray-900 px-6 py-4 dark:bg-gray-950 text-gray-950 dark:text-white">Shipped</td>
           
          </tr>
          {/* Add more rows as needed */}
          <div className=' float-left'>
            <h1>Total price: 7467</h1>
        </div>
        </tbody>
        
      </table>
    </div>



    </div>
    </>
    
  )
}

export default Orders
