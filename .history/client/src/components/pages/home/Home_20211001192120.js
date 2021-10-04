import React, { useEffect, useState } from 'react'
import Featured from '../../featured/Featured'
import Navbar from '../../navbar/Navbar'
import './home.scss'
import List from '../../list/List'
import axios from 'axios'

const Home = ({ type }) => {
  // Fetching movie list using useState
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`)
        console.log(res)
        // setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomLists()
  }, [type, genre])
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
