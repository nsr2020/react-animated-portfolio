import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ data }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={data.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
           
            <div className="skillsContainer" 
            style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent:"center" }}>
        {data.skills.map((url, index) => (
          <img key={index} src={url} alt={`Skill ${index}`} className="skillsImage" />
        ))}
      </div>
      
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", widt:"100%" }}>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={data.preview} target="_blank" rel="noopener noreferrer">
        Website
      </a>
      </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({data}) => {
  const ref = useRef();
  const language = localStorage.getItem("language");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>{language === "en" ? "PROJECTS" : "PROYECTOS"}</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {data.projects.map((data, index) => (
        <Single data={data} key={index} />
      ))}
    </div>
  );
};

export default Portfolio;
