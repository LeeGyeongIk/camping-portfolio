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

import SINEO_1_Img_1 from '../../img/route/Main/CampingZone/SINEO1_img_1.jpeg';
import SINEO_1_Img_2 from '../../img/route/Main/CampingZone/SINEO1_img_2.jpeg';
import SINEO_1_Img_3 from '../../img/route/Main/CampingZone/SINEO1_img_3.jpeg';
import SINEO_1_Img_4 from '../../img/route/Main/CampingZone/SINEO1_img_4.jpeg';

let SINEO = () => {
    return (
        <div>
            <MainBackGround />
            <Greeting title="신어존" content="일반야영장" />
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
                    <div className="slide-img" style={{ backgroundImage: `url(${SINEO_1_Img_1})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${SINEO_1_Img_2})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${SINEO_1_Img_3})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-img" style={{ backgroundImage: `url(${SINEO_1_Img_4})` }}></div>
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
                        <td>30~31 사이트</td>
                    </tr>
                    <tr>
                        <th>사이트 크기</th>
                        <td>1~10번 데크 (4M x 6.5M), 11,12번 데크 (3.5M-6.5M), 16,17,18번 (4M x 6.5M)</td>
                    </tr>
                    <tr>
                        <th>사이트 구성</th>
                        <td>
                            1~12번(데크), 16,17,18번(데크) 13,14,15,19,20번은 파쇄석입니다.
                        </td>
                    </tr>
                    <tr>
                        <th>주차</th>
                        <td>
                            주차	대부분 사이트 데크 옆 차량주차 가능
                            <br />
                            ※ 통행편의를 위해 장비를 내린 후 주차장으로 차량이동 필요
                        </td>
                    </tr>
                    <tr>
                        <th>참고사항</th>
                        <td>
                            화로대 사용 가능(화이어로그, 차콜만 사용가능)
                            <br />
                            ※ 나무장작은 불똥으로 인한 화재위험이 있어 사용불가함
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SINEO;