import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentFrom from '../../components/payment-form/payment-form.component';
import { CheckoutContainer, CheckoutHeader } from './checkout.styles';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const Checkout = () => {
    const cartTotal = useSelector(selectCartTotal)
    const cartItems = useSelector(selectCartItems)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </CheckoutHeader>
            
                {cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
                ))}
                <span className='total'>Total: ${cartTotal}</span>
                <PaymentFrom></PaymentFrom>
        </CheckoutContainer>
    );
};

export default Checkout;
