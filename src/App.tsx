import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LandingPage from "./pages/Landing";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { LayoutContainer, MainWrapper } from "./styles/componentsStyle";
import OnBoarding from "./pages/OnBoarding";

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
      </Routes>
    </MainWrapper>
    {!hideHeaderFooter && <Footer/>}
  </LayoutContainer>
  );
};

const App: React.FC = () => {
  return(
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
