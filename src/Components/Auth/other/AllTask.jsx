import React, { useEffect, useState } from 'react';

const AllTask = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div className='bg-[#1c1c1c] rounded-xl mt-5 p-5 overflow-auto'>

      <div className='mb-4 grid grid-cols-4 gap-4'>
        <h2 className='bg-[#991b1b] py-3 px-4 rounded-lg text-white font-semibold text-center transition-all hover:bg-red-600'>
          Employee Name
        </h2>
        <h3 className='bg-[#991b1b] py-3 px-4 rounded-lg text-white font-semibold text-center transition-all hover:bg-red-600'>
          Active Tasks
        </h3>
        <h5 className='bg-[#991b1b] py-3 px-4 rounded-lg text-white font-semibold text-center transition-all hover:bg-red-600'>
          Completed Tasks
        </h5>
        <h5 className='bg-[#991b1b] py-3 px-4 rounded-lg text-white font-semibold text-center transition-all hover:bg-red-600'>
          Failed Tasks
        </h5>
      </div>

      {employees.map(emp => (
        <div
          key={emp.id}
          className='grid grid-cols-4 gap-4 mb-3 transition-all transform hover:scale-[1.02] hover:shadow-xl'
        >
          <div className='bg-[#7f1d1d] py-3 px-4 rounded-lg text-white text-center font-medium transition hover:bg-red-500'>
            {emp.firstName}
          </div>

          <div className='bg-[#7f1d1d] py-3 px-4 rounded-lg text-blue-300 text-center text-xl font-semibold transition hover:bg-red-500'>
            {emp.taskCount.active}
          </div>

          <div className='bg-[#7f1d1d] py-3 px-4 rounded-lg text-green-300 text-center text-xl font-semibold transition hover:bg-red-500'>
            {emp.taskCount.completed}
          </div>

          <div className='bg-[#7f1d1d] py-3 px-4 rounded-lg text-red-300 text-center text-xl font-semibold transition hover:bg-red-500'>
            {emp.taskCount.failed}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
