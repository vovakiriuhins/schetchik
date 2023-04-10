import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {


    const [initialValue, setInitialValue] = useState<number>(() => {
        return Number(localStorage.getItem('counterValue')) || 0
    })


    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setInitialValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(initialValue))
    }, [initialValue])


    const incrHandler = () => {
        setInitialValue(initialValue + 1)
    }

    const resetHandler = () => {
        setInitialValue(0)
    }



    return (
        <div className="App">
            <div>
                <Counter
                    startValue={initialValue}
                    incrHandler={incrHandler}
                    resetHandler={resetHandler}

                />
            </div>
        </div>

    );
}

export default App;
