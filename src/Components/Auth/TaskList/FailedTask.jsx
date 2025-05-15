import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 bg-red-100 rounded-xl shadow-sm">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="bg-red-600 text-white text-xs sm:text-sm px-2 py-1 rounded">{data.category}</h3>
        <h4 className="text-xs sm:text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">{data.title}</h2>
      <p className="text-xs sm:text-sm mt-2">
        {data.description}
      </p>

      <div className="mt-4">
        <button className="px-3 sm:px-4 py-1 sm:py-2 bg-red-600 text-white text-sm rounded-lg sm:rounded-xl shadow-md hover:bg-red-700 transition duration-300">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
