import React from 'react';
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import Collections from '../components/Collections';
import Promotions from '../components/Promotions';
import LoyaltyBonus from '../components/LoyaltyBonus';
import BrandStory from '../components/BrandStory';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
      <Collections />
      <Promotions />
      <LoyaltyBonus />
      <BrandStory />
    </>
  );
};

export default HomePage;