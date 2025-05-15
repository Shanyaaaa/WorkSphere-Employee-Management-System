import './App.css'
import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Dashboard/EmployeeDashboard'
import Header from './Components/Auth/other/Header'
import AdminDashboard from './Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
    }, [])
  
  const [user,setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)


  useEffect(() => {
    localStorage.removeItem("loggedInUser");
  }, []);
  
  useEffect(()=> {
   
    const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)
      }
    },[])






  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (authData){
      const employees = authData.employees && authData.employees.find((e) => e.email === email && e.password === password);  
    if (employees) {
      setUser('employees')
      setloggedInUserData(employees)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',user:employees, data:employees}))
    }
  }
    else{
      alert('Invalid Credentials');
    }
  };
   
  return (
    <> 

  {!user ? (
    <Login handleLogin={handleLogin} />
  ) : user === 'admin' ? (
    <AdminDashboard  changeuUser={setUser}/>
  ) : user === 'employees' ? (
    <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
  ) : null}


     {/* <EmployeeDashboard />
       
      
       <Header />
       <AdminDashboard /> */}
</>
  )
}

export default App

