import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FooterBackgroundContainer = styled.div`
    width: 100%;
    background-color: ${colors.black};
`;

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.p`
    color: ${colors.primary};
`;

export const Logo = styled.a`
    display: block;
`;