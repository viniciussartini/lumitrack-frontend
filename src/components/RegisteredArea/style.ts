import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        align-items: center;
        padding: 1rem;
        background: linear-gradient(90deg,rgba(241, 241, 241, 1) 0%, rgba(249, 249, 249, 1) 100%);
        margin-bottom: 30px;

        & > button {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            margin-left: 1.875rem;
            font-size: 1rem;
            font-weight: bold;
            border-style: none;
            border-radius: 8px;
            background-color: ${colors.primary};
            cursor: pointer;

            img {
                margin-left: 0.625rem;
            }
        }
    }
`;
