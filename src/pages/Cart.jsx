import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {  clearCart, productCart, updateQuantity, changeCount, remove, getUserCart } from "../redux/cartSlice"
import plus from'../assets/PlusCircle.svg'
import minus from'../assets/MinusCircle.svg'
import { ProductDetails } from "../redux/productSlice"
import { Spinner } from 'react-bootstrap'

const Cart = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getUserCart())
  },[dispatch]) 
  const logined= useSelector((state)=>state.user.isLogin)
  const count=useSelector((state=>state.cart.productCount))
  const id=useSelector((state=>state.cart.productCartId))
  const data=useSelector((state)=>state.cart.addedProduct)
  const loading=useSelector((state)=>state.cart.loading)
  const totalCartPrice=useSelector((state)=>state.cart.cartDetails?.data.totalCartPrice)

useEffect(()=>{
  dispatch(updateQuantity({count , id}))
},[count])

return (
<div className="cart pb-5 position-relative">
<>
{logined?
<>
{loading?
<div className="spinner position-absolute w-100  ">
<Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
</div>
:
 <>
{data.length?
<div className="Container">
{data.map((item)=>
  <div className="product py-5 d-flex flex-column flex-md-row gap-md-5" key={item._id}>
<div className="left w-25">
<img src={item.product.imageCover} alt="" className="w-100 position-relative" height={250}    />
    </div>
      <div className="right w-75 text-center">

<h5 className="my-4  ">{item.product.category.name}</h5>
<h4 className="my-4 fw-normal   ">{item.product.title}</h4>
<div className="d-flex justify-content-between fs-5 mt-4 fw-bold"> price<span>${item.price}</span></div>
<div className="quantity d-flex justify-content-between fs-5 fw-bold mt-4"> quantity<div>
<img src={minus} alt="" onClick={()=>{
  dispatch(productCart(item.product._id));
dispatch(changeCount({count: item.count, operator:'minus'}));

}}/> 
<span className="mx-2">{item.count}</span> <img src={plus} alt="" onClick={()=>{
  dispatch(productCart(item.product._id));
dispatch(changeCount({count: item.count, operator:'plus'}));

}}/></div></div>
<button className="py-2 w-25  mt-3  " onClick={()=>{
dispatch(ProductDetails(item.product._id))
dispatch(remove())

}}>remove this item</button>
</div>
    </div>
  )
}
<div className="d-flex justify-content-between fs-5 my-5 fw-bold pt-3 border-top  ">total price<span>${totalCartPrice}</span></div>
<button className=" py-3 w-25 d-flex justify-content-center mx-auto mt-5" onClick={()=>dispatch(clearCart())}> delete all product</button>
</div>
:<h2 className="text-center  pt-5">no product in your cart</h2>
}
</> 
}
</>
:<h2 className=" text-center  pt-5">please login or signup first</h2>
}
</>
</div>
)
}

export default Cart
