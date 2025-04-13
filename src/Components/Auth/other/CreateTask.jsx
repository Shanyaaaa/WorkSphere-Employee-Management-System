import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form className="flex flex-wrap w-full items-start justify-between ">          
          <div className="w-1/2 ">
            <div>
              <h3 className="font-semibold text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>

            <div>
            <h3 className="font-semibold text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                placeholder="Make a UI design"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>

            <div>
            <h3 className="font-semibold text-gray-300 mb-0.5">Assign to</h3>
              <input
                type="text"
                placeholder="Employee name "
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>

            <div>
            <h3 className="font-semibold text-gray-300 mb-0.5">Category</h3>
              <input
                type="text"
                placeholder="UI,Tech,dev etc"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
          </div>

          {/* 🟦 Group 2: Description field */}
          <div className="w-1/2">
            <div>
            <div className="w-full">
             <h3 className="font-semibold text-gray-300 mb-0.5">Description</h3>
              <textarea
              name="description"
              id="description"
              placeholder="Write details of the task"
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"/>

              <button className='bg-[#851010] py-3 hover:bg-#851010 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
</div>

             
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
