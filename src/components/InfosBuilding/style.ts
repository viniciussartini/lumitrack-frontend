import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    .infos-wrapper {
        display: flex;
        justify-content: space-between;

        .column-wrapper {
            display: flex;
            flex-direction: column;
            width: 22rem;

            .fields {
                display: flex;
                flex-direction: column;
                margin-bottom: 1.25rem;

                & > h4 {
                    margin-bottom: 0.625rem;
                    font-size: 0.75rem;
                    color: ${colors.grayMedium};
                }

                & > div {
                    height: 0.125;
                    background-color: ${colors.grayMedium};
                }
            }

        }
    }

    .yellow-detail {
        margin: 1.875rem 0;
        height: 0.625rem;
        background-color: ${colors.primary};
    }
`;

export const NavList = styled.nav`
    display: flex;
    margin-bottom: 30px;
`;

interface NavButtonProps {
    $isActive: boolean;
}

export const NavButton = styled.button<NavButtonProps>`
    width: 100px;
    height: 60px;
    margin-right: 50px;
    border-radius: 8px;
    border-style: none;
    background-color: transparent;

    transition: background-color 0.3s ease-in-out;

    cursor: pointer;

    ${props => props.$isActive &&
    css`
        background-color: #D9D9D9;
    `}
`;

export const ContentDisplay = styled.div`
`;

