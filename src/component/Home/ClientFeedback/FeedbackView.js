import React from 'react';


const FeedbackView = ({feedback}) => {


    return (
        <div className=''>
          <div className="col-md-4">
        <div className="card" style={{width: '337px', height:'178px'}}>
  <div className="card-body ">
  <div className="row d-flex ">
  <img style={{height:'70px', width:'70px' , borderRadius:'50%'}} src='https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='' />
  <div className='ml-3'>
    <h5 className="card-title">{feedback.name}</h5>
    <p className="card-subtitle mb-2 text-muted ">{feedback.companyName}</p>
    </div>
    </div>

    <p className="card-text">{feedback.description}</p>
 
  </div>
</div>
</div>
</div>
    );
};

export default FeedbackView;