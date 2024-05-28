import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const elements = useElements();

  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    console.log("card ", cardElement);

    console.log("stripe ", stripe);
  };

  return (
    <div className="h-screen">
      <form
        onSubmit={handleSubmit}
        className="mt-[200px] max-w-sm mx-auto h-[300px]"
      >
        <CardElement />

        <button
          type="submit"
          className="hover:bg-black rounded w-[300px] text-white h-10 mt-4"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
