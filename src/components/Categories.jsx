import React from 'react'
import {IoShirtOutline,IoGlassesSharp,IoWatch} from 'react-icons/io5'
import { category } from '../Apis/CategoryAPI'
const Categories = () => {
  
  return (
    <div className='w-11/12 m-auto'>
      <div className='mt-10 grid grid-cols-4  justify-items-center'>
        {category.map(data => (
          <div className='space-y-2 text-center'>
          <div className='w-24 h-24 bg-stone-200 flex items-center justify-center rounded-md'>
            <img src={data.img} className='w-full m-auto h-full' alt="" srcset="" />
          </div>
          <h1 className='font-semibold'>{data.name}</h1>
        </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default Categories