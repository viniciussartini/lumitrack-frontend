import styled from "styled-components";

import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-bottom: 30px;

    #content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    #yellow-detail {
        height: 10px;
        background-color: ${colors.primary};
    }
`;