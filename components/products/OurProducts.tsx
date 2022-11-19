import React from 'react'
import { Tabs } from '@mantine/core';
import ProductCard from './productCards/ProductCard';
import { IProduct } from '../../types/ContentType';
import { products } from '../../datas/products';

interface IPage {
  title: string;
}
function OurProducts({ title }: IPage) {
  const getProducts: IProduct[] = products;

  return (
    <>
      <div className='bg-white py-8'>
        <div className='container'>
          <div className='text-center font-black text-2xl text-ogb-200'>{title}</div>
          <div className='pt-4'>
            <Tabs defaultValue="1" >
              <Tabs.List position="center">
                <Tabs.Tab value="1">Other Stainless-Steel Products</Tabs.Tab>
                <Tabs.Tab value="2">Insulation Products</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="1" pt="xs" className='mt-3'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8'>
                  {getProducts.filter(x => x.category.id == 0 && x.url != "bathroom-accessories" && x.url != "plumbing-fixtures").map((item, i) => {
                    return <ProductCard key={i} src={item.img} title={item.title} description={item.description} url={"/product/" + item.url} />
                  })}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="2" pt="xs">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8'>
                  {getProducts.filter(x => x.category.id == 1).map((item, i) => {
                    return <ProductCard key={i} src={item.img} title={item.title} description={item.description} url={"/product/" + item.url} />
                  })}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </div>

    </>
  )
}

export default OurProducts