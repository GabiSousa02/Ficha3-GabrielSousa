

const cards = [
  { name: "Dragão", type: "criatura", attack: 8 },
  { name: "Bola de Fogo", type: "feitiço", attack: 5 },
  { name: "Cavaleiro", type: "criatura", attack: 6 }
];
function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
    </main>
  );
}

import Card from "./Card";
 
function App() {
  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}
 
export default App;
