import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi';

const Testimonial = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CustomSliderButton = ({ onClick, className }) => (
    <button className={className} onClick={onClick}  >
      Slide
    </button>
  );
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
         <style>
        {`
          .slick-dots li button {
            background-color: black;
            border-radius:100%;
            width:10px;
            height:10px
            
            
          }
        `}
      </style>
      <Slider {...settings} appendDots={(dots) => <div  style={{ bottom: '2px', color:'black' }}>{dots}</div>}>
        <div className='py-[30px] px-5 rounded-3'>
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
            <div><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Zeus</h4>
            <div className='flex items-center gap-[2px]'>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>                                                                                                                             
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
            </div>
            </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have taken medical services from them. They treat so well and they are providing the best medical services."</p>
        </div>

        <div className='py-[30px] px-5 rounded-3'>
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
            <div><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jones</h4>
            <div className='flex items-center gap-[2px]'>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
            </div>
            </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have taken medical services from them. They treat so well and they are providing the best medical services."</p>
        </div>

        <div className='py-[30px] px-5 rounded-3'>
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
            <div><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Jack</h4>
            <div className='flex items-center gap-[2px]'>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
                <HiStar className='text-yellowColor w-[18px] h-5'/>
            </div>
            </div>
          </div>
          <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"I have taken medical services from them. They treat so well and they are providing the best medical services."</p>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonial;
