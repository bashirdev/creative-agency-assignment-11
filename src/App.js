import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './component/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './component/Login/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import DashBoard from './component/DashBoard/DashBoard/DashBoard/DashBoard';
// import OrderForm from './component/DashBoard/DashBoard/Order/OrderForm';
import ServiceList from './component/DashBoard/DashBoard/ServiceList/ServiceList';
import Order from './component/DashBoard/DashBoard/Order/Order';
import AddService from './component/AdminPanel/AddService/AddService';
import Review from './component/DashBoard/DashBoard/Review/Review';
import AdminServiceList from './component/AdminPanel/AddService/AdminServiceList/AdminServiceList';
import AddAdmin from './component/AdminPanel/AddService/AddAdmin';



export const userContext= createContext();
export const DataContext= createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [getData, setGetData] = useState({})

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <DataContext.Provider value={[getData, setGetData]}>
   <Router>
     <Switch>
     <Route  path='/home'>
          <Home />
       </Route>
       <PrivateRoute  path='/addadmin'>
      <AddAdmin />
      </PrivateRoute>
      <PrivateRoute  path='/adminServicelist'>
        <AdminServiceList />
      </PrivateRoute>
       <PrivateRoute  path='/addservice'>
         <AddService />
       </PrivateRoute>
      
       <PrivateRoute  path='/serviceslist'>
         <ServiceList />
       </PrivateRoute>
       <PrivateRoute  path='/review'>
         <Review />
       </PrivateRoute>
       <Route path='/login'>
           <Login />
       </Route>
       <PrivateRoute path='/order'>
         <Order />
       </PrivateRoute>
       <PrivateRoute path='/dashboard'>
          <DashBoard />
       </PrivateRoute>
       
      
       <Route exact path='/'>
          <Home />
       </Route>
     </Switch>
   </Router>
   </DataContext.Provider>
   </userContext.Provider>
  );
}

export default App;
