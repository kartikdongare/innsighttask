import {cardDetailsType} from '../type'
function CardDetails({ cardData, onClose, id, newCharacter }:cardDetailsType) {
    return (
      <div className="card">
        {newCharacter < 4 ? (
          ""
        ) : (
          <i
            className="fa fa-times-circle icon"
            aria-hidden="true"
            onClick={() => onClose(id)}
          ></i>
        )}
        <p className="para">
          <strong>Name:-</strong> {cardData.name}
        </p>
        <p className="para">
          {" "}
          <strong>Height:-</strong> {cardData.height}
        </p>
        <p className="para">
          <strong>Films:-</strong>
        </p>
        {cardData.films.map((ele, index) => (
          <ul key={index}>
            <li className="para">{ele}</li>
          </ul>
        ))}
      </div>
    );
  }
  
  export default CardDetails;
  