import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import Sidebar from '../SideBar/Sidebar';
import ServiceData from './ServiceData';

const ServiceList = () => {
      const [loggedInUser, setLoggedInUser] = useContext(userContext);
      const [getData, setGetData] = useState([])
     
  

      useEffect(() =>{
           fetch(`http://localhost:5000/order`)
           .then(res => res.json())
           .then(data=>{
              
            setGetData(data)
           }
           
           )
      },[])
    
    return (
        <div className='container-fluid mt-5'>
         <div className='row mt-5 text-center'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="row">
            
            {
                getData.length > 0 && getData.map(getdata=> <ServiceData key={getdata._id} getdata={getdata} />)
            }
            </div>
           
        </div>
        </div>
        
    );
};

export default ServiceList;