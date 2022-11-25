import '../../css/header/NavBar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let NavBar = () => {
    let navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop); // IE에서는 ... .scrollTop만 지원
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        return () => {
            window.removeEventListener('scroll', updateScroll); //unmount시 해제되도록
        };
    }, []);

    return (
        <div
            className={`navbar ${ scrollPosition <= 50 ? 'not-scrolled' : 'scrolled' }`}
            style={{ position: 'fixed', top: '0', zIndex: '999' }}>
            <div className="logo" onClick={() => { navigate('/') }}>
                <p>김해국민야영장</p>
                <p>가야랜드달빛야영장</p>
            </div>

            <div className="menu">
                <ul>
                    <p>달빛야영장소개</p>
                    <li>달빛야영장</li>
                    <li>둘러보기</li>
                    <li>오시는길</li>
                </ul>
                <ul>
                    <p>캠핑구역</p>
                    <li>수로존</li>
                    <li>김해존</li>
                    <li>신어존</li>
                </ul>
                <ul>
                    <p>부대시설</p>
                    <li>내부시설</li>
                    <li>외부시설</li>
                    <li>편의시설</li>
                </ul>
                <ul>
                    <p>주변관광</p>
                    <li>유적지</li>
                    <li>체험</li>
                </ul>
                <ul>
                    <p>예약안내</p>
                    <li>예약정보</li>
                    <li>예약하기</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;