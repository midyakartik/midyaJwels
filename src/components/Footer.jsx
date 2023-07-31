import React from 'react'
import {FaReact} from 'react-icons/fa'
import {BsFacebook,BsYoutube,BsDiscord} from 'react-icons/bs'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='w-full bg-stone-100'>
      <div className='lg:w-3/5 w-11/12 m-auto p-5 flex justify-between'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-xl font-bold'>Rings</h1>
          <div className="text-xs bg-grey-700">Wedding ring</div>
        <div className="bg-grey-700 text-xs">Engagement ring</div>
        <div className="bg-grey-700 text-xs">Prong setting</div>
        <div className="bg-grey-700 text-xs">Pre-engagement ring</div>
        <div className="bg-grey-700 text-xs">Mood ring</div>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-xl font-bold'>Necklaces</h1>
          <div className="text-xs bg-grey-700">Locket</div>
          <div className="text-xs bg-grey-700">Pendant</div>
          <div className="text-xs bg-grey-700">Sautoir</div>
          <div className="text-xs bg-grey-700">Lariat</div>
          <div className="text-xs bg-grey-700">Riviere necklace</div>
          </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-xl font-bold'>Bracelets</h1>
          <div className="text-xs bg-grey-700">Chain Bracelet</div>
          <div className="text-xs bg-grey-700">Bangle</div>
          <div className="text-xs bg-grey-700">Friendship bracelet</div>
          <div className="text-xs bg-grey-700">Slap bracelet</div>
          <div className="text-xs bg-grey-700">Bead Bracelet</div>
          </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-xl font-bold'>Earrings</h1>
          <div className="text-xs bg-grey-700">Stud Earrings</div>
          <div className="text-xs bg-grey-700">Drop Earrings</div>
          <div className="text-xs bg-grey-700">Cluster Earrings</div>
          <div className="text-xs bg-grey-700">Dangle Earrings</div>
          <div className="text-xs bg-grey-700">Hoop Earrings</div>
        </div>
      </div>
      <div className='w-1/2 m-auto p-5 flex justify-center space-x-10 text-gray-700'>
        <FaReact size={'2rem'}/>
        <BsDiscord size={'2rem'}/>
        <BsFacebook size={'2rem'}/>
        <BsYoutube size={'2rem'}/>
        <AiFillInstagram size={'2rem'}/>
        <AiFillTwitterCircle size={'2rem'}/>
      </div>
    </footer>
  )
}

export default Footer