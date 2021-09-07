import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [textInput, setTextInput] = useState("");

  const showProducts = (textInput) => {
    let filter = products.filter((item) => item.name === textInput);
    setProducts(filter);
  };

  const handleClick = (id) => {
    let cart = products.find((item) => item.id === id);
    if (!currentSale.find((item) => item === cart)) {
      setCurrentSale([...currentSale, cart]);
      total(cart);
    }
  };

  const reducer = (acumulador, currentValue) => {
    return acumulador + currentValue.price;
  };

  const total = (item) => {
    setCartTotal(currentSale.reduce(reducer, 0));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="input">
          <input
            type="text"
            placeholder="Busque Produtos"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button onClick={() => showProducts(textInput)}>Buscar</button>
        </div>
        <MenuContainer productsList={products} handleClick={handleClick} />
        <section>
          Total: {cartTotal}\ Carrinho{" "}
          {currentSale.map((item, index) => (
            <ul key={index}>
              <p>{item.name}</p>
              <p>Categoria - {item.category}</p>
              <p>Preço R${item.price}</p>
            </ul>
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
