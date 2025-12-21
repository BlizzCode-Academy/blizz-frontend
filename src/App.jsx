import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Event from "./pages/Event";
import Course from "./pages/Course";
import ProgramsTraining from "./pages/ProgramsTraining";
import ProgramsInternships from "./pages/ProgramsInternships";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route
          path="/programs/training-programs"
          element={<ProgramsTraining />}
        />
        <Route path="/programs/internships" element={<ProgramsInternships />} />
        <Route path="/courses/responsive-webdesign" element={<Course />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
