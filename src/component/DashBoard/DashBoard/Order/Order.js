import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import OrderForm from './OrderForm';

const Order = () => {
   return (
      <div>
      <div className='row mt-5 text-center'>
         <div className="col-md-2">
             <Sidebar />
         </div>
         <div className="col-md-5">
            
        <OrderForm />
         </div>
         <div className="col-md-5">
          
         </div>
     </div>
     </div>
   );
};

export default Order;