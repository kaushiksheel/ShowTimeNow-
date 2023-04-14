import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as ""
);

export const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const stripe = await stripePromise;

      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Add any additional data you want to pass to the API route here
        }),
      });

      const { id } = await response.json();

      await stripe?.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Checkout"}
      </button>
    </div>
  );
};
