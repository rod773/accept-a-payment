import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./components/PaymentForm";
import Card from "./components/Card";

const publicShareableKey =
  "pk_test_51PKzvaHui8JNyJ0cvJ84O0DCqtJpF8A6N01gTOqxbIeT72DA0CzIsoYaBEmImYF5igkswvfkIVvg5RnbjcKjA5C300QaFhti89";

const stripePromise = loadStripe(publicShareableKey);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaymentForm />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
