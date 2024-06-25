import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({language}) => {
  const itemsEnglish = ["About", "Experience", "Studies", "Projects", "Contact"];
  const itemsSpanish = ["Sobre mi", "Experiencia", "Estudios", "Proyectos", "Contacto"];

  const [items, setItems] =useState(itemsEnglish)
  

  useEffect(() => {
   if (language === "en") {
     setItems(itemsEnglish)
   }else{
     setItems(itemsSpanish)
   }
    },[language])


 

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
