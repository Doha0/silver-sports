import { useLoaderData } from "react-router-dom";
// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

import React from 'react';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {

    const paymentData = useLoaderData();
    const amount = parseFloat(paymentData.price);
    const amountString = amount.toFixed(2);
    const price = parseFloat(amountString);
    // console.log(paymentData);

    return (
        <div className="w-[25rem] md:w-[50rem]">
            {/* <p>{paymentData._id}</p> */}
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} paymentData={paymentData} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;


