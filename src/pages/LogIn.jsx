import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/useSlice";

const LogIn = () => {
const {register,handleSubmit} =useForm({

})
const dispatch=useDispatch()
const error=useSelector((state)=>state.user.error)
const onSubmit = (data) => {
    dispatch(login(data))
    console.log(data)
        };
return (
<Form noValidate className='form   mx-auto my-5 d-flex   flex-column'  onSubmit={handleSubmit(onSubmit)}>
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
        type="password"
        placeholder="password"
        {...register('password',
        {required:'* password is required',
        }
        )}
    />
    </Form.Group>
    {error?
    <p className='error fs-6  mt-3'>* username or password is wrong</p>
    :<></>
    }

<button type="submit "className='py-3 mt-5 w-50 mx-auto'>Log In</button>
</Form>
)
}

export default LogIn
