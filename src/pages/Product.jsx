import {  useDispatch, useSelector } from "react-redux"
import { Carousel } from "react-bootstrap"
import MostProducts from "../components/MostProducts"
import { addToCart } from "../redux/cartSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Spinner from 'react-bootstrap/Spinner';

const Product = () => {
const dispatch=useDispatch()
    const productData=useSelector((state)=>state.products.productData)
   const productImages=productData.images
   const rating=productData.ratingsAverage
   const loading=useSelector((state)=>state.cart.loading)
  return (
    <div  className="position-relative selectedproduct">
        {loading?
      <div className="spinner position-absolute w-100  ">
    <Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
    </div>
    
    :
    <div className="Container ">
      <div className="  d-flex justify-content-center flex-column flex-md-row  my-4 gap-md-5">
        <div className="left w-50">

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
            <h5>{productData.subcategory[0].name}</h5>
            <h4 className="mt-3 mb-5 fw-normal">{productData.title}</h4>
            <div className="d-flex justify-content-between fs-5 fw-bold"> brand<span>{productData.brand.name}</span></div>
            <div className="rating my-4 d-flex fs-5 fw-bold justify-content-between align-items-center fs-4">
  rating :
  <div>
{[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span key={index} className="star fs-4" 
          style={rating>=starValue?{color:'#F5B909'}:{color:'gray'}}>
            {rating >= starValue ? '★' : '☆'}
          </span>
        );
      })}
      </div>
      </div>
            <div className="d-flex justify-content-between fs-5  fw-bold"> price<span>{productData.price}</span></div>
            <button className=" w-50 mb-2 mt-5 py-3" onClick={()=>{dispatch(addToCart())
            }}> add to cart <FontAwesomeIcon icon={faCartShopping} className='fs-5 mx-2 position-relative' />            </button>
        </div>
      </div>
      <h2 className="my-5 text-center "> other product</h2>

      <MostProducts/>
      </div>
          }
    </div>
  )
}

export default Product
