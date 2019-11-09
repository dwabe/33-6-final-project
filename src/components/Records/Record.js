import React from 'react';

const Record = (props) => (
  <div className="record-container">
    <h2>{props.record.title}</h2>
    <h2>{props.record.author}</h2>
  </div>
);

export default Record;