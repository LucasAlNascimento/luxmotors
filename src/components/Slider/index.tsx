import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
  const images = [
    { id: 1, image: "https://d6q25g0b4gru7.cloudfront.net/range-rover.avif" },
    { id: 2, image: "https://d6q25g0b4gru7.cloudfront.net/porsche-interior.webp" },
    { id: 3, image: "https://d6q25g0b4gru7.cloudfront.net/audi.jpg" },
    { id: 4, image: "https://d6q25g0b4gru7.cloudfront.net/jaguar-interior.jpg" },
    { id: 5, image: "https://d6q25g0b4gru7.cloudfront.net/bmw.jpg" },
    { id: 6, image: "https://d6q25g0b4gru7.cloudfront.net/porsche.jpg" },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000 }}
        speed={7000}
        allowTouchMove={false}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img
                src={item.image}
                alt="slider"
                className="w-full h-96 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
