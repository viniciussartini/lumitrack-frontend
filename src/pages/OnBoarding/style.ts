import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`
    display: flex;
    min-height: 80vh;
    align-items: center;
    justify-content: center;

    .content-wrapper {
        display: flex;
        width: 100%;
        gap: 1%;
    }

    .profile-wrapper {
        display: flex;
        flex-direction: column;
        width: 30%;
        padding: 1rem;
        align-items: center;


        color: ${colors.background};
        background-color: ${colors.black};

        img {
            width: 5rem;
            margin-bottom: 30px;
        }

        h2 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 50px;

            span {
                color: ${colors.primary};
            }
        }

        a {
            padding: 1rem;
            color: ${colors.primary};
            text-decoration: none;
            border-style: solid;
            border-width: 1px;
            border-radius: 1rem;
            border-color: ${colors.primary};
            cursor: pointer;
        }

    }

    .features-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        gap: 1rem;
        width: 69%;

        a {
            text-decoration: none;
        }

        .features-card {
            display: flex;
            flex-direction: column;
            max-height: max-content;
            width: 200px;
            background-color: ${colors.gray};

            .card-content-wrapper {
                padding: 1rem;

                h3 {
                    color: ${colors.black};
                }

                p {
                    font-size: 0.75rem;
                    color: ${colors.grayMedium};
                }
            }

            .black-detail-card {
                height: 10px;
                background-color: ${colors.black};
            }
        }
    }
`;