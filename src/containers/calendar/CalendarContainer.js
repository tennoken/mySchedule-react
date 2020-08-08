import React, { useCallback } from 'react';
import Calendar from '../../components/calendar/Calendar';
import { useSelector, useDispatch } from 'react-redux';
import { changeYear } from '../../modules/calendar';

const CalendarConatiner = () => {
  let week = [];
  let { month, year } = useSelector((state) => state.calendar.date);
  const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }));
  console.log(auth);

  const dispatch = useDispatch();

  const getCalendar = useCallback(
    (thisYear, thisMonth) => {
      const monthFirstDate = new Date(thisYear, +thisMonth - 1); // 5 -> 6월
      const day = monthFirstDate.getDay();
      for (let i = 0; i < 42; i++) {
        let newDate = new Date(monthFirstDate.valueOf() + 86400000 * (i - day));
        week.push(newDate);
      }

      return week;
    },
    [week],
  );

  const lastMonth = () => {
    if (month - 1 === 0) {
      month = 13;
      year = year - 1;
    }
    console.log(year, month - 1);
    dispatch(changeYear(year, month - 1));
  };

  const nextMonth = () => {
    if (month - 1 === 11) {
      month = 0;
      year = year + 1;
    }
    console.log(year, month + 1);
    dispatch(changeYear(year, month + 1));
  };

  if (!week) return;

  getCalendar(year, month);

  return (
    <Calendar
      lastMonth={lastMonth}
      nextMonth={nextMonth}
      week={week}
      year={year}
      month={month}
    />
  );
};

export default React.memo(CalendarConatiner);
