import React from 'react';
import { Swiper, SwiperSlide,Autoplay } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Slide.css'
import 'swiper/css/autoplay'
export default function Slide() {
    const data = [
        { id: 1, content: 'https://svgshare.com/i/y4_.svg',text:'Javascript' },
        { id: 2, content: 'https://svgshare.com/i/y43.svg',text:'React' },
        { id: 3, content: 'https://svgshare.com/i/y3s.svg',text:'HTML & CSS' },
        { id: 4, content: 'https://svgshare.com/i/y44.svg ',text:'Git' },
        {id:5, content:'https://svgshare.com/i/y4B.svg', text:'Bootstrap 5'},
        { id:6, content:'https://svgshare.com/i/y4z.svg', text:'Responsive Web design'}
        // Add more data here
      ];
  return (
    <div className="bg-grad" id="skills">
        <Container fluid className='pt-5 pb-4'> 
<Row>
    <div class="text-main-center  text-center mx-auto pb-4">
    <h1 className='text-center text-white'>Skills</h1>
    <span className="text-white ">The list of skills will continue to grow. Learning new tech is one of my top priorities.</span>
    </div>
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     pagination={{ clickable: true }}
     spaceBetween={50}
     Navigation
     breakpoints={{
      320:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 3,
      }

     }}
     slidesPerView={3}     
     Pagination={{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
    {data.map((item)=>(
 <SwiperSlide key={item.id} className="text-center">
    <img src={item.content} alt='hello' className='img-fluid'/>
    <h3 class="text-center text-white">{item.text}</h3>
    </SwiperSlide>
    ))}
    ...
    </Swiper>
    </Row>
    </Container>
    </div>
  )
}
