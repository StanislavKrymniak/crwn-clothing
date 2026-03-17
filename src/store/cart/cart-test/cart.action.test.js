import { setIsCartOpen, setCartItems, addItemToCart, removeItemFromCart, clearItemFromCart } from "../cart.action";
import { CART_ACTION_TYPES } from "../cart.types";


describe('CartAction', () => {
    const cartItems = [
        {
            id: 1,
            name: "Brown Brim",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            price: 25,
            quantity: 1
        },
        {
            id: 2,
            name: "Blue Beanie",
            imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
            price: 18,
            quantity: 2
        }
    ];

    const productToAdd = {
        id: 3,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 17
    };

    const cartItemToRemove = {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
        quantity: 2
    };

    const cartItemToClear = {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
        quantity: 1
    };

    it('should create SetIsCartOpen', () => {
        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_OPEN,
            payload: true
        };
        expect(setIsCartOpen(true)).toEqual(expectedAction);
    });

    it('should create SetCartItems', () => {
        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: cartItems
        };
        expect(setCartItems(cartItems)).toEqual(expectedAction);
    });

    it('should create SetCartItems with added product', () => {
        const expectedCartItems = [
            ...cartItems,
            {
                ...productToAdd,
                quantity: 1
            }
        ];

        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: expectedCartItems
        };

        expect(addItemToCart(cartItems, productToAdd)).toEqual(expectedAction);
    });

    it('should create SetCartItems with removed product', () => {
        const expectedCartItems = [
            {
                id: 1,
                name: "Brown Brim",
                imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                price: 25,
                quantity: 1
            },
            {
                id: 2,
                name: "Blue Beanie",
                imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                price: 18,
                quantity: 1
            }
        ];

        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: expectedCartItems
        };

        expect(removeItemFromCart(cartItems, cartItemToRemove)).toEqual(expectedAction);
    });

    it('should create SetCartItems with cleared product', () => {
        const expectedCartItems = [
            {
                id: 2,
                name: "Blue Beanie",
                imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                price: 18,
                quantity: 2
            }
        ];

        const expectedAction = {
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: expectedCartItems
        };

        expect(clearItemFromCart(cartItems, cartItemToClear)).toEqual(expectedAction);
    });
});


    