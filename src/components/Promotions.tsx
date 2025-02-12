import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const promotions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    title: "Winter Sale",
    description: "Up to 50% off on selected items"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    title: "New Collection",
    description: "Discover our latest arrivals"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    title: "Limited Edition",
    description: "Exclusive designs, limited time only"
  }
];

const Promotions = () => {
  return (
    <section className="py-16 bg-rebel-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-nofex font-bold mb-8">Featured</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="w-full h-[400px]"
        >
          {promotions.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className="relative w-full h-full">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rebel-dark via-rebel-dark/50 to-transparent rounded-lg">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-nofex font-bold mb-2">{promo.title}</h3>
                    <p className="text-rebel-light/70 text-xl">{promo.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Promotions;