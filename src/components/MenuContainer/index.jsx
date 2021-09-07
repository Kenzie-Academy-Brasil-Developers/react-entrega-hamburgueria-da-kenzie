import Products from "../Product";
import "./index.css";

const MenuContainer = ({ productsList, handleClick }) => {
  return (
    <ul className="menu">
      {productsList.map((item, index) => (
        <Products
          key={index}
          nome={item.name}
          categoria={item.category}
          preco={item.price}
          id={item.id}
          callback={handleClick}
        />
      ))}
    </ul>
  );
};

export default MenuContainer;
