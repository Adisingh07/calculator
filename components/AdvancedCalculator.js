import React, { useState } from "react";
import { evaluate, sqrt, log, factorial, sin, cos, tan } from "mathjs";

const AdvancedCalculator = () => {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleScientificFunction = (func) => {
    try {
      let result;
      switch (func) {
        case "sin":
          result = sin(evaluate(input));
          break;
        case "cos":
          result = cos(evaluate(input));
          break;
        case "tan":
          result = tan(evaluate(input));
          break;
        case "log":
          result = log(evaluate(input), 10); // log base 10
          break;
        case "ln":
          result = log(evaluate(input)); // natural log (base e)
          break;
        case "sqrt":
          result = sqrt(evaluate(input));
          break;
        case "square":
          result = Math.pow(evaluate(input), 2);
          break;
        case "factorial":
          result = factorial(evaluate(input));
          break;
        default:
          return;
      }
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleScientificFunction("sin")}>sin</button>
        <button onClick={() => handleScientificFunction("cos")}>cos</button>
        <button onClick={() => handleScientificFunction("tan")}>tan</button>
        <button onClick={() => handleScientificFunction("log")}>log</button>
        <button onClick={() => handleScientificFunction("ln")}>ln</button>
        <button onClick={() => handleScientificFunction("sqrt")}>√</button>
        <button onClick={() => handleScientificFunction("square")}>x²</button>
        <button onClick={() => handleScientificFunction("factorial")}>n!</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default AdvancedCalculator;
