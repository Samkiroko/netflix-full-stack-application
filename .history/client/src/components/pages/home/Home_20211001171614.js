import React, { useEffect, useState } from 'react'
import Featured from '../../featured/Featured'
import Navbar from '../../navbar/Navbar'
import './home.scss'
import List from '../../list/List'
import axios from 'axios'

const Home = ({ type }) => {
  // Fetching movie list using useState
  const [lists, setLists] = useState([])
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`list ${type && '?type=' + type} & {genre && "genre=" + genre}`)
      } catch (err) {}
    }
  })
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
