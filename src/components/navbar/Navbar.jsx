import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         
        </motion.span>
        <div className="social">
          <a href="www.facebook.com">
            <img src="assets/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="assets/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="assets/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
