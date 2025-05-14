import { HeaderContainer, BackgroundContainer, ContentContainer, Title, Logo, HeaderLinks } from "./style";

const Header: React.FC = () => {
    return(
        <BackgroundContainer>
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
        </BackgroundContainer>
    );
}

export default Header;
