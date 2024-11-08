import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg'
import earbuds from '../assets/earbuds.jpg'
import dslr from '../assets/dslr.jpg'
import biryani1 from '../assets/biryani1.jpg'
 import dosa from '../assets/dosa.jpg'
import burger from '../assets/burger.jpg'
import AOS from "aos"
import 'aos/dist/aos.css'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL:false
  };
  useEffect(()=>{
     AOS.init({
      offset:100,
      duration:500,
      easing:'ease-in-out',
     })
     AOS.refresh()
  },[])
  return (
    <div id='hero' className='w-[97vw] flex justify-center items-center  lg:h-[700px] h-[600px]'>
      <Slider className='w-[100%]' {...settings}>
       <div className='w-full'>
        <div className='w-full lg:px-20 px-5 lg:h-[700px] mx-auto h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${biryani1})`}}>
        <h1 data-aos="zoom-in" data-aos-delay='50' className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get upto Discounts 80% off</h1>
        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] '>Hyderabadi <br /> Biryani</h1>

        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-2xl '>100% trusted <span className='text-themeyellow font-semibold'>Delicious</span> Biryani</h1>

        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold uppercase'>Online Order</button>
        </div>
       </div>

       <div>
        <div className='w-full lg:px-20 px-5 lg:h-[700px]  h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${burger})`}}>
        <h1 data-aos="zoom-in" data-aos-delay='50' className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get upto Discounts 80% off</h1>
        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] '>Burger<br />Chessey</h1>

        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-2xl '>100% trusted <span className='text-themeyellow font-semibold'>Amazing</span> Burger</h1>

        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold uppercase'>Online Ordering Now</button>
        </div>
       </div>

       <div>
        <div className='w-full lg:px-20 px-5 lg:h-[700px]  h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${dosa})`}}>
        <h1 data-aos="zoom-in" data-aos-delay='50' className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>Get upto Discounts 80% off</h1>
        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] '>Dosa <br /> Roll</h1>

        <h1 data-aos="zoom-in" data-aos-delay='100' className='text-white text-2xl '>100% trusted <span className='text-themeyellow font-semibold'>Delicious dosa</span></h1>

        <button data-aos='zoom-in' data-aos-delay='200' className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold uppercase'>Online Orderiing Now</button>
        </div>
       </div>
      </Slider>
    </div>
  )
}

export default Hero