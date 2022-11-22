import React from 'react'
import SocialMedia from '../elements/SocialMedia'

function FullFooter() {
  return (
    <div className='w-full bg-white bg-opacity-80 relative px-5 md:px-0'>
      <div className='container mx-auto flex justify-between align-middle items-center py-5'>
        <div className='text-xs md:text-sm'>OGB Global | All Rights Reserved. 2022</div>
        <div className='flex justify-end'>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default FullFooter