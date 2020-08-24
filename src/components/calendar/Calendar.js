import React from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CalendarBackgroundBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CalendarWrapper = styled.div``;

const UsernameBlock = styled.div`
  width: 100%;
`;

const UsernameHeader = styled.header`
  text-align: center;
  background: #fff;
  padding-top: 25px;
  font-size: 25px;
`;

const CalendarBlock = styled.div`
  background: white;
  width: 480px;
  height: 300px;
  text-align: center;
  padding: 20px;
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
  border-bottom: 1px solid;
  padding-bottom: 10px;

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

    .gray {
      color: #868e96;
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background: #868e96;
  margin-top: 30px;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 18px;

  &:hover {
    background-color: #66d9e8;
  }
`;

const Calendar = ({
  lastMonth,
  nextMonth,
  month,
  year,
  week,
  user,
  onLogout,
}) => {
  const weekHeaderArray = ['일', '월', '화', '수', '목', '금', '토'];

  const { username } = user;

  const displayCalendar = (dayArray) => {
    let html = '';
    let cnt = 0;
    console.log(dayArray[0].getMonth());
    for (let i = 0; i < 6; i++) {
      html += `<div class="row">`;
      for (let j = 0; j < 7; j++) {
        html += `<div>
          <span class="${dayArray[cnt].getMonth() + 1 !== month ? 'gray' : ''}">
            ${dayArray[cnt++].getDate()}
          </span>
        </div>`;
      }
      html += `</div>`;
    }
    return html;
  };

  return (
    <CalendarBackgroundBlock>
      <CalendarWrapper>
        <UsernameBlock>
          <UsernameHeader>{username} 님의 스케쥴</UsernameHeader>
          <StyledButton onClick={onLogout}>로그아웃</StyledButton>
        </UsernameBlock>
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
              month={month}
            ></CalendarWeekBody>
          </CalendarBody>
        </CalendarBlock>
      </CalendarWrapper>
    </CalendarBackgroundBlock>
  );
};

export default Calendar;
