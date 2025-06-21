import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: 'https://i.pravatar.cc/150?img=32', // Random online avatar
      title: 'EdgeIntern',
      subtitle: 'Online Internship',
      comment: 'Congratulations on your achievements! Wishing you all the best in your future endeavours!',
    },
    {
      id: 2,
      image: 'https://i.pravatar.cc/150?img=47',
      title: 'Project Mentor',
      subtitle: 'Feedback',
      comment: 'Shivam’s dedication to building clean and efficient web apps is commendable. Impressive work!',
    },
    {
      id: 3,
      image: 'https://i.pravatar.cc/150?img=12',
      title: 'Freelance Client',
      subtitle: 'Web Design',
      comment: 'Delivered the project on time and exceeded my expectations. Will definitely work again!',
    }
  ];

  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title text-center text-3xl font-bold mb-10 text-gray-900 dark:text-white">Testimonials</h2>

      <Swiper
        className="testimonial__container w-[90vw] md:w-[80vw] md:ml-20 ml-4 mr-4"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => (
          <SwiperSlide className="testimonial__item text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md" key={id}>
            <div className="thumb mb-4 flex justify-center">
              <img
                src={image}
                alt={title}
                className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover"
              />
            </div>
            <h3 className="testimonial__title text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <span className="subtitle text-sm text-gray-500 dark:text-gray-400 block mb-4">{subtitle}</span>
            <p className="comment text-gray-700 dark:text-gray-300 italic">“{comment}”</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;