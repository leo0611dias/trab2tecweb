import React, { useEffect, useState } from 'react';

function Listagem() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/usuarios") 
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Erro ao carregar dados", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Usuários Cadastrados</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          {usuarios.map((user, index) => (
            <li key={index}>
              <strong>Nome:</strong> {user.nome} | <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Listagem;
