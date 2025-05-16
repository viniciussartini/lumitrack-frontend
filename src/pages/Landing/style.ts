import styled from "styled-components";

import { Link } from "react-router-dom";

import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    .content-wrapper {
        display: flex;
        position: relative;

        .text-wrapper {
            z-index: 2;
        }
        
        img {
            position: absolute;
            top: 25%;
            left: 50%;
            display: block;
        }
    }
`;

export const Title = styled.h1`
    width: 75%;
    font-size: 3rem;
    margin:50px 0;
`;

export const Text = styled.p`
    width: 55%;
    font-size: 2rem;
    margin-bottom: 50px;
`;

export const RegisterLink = styled(Link)`
    padding: 1rem;
    font-weight: bold;
    color: ${colors.black};
    font-size: 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    background: ${colors.buttonGradient};
`;

