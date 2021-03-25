import React, { useState } from "react";
// import EditableTr from "./EditableTr.js";
// import EditableTd from "./EditableTd.js";
import "./style.css";

function ScheduleTable({ data, fileName }) {
  const [isEditMode, toggleEditMode] = useState(false);

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            {data.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.tableBody.map((tableRow, rowNumber) => (
            <tr className="editableTr" key={rowNumber}>
              {tableRow.map((tableCell, colNumber) => (
                <td key={colNumber}>
                  <span
                    className={`form-control d-inline-block px-2 ${
                      isEditMode ? "" : "noEdit"
                    }`}
                    contentEditable={isEditMode}>
                    {tableCell}
                  </span>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan="4">asdfas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;
