import React from "react";
import { Link } from "react-router-dom";

function Account({accounts , edit , deleteAccount}) {
  


  const acctionsButtons = edit ? (
    <>
      <td>
        <button onClick={() => {deleteAccount(accounts.id)}} className="btn btn-danger">Delete</button>
        <Link to={"/edit/"+accounts.id} className="btn btn-warning">Edit</Link>
      </td>
    </>
  ) : null;

  return (
    <tr>
      <td>{accounts.id}</td>
      <td>{accounts.name}</td>
      <td>{accounts.lastname}</td>
      <td>{accounts.phone}</td>
      <td>{accounts.email}</td>
      {acctionsButtons}
    </tr>
  );
}

export default Account;
