import { ContentContainer } from "./style";

const BuildingCard: React.FC = () => {
    return(
        <ContentContainer>
            <img src="imageicon.svg" alt="Imagem da Edificação" />
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
                    <div className="content-column">
                        <button>Ver mais</button>
                    </div>
                </div>
            </div>
        </ContentContainer>
    );
}

export default BuildingCard;
