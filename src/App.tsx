import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppContainer, Main } from "./style";

const App: React.FC = () => {

  return(
    <AppContainer>
      <Header />
      <Main>
        Conteúdo
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;
