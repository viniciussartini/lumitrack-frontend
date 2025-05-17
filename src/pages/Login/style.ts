import styled from "styled-components";

import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    padding: 2rem 1rem;

    .logo-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin-bottom: 40px;

        h1 {
            font-size: 3rem;
        }

        span {
            color: ${colors.primary};
        }
    }

    .form-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10%;

        img {
            width: 45%;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 45%;

            h2 {
            margin-bottom: 30px;
            font-size: 2rem;
            text-align: center;
            }

            input {
                padding: 1rem;
                width: 100%;
                margin-bottom: 10px;
                border-radius: 5px;
                border-color:rgba(221, 232, 240, 0.5);

            }

            input::placeholder {
                color: #DDE8F0;
            }

            p {
                text-align: center;
                font-size: 0.85rem;
                font-weight: bold;

                a {
                    text-decoration: none;
                    color: ${colors.primary};
                }
            }

            #input-submit {
                width: 40%;
                margin: 30px auto 0 auto;
                font-size: 1rem;
                font-weight: bold;
                border-radius: 8px;
                border-style: none;
                background: ${colors.buttonGradient};
                cursor: pointer;
            }
        }
    }

`;