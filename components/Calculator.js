import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(null);

    const calculate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/basic/calculate', {
                num1: parseFloat(num1),
                num2: parseFloat(num2),
                operation
            });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Basic Calculator</h2>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">×</option>
                <option value="divide">÷</option>
            </select>
            <button onClick={calculate}>Calculate</button>
            {result !== null && <h3>Result: {result}</h3>}
        </div>
    );
};

export default Calculator;
