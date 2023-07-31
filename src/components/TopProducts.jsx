import React, { useState } from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { product } from '../Apis/ProductAPI'
const TopProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const visibleProducts = product.slice(currentIndex, currentIndex + 6);
  const handleNext = () => {
    
    if(currentIndex !== product.length){
      setCurrentIndex(currentIndex + 1);
    }
   
  };
  
  const handlePrev = () => {
    if(currentIndex !== 0){
      setCurrentIndex(currentIndex - 1);
    }
    
  };
  return (
    <>
      <div className='w-full bg-stone-200 py-5 relative'>
        <div className='Top-products w-4/5 m-auto grid lg:grid-cols-6 grid-cols-3 gap-5 justify-items-center my-10'>
          {visibleProducts.map(data=> (
            <div className='product w-36 space-y-2'>
              <div className='w-36 h-36'>
                <img className='w-full h-full object-cover rounded-xl' src={data.img} alt="" />
              </div>
              <h1 className='font-semibold'>{data.description}</h1>
          </div>
          ))}
          
        </div>
        <div className='arrows absolute inset-y-1/2 flex justify-between w-full px-5'>
          <div className='p-2 py-4 bg-white rounded-full flex items-center' onClick={handlePrev}><AiOutlineLeft/></div>
          <div className='p-2 py-4 bg-white rounded-full flex items-center' onClick={handleNext}><AiOutlineRight/></div>
        </div>
      </div>
      
    </>
  )
}

export default TopProducts