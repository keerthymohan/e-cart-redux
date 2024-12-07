import React from 'react'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItems } from '../redux/slices/wishlistSlice'
import { addItemtoCart } from '../redux/slices/cartslice'


function Wishlist() {

  const wishlistArray = useSelector((state) => state.Wishlist)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addItemtoCart(item))
    dispatch(removeWishlistItems(item.id))
  }
    
  

  return (
    <>
      <div className='pt-36'>
        <h1 className='text-violet-600 text-center text-4xl mb-7'>Wishlist</h1>

        {wishlistArray?.length > 0 ?
          <div className=" px-10 mb-10 md:grid grid-cols-4">

            {wishlistArray?.map((item) => (
              <div className="p-2">
                <div className="p-3 rounded shadow-lg">
                  <img src={item.image} alt="no image" className='w-full h-48' />
                  <h4 className='text-center text-2xl mt-3'>{item.title.slice(0,20)}</h4>
                  <p className='text-justify mt-3'>{item.description.slice(0,96)}</p>
                  <p className='text-2xl mt-3'>Price <span className='text-violet-600'>$ {item.price}</span></p>

                  <div className='flex justify-between mt-3'>
                    <button onClick={()=>dispatch(removeWishlistItems(item?.id))} className='bg-red-600 text-white px-5 py-3 rounded'><FontAwesomeIcon icon={faTrash} /></button>
                    <button onClick={()=>wishes(item)} className='px-5 py-3 rounded text-white bg-green-600'><FontAwesomeIcon icon={faCartShopping} /></button>
                  </div>

                </div>
              </div>

            ))
            }

          </div>
          :
          <div className='w-full pt-10 mb-10 md:grid grid-cols-3'>
            <div></div>
            <div>
              <img src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?rs=1&pid=ImgDetMain" alt=" no image" className='w-full h-auto' />
            </div>
            <div></div>

          </div>
        }

      </div>
    </>
  )
}

export default Wishlist