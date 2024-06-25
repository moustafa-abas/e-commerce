import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, logOut } from '../redux/useSlice';
import { SearchValue } from '../redux/productSlice';
import { useEffect, } from 'react';
import { getUserCart } from '../redux/cartSlice';

const Header = () => {

    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getUserCart())
    },[])
    const numOfProduct=useSelector((state)=>state.cart.numOfProduct)
    const logined=useSelector((state)=>state.user.isLogin)
    const darktheme=useSelector((state)=>state.user.darkTheme)
return (
<Navbar expand="lg" className="navbar  pt-3 ">
    <Container fluid>
    <Navbar.Brand href="/">E-commerce</Navbar.Brand>
    <Navbar.Brand href="/cart" className='position-relative' >
            <FontAwesomeIcon icon={faCartShopping} className='fs-4 mx-5 position-relative' />
        <h4 className='no_cart position-absolute rounded-circle  p-1 '>
            {logined?numOfProduct:0}</h4>
        </Navbar.Brand>
 

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">

        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/allProduct">all product</Nav.Link>
        <NavDropdown className='dropDown' title="account" id="navbarScrollingDropdown">
{logined?
           <> {
                location.pathname==='/SignUp' ||location.pathname==='/LogIn'?null:
                <NavDropdown.Item href="/SignUp" onClick={()=>dispatch(logOut())}>log out</NavDropdown.Item>
            }</>
            :
            <>
            {
                location.pathname!=='/LogIn'?
                <NavDropdown.Item href="/LogIn">log in</NavDropdown.Item>
                :null
            }
            {
                location.pathname!=='/SignUp'?
                <NavDropdown.Item href="/SignUp">sign up </NavDropdown.Item>
                :null
            }
</>
        }
        </NavDropdown>

        </Nav>
        {
                location.pathname==='/allProduct'?
        <Form className="d-flex me-3">
        <Form.Control
            type="search"
            placeholder="Search by brand"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>dispatch(SearchValue(e.target.value))
        }
        />
                
        </Form>
                :null

            }
    </Navbar.Collapse>
                <Navbar.Brand>
<button className='  ' >{darktheme?<FontAwesomeIcon icon={faSun} onClick={()=>dispatch(darkTheme())} className='w-100'/>
    :
    <FontAwesomeIcon icon={faMoon} className='text-dark w-100'onClick={()=>dispatch(darkTheme())} />
}
    </button>
        </Navbar.Brand>

    </Container>
</Navbar>
)
}

export default Header
