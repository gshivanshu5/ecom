import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
// import Category from '../../components/category/Category'
import Filter from '../../components/filter/Filter'
import HeroSection from '../../components/herosection/HeroSection'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
// import Testimonial from '../../components/testimonial/Testimonial'

function Home() {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart)

  const addCart = () => {
    dispatch(addToCart("shirt"));
    console.log(cartItem);
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
    console.log(cartItem);
  }

  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={() => addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={() => deleteCart()}>del</button>
      </div> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      {/* <Testimonial /> */}
    </Layout>
  )
}

export default Home