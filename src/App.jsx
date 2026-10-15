import { useState } from 'react';
import Card from './Card';
 
const cards = [
  { name: 'Dragão', type: 'criatura', attack: 8 },
  { name: 'Bola de Fogo', type: 'feitiço', attack: 5 },
  { name: 'Cavaleiro', type: 'criatura', attack: 6 },
  { name: 'Tsukuyomi', type: 'criatura', attack: 20 },
  { name: 'Izanagi', type: 'criatura', attack: 15 },
  { name: 'Chuva de meteoros', type: 'feitiço', attack: 10 },
  { name: 'Estaca de gelo', type: 'feitiço', attack: 10 }
];
 
function App() {
  const [tipo, setTipo] = useState('todas');
  const [pesquisa, setPesquisa] = useState('');
  const [ordenarAtaque, setOrdenarAtaque] = useState(false);
  const [cartaSorte, setCartaSorte] = useState(null);
 
  const cartasFiltradas = cards.filter((card) => {
    const correspondeTipo =
      tipo === 'todas' || card.type === tipo;
 
    const correspondePesquisa =
      card.name.toLowerCase().includes(pesquisa.toLowerCase());
 
    return correspondeTipo && correspondePesquisa;
  });
 
  const cartasOrdenadas = [...cartasFiltradas].sort((a, b) => {
    return ordenarAtaque ? b.attack - a.attack : 0;
  });
 
  function tirarCartaASorte() {
    const indice = Math.floor(Math.random() * cards.length);
    setCartaSorte(cards[indice]);
  }
 
  return (
    <div>
      <h1>A minha coleção de cartas</h1>
 
      <input
        type="text"
        placeholder="Pesquisar carta..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
 
      <p>Tenho {cartasFiltradas.length} cartas</p>
 
      <button onClick={() => setTipo('todas')}>Todas</button>
      <button onClick={() => setTipo('criatura')}>Criaturas</button>
      <button onClick={() => setTipo('feitiço')}>Feitiços</button>
 
      <button onClick={() => setOrdenarAtaque(!ordenarAtaque)}>
        Ordenar por ataque
      </button>
 
      <hr />
 
      <h2>Sortear</h2>
 
      <button onClick={tirarCartaASorte}>
        Tirar uma carta à sorte
      </button>
 
      {cartaSorte && (
        <div>
          <h3>A tua carta sorteada:</h3>
          <Card card={cartaSorte} />
        </div>
      )}
 
      <hr />
 
      <h2>As minhas cartas</h2>
 
      <div>
        {cartasOrdenadas.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
}
 
export default App;