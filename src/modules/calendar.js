import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

let [year, month] = new Date().toLocaleDateString().split('.');

const CHANGE_DATE = 'calendar/CHANGE_DATE';

const initialState = {
  calendar: [],
  date: {
    year: +year,
    month: +month,
  },
};

export const changeYear = createAction(CHANGE_DATE, (year, month) => ({
  year,
  month,
}));

const calendar = handleActions(
  {
    [CHANGE_DATE]: (state, { payload: { year, month } }) =>
      produce(state, (draft) => {
        draft.date.year = year;
        draft.date.month = month;
      }),
  },
  initialState,
);

export default calendar;
