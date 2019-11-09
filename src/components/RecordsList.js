import React from 'react';
import Record from './Record';

const RecordsList = (props) => (
  <div className="users-list">
    {props.records.map(record => {
      return (
        <div className="single-record" key={record.id}>
          <Record record={record} />
        </div> 
      )
    })}
  </div>
);

export default RecordsList;
