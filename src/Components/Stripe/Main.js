import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import API from '../../Config/Config';

import CheckoutForm from "./CheckoutForm";
import "./styles.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51OYZnQC6MQ7KanJeQNlVe9YflfmIJXDMJhQdXqzMk06IqTJFrk5gWmR0DeboLyceiNayCvpaNDbKdTHZIXTMkDOS00yGK0Nczp");

export default function Main(props) {
  const [clientSecret, setClientSecret] = useState("");
  const price = props.price;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${API.apiUri}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
    <h2 className="price-text">Your total bill is <span className="price-color">${price}</span></h2>
    <div className="payment-main">
        <div className="payment-container">
            <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
                </Elements>
            )}
            </div>
        </div>
    </div>
    
    </>
  );
}