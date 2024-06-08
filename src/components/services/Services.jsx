import { useRef } from "react";
import "./services.scss";
import { motion} from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = ({data, language}) => {
  const ref = useRef();
 
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="assets/develop.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>{language === "en" ? "Experience" : "Experiencia"}</motion.b> 
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>{language === "en" ? "Working info" : "Trabajos"}
            </motion.b> 
          </h1>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {data.workExperience.map((data,index)=>(
        <motion.div
          key={index}
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>{data.position}</h2>
          <h3>{data.company}</h3>
          <h4>{data.description}</h4>         
        </motion.div> 
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
