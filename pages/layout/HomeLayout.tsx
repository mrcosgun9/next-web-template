import React from 'react'
import FullHeader from '../../components/header/FullHeader'
import { LayoutProps } from '../../types/Layout'


function HomeLayout({ children }: LayoutProps) {
  return (
    <>
      <FullHeader />
      <main>{children}</main>
      <div>Footer</div>

    </>

  )
}

export default HomeLayout