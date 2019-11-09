export const GET_RECORDS = 'GET_RECORDS';
export const GET_RECORD = 'GET_RECORD';
export const ADD_RECORD = 'ADD_RECORD';


export function addRecord(newRecord) {
  return {
    type: ADD_RECORD,
    newRecord
  }
};

export function getRecords() {
  return {
    type: GET_RECORDS
  }
};
