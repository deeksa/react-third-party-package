import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(e => e.categoryId === 'ACTION')
  const comedyMoviesList = moviesList.filter(e => e.categoryId === 'COMEDY')
  return (
    <div className="container1">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="image1"
        />
      </div>
      <div className="container5">
        <div>
          <h1 className="heading1">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
        <div>
          <h1 className="heading1">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
