import React, { Component } from "react";
import Table from "./components/table";
import "./app.scss";

class App extends Component {
  theadLength = (columnCount) => {
    const tableHead = [];
    for (let i = 1; i < columnCount; i++) {
      tableHead.push(<th>Column {i}</th>);
    }
    tableHead.push(<th>Action</th>);
    return tableHead;
  };

  tbodyLength = (rowCount) => {
    const tableBody = [];
    for (let i = 0; i < rowCount; i++) {
      tableBody.push(
        <tr>
          <td>Husniddin {i}</td>
          <td>23</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>London Park no {i}</td>
          <td>Action</td>
        </tr>
      );

    }
    return tableBody;
  };

  render() {
    return (
      <div className="App">
        <Table
          theadLength={this.theadLength}
          tbodyLength={this.tbodyLength}
        />
      </div>
    );
  }
}

export default App;
