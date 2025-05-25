import { Link } from "react-router-dom";
import { ContentContainer } from "./style";

const BuildingCard: React.FC = () => {
    return(
        <ContentContainer>
            <div className="delete-button-wrapper">
                <button className="delete-button">
                    <img src="./DeleteIcon.svg" alt="Botão excluir edificação" />
                </button>
            </div>
            <Link to={"/buildings/details"}>
                <img src="ImageIcon.svg" alt="Imagem da Edificação" />
                <div className="card-wrapper">
                        <h3>Nome da edificação</h3>
                    <div className="card-content-wrapper">
                        <div className="content-column">
                            <h4>Tipo</h4>
                            <p>Apartamento</p>
                        </div>
                        <div className="content-column">
                            <h4>Endereço</h4>
                            <p>Rua Turmalina, 55, Belo Horizonte/MG</p>
                        </div>
                        <div className="content-column">
                            <h4>Áreas</h4>
                            <p>4 áreas</p>
                        </div>
                        <div className="content-column">
                            <h4>Consumo</h4>
                            <p>200kWh</p>
                        </div>
                    </div>
                </div>
            
            </Link>
        </ContentContainer>
    );
}

export default BuildingCard;
