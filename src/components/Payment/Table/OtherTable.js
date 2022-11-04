
import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css";
import "./styles.css";

function OtherTable() {
  const tableData = [
    { name: "Tanner Linsley", age: 26 },
    { name: "Bob Dylan", age: 53 }
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age",
      Cell: (props) => <span className="number">{props.value}</span> // Custom cell components!
    }
  ];

  return (
    <div className="App">
      <ReactTable
        data={tableData}
        columns={columns}
        showPagination={false}
        defaultPageSize={2}
      />
    </div>
  );
}


export default OtherTable