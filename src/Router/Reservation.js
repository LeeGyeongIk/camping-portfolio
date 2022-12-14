import '../css/route/Reservation.css';
import { useState } from 'react';
import MainBackGround from '../template/header/MainBackGround';
import Greeting from '../template/header/Greeting';
import GetImg from '../module/GetImg';
import GetSwiper from '../module/GetSwiper';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import { ko } from "date-fns/esm/locale";

let Reservation = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectCampingSite, setSelectCampingSite] = useState(0);
    const campingSiteName = ["수로존", "김해존", "신어존"];
    const campingSiteImg = GetImg;

    return (
        <div>
            <MainBackGround />
            <Greeting title="예약하기" content="달빛야영장을 온라인 서비스로 간편하게 이용하세요." />
            <SelectOptions
                startDate={startDate}
                setStartDate={setStartDate}
                campingSiteName={campingSiteName}
                campingSiteImg={campingSiteImg}
                selectCampingSite={selectCampingSite}
                setSelectCampingSite={setSelectCampingSite}
            />
        </div>
    );
}

let SelectOptions = (props) => {
    return (
        <div className="select-options section-margin-top-2">
            <Container>
                <Row>
                    <Col sm>
                        <div className="date-picker-start section-margin-bottom-5">
                            <DatePicker
                                selected={props.startDate}
                                onChange={(date) => props.setStartDate(date)}
                                locale={ko}                   // 한글로 변경
                                dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                                showPopperArrow={false}       // 화살표 변경
                                minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                                customInput={		      // 날짜 뜨는 인풋 커스텀
                                    <Form.Control as="textarea" rows={1} />
                                }
                            />
                        </div>
                    </Col>
                    <Col sm>
                        <div className="date-picker-end">
                            <DatePicker
                                selected={props.startDate}
                                onChange={(date) => props.setStartDate(date)}
                                locale={ko}                   // 한글로 변경
                                dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
                                showPopperArrow={false}       // 화살표 변경
                                minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
                                customInput={		      // 날짜 뜨는 인풋 커스텀
                                    <Form.Control as="textarea" rows={1} />
                                }
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className="select-camping-site content-margin-bottom-3">
                            <div className="select-camping-site-pill-wrap">
                                <div
                                    onClick={() => { props.setSelectCampingSite(0) }}
                                    className={`select-camping-site-pill ${props.selectCampingSite == 0 ? "camping-site-selected" : null}`}>
                                    <span>수로존</span>
                                </div>
                                <div
                                    onClick={() => { props.setSelectCampingSite(1) }}
                                    className={`select-camping-site-pill ${props.selectCampingSite == 1 ? "camping-site-selected" : null}`}>
                                    <span>김해존</span>
                                </div>
                                <div
                                    onClick={() => { props.setSelectCampingSite(2) }}
                                    className={`select-camping-site-pill ${props.selectCampingSite == 2 ? "camping-site-selected" : null}`}>
                                    <span>신어존</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <div className="select-camping-site-img content-margin-bottom-3">
                            <GetSwiper campingSiteImg={props.campingSiteImg[props.selectCampingSite]} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="select-options-info content-margin-bottom-3">
                        <table>
                            <tbody>
                                <tr>
                                    <th>사이트명</th>
                                    <td>{ props.campingSiteName[props.selectCampingSite] }</td>
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
                                <tr>
                                    <th>총 가격</th>
                                    <td>
                                        <span>200,000원</span>
                                        <span>100원</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Row>
                <Row>
                    <div className="select-options-done-button content-margin-bottom-3">
                        <button>예약</button>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Reservation;