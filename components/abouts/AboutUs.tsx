import React from 'react'
import { Atom2, BrandHipchat, ExclamationMark, Packages, ShoppingCart, TruckLoading } from 'tabler-icons-react'
interface IPage {
  title?: string;
}
function AboutUs({ title }: IPage) {
  return (
    <div className='w-full py-12'>
      <div className='container'>
        <h1 className='font-extrabold text-ogb-200 text-center'>{title} <label className='text-ogb-400'>OGB GLOBAL</label></h1>
        <div className='w-full flex flex-wrap mt-8'>
          <div className='w-full px-3 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <ExclamationMark size={230}
                strokeWidth={3} className="absolute text-ogb-400 -right-20 -bottom-6 z-0 opacity-30 rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Who We Are</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                We are an enthusiactic group of professionals sourcing and exporting best-value products from the Turkish market.
                Given our engineering background and high level of technical competency, we are able to perform extensive research and analysis to ensure the products we promote create long-term value to our customers
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <TruckLoading size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>What We Do</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                We market and sell very specific and unique products manufactured in Turkey.
                The manufacturars we represent produce their products in their modern factories with regard to high quality.
                We only work with a select group of reputable manufacturars with sufficient production capacity that can meet deadlines.
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <Atom2 size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Our Values</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                Integrity is the foundation for everything we do.
                We are commited to honesty, trust, and transparency.
                We do the right thing — even when no one is watching.
                We are trustworthy and act in good faith.
                We make responsible decisions based on professional standards.
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <BrandHipchat size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Our Mentality</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                We do business for the sole purpose of long-term partnering based on honesty, reliability and continuity.
                Perfectly addressing our customers’ needs promptly is the fundamental criteria of business success for our company.
                We challenge the status quo with open minds, focus, and speed.
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <Packages size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Our Products</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                We market and sell durable and quality products that deliver best-value.
                With continuous research and analysis; we continuously add new products to our portfolio.
                The products we offer showcase features of functionality, durability, aestetics and affordability at an optimal level.
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <ShoppingCart size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>How to Buy
              </h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                Let us know your needs. You will receive a response in the same day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs