const Products = ({ nome, categoria, preco, id, callback }) => {
  return (
    <li>
      <p>{nome}</p>
      <p> Categoria: {categoria}</p>
      <p> Preço: R${preco}</p>
      <button onClick={() => callback(id)}>Adicionar ao Carrinho</button>
    </li>
  );
};

export default Products;
