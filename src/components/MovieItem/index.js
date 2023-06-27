// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import './index.css'
import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {each} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={each.thumbnailUrl} alt="thumbnail" className="button1" />
        }
        className="popup-content"
      >
        {close => (
          <div className="container6">
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
              className="close-button"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={each.videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
