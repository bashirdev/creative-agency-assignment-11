import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../../App';
import Sidebar from '../SideBar/Sidebar';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
  
    const [review , setReview] = useState([])
    const { name, email, photoURL } = loggedInUser;
    
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: name,
            email: email,
            photoURL: photoURL
          
        }
       
    });

    const onSubmit = data => {
      
        const formData = new FormData();
        formData.append('companyName', data.companyName);
       formData.append('name', loggedInUser.name);
        formData.append('description', data.description);
            fetch('http://localhost:5000/review', {
                method: 'POST',
                 body:formData
             
            })
            .then(res=>res.json())
            .then(success=>{
                if (success) {
                    alert('Feedback has been posted.');
                   
                }
            })
           
        };

    return (
        <div className="container-fluid mt-5">
        <div className='row'>
        <div className="col-md-2">
            <Sidebar />
        </div>
        <div className="col-md-6">
           <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={loggedInUser.name} name="name" placeholder="Your Name/ company's name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={review.companyName} name="companyName" placeholder="company's name, designation" className="form-control" />
                        {errors.companyName && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group">
                        <textarea type="text" defaultValue={review.description} ref={register({ required: true })} name="description" placeholder="Project details" className="form-control" rows="3"></textarea>
                        {errors.message && <span className="text-danger">This field is required</span>}
                    </div>

             
            <div className="form-group text-right">
                        <button  type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
                </div>
        </div>
        </div>
    );
};

export default Review;