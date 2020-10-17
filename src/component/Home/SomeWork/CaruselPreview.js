import React from 'react';

const CaruselPreview = ({items}) => {
   
    return (
      
         <div  className='App-carousel'>
           
                  <div className="align-items-center justify-content-center">
          <img className='img-fluid' style={{height:'300px', width:'300px'}} src={items.img} alt='' /> 
          </div> 
          </div>

    );
};

export default CaruselPreview;