import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [userName,setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,password});
    }

  return (
    <div className='flex gap-3 m-2'>
        <input 
        type="text" 
        placeholder='Enter User Name'
        value={userName} 
        className='border border-black p-2'
        onChange={(e)=>{setUserName(e.target.value)}}/>

        <input 
        type="text" 
        placeholder='Enter Password'
        value={password} 
        className='border border-black p-2'
        onChange={(e)=>{setPassword(e.target.value)}}/>

        <button className='bg-blue-700 p-2 rounded-md text-white' onClick={handleSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Login