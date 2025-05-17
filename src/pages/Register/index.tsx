import { Link } from "react-router-dom";
import { PageContainer } from "../../styles/componentsStyle";

import { ContentContainer } from "./style";

const Register: React.FC = () => {
    return(
        <PageContainer>
            <ContentContainer>
                <div className="logo-wrapper">
                    <img src="logolumitrack.svg" alt="Logo LumiTrack" />
                    <h1>Lumi<span>Track</span></h1>
                </div>
                <div className="form-wrapper">
                    <img src="landingimage.svg" alt="" />
                    <form>
                        <h2>Cadastrar</h2>
                        <input type="text" name="name" placeholder="Nome"/>
                        <input type="email" name="email" placeholder="E-mail"/>
                        <input type="password" name="password" placeholder="Senha"/>
                        <p>Já é cadastrado? Clique <Link to={"/login"}>aqui</Link></p>
                        <input type="submit" value="Cadastrar" id="input-submit"/>
                    </form>
                </div>
            </ContentContainer>
        </PageContainer>
    );
}

export default Register;
