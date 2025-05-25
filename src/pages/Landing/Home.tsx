import { PageContainer } from "../../styles/componentsStyle";

import { Title, Text, RegisterLink, ContentContainer, } from "./style";

const LandingPage:React.FC = () => {
    return(
        <PageContainer>
            <ContentContainer>
                <div className="content-wrapper">
                    <div className="text-wrapper">
                        <Title>Conheça o LumiTrack, e melhore seu consumo de energia elétrica!</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique felis nibh, euismod accumsan dui molestie id. Nulla dignissim turpis quis metus convallis cursus.</Text>
                    </div>
                    <img src="/LandingImage.svg" alt="Imagem de apresentação" />
                </div>
                <div>
                    <RegisterLink to="/register">Criar Conta</RegisterLink>
                </div>
            </ContentContainer>
        </PageContainer>
    );
}

export default LandingPage;
