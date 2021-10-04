import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className='video'
        autoPlay
        progress
        controls
        src='https://cdn.videvo.net/videvo_files/video/premium/getty_105/large_watermarked/istock-1083459308_preview.mp4'
      />
    </div>
  )
}
