import React, { useState } from 'react'
import './navbar.scss'
import neflix from '../../images/netflix_image.png'
import avatar from '../../images/Netflix_avatar.png'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
    return () => {
      window.onscroll = null
    }
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img src={neflix} alt='neflix logo' />
          <span>Homepage</span>
          <Link to='/series' className='link'>
            <span>Series</span>
          </Link>
          <Link to='/movies' className='link'>
            <span>Movies</span>
          </Link>

          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src={avatar} alt='avatar' />
          <div className='profile'>
            {' '}
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
