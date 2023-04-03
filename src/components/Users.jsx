import React from "react";

const Users = ({ name, lastname, address }) => {
  return (
    <div>
      <h1>{name || "default name"}</h1>
      <p>{lastname || "default lastname"}</p>
      <p>{address || "default address"}</p>
    </div>
  );
};

export default Users;
