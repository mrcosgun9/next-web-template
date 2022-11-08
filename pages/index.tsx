import Head from 'next/head'
import Image from 'next/image'
import FullSlider from '../components/sliders/FullSlider'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-blue-600'>
        <FullSlider />
      </div>
      {/* <FullSlider /> */}
    </>
  )
}
