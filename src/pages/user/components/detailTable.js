import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function DetailTable({ data }) {
  debugger;
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER ID</th>
            <th>TITLE</th>
            <th>DUE ON</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.user_id}</td>
              <td>{value.title}</td>
              <td>{value.due_on}</td>
              <td>{value.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DetailTable;
