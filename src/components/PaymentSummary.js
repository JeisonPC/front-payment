import React, { useState } from 'react';
import { useStateValue } from './stateManagement'; // Assuming a state management solution

function PaymentSummary() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { selectedProduct, cardData } = useStateValue();

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    // Simulate payment success or failure
    const isSuccessful = Math.random() > 0.5;

    // Handle success or failure based on simulated outcome
    if (isSuccessful) {
      // Redirect to success page or display success message
    } else {
      // Display error message
    }

    setIsProcessing(false);
  };

  return (
    <div className="payment-summary">
      <h2>Payment Summary</h2>
      <p>Product: {selectedProduct.name}</p>
      <p>Price: {selectedProduct.price}</p>
      <button onClick={handleConfirmPayment} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Confirm Payment'}
      </button>
    </div>
  );
}

export default PaymentSummary;
