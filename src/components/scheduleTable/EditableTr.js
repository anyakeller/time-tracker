import React, { useState } from "react";
import EditableTd from "./EditableTd.js";

function EditableTr(props) {
  const [currentRowData, setRowData] = useState(props.rowData);

  return (
    <tr className="editableTr">
      {props.rowData.map((tableCell, index) => (
        <EditableTd
          key={index}
          isEditMode={props.isEditMode}
          data={tableCell}
        />
      ))}
    </tr>
  );
}

export default EditableTr;
