import React, { useEffect, useState } from 'react'
import Featured from '../../featured/Featured'
import Navbar from '../../navbar/Navbar'
import './home.scss'
import List from '../../list/List'
import axios from 'axios'

const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4Zjk4MGE2MjJlMzU4ZjdlNTNmNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMxNTI1MzMsImV4cCI6MTYzMzU4NDUzM30.w3o5IFnuGATM_kQ0Od-dPAnDpwpDJ0MrQdyFVUTRQD8',
          },
        })
        setLists(res.data)
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
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home
