
import React, { useEffect, useState } from 'react'
import { FaSearch, FaHeart, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { Link } from 'react-scroll'
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css'
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Login from './login';
// import Logout from './logout';



const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    })
    AOS.refresh()
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'Products', path: 'products'
    },
    {
      link: 'Testimonials', path: 'testimonials'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]
  return (
    <>
      <div className='w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6'>
        <h1 className='text-sm font-semibold flex justify-center items-center
gap-2'><FaPhoneVolume className='size-[18px]' /> <span>+91 123 456 7890</
          span></h1>
        <h1 className='text-sm font-semibold flex justify-center items-center
gap-2'> <FaMapMarkerAlt className='size-[18px]' /> <span>great discount festival season 80% off on all food items?</span></h1>
        <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><MdEmail className='size-[18px]' /> <span>aslameats@food.com</
        span></h1>
      </div >

      <nav className='w-full bg-gray-100 flex justify-between items-center gap0-1 lg:px-16 px-6 py-5 sticky top-0 z-50'>
        <h1 className='text-themepurple font-bold lg:text-[30px] text-3xl underline italic'>Aslam Eats!</h1>
        <ul className='lg:flex justify-center items-center gap-10 hidden'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))
          }
          {/* //
          <Router> <div>
        <nav>
          <ul>
            <li> <Link to="/login">Login</Link> </li>
            <li> <Link to="/logout">Logout</Link> </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
      </Router> */}
          //
          <a href="/login.jsx" target="_blank" rel="noopener noreferrer"> Example Site</a>
          <a className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white'  spy={true} offset={-100} smooth={true} href='/login'>Login</a>
          <a className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white'  spy={true} offset={-100} smooth={true} href='/signup.jsx'>Sign Up</a>
         
        </ul>
        <div id='header-icons' className='lg:flex hidden justify-center items-center gap-6 text-black'>
          <FaSearch className='w-[20px] h-[20px] transform hover:scale-125
transition-transform duration-300 cursor-pointer hover:text-themepurple' />
          <IoPerson className='w-[20px] h-[20px] transform hover:scale-125
transition-transform duration-300 cursor-pointer hover:text-themepurple' />
          <FaHeart className='w-[20px] h-[20px] transform hover:scale-125
transition-transform duration-300 cursor-pointer hover:text-themepurple' />
          <div className="relative">
            <FaShoppingCart className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple' />
            <div className='bg-themepurple hover:bg-themeyellow px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold'>2</div>
          </div>
        </div>

        {/* mobile menu bar */}
        <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
          <div>
            {isMenuOpen ? <FaXmark className='text-themepurple text-3xl cursor-pointer' /> : <FaBars className='text-themepurple text-3xl cursor-pointer' />}
          </div>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit
          bg-themepurple p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className='text-white uppercase font-semibold
cursor-pointer p-3 rouded-lg hover:bg-themeyellow ☐ hover:text-black
w-full text-center hover:scale-[1.04]
transition-transform duration-1000 cursor-pointer' to={path} spy={true} offset={-100} smooth={true}>
              {link}
            </Link>

          ))}
        </ul>
      </div>
    </nav >
    </>
  )
}

export default Header