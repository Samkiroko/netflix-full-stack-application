import React from 'react'
import Featured from '../../featured/Featured'
import Navbar from '../../navbar/Navbar'
import './home.scss'
import List from '../../list/List'

const Home = ({ type }) => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home
