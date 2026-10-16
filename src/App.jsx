import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 2. Importe o `useEffect` e o `useState` e crie o estado para guardar o resultado
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3. Crie um `useEffect` com array de dependências vazio `[]`
  useEffect(() => {
    // 4. Dentro do useEffect, faça um `fetch` para a API pública
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // 5. Salve o resultado no estado
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao procurar a imagem:", error);
        setLoading(false);
      });
  }, []); // Array vazio garante que roda apenas quando a tela carregar

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Projeto Prático: Consumo de API</h1>
      
      {/* 5. Mostre o resultado na tela */}
      {loading ? (
        <p>A carregar imagem...</p>
      ) : (
        dogImage && (
          <div>
            <img 
              src={dogImage} 
              alt="Um cão aleatório" 
              style={{ maxWidth: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} 
            />
          </div>
        )
      )}
    </div>
  );
}

export default App;