import { useRef, useState, useEffect } from "react";

export default function useWordGame(startingTime = 5) {

    const textBoxRef = useRef(null)
    
    const [textState, setTextState] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(startingTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    
    const handleChange = (e) => {
        const {value} = e.target
        setTextState(value)
    }
    
    const calculateWordCount = (text) => { 
        const wordCount = text.trim().split(" ")
        const filteredWordCount = wordCount.filter(word => word !== "")
    
        return filteredWordCount.length
    }

    const startGame = () => {
        setIsTimeRunning(true)
        setTimeRemaining(startingTime)
        setTextState("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    const endGame = () => {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(textState))
    }
    
    useEffect(() => {
        setTimeout(() => {
            // we need to know the prevTime
            if (isTimeRunning && timeRemaining > 0) {
                setTimeRemaining(time => time - 1)
            } else if (timeRemaining === 0) {
                endGame()
            }
        }, 1000)
    }, [timeRemaining, isTimeRunning])

    return [textBoxRef, handleChange, isTimeRunning, timeRemaining, startGame, wordCount]
}