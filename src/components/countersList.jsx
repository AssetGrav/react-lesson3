import React, { useState } from "react"
import Counter from "./counter"

const CountersList = () => {
    const startState = [
        {id:0, value:0, name: "Ненужная вещь"}, 
        {id:1, value:4, name: "Ложка"}, 
        {id:2, value:0, name: "Вилка"},
        {id:3, value:0, name: "Тарелка"},
        {id:4, value:0, name: "Набор минималиста"}
    ]
   
    const [counters, setCounters] = useState(startState)
    
    const handleDelate = (id) => {
        const newCounters = counters.filter((counter) => {
            return counter.id !== id
        })
        setCounters(newCounters)
    }
    const handleIncrement = (id) => {
        const newState = counters.map((counter) => {
            const newCounter = {id: counter.id, value: counter.value + 1, name: counter.name} 
            return counter.id === id ? newCounter : counter
        })
        setCounters(newState)
    }
    const handleDecrement = (id) => {
        const newState = counters.map((counter) => {
            const newCounter = {id: counter.id, value: counter.value - 1, name: counter.name} 
            return counter.id === id ? newCounter : counter
        })
        setCounters(newState)
    }
    const handleReset = () => {
        setCounters(startState)
    }
 
    return (
        <>
            {counters.map((obj) => <Counter key={obj.id} {...obj} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelate}/> )}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Обновить</button> 
        </>
    )
}

export default CountersList