import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs"; // Import mathjs at the top

const AdvancedCalculator = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [memory, setMemory] = useState(0);

    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                let expression = input
                    .replace(/sin/g, "sin")
                    .replace(/cos/g, "cos")
                    .replace(/tan/g, "tan")
                    .replace(/log/g, "log")
                    .replace(/sqrt/g, "sqrt");
    
                const result = evaluate(expression); // Use mathjs evaluate function
                setHistory([...history, `${input} = ${result}`]);
                setInput(result.toString());
            } catch (error) {
                setInput("Error");
            }
        } else if (value === "C") {
            setInput("");
        } else if (value === "DEL") {
            setInput(input.slice(0, -1));
        } else if (value === "M+") {
            setMemory(parseFloat(input) || 0);
        } else if (value === "M-") {
            setMemory(0);
        } else if (value === "MR") {
            setInput(memory.toString());
        } else if (value === "MC") {
            setMemory(0);
        } else {
            setInput(input + value);
        }
    };
    

    return (
        <div className="calculator">
            <h2>Advanced Calculator</h2>
            <input type="text" value={input} readOnly />
            <div className="buttons">
                {["sin", "cos", "tan", "log", "sqrt"].map((func) => (
                    <button key={func} onClick={() => setInput(`${func}(${input})`)}>
                        {func}
                    </button>
                ))}
                {["7", "8", "9", "/", "C"].map((btn) => (
                    <button key={btn} onClick={() => handleButtonClick(btn)}>
                        {btn}
                    </button>
                ))}
                {["4", "5", "6", "*", "DEL"].map((btn) => (
                    <button key={btn} onClick={() => handleButtonClick(btn)}>
                        {btn}
                    </button>
                ))}
                {["1", "2", "3", "-", "M+"].map((btn) => (
                    <button key={btn} onClick={() => handleButtonClick(btn)}>
                        {btn}
                    </button>
                ))}
                {["0", ".", "=", "+", "M-"].map((btn) => (
                    <button key={btn} onClick={() => handleButtonClick(btn)}>
                        {btn}
                    </button>
                ))}
                {["MR", "MC"].map((btn) => (
                    <button key={btn} onClick={() => handleButtonClick(btn)}>
                        {btn}
                    </button>
                ))}
            </div>

            <h3>History</h3>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdvancedCalculator;
