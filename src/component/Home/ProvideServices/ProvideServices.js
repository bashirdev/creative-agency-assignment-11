import React from 'react';
import appsDesign from '../../../images/icons/service1.png';
import graphicDesign from '../../../images/icons/service2.png';
import webDevelopment from '../../../images/icons/service3.png';
import './ProvideServices.css';

const ProvideServices = () => {
    return (
       <section className="container mt-5">
       <div className='mt-5'>
       <h3 className='text-center'>Provide awesome <span style={{color:'#7ab259'}}>services</span></h3>
           <div className="row">
               <div className="col-md-4 ">
               <div style={{border:'none'}} className='card p-1 m-5 align-items-center card-hover'>
                   <img   style={{height:'74px', width:'74px'}}src={appsDesign} alt='' />
                   <h5>Web & Mobile design</h5>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus.
               </div>
               </div>
               <div className="col-md-4">
               <div style={{border:'none'}} className='card p-1 m-5 align-items-center card-hover'>
                   <img style={{height:'74px', width:'74px'}} src={graphicDesign} alt='' />
                   <h5>Graphic design</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus.</p>  
               </div>

               </div>
               <div className="col-md-4">
               <div style={{border:'none'}} className='card p-1 m-5 align-items-center card-hover '>
                   <img style={{height:'74px', width:'74px'}} src={webDevelopment} alt='' />
                   <h5>Web development</h5>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus.
               </div>
               </div>
           </div>
           </div>
       </section>
    );
};

export default ProvideServices;