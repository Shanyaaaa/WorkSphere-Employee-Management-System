import React from 'react'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskLIst'
import Header from '../Components/Auth/other/Header'
const EmployeeDashboard = ({data}) => {
   
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
      
        <Header data = {data} />
        <TaskListNumbers data ={data}  />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
