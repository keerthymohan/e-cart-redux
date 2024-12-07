import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
faTwitter



function Footer() {
  return (
    <>
      <div className="py-12 md:px-14 px-10 bg-violet-900 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white">

        <div>
          <h2 className='text-3xl'> <FontAwesomeIcon icon={faCartShopping} className='me-3' /> E-CART</h2>
          <p className='mt-6 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nam accusamus corrupti repudiandae, iste in natus quas distinctio rem quo est doloremque laborum voluptates cupiditate.</p>
        </div>

        <div className='md:flex justify-center md:mt-0 mt-10'>
          <div>
            <h2 className='text-3xl'>LINKS</h2>
            <Link to={'/'}><p className='mt-6'>Home</p></Link>
            <Link to={'/Wishlist'}><p className='mt-3'>Wishlist</p></Link>
            <Link to={'/Cart'}><p className='mt-3'>Cart</p></Link>
          </div>
        </div>

        <div className='md:flex justify-center md:mt-0 mt-10'>
          <div>
            <h2 className='text-3xl'>GUIDES</h2>
            <p className='mt-6'>React</p>
            <p className='mt-3'>React Bootstrap</p>
            <p className='mt-3'>Bootswatch</p>
          </div>
        </div>

        <div className='md:px-10 md:mt-0 mt-10'>
          <h2 className='text-3xl'>CONTACT US</h2>
          <div className="flex mt-6">
            <input type="text" placeholder='Email id' className='p-3 rounded w-full' />
            <button className='p-3 bg-orange-600 ms-3 rounded'>Subscribe</button>
          </div>
          <div className="flex justify-between mt-6">
            <FontAwesomeIcon icon={faTwitter} className='text-3xl' />
            <FontAwesomeIcon icon={faLinkedin} className='text-3xl' />
            <FontAwesomeIcon icon={faInstagram} className='text-3xl' />
            <FontAwesomeIcon icon={faFacebook} className='text-3xl' />
          </div>
        </div>

      </div>



    </>
  )
}

export default Footer