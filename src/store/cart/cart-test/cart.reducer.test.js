import { cartReducer } from "../cart.reducer";
import { CART_ACTION_TYPES } from "../cart.types";


describe('CartReducer', () => {
    const mockStateCart = {
        cartItems: [],
        isCartOpen: false
    }
    it('should return the cartItems state', () => {
        expect(cartReducer(undefined, {})).toEqual({cartItems: [],isCartOpen: false})
    })
    it('should handle SET_CART_ITEMS ', () => {
        expect(cartReducer(mockStateCart, {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: [{
                title:'Hats',
                items: [
                    {
                        "id":1,
                        "name": "Brown Brim",
                        "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                        "price": 25
                    }
                ]
            }]
        })).toEqual({cartItems: [{
            title:'Hats',
            items: [
                {
                    "id":1,
                    "name": "Brown Brim",
                    "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                    "price": 25
                }
            ]
        }], isCartOpen:false})
    })
    it('should handle SET_CART_OPEN', () => {
        
        expect(cartReducer(mockStateCart, {
            type: CART_ACTION_TYPES.SET_CART_OPEN,
            payload: true
        })).toEqual({isCartOpen: true, cartItems:[]})
    })
})
