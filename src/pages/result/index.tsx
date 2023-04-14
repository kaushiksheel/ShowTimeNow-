import { Text } from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Stripe from "stripe";

function Results({ data }: { data: Stripe.Checkout.Session }) {
  const router = useRouter();
  console.log(data);

  return (
    <div>
      <Text fontSize="2xl">{data?.amount_subtotal}</Text>
    </div>
  );
}

export default Results;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session_id = context.query.session_id;
  const response = await fetch(
    `http://localhost:3000/api/get_checkout_session?session_id=${session_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
