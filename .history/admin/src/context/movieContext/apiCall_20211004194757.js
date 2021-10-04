import getMoviesStart from './MovieAction'
import axios from 'axios'

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart())
  try {
    const res = await axios.get('/movies')
  } catch (err) {}
}
