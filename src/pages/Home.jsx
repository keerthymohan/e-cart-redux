import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import userFetch from '../hooks/userFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItems } from '../redux/slices/wishlistSlice'
import { addItemtoCart } from '../redux/slices/cartslice'

function Home() {

  const data = userFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()

  return (
    <>
      <div className="pt-32 px-10 mb-10 md:grid grid-cols-4">
        {data?.length > 0 && data?.map((item) => (

          <div className="p-2">
            <div className="p-3 rounded shadow-lg">
              <img src={item.image} alt="no image" className='w-full h-48' />
              <h4 className='text-center text-2xl mt-3'>{item.title.slice(0,20)}</h4>
              <p className='text-justify mt-3'>{item.description.slice(0,96)}</p>
              <p className='text-2xl mt-3'>Price <span className='text-violet-600'>$ {item.price}</span></p>

              <div className='flex justify-between mt-3'>

                <button onClick={()=>dispatch(addWishlistItems(item))} className='px-5 py-3 rounded text-white bg-red-600'><FontAwesomeIcon icon={faHeart} /></button>

                <button onClick={()=>dispatch(addItemtoCart(item))} className='px-5 py-3 rounded text-white bg-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
              </div>
            </div>
          </div>
        ))
        }

      </div>
    </>
  )
}

export default Home