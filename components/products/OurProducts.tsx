import React from 'react'
interface IPage {
  title: string;

}
function OurProducts({ title }: IPage) {
  return (
    <>
      <div className='bg-white py-8'>
        <div className='container'>
          <div className='text-center font-black text-2xl'>{title}</div>
          <div className='pt-4'>
            <ul>
              <li>Interior</li>
              <li>Furniture</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default OurProducts