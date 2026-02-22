import { useEffect, useState } from "react";

function Hook() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://api.worldbank.org/v2/region?format=json")
      .then((res) => res.json())
      .then((data) => {
        setPost(data[1]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {post.map((region) => (
        <span key={region.id}>
          {region.name}
          <br />
        </span>
      ))}
    </>
  );
}

export default Hook;
