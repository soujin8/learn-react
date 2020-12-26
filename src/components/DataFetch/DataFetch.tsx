import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetch: React.FC = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {data.hits.map((item: any) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DataFetch;
