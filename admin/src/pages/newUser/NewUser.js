import React from 'react'
import './newUser.css'

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New user</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='joyshiku93' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='Joy Skiku' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Email:</label>
          <input type='email' placeholder='joy@gmail.com' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='*********' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Phone:</label>
          <input type='Number' placeholder='+254 7xx xxx xxx' />
        </div>{' '}
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='thindigua | Kiambu' />
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            {' '}
            <input type='radio' name='gender' id='male' value='male' />
            <label For='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label For='female'>Female</label>
            <input type='radio' name='gender' id='other' value='other' />
            <label For='others'>Other</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select name='active' id='active' className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  )
}

export default NewUser
