import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/useSlice";
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false)
const {register,handleSubmit} =useForm({

})
const dispatch=useDispatch()
const error=useSelector((state)=>state.user.error)
const loading=useSelector((state)=>state.user.loading)
const onSubmit = (data) => {
    dispatch(login(data))
    console.log(data)
        };
return (<div className="login position-relative">
        {loading?
      <div className="spinner position-absolute w-100  ">
    <Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
    </div>
    
    :
<Form noValidate className='form  py-5  mx-auto  d-flex   flex-column'  onSubmit={handleSubmit(onSubmit)}>
<Form.Group   className='position-relative'>
    <Form.Label  className='label position-absolute '> email:</Form.Label>
    <Form.Control className='input py-3'
        type="email"
        placeholder="email"
        {...register('email',
        {required:'* email is required',pattern: { value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' },
        }
        )}
    />
    </Form.Group>

    <Form.Group   className='position-relative mt-5'>
    <Form.Label  className='label position-absolute'> Password:</Form.Label>
    <Form.Control className='input py-3'
        type={`${showPassword?'text':'password'}`}
        placeholder="password"
        {...register('password',
        {required:'* password is required',
        }
        )}
    />
    <FontAwesomeIcon icon={faEye}  className="eye position-absolute top-50 end-0 me-3" onClick={()=>setShowPassword(!showPassword)}/>
    </Form.Group>
    {error?
    <p className='error fs-6  mt-3'>* username or password is wrong</p>
    :<></>
    }

<button type="submit "className='py-3 mt-5 w-50 mx-auto'>Log In</button>
</Form>
}
</div>
)
}

export default LogIn
