import React from 'react'
import SocialMedia from '../../components/elements/SocialMedia'
import FullFooter from '../../components/footer/FullFooter'
import FullHeader from '../../components/header/FullHeader'
import { LayoutProps } from '../../types/Layout'


function HomeLayout({ children }: LayoutProps) {
  return (
    <>
      <FullHeader />
      <main className='min-h-[calc(100vh-60px)]'>{children}</main>
      <FullFooter />
    </>

  )
}

export default HomeLayout