import styled from "styled-components"

import { Link } from "react-router-dom"

export const NavigationContainer = styled.div`
  padding: 0 0 30px 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;


export const LogoContainer = styled(Link)`
  img {
    height:100%;
    width: 70px;
    padding: 25px;
  }
`

export const NavLinks = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
/*
.navigation {
  padding: 0 0 30px 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    img {
      height:100%;
      width: 70px;
      padding: 25px;
    }
  }

  .nav-links-container {
    height: 100%;
    display: flex;
    align-items: center;
    .nav-link {
      margin-right: 15px;
    }
  }
}

*/



