import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CalendarBackgroundBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarBlock = styled.div`
  background: white;
  width: 480px;
  height: 300px;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
`;

const CalendarHeader = styled.div`
  height: 24px;

  span {
    font-size: 24px;
    margin: 0 20px;
  }

  .leftButton,
  .rightButton {
    cursor: pointer;
  }
`;

const CalendarBody = styled.div`
  margin-top: 25px;
`;

const CalendarWeekHeader = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 24px;
    margin: 0 20px;
  }

  .index0 {
    color: red;
  }

  .index6 {
    color: blue;
  }
`;

const CalendarWeekBody = styled.div`
  font-size: 24px;
  padding: 10px 30px;

  div.row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    div {
      width: 30px;
      height: 30px;
      text-align: center;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
        background-color: #ced4da;
      }
    }
  }
`;

const Calendar = ({ lastMonth, nextMonth, month, year, week }) => {
  const weekHeaderArray = ['일', '월', '화', '수', '목', '금', '토'];

  const displayCalendar = (dayArray) => {
    let html = '';
    let cnt = 0;
    for (let i = 0; i < 6; i++) {
      html += `<div class="row">`;
      for (let j = 0; j < 7; j++) {
        html += `<div><span>${dayArray[cnt++].getDate()}</span></div>`;
      }
      html += `</div>`;
    }
    return html;
  };

  return (
    <CalendarBackgroundBlock>
      <CalendarBlock>
        <CalendarHeader>
          <FiChevronLeft className="leftButton" onClick={lastMonth} />
          <span>
            {year}년 {month}월
          </span>
          <FiChevronRight className="rightButton" onClick={nextMonth} />
        </CalendarHeader>
        <CalendarBody>
          <CalendarWeekHeader>
            {weekHeaderArray.map((week, index) => {
              return (
                <div key={index}>
                  <span className={`index${index}`}>{week}</span>
                </div>
              );
            })}
          </CalendarWeekHeader>
          <CalendarWeekBody
            dangerouslySetInnerHTML={{ __html: displayCalendar(week) }}
          ></CalendarWeekBody>
        </CalendarBody>
      </CalendarBlock>
    </CalendarBackgroundBlock>
  );
};

export default Calendar;
