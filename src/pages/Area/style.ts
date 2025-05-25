import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContentContainer = styled.div`

    .infos-area-wrapper {
        display: flex;
        gap: 10%;
        margin-bottom: 50px;
    }

    .info-column {
        h4 {
            margin-bottom: 0.625rem;
            font-size: 0.75rem;
            color: ${colors.grayMedium};
        }
    }

    .yellow-detail {
        height: 10px;
        background-color: ${colors.primary};
    }
`;