import AreaTitle from "../../components/AreaTitle/AreaTitle";
import { PageContainer } from "../../styles/componentsStyle";
import { ContentContainer } from "./style";

const Area: React.FC = () => {
    return(
        <PageContainer>
            <ContentContainer>
                <AreaTitle title="Sala"/>
                <div className="infos-area-wrapper">
                    <div className="info-column">
                        <h4>Edificação</h4>
                        <p>Meu apartamento</p>
                    </div>
                    <div className="info-column">
                        <h4>Área</h4>
                        <p>12m²</p>
                    </div>
                    <div className="info-column">
                        <h4>Aparelhos</h4>
                        <p>6 aparelhos</p>
                    </div>
                    <div className="info-column">
                        <h4>Consumo médio</h4>
                        <p>300kWh</p>
                    </div>
                </div>
                <div className="yellow-detail"></div>
            </ContentContainer>
        </PageContainer>
    );
}

export default Area;
