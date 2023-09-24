import CardDetails from "./CardDetails";
import {cardListType} from '../type'
function CardList({ data, onCardClose, newCardId }:cardListType) {
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <CardDetails
          key={index}
          cardData={item}
          onClose={onCardClose}
          id={index}
          newCharacter={newCardId}
        />
      ))}
    </div>
  );
}

export default CardList;
