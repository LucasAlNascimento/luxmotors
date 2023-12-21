import { Swiper, SwiperSlide } from 'swiper/react';

function Slider() {
    const images = [
        { id: '1', image: './src/assets/slider/range-rover.avif' },
        { id: '2', image: './src/assets/slider/porsche-interior.webp' },
        { id: '3', image: './src/assets/slider/audi.jpg' },
        { id: '4', image: './src/assets/slider/jaguar-interior.jpg' },
        { id: '5', image: './src/assets/slider/bmw.jpg' },
        { id: '6', image: './src/assets/slider/porsche.jpg' },
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