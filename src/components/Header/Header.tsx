import { HeaderContainer, BackgroundContainer, ContentContainer, Title, Logo, Link } from "./style";

const Header: React.FC = () => {
    return(
        <BackgroundContainer>
            <HeaderContainer>
                <ContentContainer>
                    <Logo src="/logolumitrack.svg" alt="Logo"/>
                    <Title>Lumi<span>Track</span></Title>
                </ContentContainer>
                <ContentContainer>
                    <Link href="#">Home</Link>
                    <Link href="#">Sobre</Link>
                    <Link href="#" className="button">Login</Link>
                </ContentContainer>
            </HeaderContainer>
        </BackgroundContainer>
    );
}

export default Header;
