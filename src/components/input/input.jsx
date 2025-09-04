import { useState } from "react";
import './input.css';

const Input = ({ onSubmit }) => {
  const [codigo, setCodigo] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(codigo);
  }

  return (
    <form onSubmit={handleFormSubmit} id="codeForm">
      <input
       minlength="4" 
       maxlength="4" 
       required 
        id="codeInput"
        type="number"
        placeholder="Ingresa el código"
        value={codigo}
        onChange={e => setCodigo(e.target.value)}
      />
      <button type="submit" id="submitBtn" aria-label="Enviar código">
        <span id="arrow">▶</span>
      </button>
    </form>
  );
};

export default Input;