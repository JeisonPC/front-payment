import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");

  const handleCardNumberChange = (event) => {
    const enteredNumber = event.target.value;
    setCardNumber(enteredNumber);

    // Actualizar el tipo de tarjeta basado en el primer dígito
    const firstDigit = enteredNumber.charAt(0);

    if (firstDigit === "4") {
      setCardType("visa");
    } else if (firstDigit === "5") {
      setCardType("mastercard");
    } else {
      setCardType(""); // Reiniciar el tipo de tarjeta si no es Visa ni MasterCard
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="container-salir">
          <h3>Ingresa los detalles de pago</h3>
          <button className="button-sinrelleno" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="container-card">
          {cardType === "mastercard" && (
            <Image
              src="https://mtf.mastercard.co.za/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg"
              alt="Logo de MasterCard"
              width={50}
              height={50}
            />
          )}
          {cardType === "visa" && (
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Logo de Visa"
              width={50}
              height={50}
            />
          )}
          <div className="d-flex gap-1">
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Número de tarjeta"
            />
            <select placeholder="N. cuotas">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
            </select>
          </div>

          <label className="d-flex gap-2">
            <span>Expira en:</span>
            <div className="gap-1 d-flex">
              <select placeholder="Mes">
                <option value="">Mes</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
              <select placeholder="Año">
                <option value="">Año</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2024">2025</option>
                <option value="2024">2026</option>
                <option value="2024">2027</option>
                <option value="2024">2028</option>
                <option value="2024">2029</option>
              </select>
            </div>
            <input type="text" placeholder="CVV" />
          </label>

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
    </div>
  );
};

export default Modal;
