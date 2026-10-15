
import { useState } from 'react';

function Card({ card }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <h2>{card.name}</h2>

      <p>Tipo: {card.type}</p>
      <p>Ataque: {card.attack}</p>

      {card.attack >= 6 && (
        <strong>Forte</strong>
      )}

      <br />

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </div>
  );
}

export default Card;
