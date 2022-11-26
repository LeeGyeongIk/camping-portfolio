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

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

import SURO_1_Img_1 from '../../img/route/Main/CampingZone/SURO1_img_1.jpeg';
import SURO_1_Img_2 from '../../img/route/Main/CampingZone/SURO1_img_2.jpeg';
import SURO_1_Img_3 from '../../img/route/Main/CampingZone/SURO1_img_3.jpeg';
import SURO_1_Img_4 from '../../img/route/Main/CampingZone/SURO1_img_4.jpeg';
import KIMHAE_1_Img_1 from '../../img/route/Main/CampingZone/KIMHAE1_img_1.jpeg';
import KIMHAE_1_Img_2 from '../../img/route/Main/CampingZone/KIMHAE1_img_2.jpeg';
import KIMHAE_1_Img_3 from '../../img/route/Main/CampingZone/KIMHAE1_img_3.jpeg';
import KIMHAE_1_Img_4 from '../../img/route/Main/CampingZone/KIMHAE1_img_4.jpeg';
import SINEO_1_Img_1 from '../../img/route/Main/CampingZone/SINEO1_img_1.jpeg';
import SINEO_1_Img_2 from '../../img/route/Main/CampingZone/SINEO1_img_2.jpeg';
import SINEO_1_Img_3 from '../../img/route/Main/CampingZone/SINEO1_img_3.jpeg';
import SINEO_1_Img_4 from '../../img/route/Main/CampingZone/SINEO1_img_4.jpeg';

let SURO = () => {
    return (
        <div>
            <MainBackGround />
            <Greeting title="수로존" content="카라반온돌•펜션•글램핑" />
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
                    <div className="slide-img" style={{ backgroundImage: `url(${SURO_1_Img_1})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${SURO_1_Img_2})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${SURO_1_Img_3})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${SURO_1_Img_4})` }}></div>
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
                        <td>1 사이트</td>
                    </tr>
                    <tr>
                        <th>데크</th>
                        <td>카라반 앞 데크 및 파라솔 비치</td>
                    </tr>
                    <tr>
                        <th>비치 품목</th>
                        <td>
                            - 4인 식기 및 주방세트 1조
                            <br />
                            - 전자렌지, 냉장고, 에어컨
                            <br />
                            - 식탁, 소파
                            <br />
                            - 타올, 샴푸, 바디워셔
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SURO;