import React from 'react'
import { Breadcrumbs, Anchor } from '@mantine/core'
import { Circle } from 'tabler-icons-react'
interface IPage {
  title: string;
  src: string;
  imageClass?: string;
}
function PageHeader({ title, src, imageClass }: IPage) {
  return (
    <div className='page-header'>
      <div className='w-full h-full absolute top-0 left-0 flex align-middle items-center'>
        <img src={src} className={"w-full " + imageClass} />
      </div>
      <div className='container flex flex-col align-middle items-center justify-center h-full relative z-30'>
        <h1 className='w-full text-center font-black text-ogb-200 uppercase'>{title}</h1>
        {/*<div className='w-full flex justify-center mt-3'>
          <Breadcrumbs separator={<Circle size={8} />}>
            <Anchor href={"/"} className='text-ogb-100'>
              HOME
            </Anchor>
            <Anchor className='text-ogb-100'>
              {title}
            </Anchor>
          </Breadcrumbs>
        </div> */}
      </div>
      <div className='page-header-bg'></div>
    </div>
  )
}

export default PageHeader