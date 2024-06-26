import { useDispatch, useSelector } from "react-redux"
import { ProductDetails, fetchProductData } from "../redux/productSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons"
import { addToCart } from "../redux/cartSlice"
import { useState } from "react"

const MostProducts = () => {
const dispatch=useDispatch()
const [alert, setAlert] = useState(false)
const logined=useSelector((state)=>state.user.isLogin)

  const products=useSelector((state)=>state.products.products?.data ||[])
  const shuffledProducts = [...products].sort(() => Math.floor(Math.random()*3)-1 ).slice(0,8);
return (
  <div className="mostProducts">
  <div className=" my-5 d-flex  flex-wrap gap-5 justify-content-center">

  {shuffledProducts?
    shuffledProducts.map((item)=>

      <div className="product p-2 d-flex flex-column justify-content-between" key={item._id}>
    <img src={item.imageCover} alt="" className="w-100 position-relative" height={250} onClick={()=>{dispatch(ProductDetails(item._id))
        dispatch(fetchProductData())
      }}/>
    <h1 className="my-4 fs-5 mx-2">{item.title}</h1>
    <div className="d-flex flex-column justify-content-between">
    <div className="d-flex justify-content-between align-items-center my- mx-3"> <del className="fs-4 fw-bold "> {item.priceAfterDiscount?'$' + item.priceAfterDiscount:''} </del>
    <h4 >$ {item.price} </h4>
    </div>
    <button className="py-2  d-flex justify-content-center align-items-center mx-auto my-3 w-75" onClick={()=>{dispatch(ProductDetails(item._id))
         {logined? dispatch(addToCart()):setAlert(true)}
        }}> add to cart
    <FontAwesomeIcon icon={faCartShopping} className='fs-5 mx-2 position-relative' />
    </button>
    </div>
        </div>
  )
  :<h2 className=" text-center">no product available now</h2>
  }
  </div>
  <button className="py-3 w-25 d-flex  justify-content-center mx-auto"><a href="/allproduct"> all product</a></button>
  {
  alert?
  <div className="alert position-fixed top-50  w-100 h-100 start-50 z-3   text-light ">
    <div className="content w-50 position-absolute top-50 start-50 p-5 text-center">
    <FontAwesomeIcon icon={faX} className=" x-mark mt-4 position-absolute top-0 end-0 me-5" onClick={()=>setAlert(false)}/>
    <h2>you are not logined</h2>
    <div className=" d-flex justify-content-between w-75 mx-auto gap-4 mt-5">
      <button className="w-50 py-2"><a href="/LogIn">log in</a></button>
      <button className="w-50 py-2"><a href="/SignUp">sign up </a></button>
    </div>
    </div>
  </div>
:null}
  </div>
)
}

export default MostProducts
