import { useState } from "react";
import Image from "next/image";

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
        <button className="button-sinrelleno" onClick={onClose}>
          X
        </button>
        <h3>Ingrese los detalles de la tarjeta de crédito</h3>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="Número de tarjeta"
        />
        {isMasterCard && (
          <Image
            src="https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg"
            alt="Logo de MasterCard"
            width={50}
            height={50}
          />
        )}
        <input type="text" placeholder="Número de cuotas" />

        <label>
          Expira en:
          <input type="text" placeholder="Mes" />
          <input type="text" placeholder="Año" />
        </label>

        <input type="text" placeholder="CVV" />

        <input type="text" placeholder="Nombre del titular" />

        <select placeholder="CC">
          <option value="">Tipo de documento</option>
          <option value="CC">Cédula de Ciudadanía (CC)</option>
          <option value="TI">Tarjeta de Identidad (TI)</option>
        </select>
        <input type="text" placeholder="Numero" />

        <button className="button">Realizar el pago</button>
      </div>
    </div>
  );
};

export default Modal;
