import React, { useEffect, useState } from 'react';
import Sidebar from '../../../DashBoard/DashBoard/SideBar/Sidebar';

const AdminServiceList = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/getOrder')
        .then(res => res.json())
        .then(data=>setServiceData(data))
    },[])
    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Price</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">description</th>
                <th className="text-secondary" scope="col">status</th>
                </tr>
            </thead>
            <tbody>
                {
                  serviceData.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.price}</td>
                        <td>{service.service}</td>
                        <td>{service.description}</td>
                        <td>{service.status}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
            </div>
        </div>
        </div>
    );
};


export default AdminServiceList;