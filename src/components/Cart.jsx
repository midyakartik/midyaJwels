import React from 'react'
import { useCookies } from 'react-cookie'
import { IoMdCart } from 'react-icons/io'
import { product } from '../Apis/ProductAPI'
import { AiOutlineDelete } from 'react-icons/ai'
const CartComp = () => {
  const [cookie,setCookie] =  useCookies(['cart']);
  const handle = (id)=>{
  const existingCookieData = cookie.cart || []; // If the cookie doesn't exist, initialize as an empty array

    // Remove the existing entry if the name matches
    const updatedCookieData = existingCookieData.filter(
      (item) => item.id !== id
    );
    setCookie('cart', JSON.stringify(updatedCookieData) , { path: '/' });
    
  }
  return (<>
    <div className='flex p-2 m-5 bg-slate-700 text-white items-center justify-between'>Cart <IoMdCart className="ml-auto"/> </div>
    {cookie.cart.map(data=>(
      <div className='flex flex-row m-auto max-w-fit p-5 border-b-2 border-gray-800'>
        
        <div className="p-2">id: {data.id}</div>
        <div className="p-2">Name: {data.name}</div>
        <div className="p-2">price: {data.price}</div>
        <div className="p-2 pr-0">X {data.quantity}</div>
        <div className="p-2 pl-0">= {data.price * data.quantity}</div>
        <AiOutlineDelete onClick={()=>handle(data.id)} className='m-auto'/>
      </div>
    ))}
    </>)
}

export default CartComp