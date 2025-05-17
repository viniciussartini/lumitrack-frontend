import { Link } from "react-router-dom";

import { PageContainer } from "../../styles/componentsStyle";

import { ContentContainer } from "./style";

const OnBoarding: React.FC = () => {
    return(
        <PageContainer>
            <ContentContainer>
                <div className="content-wrapper">
                    <div className="profile-wrapper">
                        <img src="/usericon.svg" alt="Foto de Perfil" />
                        <h2>Olá Usuário!</h2>
                        <p>Seja bem-vindo(a) ao Lumi<span>Track</span></p>
                        <Link to={"/profile"} id="profile-button">Minha Conta</Link>
                    </div>
                    <div className="features-wrapper">
                        <Link to={"/buildings"}>
                            <div className="features-card">
                                <div className="card-content-wrapper">
                                    <img src="/buildingsicon.svg" alt="Ícone minhas edificações" />
                                    <h3>Minhas edificações</h3>
                                    <p>Cadastrar e monitorar</p>
                                </div>
                                <div className="black-detail-card"></div>
                            </div>
                        </Link>
                        <Link to={"/statistics"}>
                            <div className="features-card">
                                <div className="card-content-wrapper">
                                    <img src="/statisticsicon.svg" alt="Ícone minhas edificações" />
                                    <h3>Estatísticas</h3>
                                    <p>Analise o consumo mês a mês</p>
                                </div>
                                <div className="black-detail-card"></div>
                            </div>
                        </Link>
                        <Link to={"/simulation"}>
                            <div className="features-card">
                                <div className="card-content-wrapper">
                                    <img src="/simulationicon.svg" alt="Ícone minhas edificações" />
                                    <h3>Simulação</h3>
                                    <p>Calcule o valor da sua conta</p>
                                </div>
                                <div className="black-detail-card"></div>
                            </div>
                        </Link>
                        <Link to={"/optimization"}>
                            <div className="features-card">
                                <div className="card-content-wrapper">
                                    <img src="/optimizationicon.svg" alt="Ícone minhas edificações" />
                                    <h3>Otimização</h3>
                                    <p>Sugestões de melhoria</p>
                                </div>
                                <div className="black-detail-card"></div>
                            </div>
                        </Link>
                        <Link to={"/alerts"}>
                            <div className="features-card">
                                <div className="card-content-wrapper">
                                    <img src="/alerticon.svg" alt="Ícone minhas edificações" />
                                    <h3>Alertas</h3>
                                    <p>Configure alertas de consumo</p>
                                </div>
                                <div className="black-detail-card"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </ContentContainer>
        </PageContainer>
    );
}

export default OnBoarding;
