import React from 'react'

import Cards from './components/Cards/Cards'
import Products from './components/Products/Products'
import ProductBanner from './components/ProductBanner/ProductBanner'
import Banner from './components/Banner2/Banner'
import FeaturedPosts from './components/Featured/Featured'
import Hero from './components/Hero/Hero'

const page = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Products />
      <ProductBanner />
      <Banner />
      <FeaturedPosts />
    </div>
  )
}

export default page
