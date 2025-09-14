import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import FilmCardById from "../components/FilmCardByID"

export default function FilmCarousel(props) {
    const homepageFilms = props.films

    const style = {
        padding: '1em',
        textAlign:'center',
    }

    return (
        <section style={style}>
            <h2 style={{textAlign:"initial", borderBottom: "1px solid var(--primary-color)"}}>{props.title}</h2>
            <Swiper 
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            >
                
            {
                homepageFilms.map(film => {
                return <SwiperSlide>
                    <FilmCardById size={props.size} film={film}/>
                </SwiperSlide>
                })
            }
            </Swiper>
        </section>
    )
}