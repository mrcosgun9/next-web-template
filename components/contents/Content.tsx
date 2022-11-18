import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'tabler-icons-react'
import { IContent } from '../../types/ContentType';
interface IComponent {
  content: IContent;
  reverse?: boolean;
}

function Content({ reverse, content }: IComponent) {
  return (
    <div className=' w-full bg-gray-50 bg-opacity-80 py-12'>
      <div className='container'>
        <div className={'w-full md:w-3/4 mx-auto flex flex-wrap ' + (reverse ? "flex-row-reverse" : "flex-row")}>
          <div className={'w-full md:w-2/5 mb-4 md:mb-0 ' + (reverse ? "md:pr-3" : "md:pl-3")}>
            <div className='rounded overflow-hidden shadow-md'>  <img src={content.img} className='w-full' /></div>
          </div>
          <div className={'w-full md:w-3/5 flex flex-col align-middle items-start justify-center ' + (reverse ? "md:pr-5" : "md:pl-5")}>
            <h1 className='text-ogb-200 text-4xl font-extrabold pb-6'>{content.title}</h1>
            <p className='pb-3 text-gray-600 leading-8'>
              {content.description}
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