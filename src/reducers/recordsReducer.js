import { ADD_RECORD, GET_RECORDS } from '../actions/actionsrecords';
import recordsData from '../data/records.json'

const initialState = {
  records: recordsData,
};

const recordsReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_RECORD:
      return{...state, records:[...state.records, action.newRecord]}

    case GET_RECORDS:
      console.log(state);
      return Object.assign({}, state, {records: state.records});
  }
  return state;
};

export default recordsReducer;
