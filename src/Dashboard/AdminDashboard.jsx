import React from 'react';
import Header from '../Components/Auth/other/Header';
import CreateTask from '../Components/Auth/other/CreateTask';
import AllTask from '../Components/Auth/other/AllTask';

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
     <CreateTask />
     <AllTask />
    </div>
  );
};

export default AdminDashboard;
