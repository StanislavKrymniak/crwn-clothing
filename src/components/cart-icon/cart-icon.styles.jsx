import styled from "styled-components";

import cartImage from '../../assets/shopping-bag.png';


export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
/*
export const ShoppingIcon = styled(cartImage)`
    width: 40px;
    height: 40px;
`
*/
export const ShoppingIcon = styled(CartIconContainer)`
    background-image: url(${cartImage});
    background-size: cover;
    width: 40px;
    height: 40px;
`;
export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`
/*
.cart-icon-container {
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .shopping-icon {
        width: 40px;
        height: 40px;
    }

    .item-count {
        position: absolute;
        font-size: 10px;
        font-weight: bold;
        bottom: 12px;
    }
}
*/