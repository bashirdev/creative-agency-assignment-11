import React from 'react';
import slack from  '../../../images/logos/slack.png';
import google from  '../../../images/logos/google.png';
import uber from  '../../../images/logos/uber.png';
import netflix from  '../../../images/logos/netflix.png';
import airbnd from  '../../../images/logos/airbnb.png';

const CompanyBrandName = () => {
    return (
        <section className='container mt-5'>
        <div className="row">
            <div className="com-md-3  mr-auto">
                <img style={{height:'44px', margin:'20px', textAlign:'center', justifyContent:'center'}} src={slack} alt=""/>
            </div>
            <div className="com-md-3  mr-auto">
                <img style={{height:'44px', margin:'20px', textAlign:'center', justifyContent:'center'}} src={google} alt=""/>
            </div>
            <div className="com-md-3 mr-auto">
                <img style={{height:'44px', margin:'20px', textAlign:'center', justifyContent:'center'}} src={uber} alt=""/>
            </div>
            <div className="com-md-3 mr-auto">
                <img style={{height:'44px', margin:'20px', textAlign:'center', justifyContent:'center'}} src={netflix} alt=""/>
            </div>
            <div className="com-md-3 mr-auto">
                <img style={{height:'44px', margin:'20px', textAlign:'center', justifyContent:'center'}} src={airbnd} alt=""/>
            </div>
           
        </div>
         </section>
    );
};

export default CompanyBrandName;