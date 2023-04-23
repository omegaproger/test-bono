import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from "swiper";
import { useInView } from "react-intersection-observer";
import 'swiper/swiper.css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Speakers = ({title,item}) => {

    const { ref, inView } = useInView({
        threshold: 0
    });

    return (
        <section ref={ref}  className={`speakers ${inView ? 'speakers_in' : ''}`}>
            <div className={'speakers__content'}>
                <h2 className={'speakers__title'}>{title}</h2>
                <div className={"speakers__carousel"}>
                    <Swiper
                        spaceBetween={42}
                        slidesPerView={2}
                        pagination={{
                            el: '.speakers__carousel-pagination',
                            type: 'bullets',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                pagination:{
                                    dynamicBullets: true,
                                }
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 42
                            },
                        }}
                        modules={[Pagination,Navigation]}
                        navigation={{
                            prevEl: ".speakers__btn-prev",
                            nextEl: ".speakers__btn-next",
                        }}
                    >
                        {slides(item)}
                    </Swiper>
                    <div className={'speakers__carousel-pagination'}></div>
                    <div className={'speakers__carousel-navigation'}>
                        <button className={'speakers__btn-prev'}>
                            <img src="icons/arrow-nav.svg" alt="arrow-left"/>
                        </button>
                        <button className={'speakers__btn-next'}>
                            <img src="icons/arrow-nav.svg" alt="arrow-right"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function slides(item){
    const slides = [];
    let i = 1;
    while (i <= 13){
        slides.push(item);
        i++;
    }
    return slides.map((item,index)=>{
        return  <SwiperSlide key = {`swiper-item-${index}`}>
            <div className={'speakers__item'}>
                <div className={'speakers__item-img'}>
                    <img src={item.photo} alt="photo"/>
                </div>
                <div className={'speakers__item-info'}>
                    <span className={'speakers__item-info-name'}>{item.name}</span>
                    <span className={'speakers__item-info-position'}>{item.position}</span>
                </div>
            </div>
        </SwiperSlide>
    })
}