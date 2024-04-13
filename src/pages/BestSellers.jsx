import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

function BestSellers() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const bestSellers = products.filter((item) => item.status === 'Best Sellers')

  return (
    <div className="container px-4 mx-auto max-w-screen-2xl xl:px-28">
      <div className="text-center">
        <h2 className="title">Best Sellers</h2>
        <p className="mx-auto mb-8 capitalize text-Black/75 md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per{' '}
        </p>
      </div>

      {/* best sellers products  */}
      <div className="mb-20 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`shop/${product.id}`}>
                <img
                  src={product.image}
                  alt=""
                  className="w-full transition-all duration-300 hover:scale-105"
                />
              </Link>
              <div className="px-4 mt-4">
                <h4 className="text-base font-semibold min-h-[60px]">
                  {product.title}
                </h4>
                <div className="flex justify-between">
                  <p className="text-black/50">{product.category}</p>
                  <p className="font-semibold"> ${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
export default BestSellers
