import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../DashBoard/DashBoard/SideBar/Sidebar';

const AddAdmin = () => {
    const [addAdmin, setAddmin] = useState([])
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
      
        formData.append('email',data.email);
        

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData,
        })
        .then( res => res.json())
        .then( result => {
            if(result){
                setAddmin(result);
                alert('services added successfully')
            }
        })
    };
    return (
        <div className='container-fluid mt-5'>
        <div className="row">
        <div className="col-md-2">
            <Sidebar />
        </div>
        <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column bg-white p-4 rounded">
     <div className="row">
     <div className="col-md-6 mb-4">
         <input type="text" name="email" className="inputField descField w-100" placeholder="Enter an email" ref={register({ required: true})}/>
                        {errors.email && <span className="text-danger">Details is required</span>}
                    </div>
                </div>

                <button 
                  className="btn btn-dark mt-3" 
                  style={{width:"120px"}}>
                  Submit
                </button>
            </form>
        </div>
            
            </div>
        </div>
    );
};

export default AddAdmin;