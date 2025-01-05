import { useSelector } from 'react-redux';
import useNowPlayingmovies from '../hooks/useNowPlayingmovies'
import Gpt from './GptPage';
import Header from './Header'
import MainMovieContainer from './MainMovieContainer';
import MovieContainer from './MovieContainer';



const Browse = () => {
  useNowPlayingmovies();
  const toggleGptPage= useSelector(store=>store.gpt.showGptSearchBar);
  return (
    
    <div>
    <Header/>
    {toggleGptPage?<Gpt/> :  <><MainMovieContainer />
      <MovieContainer/></>}
   
      
    </div>
  )
}

export default Browse;
