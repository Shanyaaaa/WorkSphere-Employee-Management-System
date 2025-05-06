import React from 'react'

const CompleteTask = ({data}) => {
  
    return (
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#ffd3d3] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">
       {data.description}
      </p>

      <div className="flex justify-between mt-4 gap-2">
        <button className=" bg-red-500  text-white px-3 py-1 rounded hover:bg-green-600">
          Completed Task
        </button>
</div>
        </div>
      );
    };
   

   

export default CompleteTask
