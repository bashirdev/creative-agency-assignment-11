import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory} from 'react-router-dom';

import { userContext } from '../../../../App';


const OrderForm = ({services}) => {
   const history=useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [file, setFile] = useState(null);
    const [newOrder , setNewOrder] = useState([])
    const { name, email, photoURL } = loggedInUser;
    
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: name,
            email: email,
          
        }
       
    });

  

const onSubmit = data => {
      
    const formData = new FormData();
    const image = JSON.stringify(data.image)
    formData.append('file', file);
    formData.append('image', image);
    formData.append('status', 'pending');
    formData.append('service', newOrder.name);
    formData.append('price', data.price);
    formData.append('email', loggedInUser.email);
    formData.append('name', loggedInUser.name);
    formData.append('description', data.description);
        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
             body:formData
         
        })
        .then(res=>res.json())
        .then(success=>{
            if (success) {
                alert('Order has been send successfully.');
                history.replace('/serviceslist')
            }
        })
       
    };
   

    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
 
    return (
        <div className='container-fluid mt-5'>
        <div>
  <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={loggedInUser.name} name="name" placeholder="Your Name/ company's name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={newOrder.name} name="service" placeholder="Graphic design" className="form-control" />
                        {errors.graphic && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} defaultValue={loggedInUser.email} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea type="text" defaultValue={newOrder.description} ref={register({ required: true })} name="description" placeholder="Project details" className="form-control" rows="3"></textarea>
                        {errors.message && <span className="text-danger">This field is required</span>}
                    </div>

                    <div class="form-group row">
                  <div className='col-md-6'>
                  <input ref={register({ required: true })}  type="text" className="form-control" name='price'   placeholder="Price" /> 
              </div>
            <div className='col-md-6'>
               <input  type="file" onChange={fileChange} className="form-control" name='image' placeholder="Upload project file" />       
             </div>        
         
        </div>
            <div className="form-group text-right">
                        <button  type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
       
      </div>
      </div>
    );
};

export default OrderForm;