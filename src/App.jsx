import { useContext, useEffect } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";

import Hero from "./components/hero/Hero";
import LanguageSwitcher from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import { LanguageContext } from "./providers/LanguageContext";
import Education from "./components/education/Education";

const App = () => {
  const {data, language} = useContext(LanguageContext)
 
  
  return (
    <div>
      <section id={language === "en" ? "About" : "Sobre mi"}>
        <LanguageSwitcher />
        <Hero data={data} language={language}/>
      </section>
      <section id={language === "en" ? "Experience" : "Experiencia"}>
        <Parallax type="services" />
      </section>
      <section id={language === "en" ? "Studies" : "Estudios"}>
        <Services data={data} language={language}/>
      </section>
      <section >
        <Education data={data} language={language}/>
      </section>
      <section id={language === "en" ? "Projects" : "Proyectos"}>
        <Parallax type="portfolio" />
      </section>
      <Portfolio data={data} />
      <section id={language === "en" ? "Contact" : "Contacto"}>
        <Contact data={data} language={language}/>
      </section>
    </div>
  );
};

export default App;
