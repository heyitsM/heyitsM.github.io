import useMouse from "@react-hook/mouse-position";
import { motion } from 'framer-motion'
import { useState, useRef } from "react";

const useVariants = (ref) => {
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    });

    let mouseX = 0;
    let mouseY = 0;
    
    if (mouse.clientX !== null) {
        mouseX = mouse.clientX;
    }

    if (mouse.clientY !== null) {
        mouseY = mouse.clientY;
    }

    return {
        default: {
            opacity: 1,
            height: 10,
            width: 10,
            fontSize: "20px",
            backgroundColor: "#13ACDE",
            x: mouseX,
            y: mouseY,
            transition: {
                type: "spring",
                mass: 0.6,
            },
        }
    }
}

const spring = {
    type : "spring",
    stiffness: 500,
    damping: 28,
}

const circle = {
    position: 'fixed',
    zIndex: '100',
    display: 'flex',
    flexFlow: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    top: '0',
    left: '0',
    height: '10px',
    width: '10px',
    backgroundColor: 'black',
    borderRadius: '200px',
    pointerEvents: 'none',
    color: '#fff',
    textAlign: 'center',
    fontSize: '16px',
}

const cursorStyling = {
    flex: 'auto',
  fontSize: 'inherit',
  pointerEvents: 'none',
  margin: 'auto'
}

const styling = {
    // display: 'flex',
    // flexFlow: 'row',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor:'none'
  }

export default function Cursor(props) {
    const [cursorText, setCursorText] = useState("")
    const [cursorVariant, setCursorVariant] = useState("default");

    const { content } = props;

    const ref = useRef(null);
    const variants = useVariants(ref);

    return (
        <div style={styling} ref={ref}>
            <motion.div
                variants={variants}
                style={circle}
                animate={cursorVariant}
                transition={spring}
            >
                <span style={cursorStyling}>{cursorText}</span>
                
            </motion.div>
            {content}
        </div>
    );
}