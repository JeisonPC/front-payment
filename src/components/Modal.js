import {useState} from "react";
import Image from 'next/image';

const Modal = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [isMasterCard, setIsMasterCard] = useState(false);

  const handleCardNumberChange = (event) => {
    const enteredNumber = event.target.value;
    setCardNumber(enteredNumber);

    // Realizar la validación para detectar si es una tarjeta MasterCard
    const masterCardRegex = /^5[1-5][0-9]{14}$/;
    setIsMasterCard(masterCardRegex.test(enteredNumber));
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>Cerrar Modal</button>
        <h3>Ingrese los detalles de la tarjeta de crédito</h3>
        <label>
          Número de tarjeta: <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </label>
        {isMasterCard && (
          <Image
          src="https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg"
          alt="Logo de MasterCard"
          width={50}
          height={50}
        />
        )}
        <label>
          Número de cuotas: <input type="text" />
        </label>
        <label>
          Mes de vencimiento: <input type="text" />
        </label>
        <label>
          Año de vencimiento: <input type="text" />
        </label>
        <label>
          CVV: <input type="text" />
        </label>
        <label>
          Nombre del titular: <input type="text" />
        </label>
        <button>Realizar el pago</button>
      </div>
    </div>
  );
};

export default Modal;
