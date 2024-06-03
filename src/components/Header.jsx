import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/useSlice';

const Header = () => {
    const dispatch =useDispatch()
    const numOfProduct=useSelector((state)=>state.cart.numOfProduct)
    console.log(numOfProduct)
return (
<Navbar expand="lg" className="navbar bg-body-tertiary mt-2">
    <Container fluid>
    <Navbar.Brand href="/">E-commerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">

        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/allProduct">all product</Nav.Link>
        <NavDropdown title="account" id="navbarScrollingDropdown">
            {
                location.pathname==='/SignUp'?
                <NavDropdown.Item href="/LogIn">log in</NavDropdown.Item>
                :null
            }
            {
                location.pathname==='/LogIn'?
                <NavDropdown.Item href="/SignUp">sign up </NavDropdown.Item>
                :null
            }
                <NavDropdown.Item href="/SignUp" onClick={()=>dispatch(logOut())}>log out</NavDropdown.Item>
        </NavDropdown>

        </Nav>

        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <button className='btn btn-outline-secondary'>Search</button>
        </Form>

    </Navbar.Collapse>
        <Navbar.Brand href="/" className='position-relative' >
            <FontAwesomeIcon icon={faCartShopping} className='fs-4 mx-5 position-relative' />
        <h4 className='no_cart position-absolute rounded-circle  p-1 '>{numOfProduct}</h4>
        </Navbar.Brand>
    </Container>
</Navbar>
)
}

export default Header
