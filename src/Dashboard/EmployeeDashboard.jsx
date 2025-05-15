import React from 'react'
import TaskListNumbers from '../Components/Auth/other/TaskListNumbers'
import TaskList from '../Components/Auth/TaskList/TaskList'
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
