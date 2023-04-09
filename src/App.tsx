import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {v1} from "uuid";
import s from "./Counter.module.css";

// export type TitlesPropsType = {
//     id: string
//     title: string
// }

function App() {


    const [value, setValue] = useState<number>(() => {
        return Number(localStorage.getItem('counterValue')) || 0
    })


    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(value))
    }, [value])


    const incrHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(0)
    }



    return (
        <div className="App">
            <div>
                {/*<h1>{value}</h1>*/}
                {/*  <button onClick={incrHandler}>Incr</button>*/}
                {/*  <button onClick={resetHandler}>Reset</button>*/}
                <Counter
                    value={value}
                    incrHandler={incrHandler}
                    resetHandler={resetHandler}
                />
            </div>
        </div>

    );
}

export default App;
