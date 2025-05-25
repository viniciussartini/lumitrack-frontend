import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { ContentContainer } from "./style";

interface Props {
    title: string;
}

type routeConfig = {
    path: string;
    title: string;
    icon: string;
}

const routeConfig = [
    {
        path: "/buildings",
        title: "Cadastrar",
        icon: "/AddBuildingIcon.svg",
        alt: "Botão cadastrar edificação."
    },
    {
        path: "/buildings/details",
        title: "Editar",
        icon: "/EditIcon.svg",
        alt: "Botão de editar edificação"
    },
]

const AreaTitle: React.FC<Props> = ({ title }) => {

    const navigate = useNavigate();

    const location = useLocation();
    const currentPath = location.pathname;
    const routeMatch = routeConfig.find(route => matchPath({
        path: route.path, end: true
    }, currentPath));

    if(!routeMatch) {
        return null;
    }

    const handleClick = (): void => {
        navigate(-1);
    }

    return(
        <ContentContainer>
            <div id="content-wrapper">
                <div id="title-wrapper">
                    <h2>{title}</h2>
                    <button>
                        {routeMatch.title}
                        <img src={routeMatch.icon} alt={routeMatch.alt} />
                    </button>
                </div>
                <button onClick={handleClick}><img src="/BtnGoBackIcon.svg" alt="Botão voltar página" /></button>
            </div>
            <div id="yellow-detail"></div>
        </ContentContainer>
    );
}

export default AreaTitle;
