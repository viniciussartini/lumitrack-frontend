import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LandingPage from "./pages/Landing";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { LayoutContainer, MainWrapper } from "./styles/componentsStyle";

const App: React.FC = () => {

  return(
    <Router>
      <LayoutContainer>
        <Header/>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
        </MainWrapper>
        <Footer/>
      </LayoutContainer>
    </Router>
  );
}

export default App;
