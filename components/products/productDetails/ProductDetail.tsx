import React from 'react'
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { IProduct } from '../../../types/ContentType'
import Content from '../../contents/Content'
interface IPage {
  productItem: IProduct
}
function ProductDetail({ productItem }: IPage) {
  const mobile = useMediaQuery(`(max-width: 360px)`);
  const slides = productItem.images?.map((item, i) => (
    <>
      <div className='product-card-item' >
        <div className='product-card-item-image' style={{ backgroundImage: "url(" + item.max + ")", backgroundSize: "cover", backgroundPosition: "center center" }}>

        </div>
      </div>
    </>
  ));
  return (
    <>
      <Content reverse={true} product={productItem} isRoute={false} />
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8'>
          {slides}
        </div>
      </div>
    </>

  )
}

export default ProductDetail