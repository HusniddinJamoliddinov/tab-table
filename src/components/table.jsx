import "./table.scss";

const Table = ({theadLength, tbodyLength}) => {
  return ( 
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          {theadLength(10)}
        </tr>
      </thead>
      <tbody>{tbodyLength(30)}</tbody>
    </table>
   );
}

 
export default Table;
