import React from 'react';



const ServiceProviding = ({services, handleOrder}) => {


    return (
      
        // <Link to='dashboard' style={{ textDecoration: 'none' }}>
        <>
        <div className="col-md-4 ">
     <div    onClick={()=>handleOrder(`${services.title}`)}>
        <div>
        <div style={{border:'none'}} className='card p-1 m-5 align-items-center card-hover'>
           
            <img src={`data:image/png;base64,${services.image.img}`} 
             className="card-img-top cardImage mb-3" alt=""/>
            <h5>{services.title}</h5>
           <p>{services.description}</p>
        </div>
        </div>
        </div>
        </div>
     
      </>  
    );
};

export default ServiceProviding;