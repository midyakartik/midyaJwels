import React, { useState } from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie';
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const  data  = location.state;
  //console.log(data);
  const [cookies, setCookie] = useCookies(['cart']);
  
  const handle = () => {
    const existingCookieData = cookies.cart || []; // If the cookie doesn't exist, initialize as an empty array
    
    // Check if the product already exists in the cookie
    const existingProductIndex = existingCookieData.findIndex(
      (item) => item.id === data.id 
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      existingCookieData[existingProductIndex].quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the data array
      existingCookieData.push({id: data.id, name: data.name, price: data.price, quantity });
    }

    setCookie('cart', JSON.stringify(existingCookieData) , { path: '/' });
    console.log(cookies.cart);
 };
  return (
    <div className='w-3/5 m-auto'>
      <div className='flex items-center my-10 space-x-10'>
        <div className='product-img w-[500px] h-[500px]'>
          <img className='w-full h-full object-cover' src={data.img} alt="" />
        </div>
        <div className='product-detail w-1/2 space-y-10'>
          <h1 className='text-4xl font-bold'>{data.name}</h1>
          <h2 className='text-xl font-semibold'>{data.price}</h2>
          <p>{data.description}
          </p>
          <div className='stars flex space-x-2'>
            <div><AiFillStar/></div>
            <div><AiFillStar/></div>
            <div><AiFillStar/></div>
            <div><AiOutlineStar/></div>
            <div><AiOutlineStar/></div>
          </div>
          <input className='outline-0 w-1/3 px-2 border-2 border-gray-800' type="Number" id='amount' value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='1'/>
          <div >
            <button onClick={handle} className='border border-stone-800 m-4 bg-stone-800 text-white px-5 py-2'>Add To Cart</button>
            <button className='border border-stone-800 m-4 px-5 py-2'>Add To Favorites</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail