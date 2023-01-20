import React from 'react';
import './App.css';

const Info = ({name,email,web,image,gender}) =>{
    return(
        <>
         <tr>
                    <td className='big'>
                        <div className='big1'>
                        <h5>{name}</h5>
                        <h5>{email}</h5>
                        <h5>{web}</h5>
                        <h5>{gender}</h5> 
                       
                        </div>
                    </td>
                    <td className='small'><img src={image} alt="" width="100px" height="100px"/></td>
           </tr> 
        </>
    );

};
export default Info;