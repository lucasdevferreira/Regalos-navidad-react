import React from "react";
import { motion } from "framer-motion";
const FontAwesome = require("react-fontawesome");

console.log(FontAwesome);

export default function Item(props) {
  return (
    <React.Fragment>
      <motion.li
        key={props.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {props.content}
      </motion.li>
    </React.Fragment>
  );
}
