import { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Validate the cart details that were sent from the client.

      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Test Product",
              },
              unit_amount: 2000.0,
            },
            quantity: 1,
          },
        ],

        success_url: `${req.headers.origin}/profile?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
        mode: "payment",
      };

      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      console.log(err);
      const errorMessage =
        err instanceof Error ? err.message : "Internal server error";
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
