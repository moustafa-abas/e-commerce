import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { sign } from '../redux/useSlice';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

const{register,handleSubmit,formState:{errors},watch}=useForm({
defaultValues:{
    name:'',
    password:null,
    rePassword:null,
    email:null,
    phone:null
}

})

const dispatch=useDispatch()
const userData=useSelector((state)=>state.user.userData)
const loading=useSelector((state)=>state.user.loading)
const error=useSelector((state)=>state.user.error)
const theme=useSelector((state)=>state.user.darkTheme)

console.log(theme)
// const submit=(data ,event)=>{
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }else{
//       setValidated(true);
// console.log(data)
// // dispatch(sign(data))
// }    
// }


const onSubmit = (data) => {
dispatch(sign(data))
  };
  return (<div className='signup position-relative'>
        {loading?
      <div className="spinner position-absolute w-100  ">
    <Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
    </div>
    
    :
    <Form noValidate className='form  py-5  mx-auto  d-flex flex-column'  onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className='position-relative' >
        <Form.Label className='label position-absolute'> Name:</Form.Label>
        <Form.Control  className='py-3'
          type="text"
          placeholder="Username"
          {...register('name',
            {required:'* name is required',
                maxLength:{
                    value:30,
                    message:'* name is longer'
                },
                minLength:{
                  value:8,
                  message:'* name is too short'
              }
            }
          )}
        />
      </Form.Group>
        <p className='error fs-6 mt-3 ms-2'>{errors.name?.message}</p>
        <Form.Group   className='position-relative'>
        <Form.Label  className='label position-absolute '> email:</Form.Label>
        <Form.Control className=' py-3'
          type="email"
          placeholder="email"
          {...register('email',
            {required:'* email is required',pattern: { value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' },
          //   validate:{
          //     emailAvailable: async (fieldValue) => {
          //       try {
          //         const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/auth/signup/${fieldValue}`); // Provide the URL for your API endpoint
          //         const data = res.data;
          //         return data.length === 0 ;
          //       } catch (error) {
          //         return " * email already exists"
          //       }
          //     }
          // }  
          }
          )}
        />
      </Form.Group>
{error?
        <p className='error fs-6 mt-3 ms-2'>* email already exists</p>:null
}
        <p className='error fs-6 mt-3 ms-2'>{errors.email?.message}</p>
      <Form.Group   className='position-relative'>
        <Form.Label  className='label position-absolute'> Password:</Form.Label>
        <Form.Control className=' py-3'
          type={`${showPassword?'text':'password'}`}
          placeholder="password"
          {...register('password',
            {required:'* password is required',
                maxLength:{
                    value:20,
                    message:'* password is longer'
                },
                minLength:{
                    value:8,
                    message:'* password must be at least 8 '
                }
            }
          )}
        />
    <FontAwesomeIcon icon={faEye}  className="eye position-absolute top-50 end-0 me-3" onClick={()=>setShowPassword(!showPassword)}/>

      </Form.Group>
        <p className='error fs-6 mt-3 ms-2'>{errors.password?.message}</p>
      <Form.Group   className='position-relative'>
        <Form.Label  className='label position-absolute'>Confirm Password:</Form.Label>
        <Form.Control className=' py-3'
          type={`${showConfirmPassword?'text':'password'}`}
          placeholder="confirm Password"
          {...register('rePassword',
            {required:'* confirm password is required',
                maxLength:{
                    value:20,
                    message:'* confirm is longer'
                },
                minLength:{
                    value:8,
                    message:'* confirm must be at least 8 '
                },
                validate: (value) =>
                  value === watch('password')|| 'Passwords do not match'
            }
          )}
        />
    <FontAwesomeIcon icon={faEye}  className="eye position-absolute top-50 end-0 me-3" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}/>

      </Form.Group>
        <p className='error fs-6 mt-3 ms-2'>{errors.rePassword?.message}</p>
      <Form.Group   className='position-relative'>
        <Form.Label  className=' label position-absolute'> phone:</Form.Label>
        <Form.Control className=' py-3'
          type="tel"
          placeholder="phone"
          {...register('phone',
          {required:'* phone is required',
          pattern:{
            value: /^[0-9]{10}$/,
            message: '* Invalid phone number format'}
            }
          )}
        />
      </Form.Group>
        <p className='error fs-6 mt-3 ms-2'>{errors.phone?.message}</p>


    <button type="submit "className='py-3  w-50 mx-auto'>Submit form</button>
  </Form>
  }
  </div>
  )
}

export default SignUp
