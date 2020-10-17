import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../DashBoard/DashBoard/SideBar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [ image, setImage ] = useState();

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('file',image);
        formData.append('title',data.title);
        formData.append('description',data.description);

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData,
        })
        .then( res => res.json())
        .then( result => {
            if(result){
                alert('services added successfully')
            }
        })
    };
    return (
        <>
        <div className="container-fluid mt-5">
        <div className='row'>
          <div className="col-md-2">
                <Sidebar />
            </div>
           <div className='col-md-6 mt-5'>
 <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column bg-white p-4 rounded">
     <div className="row">
          <div className="col-md-6 mb-4">
           <input   type="text"  name="title" className="inputField  w-100" placeholder="Enter title"
                     ref={register({required: true, pattern:/^([a-zA-Z ])/})}/>
                        {errors.title && <span className="text-danger">Title must be in letter</span>}
                    </div>

        <div className="col-md-6 mb-4">
      <div className="w-50">
        <label for="image" className="btn btn-outline-success">
      <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2"/>
          {
           image?
             image.name:
          "Upload image"
                             }
             </label>
             <input type="file" name="image" id="image" onChange={handleImage} style={{display:"none"}}  ref={register({ required: true })}/><br/>
                {errors.image && <span className="text-danger">Image is required</span>}
                 </div>
                    </div>

             <div className="col-md-6 mb-4">
                        <textarea   type="text" name="description" className="inputField descField w-100" placeholder="Enter description" ref={register({ required: true})}/>
                        {errors.description && <span className="text-danger">Details is required</span>}
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
        </>
    );
};

export default AddService;