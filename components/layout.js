import layoutStyles from "../styles/modules/Layout.module.css";
import Navbar from "./navbar";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

function Layout({ children, router }) {
  return (
    <div>
      <Head>
        <title>Learn | Dhairya Gupta</title>
      </Head>
      <div>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.div className={layoutStyles["main-container"]}>
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Layout;
