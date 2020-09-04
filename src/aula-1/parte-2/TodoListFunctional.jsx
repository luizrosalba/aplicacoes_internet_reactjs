import React, { useState } from 'react';
/// componentes funcionais com estado 
const TodoListFunctional = () => {
/// hook para criacao de estados 
  const [items, setItems] = useState(['Tomate','Alface','Melancia']);
  const addItem = (item) => {
    setItems([...items, item]);
  }

  const removeItem = () => {
    setItems([...items.slice(1)])
  }

  return (
    <div className="bloco-lista">
      <p>Minha lista</p>
      <ul className="lista-estilizada">
        {items.map(item => <li>{item}</li>)}
      </ul>
      <button onClick={() => addItem('Batata-Frita2')}>Add Item</button>
      <button onClick={() => removeItem()}>Remove Item</button>
    </div>
  );
}

export default TodoListFunctional;
