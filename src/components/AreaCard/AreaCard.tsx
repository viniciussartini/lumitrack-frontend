import { Link } from "react-router-dom";
import { ContentContainer } from "./style";

interface Props {
    
}

const AreaCard: React.FC<Props> = () => {
    return(
        <ContentContainer>
            <div className="card-content-wrapper">
                <button>
                    <img src="/DeleteIcon.svg" alt="Botão de deletar área" />
                </button>
                <Link to="/">
                    <img src="/ImageIcon.svg" alt="Foto da Área" />
                    <h3>Sala</h3>
                    <h4>Consumo</h4>
                    <p>400kWh</p>
                </Link>
            </div>
        </ContentContainer>
    );
}

export default AreaCard;
