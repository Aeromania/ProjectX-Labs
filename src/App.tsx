import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbars/Navbar";
import "./styles/index.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Intership from "./pages/Intership";
import Training from "./pages/Training";
import CustomDrones from "./pages/CustomDrones";
import Design from "./pages/Design";
import Consultation from "./pages/Consultation";
import { NavRoutes } from "./components/constants";
import CfdAnalysis from "./pages/CfdAnalysis";
import WorkshopSchoolRoutes from "./routes/WorkshopSchoolRoutes";
import BlogsRoute from "./routes/BlogsRoute";
import WorkshopUniversityRoutes from "./routes/WorkshopUniversityRoutes";
import NotFound from "./pages/PageNotFound/NotFound";
import Footer from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";

const App: React.FC = (): React.JSX.Element => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={NavRoutes.HOME} element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path={NavRoutes.BLOGS + "/*"} element={<BlogsRoute />} />
        <Route path={NavRoutes.ABOUT_US} element={<AboutUs />} />
        <Route path={NavRoutes.CONTACT_US} element={<ContactUs />} />
        <Route
          path={NavRoutes.HIGH_SCHOOL + "/*"}
          element={<WorkshopSchoolRoutes />}
        />
        <Route
          path={NavRoutes.UNIVERSITY + "/*"}
          element={<WorkshopUniversityRoutes />}
        />
        <Route path={NavRoutes.INTERNSHIP} element={<Intership />} />
        <Route path={NavRoutes.TRAINING} element={<Training />} />
        <Route path={NavRoutes.CUSTOM_DRONES} element={<CustomDrones />} />
        <Route path={NavRoutes.DESIGN} element={<Design />} />
        <Route path={NavRoutes.PROJ_CONSULT} element={<Consultation />} />
        <Route path={NavRoutes.CFD_ANALYSIS} element={<CfdAnalysis />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
