import React, { useEffect, useState } from 'react'
import s from "./style.module.css";
import {TVShowAPI} from './api/tv-show.js';
import { images_base_url } from './config.js';
import TVShowDetail from './components/TVShowDetail';
import Logo from './components/Logo/Logo';
import logoImg from './assets/logo.png'
import TVShowListItem from './components/TVShowListItem/TVShowListItem';
import TVShowList from './components/TVShowList/TVShowList';
import SearchBar from './components/SearchBar/SearchBar';


const App = () => {

  const [currentTVShow, setCurrentTVShow] = useState([]);
  const [recommendedList, setRecommendedList] = useState([]);

  const fetchPopulars = async () => {
    const popularTVShowList = await TVShowAPI.fetchPopular();
    if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0])
    }
  }

  const fetchRecommended = async (tvShowId) => {
    const recommendedTVShowList = await TVShowAPI.fetchRecommended(tvShowId);
    if (recommendedTVShowList.length > 0) {
        setRecommendedList(recommendedTVShowList.slice(0,10));
    }
  }


  useEffect(()=> {
    fetchPopulars();
  }, []);

  useEffect(()=> {
    if (currentTVShow) {
      fetchRecommended(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(recommendedList)

  const updateCurrentTVShow =(tvShow) => {
    setCurrentTVShow(tvShow)

  }

  const fetchByTitle = async (title) => {
    const searchResponse = await TVShowAPI.fetchByTitle(title)
    if (searchResponse.length > 0) {
      setCurrentTVShow(searchResponse[0]);
    }
  }

  return (
    <div className={s.main_container} style={{
        background: currentTVShow? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${images_base_url}${currentTVShow.backdrop_path}") no-repeat center / cover`: "black"}}>
        <div className={s.header}>
            <div className='row'>
                <div className='col-4'>
                    <Logo img={logoImg} title="Whatowatch" subtitle="Find a show you like" />
                </div>
                <div className='col-md-12 col-lg-4'>
                    <SearchBar onSubmit={fetchByTitle} />
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className={s.recommended_tv_shows}>
          {currentTVShow && <TVShowList onClickItem={updateCurrentTVShow} TVShowList={recommendedList} />}
        </div>
    </div>
  )
}

export default App