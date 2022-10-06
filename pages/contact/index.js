import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Contact({ data }) {
  //     const [name, setName] = useState("");
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/api/hello")
  //       .then((res) => {
  //         console.log(res);
  //         setName(res.data.name);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  console.log(data);

  return (
    <div>
      <Image
        src={"/Screenshot.png"}
        width={1080}
        height={1020}
        alt="screenshot"
      />
      <h1>Contact Page</h1>
      <p>You are talking to {data.name}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/hello");
  const data = res.data;
  return {
    props: { data }, // will be passed to the page component as props
  };
}
