import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
import ParcelCard from '../parcelCard';

// install Swiper modules
SwiperCore.use([Pagination]);

const SwiperComp = () => {

    const { parcel } = useSelector(({ parcelReducers }) => {
        return {
            parcel: parcelReducers.parcel_list
        }
    })

    // console.log(parcel)

    const printCard = () => {
        if (parcel.length > 0) {
            return parcel.map((item) => {
                return  <SwiperSlide>
                            <ParcelCard item={item} />
                        </SwiperSlide>
            })
        }
    }

    return (
        <div>
            <Swiper slidesPerView={5} spaceBetween={30} centeredSlides={false} pagination={{"clickable": true}} className="mySwiper">
                {printCard()}
            </Swiper>
        </div>
    )
}

export default SwiperComp
