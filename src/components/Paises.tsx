import { useState, useEffect } from "react";

export const Paises = () => {
  const [Paises, setPaises] = useState<any[]>([]);

  const API_URL = "http://localhost:3002";
  const ENDPOINT = "paises";

  const getPaises = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setPaises(data);
  };

  useEffect(() => {
    getPaises();
  }, []);

  return (
    <div>
      <ul>
        {Paises.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
