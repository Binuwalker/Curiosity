import React from 'react';
import Catalogue from '../components/Catalogue';
import CountriesList from '../components/CountriesList';
import TopBanner from '../components/TopBanner';

const Home = () => {
  return (
    <div>
      <TopBanner />
      <CountriesList />
      <Catalogue />
    </div>
  )
}

export default Home;