function Card({ card }) {
  return (
    <div className="card">
      <h2>{card.name}</h2>
      <p>Tipo: {card.type}</p>
      <p>Ataque: {card.attack}</p>
 
      {card.attack >= 6 && (
        <strong>Forte</strong>
      )}
    </div>
  );
}
 
export default Card;