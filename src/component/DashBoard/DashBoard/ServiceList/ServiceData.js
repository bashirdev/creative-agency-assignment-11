import React from 'react';

const ServiceData = ({getdata}) => {

    return (
      
        <div className="col-md-4 ">
     
           <div>
           <div style={{border:'none', width:'250px'}} className='card p-1 m-5 align-items-center card-hover'>
           {  getdata.img ? <img src={`data:image/png;base64,${getdata.img.img}`} alt='' /> :   
         
          <img className="img-fluid mb-3" src={`http://localhost:5000/${getdata.img.img}`} alt=""/>
     
     }
               <h5>{getdata.name}</h5>
              <p>{getdata.description}</p>
           </div>
           </div>
          
           </div>
           
    );
};

export default ServiceData;