import AreaTitle from "../../../components/AreaTitle/AreaTitle";
import InfosBuilding from "../../../components/InfosBuilding/InfosBuilding";
import { PageContainer } from "../../../styles/componentsStyle";
import { ContentContainer } from "../style";

interface Props {
    
}

const Details: React.FC<Props> = () => {
    return(
        <PageContainer>
            <ContentContainer>
                <AreaTitle title="Meu apartamento"/>
                <InfosBuilding />
            </ContentContainer>
        </PageContainer>
    );
}

export default Details;
