
import AboutUs from '../components/abouts/AboutUs';
import Contact from '../components/contacts/Contact';
import Content from '../components/contents/Content';
import OurProducts from '../components/products/OurProducts';
import FullSlider from '../components/sliders/FullSlider';

export default function Home() {
  return (
    <>
      <div className='h-screen '>
        <FullSlider />
      </div>
      <OurProducts title='OUR PRODUCTS' />
      <Content reverse={true} />
      <Content reverse={false} />
      <AboutUs />
      <Contact />
    </>
  )
}
