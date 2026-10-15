import Card from "./Card";

const cards = [
  { name: "Dragão", type: "criatura", attack: 8 },
  { name: "Bola de Fogo", type: "feitiço", attack: 5 },
  { name: "Cavaleiro", type: "criatura", attack: 6 }
];


 
function App() {
  return (
    <div>
      <p>Tenho {cards.length} cartas</p>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      
    </div>
  );
}
 
export default App;
