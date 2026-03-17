import { useNavigate } from "react-router-dom";


import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.jsx";

const DirectoryItem = ({category}) => {
    const {imageURL, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
     <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage  $imageURL={imageURL}/>
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;