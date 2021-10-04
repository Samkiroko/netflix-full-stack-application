import React, { useEffect, useState } from 'react'
import './widgetSm.css'
import avatar from '../../images/avatar-1.jpeg'
import { Visibility } from '@material-ui/icons'
import axios from 'axios'

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4Zjk4MGE2MjJlMzU4ZjdlNTNmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzMzNjUzNywiZXhwIjoxNjMzNzY4NTM3fQ.tKRp52Z9h7t0PnMhxk6M2xdautmuTG_s1EXBwBBuGAA',
          },
        })
        setNewUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNewUsers()
  }, [])
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {newUsers.map((user) => (
          <li className='widgetSmListItem'>
            <img src={user.profilePic || avatar} alt='avatar' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm
