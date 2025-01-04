import useNowPlayingmovies from '../hooks/useNowPlayingmovies'
import Header from './Header'
import MainMovieContainer from './MainMovieContainer';
import MovieContainer from './MovieContainer';


const Browse = () => {
  useNowPlayingmovies();
  return (
    
    <div>
    <Header/>
    <MainMovieContainer />
    <MovieContainer/>
      
    </div>
  )
}

export default Browse;
