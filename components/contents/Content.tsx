import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'tabler-icons-react'
interface IComponent {
  reverse?: boolean;
}
function Content({ reverse }: IComponent) {
  return (
    <div className=' w-full bg-gray-50 bg-opacity-80 py-12'>
      <div className='container'>
        <div className={'w-full md:w-3/4 mx-auto flex flex-wrap ' + (reverse ? "flex-row-reverse" : "flex-row")}>
          <div className={'w-full md:w-2/5 mb-4 md:mb-0 ' + (reverse ? "md:pr-3" : "md:pl-3")}>
            <div className='rounded overflow-hidden shadow-md'>  <img src='/images/products/Armatur/new-modern-steel-faucet-kitchen.jpg' className='w-full' /></div>
          </div>
          <div className={'w-full md:w-3/5 flex flex-col align-middle items-start justify-center ' + (reverse ? "md:pr-5" : "md:pl-5")}>
            <h1 className='text-ogb-200 text-4xl font-extrabold pb-6'>New Modern Steel Faucet Kitchen</h1>
            <p className='pb-1 text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, explicabo. Illo dolore dolores autem nulla quasi porro repudiandae atque perferendis necessitatibus corporis omnis, consectetur molestias eaque illum debitis? Deleniti, tempora.
            </p>
            <p className='pb-3 text-gray-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, explicabo. Illo dolore dolores autem nulla quasi porro repudiandae atque perferendis necessitatibus corporis omnis, consectetur molestias eaque illum debitis? Deleniti, tempora.
            </p>
            <div className='w-full border-b-2 border-gray-100 mb-3'></div>
            <Link className='link link-primary' href={"/"}>
              Hook me up
              <ChevronRight color='#2b475c' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content