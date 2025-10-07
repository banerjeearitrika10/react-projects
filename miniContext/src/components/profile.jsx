import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    console.log(user);
    if(!user) return (<div className='text-2xl font-bold text-red-700'>please login</div>);

  return (
    <div className='text-3xl text-white bg-gray-500 text-center'>Welcome {user.userName}</div>
  )
}

export default Profile