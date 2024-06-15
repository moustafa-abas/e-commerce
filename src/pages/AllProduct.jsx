import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductDetails,  fetchProductData } from "../redux/productSlice"
import { Button, Card} from "react-bootstrap"
import { addToCart } from "../redux/cartSlice"
import Spinner from 'react-bootstrap/Spinner';
import { fetchCategories } from "../redux/catSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faX } from "@fortawesome/free-solid-svg-icons"

const AllProduct = () => {
  const [filter, setFilter] = useState(null)
  const [alert, setAlert] = useState(false)
  const Searchvalue=useSelector((state)=>state.products.searchValue)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchCategories())

  },[])
  const products=useSelector((state)=>state.products.products?.data||[])
  const categories=useSelector((state)=>state.categories.category?.data||[])
  const loading=useSelector((state)=>state.cart.loading)
  const logined=useSelector((state)=>state.user.isLogin)
  var filterData=null
  var Data=null
  {
    filter===null?
    Data=products:
    Data=products.filter(product=>product.category.slug===filter)
  }
  {
    Searchvalue===''?
    filterData=Data:
    filterData=Data.filter(product=>product.brand.slug.includes(Searchvalue))
  }
  return (
    <div className="position-relative">
    {loading?
      <div className="spinner position-absolute w-100  ">
    <Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
    </div>
    
    :
    <div className={`${alert?'opacity-25':''} allproduct  text-center my-5 Container `}>
      <div className=" d-flex gap-lg-5   gap-3 flex-wrap">
      {categories?.map((item)=>
      <button key={item._id} className={`${item.slug===filter?'active':'' } text-capitalize py-2 px-4`} onClick={()=>setFilter(item.slug)}>{item.slug}</button>
      )}
    <button className={`text-capitalize text-dark py-2 px-5`} onClick={()=>setFilter(null)} >all</button>
    </div>
    {filterData.length?
    <>
    <h2 className="my-5"> {Data===products?'All Product':`${filter}`}</h2>
  <div className="products  d-flex flex-wrap gap-5 justify-content-center op">

  {filterData?.map((item)=>
        <Card style={{ width: '18rem' }} key={item._id} className="product p-2 ">
        <Card.Img variant="top" src={item.imageCover} className="w-100 " height={250} onClick={()=>{dispatch(ProductDetails(item._id))
          dispatch(fetchProductData())
        }}/>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="fs-5 my-3">{item.slug}
          </Card.Title>
          {Searchvalue?<Card.Title className=" d-flex justify-content-between fs-5 my-3"><span>brand:</span> {item.brand.slug}
          </Card.Title>:null
          }<div>
          <Card.Text className="d-flex justify-content-between align-items-center mt-4 mx- ">
          <del className="fs-5 fw-bold "> {item.priceAfterDiscount?'$' + item.priceAfterDiscount:''} </del>
          <h4 className="fs-5">$ {item.price} </h4>
          </Card.Text>
          <Button variant="none" className="py-2 d-flex justify-content-center align-items-center mx-auto my-3 w-75 text-capitalize" onClick={()=>{dispatch(ProductDetails(item._id))
         {logined? dispatch(addToCart()):setAlert(true)}
        }}>add to cart
    <FontAwesomeIcon icon={faCartShopping} className='fs-5 mx-2 position-relative' />
    </Button>
          </div>
        </Card.Body>
      </Card>
  )
  }
  </div>
  </>

  :
  <h1 className=" mt-5"> no product here</h1>
  }
  
  </div>

}
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

export default AllProduct
