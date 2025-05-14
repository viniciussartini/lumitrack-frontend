import { BackgroundContainer, Content, FooterContainer, Logo } from "./style"

const Footer: React.FC = () => {

    const getCurrentYear = (): number => {
        const today: Date = new Date();
        const currentYear: number = today.getFullYear();
        return currentYear;
    }

    return(
        <BackgroundContainer>
            <FooterContainer>
                <Content>© {getCurrentYear()} Todos os direitos reservados.</Content>
                <Logo href="#"><img src="/logogithub.svg" alt="Logo Github" /></Logo>
            </FooterContainer>
        </BackgroundContainer>
    );
}

export default Footer;
