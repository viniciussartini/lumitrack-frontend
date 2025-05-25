import { PageContainer } from "../../styles/componentsStyle";

import { FooterBackgroundContainer, Content, FooterContainer, Logo } from "./style"

const Footer: React.FC = () => {

    const getCurrentYear = (): number => {
        const today: Date = new Date();
        const currentYear: number = today.getFullYear();
        return currentYear;
    }

    return(
        <FooterBackgroundContainer>
            <PageContainer>
                <FooterContainer>
                    <Content>© {getCurrentYear()} Todos os direitos reservados.</Content>
                    <Logo href="https://github.com/viniciussartini/lumitrack-frontend"><img src="/LogoGithub.svg" alt="Logo Github" /></Logo>
                </FooterContainer>
            </PageContainer>
        </FooterBackgroundContainer>
    );
}

export default Footer;
