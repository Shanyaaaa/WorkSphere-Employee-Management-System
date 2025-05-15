import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 bg-red-100 rounded-xl shadow-sm">
      
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-xs sm:text-sm">{data.date}</h4>
      </div>

      
      <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">
        {data.title}
      </h2>

      <p className="text-xs sm:text-sm mt-2">{data.description}</p>

      
      <div className="flex justify-start mt-4">
        <button className="w-full sm:w-auto bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors">
          Completed Task
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
