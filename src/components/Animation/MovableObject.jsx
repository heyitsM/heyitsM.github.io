import { useSpring, to, config, animated } from '@react-spring/web'
import { useDrag, useMove } from '@use-gesture/react'
import { useState, useEffect } from "react";

export default function MovableObject(props) {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
    const { shape, bounds, ide } = props;

    const st = {x, y, touchAction: 'none', ...shape, top:0, left:0 };
    
    const bind = useMove(({down, movement:[mx, my]}) => {
        api.start({ x: down ? mx : 0, y: down ? my : 0 });
    })

    return <animated.div {...bind()} style={st} id={ide} />
}