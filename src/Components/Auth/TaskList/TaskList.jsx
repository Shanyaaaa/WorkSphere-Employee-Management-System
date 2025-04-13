import React from 'react';

const TaskList = ({data}) => {
  return (
    <div
      id="Tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {/* Card 1 */}
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#ffd3d3] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">Hello</h3>
          <h4 className="text-sm">20 FEB 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Study for an exam</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#ffd3d3] rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-white text-sm px-3 py-1 rounded">Hello</h3>
          <h4 className="text-sm">20 FEB 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Study for an exam</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
