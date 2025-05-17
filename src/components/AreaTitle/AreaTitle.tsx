import { useNavigate } from "react-router-dom";
import { ContentContainer } from "./style";

interface Props {
    title: string;
}

const AreaTitle: React.FC<Props> = ({ title }) => {

    const navigate = useNavigate();

    const handleClick = (): void => {
        navigate(-1);
    }

    return(
        <ContentContainer>
            <div id="content-wrapper">
                <h2>{title}</h2>
                <button onClick={handleClick}><img src="btngobackicon.svg" alt="Botão voltar página" /></button>
            </div>
            <div id="yellow-detail"></div>
        </ContentContainer>
    );
}

export default AreaTitle;
