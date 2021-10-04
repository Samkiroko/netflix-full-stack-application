import { ArrowBackOutlined } from '@material-ui/icons'
import { useLocation } from 'react-router'
import './watch.scss'

export default function Watch() {
  const location = useLocation()
  const movie = location.movie
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <video className='video' autoPlay progress controls src={movie.video} />
    </div>
  )
}
