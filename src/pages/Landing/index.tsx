import { ContentContainer, PageContainer } from "../../styles/globalstyle";
import { Title, Text, RegisterLink } from "./style";

const LandingPage:React.FC = () => {
    return(
        <PageContainer>
            <ContentContainer>
                <Title>Conheça o LumiTrack, e melhore seu consumo de energia elétrica!</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique felis nibh, euismod accumsan dui molestie id. Nulla dignissim turpis quis metus convallis cursus.</Text>
                <div className="link-wrapper">
                    <RegisterLink to="/register">Criar Conta</RegisterLink>
                </div>
            </ContentContainer>
        </PageContainer>
    );
}

export default LandingPage;
