import React, { Component } from "react";
import { connect } from 'react-redux';
import { getRecords, addRecord } from '../actions/actionsRecords';
import RecordsList from "./Records/RecordsList";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecords();
  }

  render() {
    console.log(this.props)
      return(
        <div>
          <div className="sidebar">Sidebar</div>
            <RecordsList records={this.props.records.records} />
        </div>
      );
  }
};

const mapStateProps = function(store) {
  return {
    records : store.recordsReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  getRecords: () => dispatch(getRecords())
})

export default connect (
  mapStateProps,
  mapDispatchToProps,
)(Main);
