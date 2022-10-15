import React from 'react'
import Chat from './Home_Components/Chat'
import Sidebar from './Home_Components/Sidebar'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        < Sidebar />
        < Chat />
      </div>
    </div>
  )
}

export default Home