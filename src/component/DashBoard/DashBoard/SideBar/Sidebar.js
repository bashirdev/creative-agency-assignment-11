import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClipboardList,faCommentDots,faUserPlus, faPlus} from '@fortawesome/free-solid-svg-icons';
// import {  faCoffe } from '@fortawesome/free-regular-svg-icons';
import {   } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
//  const {id} = useParams()
    return (
    <>
      <section style={{height:"100vh"}} className='container'>
        <div>
        <img style={{height:'47px'}} src={logo} alt="" />
          </div>
          <div className='mt-5 '>
          <ul className="list-unstyled">
          <li className='m-3'>
                 <Link  to='adminServicelist'><FontAwesomeIcon className='text-center ml-4' icon={faClipboardList}/><span className='ml-2'>Service List</span>  </Link>
              </li>
              <li className='m-3'>
                 <Link  to='addservice'><FontAwesomeIcon className='text-center ml-4' icon={faPlus}/><span className='ml-2'>Add Service</span>  </Link>
              </li>
              <li className='m-3'>
                 <Link  to='addadmin'><FontAwesomeIcon className='text-center ml-4' icon={faUserPlus}/><span className='ml-2'>Make Admin</span>  </Link>
              </li>
          {/* customer */}
            <li className='m-3'>
                <Link  to='/order'><FontAwesomeIcon className='text-center' icon={faShoppingCart}/><span className='ml-2'>Oder</span>  </Link>
              </li>
              <li className='m-3'>
                 <Link  to='/serviceslist'><FontAwesomeIcon className='text-center ml-4' icon={faClipboardList}/><span   className='ml-2'>Service List</span>  </Link>
              </li>
              <li className='m-3'>
                <Link  to='review'><FontAwesomeIcon className='text-center' icon={faCommentDots}/> <span className='ml-2'>Review</span></Link>
              </li>

          </ul>
          </div>
          </section>
        </>
    );
};

export default Sidebar;