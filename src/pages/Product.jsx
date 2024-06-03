import {  useDispatch, useSelector } from "react-redux"
import { Carousel } from "react-bootstrap"
import plus from'../assets/PlusCircle.svg'
import minus from'../assets/MinusCircle.svg'
import { useState } from "react"
import MostProducts from "../components/MostProducts"
import { addToCart } from "../redux/cartSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
const Product = () => {
const dispatch=useDispatch()
    const productData=useSelector((state)=>state.products.productData)
   const productImages=productData.images
   const rating=productData.ratingsAverage
    // console.log(rating)
const [quantity, setQuantity] = useState(1)
const count=(f)=>{
    if(f=='+'){
    setQuantity(quantity+1)
}else{
    if(quantity>1){
        setQuantity(quantity-1)
    }
}
}
  return (
    <>
      <div className="selectedproduct Container d-flex  my-4 gap-5">
        <div className="left w-50">
<h2 className="mb-2 mx-4 text-center">{productData.title}</h2>
<div className="rating mx-5 d-flex justify-content-between align-items-center fs-4">
  rating :
  <div>
{[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index} className="star fs-4" 
          style={rating>=starValue?{color:'#F5B909'}:{}}>
            {rating >= starValue ? '★' : '☆'}
          </span>
        );
      })}
      </div>
      </div>
<Carousel data-bs-theme="dark" className="mt-3">
  
{productImages.map((item)=>
      <Carousel.Item key={item.index} >
        <img
          className="w-100 "
          height={500}
          src={item}
          alt="First slide"
          />
      </Carousel.Item>
        )
}
    </Carousel>
        </div>
        <div className="right w-50 mt-5 pt-5 text-center">
            <h3>{productData.subcategory[0].name}</h3>
            <h4 className="mt-3 mb-5">{productData.title}</h4>
            <div className="d-flex justify-content-between fs-5 fw-bold"> brand<span>{productData.brand.name}</span></div>
            <div className="d-flex justify-content-between fs-5 mt-4 fw-bold"> price<span>{productData.price}</span></div>
            <div className="quantity d-flex justify-content-between fs-5 fw-bold mt-4"> quantity<div><img src={minus} alt="" onClick={()=>count('-')}/> <span className="mx-2">{quantity}</span> <img src={plus} alt="" onClick={()=>count('+')}/></div></div>
            <div className=" d-flex justify-content-between fs-5 fw-bold mt-4 mb-5"> total <span>{productData.price*quantity}</span></div>
            <button className=" w-50 mb-2 mt-5 py-3" onClick={()=>{dispatch(addToCart())
            }}> add to cart <FontAwesomeIcon icon={faCartShopping} className='fs-5 mx-2 position-relative' />            </button>
        </div>
      </div>
      <h2 className="my-5 text-center "> other product</h2>

      <MostProducts/>
    </>
  )
}

export default Product
