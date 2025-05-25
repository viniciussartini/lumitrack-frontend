import { useState } from "react";

import RegisteredArea from "../RegisteredArea/RegisteredArea";
import ConsumptionData from "../ConsumptionData/ConsumptionData";
import Simulation from "../Simulation/Simulation";

import { ContentContainer, ContentDisplay, NavButton, NavList } from "./style";

interface Props {
    
}

type ActiveTab = "areas" | "consumption" | "simulation";

const InfosBuilding: React.FC<Props> = () => {

    const [activeTab, setActiveTab] = useState<ActiveTab>("areas");

    const renderTabContent = () => {
        switch(activeTab) {
            case "areas":
                return <RegisteredArea />;
            case "consumption":
                return <ConsumptionData />;
            case "simulation":
                return <Simulation />;
            default:
                return <RegisteredArea />
        }
    }

    return(
        <ContentContainer>
            <div className="infos-wrapper">
                <div className="column-wrapper">
                    <div className="fields">
                        <h4>Áreas</h4>
                        <p>6 áreas</p>
                    </div>
                    <div className="fields">
                        <h4>Endereço</h4>
                        <p>Rua Turmalina, 55</p>
                        <div></div>
                    </div>
                    <div className="fields">
                        <h4>Estado</h4>
                        <p>Minas Gerais</p>
                        <div></div>
                    </div>
                </div>
                <div className="column-wrapper">
                    <div className="fields">
                        <h4>Área Total</h4>
                        <p>80m²</p>
                    </div>
                    <div className="fields">
                        <h4>CEP</h4>
                        <p>00000-000</p>
                        <div></div>
                    </div>
                </div>
                <div className="column-wrapper">
                    <div className="fields">
                        <h4>Consumo médio</h4>
                        <p>80m²</p>
                    </div>
                    <div className="fields">
                        <h4>Cidade</h4>
                        <p>Belo Horizonte</p>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="yellow-detail"></div>
            <NavList>
                <NavButton onClick={() => setActiveTab("areas")} $isActive={activeTab === "areas"}>
                    <img src="/AreaTabIcon.svg" alt="Aba de áreas cadastradas." />
                </NavButton>
                <NavButton onClick={() => setActiveTab("consumption")} $isActive={activeTab === "consumption"}>
                    <img src="/ConsumptionDataTabIcon.svg" alt="Aba de áreas cadastradas." />
                </NavButton>
                <NavButton onClick={() => setActiveTab("simulation")} $isActive={activeTab === "simulation"}>
                    <img src="/SimulationTabIcon.svg" alt="Aba de áreas cadastradas." />
                </NavButton>
            </NavList>
            <ContentDisplay>
                {renderTabContent()}
            </ContentDisplay>
        </ContentContainer>
    );
}

export default InfosBuilding;
