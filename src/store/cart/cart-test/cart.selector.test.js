import { selectCartReducer,selectIsCartOpen,selectCartItems,selectCartTotal,selectCartCount } from "../cart.selector";


describe('CartSelector' , () => {
    const mockState = {
        cart: {
            cartItems: [],
            isCartOpen: false,
        }
    }
    const mockStateWithItems = {
        cart: {
            cartItems: [
                { id: 1, price: 10, quantity: 2 },
                { id: 2, price: 5, quantity: 3 }
            ],
            isCartOpen: false,
        }
    };
    it('should select CartState' , () => {
        expect(selectCartReducer(mockState)).toEqual(mockState.cart)
    })
    it('should select isCartOpen', () => {
        expect(selectIsCartOpen(mockState)).toEqual(mockState.cart.isCartOpen)
    })
    it('should select cartItems' , () => {
        expect(selectCartItems(mockState)).toEqual(mockState.cart.cartItems)
    })
    it('should select cartTotal', () => {
        expect(selectCartTotal(mockStateWithItems)).toEqual(35)
    })
    it('should select CartCount', () => {
        expect(selectCartCount(mockStateWithItems)).toEqual(5)
    })
})
