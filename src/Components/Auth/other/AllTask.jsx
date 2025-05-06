import React, { useEffect, useState } from 'react';

const AllTask = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div className='bg-[#1c1c1c] rounded mt-5 p-5 overflow-auto'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white font-bold'>
        <h2 className='w-1/4 bg-red-600 p-2 rounded'>Employee Name</h2>
        <h3 className='w-1/4 bg-red-600 p-2 rounded'>Active Tasks</h3>
        <h5 className='w-1/4 bg-red-600 p-2 rounded'>Completed Tasks</h5>
        <h5 className='w-1/4 bg-red-600 p-2 rounded'>Failed Tasks</h5>
      </div>

      {employees.map(emp => (
        <div key={emp.id} className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white'>
          <h2 className='w-1/4 bg-red-600 p-2 rounded'>{emp.firstName}</h2>
          <h3 className='w-1/4 bg-red-600 p-2 rounded'>{emp.taskCount.active}</h3>
          <h5 className='w-1/4 bg-red-600 p-2 rounded'>{emp.taskCount.completed}</h5>
          <h5 className='w-1/4 bg-red-600 p-2 rounded'>{emp.taskCount.failed}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;

