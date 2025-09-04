
import { 
    Container, 
    HeaderStyle,
    StyledLink,
    StyledLinkFavoritos,
 } from "./headerStyle";




const Header = () => {
  return (
    <Container> 
        <HeaderStyle>
            <StyledLink to="/" > Onofre Films </StyledLink>
            <StyledLinkFavoritos to="/favoritos" > Meus Films </StyledLinkFavoritos>
        </HeaderStyle>
     </Container>
  );
};

export default Header;