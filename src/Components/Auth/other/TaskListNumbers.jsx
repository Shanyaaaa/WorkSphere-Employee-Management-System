import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>COMPLETED</h3>
      </div>
      
      <div className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>FAILED</h3>
      </div>
     
      <div className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.pending}</h2>
        <h3 className='text-xl font-medium'>PENDING</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>ACTIVE</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
