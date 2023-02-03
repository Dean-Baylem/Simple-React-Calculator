import React, {useState} from "react";
import NumButton from "./NumButton";
import FunctionButton from "./FunctionButton";

function App() {

  const smallButton = "col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 d-grid button-col";
  const longButton = "col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 d-grid button-col";

  const [current, setCurrent] = useState(null);
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(null);
  


  // Calculate Functions
  function add(n1, n2) {
    return n1 + n2;
  }
  
  function subtraction(n1, n2) {
    return n1 - n2;
  }

  function multiply(n1, n2) {
    return n1 * n2;
  }

  function divide(n1, n2) {
    return n1 / n2;
  }

  function clearNum() {
    setCurrent(null);
    setOperator(null);
    setTotal(null);
  }

  function percentage() {
    if (current === null) {
      setTotal(total / 100);
    } else {
      setCurrent(current / 100);
    }
  }

  function inverse () {
    if (current === null) {
      setTotal(total * -1);
    } else {
      setCurrent(current * -1);
    }
  }

  function pressNum(num) {
    if (current === null) {
      setCurrent(num)
    } else {
      setCurrent(prevNum => {
        return prevNum + num;
      })
    }
  }

  function calculate(){
    let n1 = parseFloat(total);
    let n2 = parseFloat(current);
    if (operator === "+") {
      setTotal(add(n1, n2));
      setCurrent(null);
    } else if (operator === "-") {
      setTotal(subtraction(n1, n2));
      setCurrent(null);
    } else if (operator === "x") {
      setTotal(multiply(n1, n2));
      setCurrent(null);
    } else if (operator === "/") {
      setTotal(divide(n1, n2));
      setCurrent(null);
    }
  }

  function pressOperator(op){
    if (current === null) {
      setOperator(op);
    } else if (total === null) {
      setTotal(current);
      setCurrent(null);
      setOperator(op);
    } else {
      calculate();
      setOperator(op);
    } 
  }


  return (
    <div className="App">
      <div className="display">
        <p>
          {current === null && total === null
            ? "0"
            : current === null && total !== null
            ? total
            : current}
        </p>
      </div>
      <div className="button-section">
      <div className="button-row row">
        <FunctionButton style={{padding: 0}} func="AC" pressOperator={clearNum} buttonClass={smallButton} />
        <FunctionButton func="+/-" pressOperator={inverse} buttonClass={smallButton} />
        <FunctionButton func="%" pressOperator={percentage} buttonClass={smallButton} />
        <FunctionButton func="/" pressOperator={pressOperator} buttonClass={smallButton} />
      </div>
      <div className="button-row row">
        <NumButton num="7" pressNum={pressNum} buttonClass={smallButton} />
        <NumButton num="8" pressNum={pressNum} buttonClass={smallButton} />
        <NumButton num="9" pressNum={pressNum} buttonClass={smallButton} />
        <FunctionButton func="x" pressOperator={pressOperator} buttonClass={smallButton}/>
      </div>
      <div className="button-row row">
        <NumButton num="4" pressNum={pressNum} buttonClass={smallButton}/>
        <NumButton num="5" pressNum={pressNum} buttonClass={smallButton}/>
        <NumButton num="6" pressNum={pressNum} buttonClass={smallButton}/>
        <FunctionButton func="-" pressOperator={pressOperator} buttonClass={smallButton}/>
      </div>
      <div className="button-row row">
        <NumButton num="1" pressNum={pressNum} buttonClass={smallButton}/>
        <NumButton num="2" pressNum={pressNum} buttonClass={smallButton}/>
        <NumButton num="3" pressNum={pressNum} buttonClass={smallButton}/>
        <FunctionButton func="+" pressOperator={pressOperator} buttonClass={smallButton}/>
      </div>
      <div className="button-row row">
        <NumButton style={{borderBottom: "1px"}} num="0" pressNum={pressNum} buttonClass={longButton}/>
        <NumButton num="." pressNum={pressNum} buttonClass={smallButton}/>
        <FunctionButton func="=" pressOperator={calculate} buttonClass={smallButton}/>
      </div>
    </div>
  </div>  
  );
}

export default App;
