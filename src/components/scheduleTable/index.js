import React from 'react';
import EditableTr from './EditableTr.js';
import EditableTd from './EditableTd.js';
import './style.css';

class ScheduleTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: props.headers,
      tableBody: props.tableBody,
      originalData: [props.headers, props.tableBody],
      isEditMode: false
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.tableBody !== prevProps.tableBody) {
      console.log("change");
      this.setState({
        headers: this.props.headers,
        tableBody: this.props.tableBody,
        originalData: [this.props.headers, this.props.tableBody],
        isEditMode: false
      });
    }
    console.log('no change');
  }

  makeRow(rowData) {
    return rowData.map((tableCell, index) => (
      <EditableTd
        key={index}
        isEditMode={this.state.isEditMode}
        data={tableCell}
      />
    ));
  }

  handleClickEditSave(e) {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  handleClickCancelRevert(e) {
    console.log('cancel revert');
  }

  render() {
    return (
      <div>
        <div className="my-3">
          <button
            className="btn btn-primary me-2"
            onClick={(e) => this.handleClickEditSave(e)}>
            {this.state.isEditMode
              ? 'save changes to time tracker'
              : 'edit time tracker'}
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => this.handleClickCancelRevert(e)}>
            {this.state.isEditMode
              ? 'discard current changes'
              : 'revert to original'}
          </button>
        </div>
        <table className="table table-secondary">
          <thead>
            <tr>
              {this.state.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.tableBody.map((tableRow, index) => (
              <EditableTr
                key={index}
                rowData={tableRow}
                isEditMode={this.state.isEditMode}
              />
            ))}
            <tr>
              <td colSpan="4">asdfas</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScheduleTable;
