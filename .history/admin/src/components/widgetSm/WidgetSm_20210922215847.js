import React from 'react'
import './widgetSm.css'
import avatar from '../../images/avatar2.jpg'
import { Visibility } from '@material-ui/icons'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
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
        </li>{' '}
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
        </li>{' '}
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
        </li>{' '}
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
        </li>{' '}
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
      </ul>
    </div>
  )
}

export default WidgetSm
