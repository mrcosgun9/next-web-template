
import AboutUs from '../components/abouts/AboutUs';
import Contact from '../components/contacts/Contact';
import Content from '../components/contents/Content';
import OurProducts from '../components/products/OurProducts';
import FullSlider from '../components/sliders/FullSlider';
import { IContent } from '../types/ContentType';

export default function Home() {
  const ContentProduct: IContent[] = [
    {
      img: "/images/products/BathroomAccessories/trash-bin-bathroom-cleaning-concept.jpg",
      description: "These products are utilized very intensely in our daily lives. They are made out of stainless steel, wood and yellow metal. Two main categories exist in these products - home-type and hotel-industrial type. Shower Caddies, Toilet Paper Holders, Bathroom Hardware, Soap and Lotion Dispensers, Toilet Brushes are considered primary  home-type accessories. Trash Cans, Standing Bins, Paper Tower Holders, Grab Bars for the Handicapped are considered primary hotel-industrial type accessories.",
      link: "/",
      title: "Bathroom Accessories"
    },
    {
      img: "/images/products/PlumbingFixtures/modern-metal-faucet-bathroom.jpg",
      description: "These products that are connected to the plumbing system and deliver water to the end-user are considered as vital devices in a house or business. They are installed in kitchens, bathrooms and showers.",
      link: "/",
      title: "Plumbing Fixtures"
    }
  ];
  return (
    <>
      <div className='h-screen '>
        <FullSlider />
      </div>
      <Content reverse={true} content={ContentProduct[0]} />
      <OurProducts title='OUR PRODUCTS' />
      <Content reverse={false} content={ContentProduct[1]} />
      <AboutUs />
      <Contact />
    </>
  )
}
