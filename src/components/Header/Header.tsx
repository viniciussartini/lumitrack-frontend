import { PageContainer } from "../../styles/componentsStyle";

import { HeaderContainer, HeaderBackgroundContainer, ContentContainer, Title, Logo, HeaderLinks } from "./style";

const Header: React.FC = () => {
    return(
        <HeaderBackgroundContainer>
            <PageContainer>
                <HeaderContainer>
                    <ContentContainer>
                        <Logo src="/logolumitrack.svg" alt="Logo"/>
                        <Title>Lumi<span>Track</span></Title>
                    </ContentContainer>
                    <ContentContainer>
                        <HeaderLinks to="/">Home</HeaderLinks>
                        <HeaderLinks to="/about">Sobre</HeaderLinks>
                        <HeaderLinks to="/login" className="login-link">Login</HeaderLinks>
                    </ContentContainer>
                </HeaderContainer>
            </PageContainer>
        </HeaderBackgroundContainer>
    );
}

export default Header;
