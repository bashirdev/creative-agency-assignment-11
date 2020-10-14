import React from 'react';

const FeedbackView = ({feedback}) => {
    console.log(feedback);
    return (
        <div className=''>
          <div className="col-md-4">
        <div className="card" style={{width: '337px', height:'178px'}}>
  <div className="card-body ">
  <div className="row d-flex ">
  <img style={{height:'50px'}} src={feedback.img} alt='' />
  <div className='ml-3'>
    <h5 className="card-title">{feedback.name}</h5>
    <p className="card-subtitle mb-2 text-muted ">{feedback.degisnation}</p>
    </div>
    </div>

    <p className="card-text">{feedback.comment}</p>
 
  </div>
</div>
</div>
</div>
    );
};

export default FeedbackView;