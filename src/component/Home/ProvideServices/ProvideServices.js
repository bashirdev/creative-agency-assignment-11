import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';
import './ProvideServices.css';
import ServiceProviding from './ServiceProviding';
// import appsDesign from '../../../images/icons/service1.png';
// import graphicDesign from '../../../images/icons/service2.png';
// import webDevelopment from '../../../images/icons/service3.png';


// const Ourservices=[
//     {
//         id:1,
//         img:appsDesign,
//         name:'Web & Mobile design',
//         content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus.'
//     },
//     {
//         id:2,
//         img:graphicDesign,
//         name:'Graphic design',
//         content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus.'
//     },
//     {
//         id:3,
//         img:webDevelopment,
//         name:'Web development',
//         content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus.'
//     },
// ]
const ProvideServices = () => {
    const history = useHistory();
    const [services, setServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleOrder = (serviceName) => {
        const copyUserInfo = {...loggedInUser}
        copyUserInfo.title = serviceName;
        setLoggedInUser(copyUserInfo);
        history.replace('/order')
      
    }

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then( results => {
            setServices(results)
        })
    },[]);

  
    return (
       <section className="container mt-5">
       <div className='mt-5'>
       <h3 className='text-center'>Provide awesome <span style={{color:'#7ab259'}}>services</span></h3>
           <div className="row">
              {
                  services.map(ser=> <ServiceProviding  key={ser.id} handleOrder={handleOrder} services={ser} />)
              }
            
           </div>
           </div>
       </section>
    );
};

export default ProvideServices;