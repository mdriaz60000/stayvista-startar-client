import {  DateRange } from 'react-date-range';

const Calender = ({value, handleSelect}) => {
    return <DateRange
     rangeColors={['#f43f5e']}
     direction='vertical'
     showDateDisplay={false}
    ></DateRange>
        
};

export default Calender;