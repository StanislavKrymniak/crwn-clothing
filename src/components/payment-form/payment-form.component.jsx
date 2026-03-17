import { CardElement } from "@stripe/react-stripe-js";
import { useStripe,useElements  } from "@stripe/react-stripe-js";
import { Button_Type_Classes } from "../button/button.component";
import {PaymentFormContainer, FormContainer, PaymentButton} from './payment-form.styles'
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";


const PaymentFrom = () => {
    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)


    const paymentHandler = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true)
    
        try {
            const response = await fetch('/.netlify/create-payment-intent', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amount * 100 }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch payment intent');
            }
    
            const responseData = await response.json();
            const { paymentIntent: { client_secret } } = responseData;
    
            const paymentResult = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName : 'Guest'
                    }
                }
            });

            setIsProcessingPayment(false)
    
            if (paymentResult.error) {
                alert(paymentResult.error.message);
            } else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    alert('Payment Successful');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    

    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit card payment:</h2>
                <CardElement></CardElement>
                <PaymentButton isLoading={isProcessingPayment}
                buttonType={Button_Type_Classes.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentFrom