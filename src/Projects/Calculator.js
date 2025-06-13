import {useState} from "react"

export default function Calculator() {
const [display, setDisplay] = useState("")

function appendToDisplay(input) {
    setDisplay(display + input)
}

function evaluate() {
    setDisplay(eval(display))
}

function clear() {
    setDisplay("")
}

  return (
    <>
      <div id="calculator">
        <input placeholder="0" id="display" readOnly value={display}/>
        <div id="keys">
          <button onClick={() => appendToDisplay("+")}>+</button>
          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button onClick={() => appendToDisplay("-")}>-</button>
          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button onClick={() => appendToDisplay("*")}>*</button>
          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button onClick={() => appendToDisplay("/")}>/</button>
          <button onClick={() => appendToDisplay("0")}>0</button>
          <button onClick={() => appendToDisplay(".")}>.</button>
          <button onClick={() => evaluate()}>=</button>
          <button onClick={() => clear()}>C</button>
        </div>
      </div>
    </>
  );
}
