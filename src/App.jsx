import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./components/HomePage";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";

function App() {
  return (
    <section>
      <HeaderComponent></HeaderComponent>

      <section className="main">
        <HomePage></HomePage>
        <ProjectsSection></ProjectsSection>
        <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
      </section>
    </section>
  );
}

export default App;
