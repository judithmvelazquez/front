import { useEffect, useState } from "react";
import { Categorias } from "./components/Categorias";
import { Generos } from "./components/Generos";
import { Marcas } from "./components/Marcas";
import { Nav } from "./components/nav/Nav";
import { Paises } from "./components/Paises";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3002";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Categorias />
      <Generos />
      <Marcas/>
      <Paises />
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default App;
