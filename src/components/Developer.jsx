import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Developer = () => {
    return (
        <div className={`xl:mt-12 flex xl:flex-row justify-center items-center`}>
            <motion.div variants={slideIn("up", "tween", 0.2, 1)}
                        className='flex justify-center items-center bg-black-100 p-8 rounded-2xl w-screen '>
            <p className={styles.sectionSubText}>developed by @amalia hemadi</p>
            </motion.div>
        </div>
    )
}

export default Developer