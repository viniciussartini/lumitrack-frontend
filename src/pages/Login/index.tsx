import { Link } from "react-router-dom";
import { PageContainer } from "../../styles/componentsStyle";

import { ContentContainer } from "./style";


const Login: React.FC = () => {
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
                        <h2>Login</h2>
                        <input type="email" name="email" placeholder="E-mail"/>
                        <input type="password" name="password" placeholder="Senha"/>
                        <p>Ainda não é cadastrado? Clique <Link to={"/register"}>aqui</Link></p>
                        <input type="submit" value="Login" id="input-submit"/>
                    </form>
                </div>
            </ContentContainer>
        </PageContainer>
    );
}

export default Login;
