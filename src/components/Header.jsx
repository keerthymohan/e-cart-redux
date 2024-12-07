import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const array = useSelector((state)=>state.Wishlist)
  const cartarray = useSelector((state)=>state.cartList)

  const [show, setShow] = useState(false)


  return (
    <nav className='bg-violet-900 p-5 text-white w-full fixed'>
      <div className="md:flex item-center md:px-10 px-5">
      <div className='flex w-full'>
        <Link to={'/'}><h2 className='text-3xl'> <FontAwesomeIcon icon={faCartShopping} className='me-2' /> E-CART</h2></Link>

        <button onClick={()=>setShow(!show)} className='border border-white p-3 ms-auto rounded md:hidden'><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></button>
      </div>

      {show && <ul className='flex mt-5 md:hidden'>
        <li>
          <Link to={'/Wishlist'}><button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{color: "#ed0202",}} className='me-2' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{array?.length}</span> </button></Link> 
        </li>

        <li>
          <Link to={'/Cart'}><button className='border border-white p-3 rounded ms-3  hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faCartShopping} style={{color: "#05f057",}} className='me-2'/> Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartarray?.length}</span> </button> </Link>
        </li>
      </ul>}

      <ul className='ms-auto md:flex hidden'>
        <li>
          <Link to={'/Wishlist'}><button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{color: "#ed0202",}} className='me-2' />Wishlist <span className='border bg-white px-1 rounded text-black ms-2'>{array?.length}</span> </button></Link> 
        </li>

        <li>
          <Link to={'/Cart'}><button className='border border-white p-3 rounded ms-3  hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faCartShopping} style={{color: "#05f057",}} className='me-2'/> Cart <span className='border bg-white px-1 rounded text-black ms-2'>{cartarray?.length}</span> </button> </Link>
        </li>
      </ul>

      </div>

    

    </nav>
  )
}

export default Header