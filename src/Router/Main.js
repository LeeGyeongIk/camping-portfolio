import '../css/route/Main.css';
import MainVideo from '../img/route/Main/LandingVideo/main_video.mp4';
import SURO_1_Img_1 from '../img/route/Main/CampingZone/SURO1_img_1.jpeg';
import SURO_1_Img_2 from '../img/route/Main/CampingZone/SURO1_img_2.jpeg';
import SURO_1_Img_3 from '../img/route/Main/CampingZone/SURO1_img_3.jpeg';
import SURO_1_Img_4 from '../img/route/Main/CampingZone/SURO1_img_4.jpeg';
import KIMHAE_1_Img_1 from '../img/route/Main/CampingZone/KIMHAE1_img_1.jpeg';
import KIMHAE_1_Img_2 from '../img/route/Main/CampingZone/KIMHAE1_img_2.jpeg';
import KIMHAE_1_Img_3 from '../img/route/Main/CampingZone/KIMHAE1_img_3.jpeg';
import KIMHAE_1_Img_4 from '../img/route/Main/CampingZone/KIMHAE1_img_4.jpeg';
import SINEO_1_Img_1 from '../img/route/Main/CampingZone/SINEO1_img_1.jpeg';
import SINEO_1_Img_2 from '../img/route/Main/CampingZone/SINEO1_img_2.jpeg';
import SINEO_1_Img_3 from '../img/route/Main/CampingZone/SINEO1_img_3.jpeg';
import SINEO_1_Img_4 from '../img/route/Main/CampingZone/SINEO1_img_4.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faCampground, faMoneyBill1, faHeadset, faComments, faCalendar , faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

let Main = () => {
    return (
        <>
            <LandingDisplay />
            <CampingZone />
            <ShortCut />
            <Notice />
        </>
    );
}

let LandingDisplay = () => {
    return (
        <div style={{ position: 'relative' }}>
            <LandingVideo />
            <LandingComment />
        </div>
    );
}

let LandingVideo = () => {
    return (
        <div>
            <video className="landing-video" autoPlay muted loop>
                <source src={MainVideo} type="video/mp4" />
            </video>
        </div>
    );
}

let LandingComment = () => {
    return (
        <div className="landing-comment">
            <div className="landing-comment-animation">
                <h1>소중한 사람들과 함께</h1>
                <p>가야랜드 달빛야영장에서<br />소중한 사람들과 새로운 추억을 만들어 보세요</p>
            </div>
            <ScrollAnimation />
        </div>
    );
}

let ScrollAnimation = () => {
    return (
        <div className="scroll-down">
            <div className="scroll">
                <span className="scroll-dot"></span>
            </div>
            <div className="arrow-down"></div>
        </div>
    );
}

let CampingZone = () => {
    // const carouselImgArchive = {
    //     SURO: [SURO_1_Img_1, SURO_1_Img_2, SURO_1_Img_3, SURO_1_Img_4],
    //     KIMHAE: [KIMHAE_1_Img_1, KIMHAE_1_Img_2, KIMHAE_1_Img_3, KIMHAE_1_Img_4],
    //     SINEO: [SINEO_1_Img_1, SINEO_1_Img_2, SINEO_1_Img_3, SINEO_1_Img_4]
    // }
    // const [carouselImg, setCarouselImg] = useState(carouselImgArchive.SURO);

    return (
        <div>
            <div className="content-header">
                <h1>캠핑장</h1>
                <p>달빛야영장 캠핑장을 소개합니다</p>
            </div>
            <div className="camping-zone-content">
                <div className="camping-zone-wraper">
                    <div className="camping-zone-img-wraper col">
                        <img src={SURO_1_Img_2} className="camping-zone-img" />
                    </div>
                    <div className="camping-zone-text">
                        <h3>수로존</h3>
                    </div>
                </div>
                <div className="camping-zone-wraper">
                    <div className="camping-zone-img-wraper col">
                        <img src={KIMHAE_1_Img_4} className="camping-zone-img" />
                    </div>
                    <div className="camping-zone-text">
                        <h3>김해존</h3>
                    </div>
                </div>
                <div className="camping-zone-wraper">
                    <div className="camping-zone-img-wraper col">
                        <img src={SINEO_1_Img_3} className="camping-zone-img" />
                    </div>
                    <div className="camping-zone-text">
                        <h3>신어존</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

let ShortCut = () => {
    return (
        <div>
            <div className="content-header">
                <h1>바로가기</h1>
                <p>여러분께 특별한 경험을 드립니다</p>
            </div>
            <div className="shortcut-content">
                <Container>
                    <Row>
                        <Col sm>
                            <div className="shortcut-card">
                                <div className="shortcut-comment">
                                    <h5>달빛야영장소개</h5>
                                    <span>김해국민야영장<br />달빛야영장을 소개합니다</span>
                                    <span>
                                        바로가기
                                        <span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </span>
                                </div>
                                <div className="shortcut-card-icon">
                                    <FontAwesomeIcon icon={faStore} />
                                </div>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="shortcut-card">
                                <div className="shortcut-comment">
                                    <h5>캠핑장정보</h5>
                                    <span>카라반•글램핑•차박•텐트 등<br />모든 종류의 캠핑을 즐길 수 있습니다</span>
                                    <span>
                                        바로가기
                                        <span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </span>
                                </div>
                                <div className="shortcut-card-icon">
                                    <FontAwesomeIcon icon={faCampground} />
                                </div>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="shortcut-card">
                                <div className="shortcut-comment">
                                    <h5>이용•요금안내</h5>
                                    <span>갸야랜드 달빛야영장 이용정보 및<br />요금정보를 안내드립니다</span>
                                    <span>
                                        바로가기
                                        <span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </span>
                                </div>
                                <div className="shortcut-card-icon">
                                    <FontAwesomeIcon icon={faMoneyBill1} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <div className="shortcut-card">
                                <div className="shortcut-comment">
                                    <h5>문의전화</h5>
                                    <span className="tel">010-3722-5398<br />업무시간: 24시간 (전화 또는 문자)</span>
                                    <span>
                                        바로가기
                                        <span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </span>
                                </div>
                                <div className="shortcut-card-icon">
                                    <FontAwesomeIcon icon={faHeadset} />
                                </div>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="shortcut-card">
                                <div className="shortcut-comment">
                                    <h5>문의게시판</h5>
                                    <span>궁금하신 점은 글을 남겨주세요<br />빠르게 답변드리겠습니다</span>
                                    <span>
                                        바로가기
                                        <span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </span>
                                </div>
                                <div className="shortcut-card-icon">
                                    <FontAwesomeIcon icon={faComments} />
                                </div>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="shortcut-card">
                                <div className="shortcut-comment">
                                    <h5>온라인예약</h5>
                                    <span>온라인 예약부터<br />결제까지 한번에!</span>
                                    <span>
                                        바로가기
                                        <span>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </span>
                                </div>
                                <div className="shortcut-card-icon">
                                    <FontAwesomeIcon icon={faCalendar} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

let Notice = () => {
    return (
        <div className="notice">
            <Container>
                <Row>
                    <Col>
                        <div className="notice-title">
                            <h4>공지사항</h4>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="notice-card">
                                    <div className="notice-card-title">
                                        <h5>2022 수영장운영관련공지</h5>
                                    </div>
                                    <hr />
                                    <div className="notice-card-content">
                                        <span>
                                            안녕하세요
                                            2022년 수영장 운영과 관련하여 다음과 같이 공지 합니다.
                                            운영기간 : 2022년 7월 9일 ~ 8월 27일
                                            운영시간 : 매주 토요일 오전 10:00 ~ 오후 5:00
                                            금요일 및 일요일은 운영하지 않습니다.
                                            8월 14일(일요일) 정상운영 합니다.
                                            시범운영 : 2022년 7월 2일 오전 11시 ~ 오후 4시
                                            시범 운영은 배관 등 여러 시설 점검목적으로 운영하며 사전 점검시 문제가 발생 할 경우 운영하지 않을 수도 있습니다.
                                            감사합니다.
                                        </span>
                                    </div>
                                    <div className="notice-card-footer">
                                        <span>READ MORE</span>
                                        <span>2022.06.28</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="notice-card">
                                    <div className="notice-card-title">
                                        <h5>카라반, 글램핑 이용시간 변경 공지</h5>
                                    </div>
                                    <hr />
                                    <div className="notice-card-content">
                                        <span>
                                            안녕하세요.
                                            달빛야영장 입니다.
                                            현재 카라반 및 글램핑 이용시간은 오후3시부터 다음날 12시 입니다.
                                            이 이용시간과 관련 오후 3시에 입장 해서는 가야랜드 이용이 너무 불편하다는 요청이 들어 왔습니다.
                                            짐 정리하고 나면 가야랜드 마치는 시간이 다 되어 가서 이용이 어렵다는 말을 많은 분들이 하셔서
                                            다음과 같이 카라반, 글램핑 이용시간을 조정 합니다.
                                            기존 : 오후 3시 ~ 익일 오전 12시
                                            변경 : 오후 2시 ~ 익일 오전 11시
                                            조정시기 : 2022년 6월 1일 입장객 부터
                                            카라반 글램핑 이용고객님들 중 일부 손님들께서 12시나 1시쯤 오셔서
                                            냉장고에 음식물을 보관하자며 조기 입장을 요구 하시는 경우가 종종 있습니다만
                                            저희 관리자들이 정리 하는 시간이 필요 하므로 입장 가능시간 이전에 오시는 경우
                                            일절 입장을 거부할 예정이오니 참고 바랍니다.
                                            감사합니다.
                                        </span>
                                    </div>
                                    <div className="notice-card-footer">
                                        <span>READ MORE</span>
                                        <span>2022.06.28</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="notice-card">
                                    <div className="notice-card-title">
                                        <h5>매점 운영시간 공지</h5>
                                    </div>
                                    <hr />
                                    <div className="notice-card-content">
                                        <span>
                                            안녕하세요.
                                            캠장지기 입니다.
                                            매점 운영시간을 아래와 같이 공지 합니다.
                                            금요일 : 오후 5시 ~ 오후 8시
                                            토요일 : 오전 9시 ~ 오전 12시, 오후 4시 ~ 오후 8시
                                            일요일 : 오전 9시 ~ 오전 12시,
                                            평일은 운영하지 않습니다.
                                            평일 화롯대 세트 대여는 입장전 전화를 주시기 바랍니다.
                                            감사합니다.
                                        </span>
                                    </div>
                                    <div className="notice-card-footer">
                                        <span>READ MORE</span>
                                        <span>2022.06.28</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="notice-card">
                                    <div className="notice-card-title">
                                        <h5>장박텐트 주중 이용과 관련하여...(이용 금지)</h5>
                                    </div>
                                    <hr />
                                    <div className="notice-card-content">
                                        <span>
                                            안녕하세요.
                                            캠장지기 입니다.
                                            장박 이용자 분들께서 주중 (월, 화, 수요일) 이용을 위해 입장 하시는 경우가 있습니다.
                                            장박 계약시 말씀 드린대로 주중은 이용을 하실 수 없습니다.
                                            당 야영장은 월, 화, 수 휴장 입니다.
                                            장박 이용자분들은 이점 꼭 인지하시어 주중에 입장하시는 일이 없도록 하여 주시기 바랍니다.
                                        </span>
                                    </div>
                                    <div className="notice-card-footer">
                                        <span>READ MORE</span>
                                        <span>2022.06.28</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="notice-card">
                                    <div className="notice-card-title">
                                        <h5>클럽하우스(매점건물) 샤워실 온수와 관련하여...</h5>
                                    </div>
                                    <hr />
                                    <div className="notice-card-content">
                                        <span>
                                            안녕하세요.
                                            캠장지기 입니다.
                                            클럽하우스(매점건물) 샤워실에 온수가 안나온다는 글을 본 후 직접 확인을 하였습니다.
                                            제가 새벽에 온수를 틀어놓고 직접 확인한 결과는 다음과 같습니다.
                                            남자샤워실 : 온수를 틀고 약 7분 후 부터 온수가 나옵니다.
                                            여자샤워실 : 온수를 틀고 약 10분 후 부터 온수가 나옵니다.
                                            개수대에는 온수가 문제없이 금방 나오고요.
                                            원인을 생각 해 보면 배관의 길이 때문이 아닌가 합니다. 특히나 여자 샤워실은 배관의 길이가 길어서 그런듯 합니다.
                                            이용하실때 조금은 느긋하게 기다리시면서 샤워실 이용 하시면 되겠습니다.
                                            특히나 맨 처음 이용하시는 분들은 온수를 틀어놓고 약 10분 정도 기다리시면 될 듯 합니다.
                                            별도로 온수 순환모터를 달아 두었으나 별로 큰 역활은 하지 못하네요.
                                            샤워실 이용하시는 분들은 참고 바랍니다.
                                            제가 드릴 수 있는 말씀은 '조금 느긋하게....' 입니다.
                                        </span>
                                    </div>
                                    <div className="notice-card-footer">
                                        <span>READ MORE</span>
                                        <span>2022.06.28</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Main;