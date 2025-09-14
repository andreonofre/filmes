import { useEffect, useState } from 'react';
import api from '../../services/api';


import { 
  Container
} from './homeStyle';

// URL_API: movie/now_playing?api_key=0ac9705aaf63159f0dd6dee108a606ae&language=pt-BR


const Home = () => {
  const [films, setFilms] = useState([]);


  useEffect(()=>{


    const loadFilms = async() => {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "0ac9705aaf63159f0dd6dee108a606ae",
          language: "pt-BR",
          page: 1
        }
      });

      console.log("RESPONSE: ", response.data.results[0].original_title);
    };

    loadFilms();

  }, []);


  return (
    <Container>Home</Container>
  );
};

export default Home;