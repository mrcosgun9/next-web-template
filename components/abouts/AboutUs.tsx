import React from 'react'
import { Atom2, BrandHipchat, ExclamationMark, Packages, ShoppingCart, TruckLoading } from 'tabler-icons-react'

function AboutUs() {
  return (
    <div className='w-full py-12'>
      <div className='container'>
        <h1 className='font-extrabold text-ogb-200 text-center'>ABOUT <label className='text-ogb-400'>OGB GLOBAL</label></h1>
        <div className='w-full flex flex-wrap mt-8'>

          <div className='w-full px-3 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <ExclamationMark size={230}
                strokeWidth={3} className="absolute text-ogb-400 -right-20 -bottom-6 z-0 opacity-30 rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Who We Are</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>We are a Turkey-based company, established with one clear mission in mind, offering furniture industry, interior designers and business partners the latest trends in each product that represents undivided attention to acknowledged quality standards, service and great efficiency in performance and after sales service.</p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <TruckLoading size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>What We Do</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                Our streamline business is supplying furniture, decoration material and surfaces. The currently available product range is just a part of larger one that is yet to come.
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <Atom2 size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Our Values</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                Integrity Honesty Sustainability Respect to Environment Trust Commitment to Business Partners Solution Oriented Mentality Continuous Improvement Quality Teamwork
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <BrandHipchat size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Our Mentality</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                From start to finish, our mentality is taking an active and careful role in assisting our business partners on all levels from supply of high quality products on time to supporting them with all our previous experience and current knowledge in pursuit of perfect results.
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <Packages size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>Our Products</h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                We are aiming to supply a wide variety of furniture, accesories and surface elements to the furniture and ho-re-ca industries as well as the end customers.
              </p>
            </div>
            <div className='bg-white shadow-md rounded p-6 h-72 relative overflow-hidden'>
              <ShoppingCart size={230}
                strokeWidth={3} className="absolute text-ogb-400 right-0 -bottom-6 z-0 opacity-30 -rotate-12" />
              <h1 className='text-2xl font-black text-ogb-200'>How to Buy
              </h1>
              <div className='w-1/3 h-1 bg-ogb-400 my-2'></div>
              <p className='text-gray-500'>
                Leave us a message and we will get back to you within 24 hrs!


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs