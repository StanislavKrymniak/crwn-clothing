import styled from "styled-components";


export const ProductCardContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        display: none;
        top: 255px;
        
    }

    &:hover {
        img{
            opacity: 0.8;
        }
        button{
            display: block;
        }
    }
`
export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`


/*
.product-card-container {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
    }

    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        display: none;
        top: 255px;
        
    }

    &:hover {
        img{
            opacity: 0.8;
        }
        button{
            display: block;
        }
    }

    .footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
*/