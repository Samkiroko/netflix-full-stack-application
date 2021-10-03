import React from 'react'
import './user.css'
import avatar from '../../images/avatar2.jpg'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'
const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src={avatar} alt='avatar' className='userShowImg' />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Joy Shiku</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>Joyshiku93</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>7.12.1993</span>
            </div>{' '}
            <span className='userShowTitle'>Contact details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+254 7333 3333</span>
            </div>{' '}
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>Joyshiku@gmail.com</span>
            </div>{' '}
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>Thindigua | kiambu</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <div className='userUpdateTitle'>Edit</div>
          <form action='' className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input type='text' placeholder='Joyshiku93' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input type='text' placeholder='Joy Shiku' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input type='email' placeholder='Joyshiku@gmail.com' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input type='number' placeholder='+2547 XXXXX' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Birthday</label>
                <input type='date' placeholder='7.12.1993' className='userUpdateInput' />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input type='text' placeholder='Thindigua | Kiambu' className='userUpdateInput' />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img src={avatar} alt='avatar' className='userUpdateImg' />
                <label htmlFor='file'>
                  <Publish />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
