import React from 'react';

const ContactUs = () => {
    return (
<section style={{backgroundColor:'#fbd062', marginTop:"200px"}} className='container-fluid p-5'>
        <div className="container">
           <div className="row">
               <div className="col-md-6">
                   <h4>Let us handle your<br/> project, professionally</h4>
                   <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing ,
                    eius debitis magnam .</p>
               </div>
               <div className="col-md-6">
               <form>
        <div class="form-group">
           <input type="email" className="form-control"  placeholder="Your email address" />
        </div>
        <div class="form-group">
           <input type="email" className="form-control"  placeholder="Your name / company name" />
        </div>
         <div class="form-group">
         <textarea className="form-control" placeholder='Your message'  rows="10"></textarea>
        </div>
        <button className='btn btn-dark btn-lg'>Send</button>
      </form>
               </div>
           </div>
     
       
      </div>
<p className='text-center mt-5'>copyright roange lobs {new Date().getFullYear()}</p>
      </section>
    );
};

export default ContactUs;