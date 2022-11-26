import { useState } from 'react';
import MainBackGround from '../template/header/MainBackGround';
import Greeting from '../template/header/Greeting';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

let Reservation = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <MainBackGround />
            <Greeting />
            <Calendar
            onChange={onChange}
            value={value}
            showNeighboringMonth={false}
            minDate={new Date()}
            
            />
        </div>
    );
}

export default Reservation;