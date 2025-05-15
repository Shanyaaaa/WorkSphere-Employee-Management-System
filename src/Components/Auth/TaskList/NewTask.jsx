import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-5 bg-red-100 rounded-xl shadow-sm">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="bg-red-600 text-white text-xs sm:text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-xs sm:text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold">
        {data.title}
      </h2>

      <p className="text-xs sm:text-sm mt-2">{data.description}</p>

      <div className="mt-4">
        <button className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow-md hover:bg-red-700 transition duration-300">
          Accept Task
        </button>
      </div>
    </div>
  );
};
export default NewTask;