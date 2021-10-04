import React, { useEffect, useState } from 'react'
import './widgetSm.css'
import avatar from '../../images/avatar2.jpg'
import { Visibility } from '@material-ui/icons'
import { Axios } from 'axios'

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await Axios.get('/users?new=true', {
          header: {
            token:
              ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4Zjk4MGE2MjJlMzU4ZjdlNTNmNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMzMjk5NTgsImV4cCI6MTYzMzc2MTk1OH0.bUmPsPPa33yKUnSdBNVK5ksihdVfSAUpodiTIUMD0DQ',
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
            <img src={avatar} alt='avatar' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>Sam kiroko</span>
              <span className='widgetSmUserTitle'>software Engineer</span>
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
