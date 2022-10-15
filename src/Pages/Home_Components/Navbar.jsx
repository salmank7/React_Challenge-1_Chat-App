import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  if(!currentUser){
    return <Navigate to ="/login" />
  }

  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar