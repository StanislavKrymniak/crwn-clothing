import { ProductCardContainer, Footer } from './product-card.styles';
import Button from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useDispatch ,useSelector} from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { Button_Type_Classes } from '../button/button.component';



const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product; 
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const addProductToCart = () => dispatch(addItemToCart(cartItems,product))

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <div className='name'>{name}</div>
                <div className='price'>{price}</div>
            </Footer>
            <Button buttonType={Button_Type_Classes.inverted} onClick={addProductToCart}>Add to card</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;