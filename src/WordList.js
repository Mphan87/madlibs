import React, { useState } from "react"
import Story from "./Story"
import WordForm from "./WordForm"

const WordList = () => {
    const INITIAL_STATE = [
        { id: "", noun: "", noun2: "", adjective: "", color: "" }
    ]

    const [words, setWords] = useState(INITIAL_STATE)
    const addWords= (noun, noun2, adjective, color) => {
        setWords([{noun, noun2, adjective, color}])
    }

    const handleClear = (e) => {
        e.preventDefault();
        setWords(INITIAL_STATE)
    }
 
    return (
        <div>
            <h1>Madlibs</h1>

            <WordForm addWords = {addWords} handleClear = {handleClear}  />

            <div>
                {words.map(word => <Story
                    id={word.id}
                    noun={word.noun}
                    noun2={word.noun2}
                    adjective={word.adjective}
                    color={word.color}
                    key={word.id} />)}
            </div>
        </div>
    )
}
export default WordList