import React, {useState} from "react";

function NumButton (props) {

    const [background, setBackground] = useState({
      backgroundColor: "#F1DBBF",
    });

    function HandleClick (event) {
        props.pressNum(event.target.value);
    }

    function handleHover() {
        setBackground({ backgroundColor: "#B99B6B" });
    }

    function handleMove() {
        setBackground({
          backgroundColor: "#F1DBBF",
        });
    }

    return (
    <div className={props.buttonClass} style={{padding: 0}}>
        <button style={background} onMouseEnter={handleHover} onMouseLeave={handleMove} value={props.num} onClick={HandleClick}>{props.num}</button>
    </div>
    )
}

export default NumButton;