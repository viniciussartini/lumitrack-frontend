import styled from "styled-components";

import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 2%;
    max-height: max-content;
    padding: 1rem;
    border-radius: 8px;
    background: ${colors.backgroundCard};

    & > img {
        display: block;
        width: 100px;
    }

    .card-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        h3 {
            margin-bottom: 10px;
        }

        .card-content-wrapper {
            display: flex;
            gap: 5%;
            align-items: start;

            .content-column {
                width: 200px;

                h4 {
                    font-size: 0.75rem;
                    color: ${colors.grayMedium};
                }

                button {
                    font-weight: bold;
                    color: ${colors.background};
                    padding: 1rem;
                    background-color: ${colors.black};
                }
            }
        }
    }

`;