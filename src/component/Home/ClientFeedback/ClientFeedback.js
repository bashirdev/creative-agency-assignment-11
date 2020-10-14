import React from 'react';
import img1 from '../../../images/customer-1.png';
import img2 from '../../../images/customer-2.png';
import img3 from '../../../images/customer-3.png';
import FeedbackView from './FeedbackView';

const customarFeedback=[
    {
        id:1,
        img:img1,
        name:'Miriam Barron',
        degisnation:'CEO Manpol',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus'
    },
    {
        id:2,
        img:img2,
        name:'Nash Patrik',
        degisnation:'CEO Manpol',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus'
    },
    {
        id:3,
        img:img3,
        name:'Nash Patrik',
        degisnation:'Bria Malaone',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident cum quidem autem eveniet natus'
    },
]

const ClientFeedback = () => {
    return (
       <section className='container mt-5'>
        <h3 className='text-center mb-5'>Clients <span style={{color:'#7ab259'}}>Feedback</span></h3>
           <div className='row d-flex justify-content-center'>
         
               {
                   customarFeedback.map(feedback=> <FeedbackView key={feedback.id} feedback={feedback} /> )
               }
           </div>
       </section>
    );
};

export default ClientFeedback;