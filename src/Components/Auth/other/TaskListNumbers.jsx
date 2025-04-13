import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
 <div className='flex mt-10 justify-between gap-5 screen'>
    <div className= 'rounded-xl w-[45%] py-6 px-9 bg-[#6a1414]'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
    </div>


    <div className= 'rounded-xl w-[45%] py-6 px-9 bg-[#811818]'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
    </div>
    
    <div className= 'rounded-xl w-[45%] py-6 px-9 bg-[#550d0d]'>
    <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
    <h3 className='text-xl font-medium'>New Task</h3>
    </div>
   
    <div className= 'rounded-xl w-[45%] py-6 px-9 bg-[#8b1a1a]'>
    <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
    <h3 className='text-xl font-medium'>New Task</h3>
    </div>
   

    <div className= 'rounded-xl w-[45%] py-6 px-9 bg-[#8b1a1a]'>
    <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
    <h3 className='text-xl font-medium'>New Task</h3>
   </div>
   </div>

  );
};  

export default TaskListNumbers
