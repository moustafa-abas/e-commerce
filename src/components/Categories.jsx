import {  useSelector } from "react-redux"


const Categories = () => {
  const categories=useSelector((state)=>state.categories.category?.data ||[])
  return (
    <div className="categories text-center  ">
      <h2 className="mt-4"> our categories</h2>
      <div className=" d-flex  gap-5 flex-wrap  my-5 justify-content-center">

      {categories?
        categories.map((item)=>
          
        <div key={item._id} className="category position-relative " >
<div className="overlay position-absolute  z-3 w-100 h-100 d-lg-none">
<h5 className=" position-absolute  top-50 start-50 ">{item.name}</h5>
</div>
<img src={item.image} alt="" className="  w-100 h-100 mb-5 "  />
        </div>)
        :<h2 className=" text-center">no categories available now</h2>
      }
      </div>

    </div>
  )
}

export default Categories
