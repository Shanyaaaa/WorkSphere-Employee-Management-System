
import React from 'react';

// Failed Task Component
const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-80 p-5 bg-red-100 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>

      <div className="mt-4">
        <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg shadow-md hover:bg-red-700 transition duration-300">
          Failed
        </button>
      </div>
    </div>
  );
};


const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-80 p-5 bg-red-100 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>

      <div className="mt-4">
        <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow-md hover:bg-red-700 transition duration-300">
          Accept Task
        </button>
      </div>
    </div>
  );
};