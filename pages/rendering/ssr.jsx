import axios from "../../utils/axiosServer";
import React, { useEffect, useState } from "react";
import cookies from "next-cookies";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const dataCookies = cookies(context);
  const params = context.query;
  const page = !params?.page ? 1 : params.page;
  console.log(page);
  const result = await axios
    .get(`user?page=${page}&limit=1&search=&sort=firstName ASC`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return [];
    });

  return {
    props: {
      data: result.data.data,
    },
  };
}

export default function SSR(props) {
  const router = useRouter();
  console.log(props);
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, props.data);

  return (
    <div>
      <h1>Rendering with SSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
          <hr />
        </div>
      ))}
      <button
        onClick={() => {
          router.push(`/rendering/ssr?page=2`);
        }}
      >
        To Page 2
      </button>
    </div>
  );
}
