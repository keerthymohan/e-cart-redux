import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removecartitem } from '../redux/slices/cartslice'
import { useEffect } from 'react'



function Cart() {

  const [total,setTotal] = useState()

  const cartArray = useSelector((state) => state.cartList)
  console.log(cartArray);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray?.length>0){
      setTotal(cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2)
    )
    }
  }

  const handleCheckout = ()=>{
    alert('order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])


  return (
    <>
      <div className="pt-32">
        <h1 className='text-violet-600 text-center text-4xl mb-5'>Cart</h1>
        {cartArray?.length > 0 ?
          <div className='md:grid grid-cols-[2fr_1fr] m-10'>

            <div className='p-3'>
              <table className='w-full border border-gray-700'>
                <thead>
                  <tr>
                    <th className='border border-gray-100 p-3 bg-violet-600'>#</th>
                    <th className='border border-gray-100 p-3 bg-violet-600'>Title</th>
                    <th className='border border-gray-100 p-3 bg-violet-600'>Image</th>
                    <th className='border border-gray-100 p-3 bg-violet-600'>Price</th>
                    <th className='border border-gray-100 p-3 bg-violet-600'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray?.map((item, index) => (
                    <tr>
                      <td className='border border-gray-200 p-3'>{index + 1}</td>
                      <td className='border border-gray-200 p-3'>{item.title.slice(0, 27)}</td>
                      <td className='border border-gray-200 p-3 flex justify-center'><img src={item.image} alt=" no image" style={{ height: '100px', width: '150px' }} /></td>
                      <td className='border border-gray-200 p-3 text-violet-600'>{item.price}</td>
                      <td className='border border-gray-200 p-3 text-center'><button onClick={()=>dispatch(removecartitem(item?.id))} className='bg-red-600 text-white px-5 py-3 rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
                    </tr>

                  ))

                  }
                </tbody>
              </table>
            </div>

            <div className="pt-5 px-10">
              <div className='shadow-lg p-5'>
                <h1 className='text-center text-3xl'>Cart summary</h1>
                <p className='mt-4 text-xl'>Total number of Products : {cartArray?.length}</p>
                <p className='mt-4 text-xl'>Grand Total : $ {total}</p>
                <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-5 hover:border hover:bg-white hover:border-green-600 hover:text-green-600'>Check out</button>

              </div>
            </div>

          </div>

          :
          <div className='w-full pt-10 mb-10 md:grid grid-cols-3 mt-5'>
            <div></div>
            <div className='text-center'>
              <img src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" className='w-full h-auto' />
              <Link to={'/'}><button className='bg-green-600 text-white mt-4 p-3 hover:border hover:bg-white hover:border-green-600 hover:text-green-600 rounded'>Back Home <FontAwesomeIcon icon={faArrowLeft} className='ms-2' /></button></Link>
            </div>
            <div></div>

          </div>}

      </div>
    </>
  )
}

export default Cart