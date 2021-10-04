import './listItem.scss'
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons'
import { useState } from 'react'

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761'
  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={item.img} alt='item' />
      {isHovered && (
        <>
          <video src={item.trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>{item.duration}</span>
              <span className='limit'>+{item.limit}</span>
              <span>{item.year}</span>
            </div>
            <div className='desc'>{item.desc}</div>
            <div className='genre'>{item.genre}</div>
          </div>
        </>
      )}
    </div>
  )
}
