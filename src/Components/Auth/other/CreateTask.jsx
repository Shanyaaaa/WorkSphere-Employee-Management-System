import React, { useState } from 'react';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const data = JSON.parse(localStorage.getItem('employees')) || [];

    if (Array.isArray(data)) {
      const updatedData = data.map(emp => {
        if (emp.Name === assignTo) {
          const updatedTasks = [...(emp.tasks || []), task];
          const updatedTaskCount = {
            ...emp.taskCount,
            newTask: (emp.taskCount?.newTask || 0) + 1
          };
          return { ...emp, tasks: updatedTasks, taskCount: updatedTaskCount };
        }
        return emp;
      });

      localStorage.setItem('employees', JSON.stringify(updatedData));
      console.log('Updated employees:', updatedData);
    } else {
      console.warn('employees data is not an array:', data);
    }

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="flex justify-center mt-10">
      <div className='bg-black bg-opacity-40 backdrop-blur-md border border-red-700 rounded-2xl p-8 shadow-xl transition hover:shadow-2xl hover:scale-[1.02] w-full max-w-4xl'>

        <h2 className="text-2xl font-bold text-red-500 mb-6 text-center transition hover:text-red-400">Create a New Task</h2>

        <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">Task Title</label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Make a UI design"
                className="w-full text-sm py-2 px-4 rounded-md outline-none bg-transparent border border-red-600 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">Date</label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full text-sm py-2 px-4 rounded-md outline-none bg-transparent border border-red-600 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">Assign To</label>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                type="text"
                placeholder="Employee name"
                className="w-full text-sm py-2 px-4 rounded-md outline-none bg-transparent border border-red-600 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="UI, Tech, Dev etc"
                className="w-full text-sm py-2 px-4 rounded-md outline-none bg-transparent border border-red-600 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400"
              />
            </div>
          </div>

          
          <div className="space-y-4 flex flex-col h-full">
            <div className="flex-grow">
              <label className="block text-gray-300 text-sm font-medium mb-1">Description</label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Write details of the task"
                className="w-full h-full min-h-[176px] text-sm py-2 px-4 rounded-md outline-none bg-transparent border border-red-600 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400 resize-none"
              />
            </div>

            <button className='w-full text-white bg-gradient-to-r from-red-600 to-red-800 py-3 rounded-full mt-2 transition-all duration-300 hover:brightness-110 hover:scale-105'>
              Create Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateTask;
