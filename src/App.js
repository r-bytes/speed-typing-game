import React from "react"
import useWordGame from "./components/hooks/useWordGame";

function App() {
    
    const [
        textBoxRef,
        handleChange,
        isTimeRunning,
        timeRemaining,
        startGame,
        wordCount
    ] = useWordGame(10)

    return (
        <div className="App w-1/2 m-auto flex flex-col h-screen items-center justify-evenly">
        
            <h1> How fast do you type? </h1>
            <textarea ref={textBoxRef} name="text" onChange={handleChange} disabled={!isTimeRunning}
            />

            <div className="flex flex-col items-center">
                <h4 className="mb-4"> Time remaining: {timeRemaining} </h4>
                <button className="mb-4" onClick={startGame} disabled={isTimeRunning}>
                    Start
                </button>
                <h1> Word count: {wordCount} </h1>
            </div>
        </div>
    );
}

export default App;
