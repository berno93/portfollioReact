import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./NoMatch";
import Navigation from "../layout/navigation";
import Projects from "../pages/projects";
import Main from "../pages/Main";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/skills" element= {<Skills />}/> */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
};

export default Routeur;
