import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackgroundContainer = styled.div`
    width: 100%;
    background-color: #000000;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    padding: 16px;
    margin: 0 auto;
`;

export const ContentContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 25%;
`;

export const Logo = styled.img`
    display: block;
    height: 5rem;
`;

export const Title = styled.h1`
    color: white;
    font-size: 2rem;

    span {
        color: #FFC736;
    }
`;

export const HeaderLinks = styled(Link)`
    font-size: 1.25rem;
    color: white;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }

    &.login-link{
        color: #000000;
        background-color: #FFC736;
        padding: 0.625rem;
        border-radius: 1.25rem;
    }
`;