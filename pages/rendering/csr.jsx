import axios from "../../utils/axios";
import React, { useState, useEffect } from "react";
import withPrivateRoute from "../../components/withPrivateRoute";

function CSR() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const result = await axios.get(
        `user?page=1&limit=50&search=&sort=firstName ASC`
      );
      setData(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Rendering with CSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default withPrivateRoute(CSR);
