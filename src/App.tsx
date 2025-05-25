import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LandingPage from "./pages/Landing/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { LayoutContainer, MainWrapper } from "./styles/componentsStyle";
import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Buildings from "./pages/Buildings/Buildings";
import Details from "./pages/Buildings/Details/Details";

const AppContent: React.FC = () => {

  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/register";

  return(
  <LayoutContainer>
    {!hideHeaderFooter && <Header/>}
    <MainWrapper>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/onboarding" element={<OnBoarding />}/>
        <Route path="/buildings" element={<Buildings />}/>
        <Route path="/buildings/details" element={<Details />}/>
      </Routes>
    </MainWrapper>
    {!hideHeaderFooter && <Footer/>}
  </LayoutContainer>
  );
};

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
