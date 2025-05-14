import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
    width: 75%;
    font-size: 3rem;
    margin:50px 0;
`;

export const Text = styled.p`
    width: 65%;
    font-size: 2rem;
    margin-bottom: 50px;
`;

export const RegisterLink = styled(Link)`
    color: #000000;
    font-size: 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    background-color: #FFC736;
    padding: 1rem;

    &:hover {
        text-decoration: underline;
    }
`;