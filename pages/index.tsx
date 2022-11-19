
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AboutUs from '../components/abouts/AboutUs';
import Contact from '../components/contacts/Contact';
import Content from '../components/contents/Content';
import OurProducts from '../components/products/OurProducts';
import FullSlider from '../components/sliders/FullSlider';
import { products } from '../datas/products';
export default function Home() {
  const router = useRouter()
  const getProducts = products;
  return (
    <>
      <div className='h-screen '>
        <FullSlider />
      </div>
      <Content reverse={true} product={getProducts.find(x => x.url == "bathroom-accessories")!} />
      <OurProducts title='OUR PRODUCTS' />
      <Content reverse={false} product={getProducts.find(x => x.url == "plumbing-fixtures")!} />
      <AboutUs />
      <Contact />
    </>
  )
}
