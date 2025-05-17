import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HeaderBackgroundContainer = styled.div`
    width: 100%;
    background-color: ${colors.black};
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
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
        color: ${colors.primary};
    }
`;

export const HeaderLinks = styled(Link)`
    font-size: 1.25rem;
    color: white;
    text-decoration: none;

    &.login-link{
        padding: 0.625rem;
        font-weight: bold;
        color: ${colors.black};
        background: ${colors.buttonGradient};
        border-radius: 1.25rem;
    }
`;