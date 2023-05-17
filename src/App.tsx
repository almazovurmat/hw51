import React, {useState} from 'react';
import Number from "./Number/Number";
import './App.css';

const App = () => {
    const [arrayNumbers, setNumbers] = useState<number[]>([]);

    const getArrayNumbers = () => {
        const generateNumber = () => {
            return Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        };

        let generatedNumbers: number[] = [];

        while (generatedNumbers.length < 5) {
            const number: number = generateNumber();
            if (!generatedNumbers.includes(number)) {
                generatedNumbers.push(number);
            }
        }

        generatedNumbers.sort((a, b) => a - b);
        setNumbers(generatedNumbers);
    };

    return (
        <div className="App">
            <button className="btn" onClick={getArrayNumbers}>New numbers</button>
            <div className="numbersBlock">
                {
                    arrayNumbers.map(number => {
                        return <Number key={number} number={number}/>;
                    })
                }
            </div>
        </div>
    );
};
export default App;
