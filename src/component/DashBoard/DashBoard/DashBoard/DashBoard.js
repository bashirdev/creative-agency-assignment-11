import React from 'react';
import ServiceList from '../ServiceList/ServiceList';
import Review from '../Review/Review';
// import Sidebar from '../SideBar/Sidebar';

import Order from '../Order/Order';


const DashBoard = () => {
    

   return (
        <div className=' container row mt-5 '>
            <div className="col-md-2">
                <Order />
            </div>
            <div className="col-md-5">
            <ServiceList   />  
          </div>
            <div className="col-md-5">
                <Review />
            </div>
        </div>
    );
};

export default DashBoard;