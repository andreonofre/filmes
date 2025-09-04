import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`

`;

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #000000;
`;

export const StyledLink  = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    cursor: pointer;
    color: #FFFFFF;
    font-weight: 400;
`;

export const StyledLinkFavoritos  = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 14px;
    /* color: #FFFFFF; */
    background-color: #FFFFFF;
    font-weight: 400;
    border-radius: 5px
`;