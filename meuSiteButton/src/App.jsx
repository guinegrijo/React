import React from "react";

function App() {
  return (
    <div>
      <h1>Bem vindo React</h1>
      <p>Exemplo 2 de componentização</p>
      <Button/>
    </div>
  );
}

function Button() {
  const click = () => {
    alert('Você clicou no button')
  };
  return (
    <button
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }} 
      onClick={click}
    >
      Click here
    </button>
  );
}

export default App;
