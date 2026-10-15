import { useState } from "react";
import Card from "./Card";
 
const cards = [
  { name: "Dragão", type: "criatura", attack: 8 },
  { name: "Bola de Fogo", type: "feitiço", attack: 5 },
  { name: "Cavaleiro", type: "criatura", attack: 6 },
  { name: "Tsukuyomi", type: "criatura", attack: 20 },
  { name: "Izanagi", type: "criatura", attack: 15 },
  { name: "Chuva de meteoros", type: "feitiço", attack: 10 }
];
 
function App() {
  const [tipo, setTipo] = useState("todas");
 
  const cartasFiltradas = cards.filter((card) => {
    if (tipo === "todas") return true;
    return card.type === tipo;
  });
 
  return (
    <div>
      <p>Tenho {cartasFiltradas.length} cartas</p>
 
      <button onClick={() => setTipo("todas")}>
        Todas
      </button>
 
      <button onClick={() => setTipo("criatura")}>
        Criaturas
      </button>
 
      <button onClick={() => setTipo("feitiço")}>
        Feitiços
      </button>
 
      {cartasFiltradas.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}
 
export default App;