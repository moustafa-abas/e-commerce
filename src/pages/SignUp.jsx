import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { sign } from '../redux/useSlice';
import axios from 'axios';
const SignUp = () => {
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

console.log(userData)
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
  return (
    <Form noValidate className='form   mx-auto my-5 d-flex flex-column'  onSubmit={handleSubmit(onSubmit)}>
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
        <p className='error fs-6 mt-3 ms-2'>{errors.email?.message}</p>

      <Form.Group   className='position-relative'>
        <Form.Label  className='label position-absolute'> Password:</Form.Label>
        <Form.Control className=' py-3'
          type="password"
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
      </Form.Group>
        <p className='error fs-6 mt-3 ms-2'>{errors.password?.message}</p>
      <Form.Group   className='position-relative'>
        <Form.Label  className='label position-absolute'>Confirm Password:</Form.Label>
        <Form.Control className=' py-3'
          type="password"
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
  )
}

export default SignUp
