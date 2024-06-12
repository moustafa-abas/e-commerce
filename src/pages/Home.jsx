import { useEffect } from "react"
import Categories from "../components/Categories"
import MostProducts from "../components/MostProducts"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productSlice"
import { getUserCart } from "../redux/cartSlice"
import banar from'../assets/banar.jpg'
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
    
},[])
const loading=useSelector((state)=>state.cart.loading)

  useEffect(()=>{    
    dispatch(getUserCart())
},[])

  return (
    <div className="position-relative">
        {loading?
      <div className="spinner position-absolute w-100  ">
    <Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
    </div>
    
    :<>
    <img src={banar} alt="" className="w-100" />
    <div className="Container">
      <Categories/>
      <h2 className="my-5 text-center"> most popular</h2>
      <MostProducts/>
    </div>
    </>
}
    </div>
  )
}

export default Home
