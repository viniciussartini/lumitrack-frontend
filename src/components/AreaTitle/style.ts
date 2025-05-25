import styled from "styled-components";

import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 40px;

    #content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    #title-wrapper {
        display: flex;
        align-items: center;

        button {
            margin-left: 1.875rem;
            font-size: 1rem;
            font-weight: bold;
            padding: 0.5rem;
            border-radius: 8px;
            background-color: ${colors.primary};

            & > img {
                margin-left: 0.625rem;
            }
        }
    }

    button {
        border-style: none;
        background-color: transparent;
        cursor: pointer;
    }

    #yellow-detail {
        height: 10px;
        background-color: ${colors.primary};
    }
`;