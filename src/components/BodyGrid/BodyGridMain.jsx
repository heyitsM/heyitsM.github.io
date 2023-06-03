import { useState, useEffect } from "react";
import MovableObject from "../Animation/MovableObject";

export default function BodyGridMain() {
    const [bounds, setBounds] = useState({});

    const circle = { borderRadius:'50%', width:'200px', height:'200px', border:'12px solid black'};
    const square = { border:'12px solid black', width:'200px', height:'200px'};
    const triangle = { width: 0, height: 0, border: '115px solid transparent', borderTop: 0, borderBottom: '230px solid black'}
    const cactus = {backgroundImage: 'url(plants/cactus.png)', maxWidth:'200px', maxHeight:'200px'}

    useEffect(() => {
        const bounding = document.getElementById('cont_main').getBoundingClientRect()
        setBounds(bounding);
    }, [])

    const handleResize = () => {
        setBounds(document.getElementById('cont_main').getBoundingClientRect())
    }

    window.addEventListener('resize', handleResize)

//overflow:'hidden'
    return (
        <div id="cont_main" style={{width:'100%', height:'100%', display:'flex' }}> 
            
            <MovableObject shape={circle} bounds={bounds} ide="adfda" />
            {/* <MovableObject shape={square} bounds={bounds} ide="adfasdb" />
            <MovableObject shape={triangle} bounds={bounds} ide="adfasc" />
            <MovableObject shape={cactus} bounds={bounds} ide="aldjsa">
                <img src="plants/cactus2.png" style={{maxWidth:'200px', maxHeight:'200px'}}></img>
            </MovableObject> */}
        </div>
    );
}