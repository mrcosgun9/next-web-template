import React from 'react'
import { Tabs } from '@mantine/core';
import ProductCard from './productCards/ProductCard';

interface IPage {
  title: string;
}
function OurProducts({ title }: IPage) {
  return (
    <>
      <div className='bg-white py-8'>
        <div className='container'>
          <div className='text-center font-black text-2xl text-ogb-200'>{title}</div>
          <div className='pt-4'>
            <Tabs defaultValue="gallery" >
              <Tabs.List position="center">
                <Tabs.Tab value="gallery">Interior</Tabs.Tab>
                <Tabs.Tab value="messages">Exterior</Tabs.Tab>
                <Tabs.Tab value="settings">Furniture</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="gallery" pt="xs" className='mt-3'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-8'>
                  <ProductCard src='/images/products/Armatur/close-up-water-flowing-from-shower-bathroom.jpg' title="Lorem Ipsum is simply dummy text" />
                  <ProductCard src='/images/products/Armatur/close-up-water-flowing-from-shower-bathroom.jpg' title="Lorem Ipsum is simply dummy text" />
                  <ProductCard src='/images/products/Armatur/close-up-water-flowing-from-shower-bathroom.jpg' title="Lorem Ipsum is simply dummy text" />
                  <ProductCard src='/images/products/Armatur/close-up-water-flowing-from-shower-bathroom.jpg' title="Lorem Ipsum is simply dummy text" />
                  <ProductCard src='/images/products/Armatur/close-up-water-flowing-from-shower-bathroom.jpg' title="Lorem Ipsum is simply dummy text" />
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="messages" pt="xs">
                Messages tab content
              </Tabs.Panel>

              <Tabs.Panel value="settings" pt="xs">
                Settings tab content
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>

    </>
  )
}

export default OurProducts