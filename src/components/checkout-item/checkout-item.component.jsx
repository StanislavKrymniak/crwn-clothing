import { CheckoutItemContainer, Quantity, ImageContainer } from './checkout-item.styles';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems)

    const dispatch = useDispatch()

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <span className='name'>{name}</span>
            <Quantity>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </Quantity>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;