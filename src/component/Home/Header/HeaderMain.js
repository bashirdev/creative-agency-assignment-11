import React from 'react';
import frame from '../../../images/logos/Frame.png';



const HeaderMain = () => {
    return (
        <>
        <section className='container mt-5'>

        <div className="row align-items-center">
            <div className="col-md-5">
                <h1>Let's Grow Your<br/> Brand To The <br/> Next Level</h1>
                <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit  Consequuntur at magnam <br/> Consequuntur at magnam dignissimos .</p>
                <button className='btn btn-dark btn-lg text-white pl-4 pr-4 pt-1 pb-1'>Hire us</button>
            </div>
            <div className="col-md-7">
               <img style={{height:'422.8px'}} src={frame} alt='' />
            </div>
        </div>
      
          
        </section>
  
        </>
    );
};

export default HeaderMain;