import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({
    images,
}: {
    images: string[];
}) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="rounded-xl"
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={img}
                        className="h-80 w-full rounded-xl object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}