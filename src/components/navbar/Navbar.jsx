import { useContext } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { LanguageContext } from "../../providers/LanguageContext";


const LanguageSwitcher = () => {
  const {language, toggleLanguage} = useContext(LanguageContext)
 
  return (
    <div className="navbar">
      <Sidebar language={language}/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         
        </motion.span>
        <div className="social">
            <img src={language === "en" ? "/assets/ing.png" : "/assets/esp.png"}
            onClick={toggleLanguage}
             />
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
