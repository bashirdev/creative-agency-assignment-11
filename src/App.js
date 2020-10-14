import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './component/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
export const userContext= createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
     <Switch>
       <Route exact path='/'><Home /></Route>
     </Switch>
   </Router>
   </userContext.Provider>
  );
}

export default App;
