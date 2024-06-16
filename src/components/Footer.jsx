import facebook from'../assets/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.webp'
import linkedin from'../assets/linkedin.svg'
import whats from'../assets/whats.svg'
const Footer = () => {
return (
    <>
<footer className=" pt-5 ">
    <div className='d-flex flex-column  flex-sm-row justify-content-sm-evenly'>
    <div className='left d-none d-lg-flex flex-column align-items-end fw-light pe-3 '>
        <h2 className='fw-bold fs-1'>Contact Us</h2>
<h3 className='fw-semibold mt-md-3 '>Email</h3> 
<p>moustafaabas@gmail.com</p>
<h3 className='fw-semibold mt-md-3'>Phone</h3>
<p>000 000 000 000</p>
<h3 className='fw-semibold mt-md-3'>Address</h3>
<p>Egypt, gharbia</p>
    </div>
    <div className='center text-center mt-lg-5 mb-5'>
        <h1 > e-commerce</h1>
        <h5 className=' fw-light my-5'> all products you need in our shop</h5>
        <div className="links w-50  mx-auto d-flex justify-content-between  align-items-center">

        <a target='_blank' rel="noopener noreferrer" href =  "https://www.linkedin.com/in/moustafa-3bas-36a316267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bmq5Ca5WKTtuXSHPGmSZw6g%3D%3D" > <img src={linkedin} alt="" width={50} /></a>
<a target='_blank' rel="noopener noreferrer" href =  "https://www.facebook.com/mostafa.abas8?mibextid=ZbWKwL" > <img src={facebook} alt="" className='face' width={50}/></a>
<a target='_blank' rel="noopener noreferrer" href =  "https://wa.me/+201280163605?" > <img src={whats} alt="" width={50}/></a>
            
        </div>
    </div>
    <div className='right d-none d-sm-block ps-3'>
        <h2 className='fw-bold fs-1 mb-md-3 gap-5'>Pages</h2>
        <p className='fs-5 my-4'><a href="/">Home</a></p>
        <p className='fs-5 my-0'><a href="/allProduct">All Product</a></p>
    </div>
    </div>
</footer>
        </>
)
}

export default Footer
