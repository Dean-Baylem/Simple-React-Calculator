import React, {useState} from "react";

function FunctionButton(props) {

  const [background, setBackground] = useState({
    backgroundColor: "#F5F5F5",
  });

  function handleClick() {
    props.pressOperator(props.func);
  }

  function handleHover() {
    setBackground({ backgroundColor: "#E8E2E2" });
  }

  function handleMove() {
    setBackground({
      backgroundColor: "#F5F5F5",
    });
  }

  return (
    <div className={props.buttonClass} style={{ padding: 0 }}>
      <button
        style={background}
        onMouseEnter={handleHover}
        onMouseLeave={handleMove}
        onClick={handleClick}
      >
        {props.func}
      </button>
    </div>
  );
}

export default FunctionButton;
