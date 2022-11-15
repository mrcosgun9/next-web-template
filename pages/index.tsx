import Head from 'next/head'
import Image from 'next/image'
import OurProducts from '../components/products/OurProducts'
import FullSlider from '../components/sliders/FullSlider'

export default function Home() {
  return (
    <>
      <div className='h-screen '>
        <FullSlider />
      </div>
      <OurProducts title='OUR PRODUCTS' />
      {/* <FullSlider /> */}
    </>
  )
}
