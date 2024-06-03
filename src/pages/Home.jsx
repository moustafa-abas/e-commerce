import { useEffect } from "react"
import Categories from "../components/Categories"
import MostProducts from "../components/MostProducts"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../redux/productSlice"

const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
},[])
  return (
    <>
    <div className="Container">
      <Categories/>
      <h2 className="my-5 text-center"> most product</h2>
      <MostProducts/>
    </div>
    </>
  )
}

export default Home
