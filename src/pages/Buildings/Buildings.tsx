
import AreaTitle from "../../components/AreaTitle/AreaTitle";
import BuildingCard from "../../components/BuildingCard/BuildingCard";

import { PageContainer } from "../../styles/componentsStyle";

import { ContentContainer } from "./style";

const Buildings: React.FC = () => {
    return(
        <PageContainer>
            <ContentContainer>
                <AreaTitle title="Minhas edificações"/>
                <BuildingCard />
            </ContentContainer>
        </PageContainer>
    );
}

export default Buildings;
