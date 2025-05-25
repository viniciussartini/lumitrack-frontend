import AreaCard from "../AreaCard/AreaCard";
import { ContentContainer } from "./style";

interface Props {
    
}

const RegisteredArea: React.FC<Props> = () => {
    return(
        <ContentContainer>
            <div className="title">
                <h2>Áreas registradas</h2>
                <button>
                    Adicionar
                    <img src="/AddAreaIcon.svg" alt="Botão de adicionar nova área" />
                </button>
            </div>
            <div className="cards-container">
                <AreaCard/>
                <AreaCard/>
                <AreaCard/>
                <AreaCard/>
                <AreaCard/>
                <AreaCard/>
            </div>
        </ContentContainer>
    );
}

export default RegisteredArea;
