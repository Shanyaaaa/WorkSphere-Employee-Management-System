import React, { useState } from 'react';

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data?.tasks || []);

  const handleAcceptTask = (taskIndex) => {
    const updatedTasks = [...tasks];

    
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      newTask: false,
      active: true
    };

    setTasks(updatedTasks);

    // Update 
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployees = employees.map(emp => {
      if (emp.firstName === data.firstName) {   
        const updatedTaskCount = {
          ...emp.taskCount,
          active: emp.taskCount.active + 1,
          
        };

        return { ...emp, tasks: updatedTasks, taskCount: updatedTaskCount };
      }
      return emp;
    });

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const getStatus = (task) => {
    if (task.newTask) return { label: 'New Task', color: 'bg-yellow-600' };
    if (task.active) return { label: 'Active', color: 'bg-blue-600' };
    if (task.completed) return { label: 'Completed', color: 'bg-green-600' };
    if (task.failed) return { label: 'Failed', color: 'bg-red-600' };
    return { label: 'Unknown', color: 'bg-gray-600' };
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl text-white font-bold mb-4">Your Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task, index) => {
            const status = getStatus(task);
            return (
              <div key={index} className="bg-[#2c2c2c] border border-gray-600 rounded p-4 shadow hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg text-red-400 font-semibold">{task.title}</h3>   
                  <span className={`text-xs px-2 py-1 rounded ${status.color} text-white`}>
                    {status.label}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{task.description}</p>    
                <p className="text-gray-400 text-xs mb-1"><span className="font-semibold text-gray-300">Category:</span> {task.category}</p>
                <p className="text-gray-400 text-xs mb-1"><span className="font-semibold text-gray-300">Due Date:</span> {task.date}</p>

                {task.newTask && (
                  <button
                    onClick={() => handleAcceptTask(index)}
                    className="bg-yellow-600 text-white text-xs px-3 py-1 rounded mt-2 hover:bg-yellow-700 transition"
                  >
                    Accept Task
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaskList;