import { useState, useEffect } from "react";

export const Generos = () => {
  const [Generos, setGeneros] = useState<any[]>([]);

  const API_URL = "http://localhost:3002";
  const ENDPOINT = "categorias";

  const getGeneros = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setGeneros(data);
  };

  useEffect(() => {
    getGeneros();
  }, []);

  return (
    <div>
      <ul>
        {Generos.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

