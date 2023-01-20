import React, {useState} from 'react';
import './App.css';
import Info from './Info';

function App() {
  const [infodata , setinfodata] = useState({
    name:"",
    email:"",
    web:"",
    image:"",
    gender:"",
   
 });

 const [data , setdata] = useState([]);
 const clear =(e)=>{
 
  setinfodata({
    name:"",
    email:"",
    web:"",
    image:"",
    gender:"",
    
 });

 }
const handleSubmit =(e)=>{
  e.preventDefault();
};
const handle = (e) =>{
  const {name,value} = e.target;
  setinfodata((olddata) =>{
    return {
      ...olddata,
      [name]: value,
    }
  });
 
};
const add=()=>{
setdata((old)=>{
  return [...old, infodata];
})
}
  return (
    <>
    <div className='first'>
      <h1 className='center'>Student Enrollment Form</h1>
    </div>
    <div className='contain'>
          <div className='one'>
          <form onSubmit={handleSubmit}>  
            <div className='set'>
              <h4> USERNAME</h4>  
              <input type="text" name='name' value={infodata.name} onChange={handle}/>  
              </div>
              <div className='set'>
              <h4> EMAIL</h4>  
              <input type="email" name='email' value={infodata.email} onChange={handle}/>  
              </div>
              <div className='set'>
              <h4> WEBSITE</h4>  
              <input type="text" name='web' value={infodata.web} onChange={handle}/>  
              </div>
              <div className='set'>
              <h4> IMAGE LINK</h4>  
              <input type="text" name='image' value={infodata.image} onChange={handle}/>  
              </div>
              <div className='set12'>
              <h4 className='set123'> GENDER</h4>  
              <div className='vertical'>
                <div>
              <input type="radio" className="gender" name="gender" value="Male" onChange={handle}/>Male  
              </div>
              <div>
              <input type="radio" className="gender" name="gender" value="Female" onChange={handle}/>Female </div>
              </div>
              </div>
              
              <div className='set1234'>
              <input type="submit" value="Enroll Student" className='right' onClick={add}/>    <input type="submit" value="Clear" className='left' onClick={clear}/>
              </div>
            </form>  
          </div>
          <div className='two'>
              <div>
                   <h2>Enrolled Students</h2>
              </div>
              <div>
             <table>  


                <tr>
                    <th>Description</th>
                    <th>Image</th>
                </tr>  
           {data.map((arr, index)=>{
            return <Info key={index} id={index} {...arr} />
           })}
                
       </table>
           </div>
          </div>
    </div>
    </>
  );
}

export default App;
