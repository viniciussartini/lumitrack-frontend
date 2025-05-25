import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`

    .card-content-wrapper {
        display: flex;
        flex-direction: column;
        width: 350px;
        margin-bottom: 30px;
        background: linear-gradient(90deg,rgba(241, 241, 241, 1) 0%, rgba(249, 249, 249, 1) 100%);

        #delete-button {
            display: flex;
            justify-content: end;
            align-items: center;
            padding: 0.3125rem;

            button {
                border-style: none;
                background-color: transparent;
                cursor: pointer;
            }
        }

        #infos-card {
            padding: 1.25rem;

            a {
                color: ${colors.black};
                text-decoration: none;
            }

            img {
                display: block;
                width: 100%;
                height: 120px;
                margin-bottom: 1.875rem;

            }

            h3 {
                margin-bottom: 0.625rem;
            }

            h4 {
                margin-bottom: 0.3125rem;
                font-size: 0.75rem;
                color: ${colors.grayMedium};
            }
        }

    }

`;