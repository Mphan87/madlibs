import React, { useState } from "react"

const WordForm = ({ addWords, handleClear }) => {

    const INITIAL_STATE = {

        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addWords(formData.noun , formData.noun2 , formData.adjective , formData.color)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="noun">Noun</label>
            <input
                type="text"
                name="noun"
                placeholder="noun"
                value={formData.noun}
                onChange={handleChange}
            />
            <label htmlFor="noun2">Noun2</label>
            <input
                type="text"
                name="noun2"
                placeholder="noun2"
                value={formData.noun2}
                onChange={handleChange}
            />
            <label htmlFor="adjective">Adjective</label>
            <input
                type="text"
                name="adjective"
                placeholder="adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <input
                type="text"
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}> Create Story</button>
            <button onClick={handleClear}> Clear Results</button>
        </form>
    )
}
export default WordForm