import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Portfoliopage from "./pages/Portfoliopage";
import "./App.css";
import PortfolioLayout from "./components/portfoliopageComponent/PortfolioLayout";
import Detail from "./components/portfoliopageComponent/Detail";
import ScrollToTop from "./components/ScrollToTop";
import Blogpage from "./pages/Blogpage";
import BlogLayout from "./components/blogpageComponent/BlogLayout";
import BlogDetail from "./components/blogpageComponent/BlogDetail";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioLayout />}>
          <Route index element={<Portfoliopage />} />
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Blogpage />} />
          <Route path=":id" element={<BlogDetail />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
