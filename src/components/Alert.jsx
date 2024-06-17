import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Alert = () => {
  return (
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
  )
}

export default Alert
