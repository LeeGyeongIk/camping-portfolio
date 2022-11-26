import '../../css/route/CampingSite.css';
import MainBackGround from "../../template/header/MainBackGround";
import Greeting from "../../template/header/Greeting";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

import KIMHAE_1_Img_1 from '../../img/route/Main/CampingZone/KIMHAE1_img_1.jpeg';
import KIMHAE_1_Img_2 from '../../img/route/Main/CampingZone/KIMHAE1_img_2.jpeg';
import KIMHAE_1_Img_3 from '../../img/route/Main/CampingZone/KIMHAE1_img_3.jpeg';
import KIMHAE_1_Img_4 from '../../img/route/Main/CampingZone/KIMHAE1_img_4.jpeg';

let KIMHAE = () => {
    return (
        <div>
            <MainBackGround />
            <Greeting title="김해존" content="자동차야영장•텐트대여동" />
            <Slide />
            <CampingSiteIntroduction />
        </div>
    );
}

let Slide = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="slide">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${KIMHAE_1_Img_1})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${KIMHAE_1_Img_2})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${KIMHAE_1_Img_3})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${KIMHAE_1_Img_4})` }}></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

let CampingSiteIntroduction = () => {
    return (
        <div className="camping-site-introduction section-margin-bottom-5">
            <table>
                <tbody>
                    <tr>
                        <th>사이트 수</th>
                        <td>34~35 사이트</td>
                    </tr>
                    <tr>
                        <th>사이트 크기</th>
                        <td>가로 8M x 세로 8M</td>
                    </tr>
                    <tr>
                        <th>텐트•주차</th>
                        <td>전 사이트 차량 옆 텐트 설치(오토캠핑)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default KIMHAE;