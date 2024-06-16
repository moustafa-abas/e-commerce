import './styles/app.scss'
import { BrowserRouter as Router ,Route, Routes}from'react-router-dom'
import { Suspense, lazy } from 'react'
const Home=lazy(()=> import ('./pages/Home'))
const AllProduct =lazy(()=>import('./pages/AllProduct'))
const Product=lazy(()=>import('./pages/Product'))
const SignUp=lazy(()=>import('./pages/SignUp'))
const LogIn=lazy(()=>import('./pages/LogIn'))
const cart=lazy(()=>import('./pages/Cart'))
import Header from './components/Header'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
function App() {
  const darktheme=useSelector((state)=>state.user.darkTheme)
console.log(darktheme)
if(darktheme===true){
document.body.style.backgroundColor='black'
}else{
  document.body.style.backgroundColor='#fff'

}
  return (
    <Suspense fallback={<div className="spinner position-absolute w-100  ">
    <Spinner animation="border" className=' position-absolute top-50 start-50 p-4 text-light' />
    </div>}>
    <div id='theme' className={`${darktheme?'dark':''} `}>
      <Header/>

    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/allProduct' Component={AllProduct}/>
        <Route path='/product' Component={Product}/>
        <Route path='/SignUp' Component={SignUp}/>
        <Route path='/LogIn' Component={LogIn}/>
        <Route path='/cart' Component={cart}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
    </Suspense>
  )
}

export default App
