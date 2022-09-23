import React from "react"

const Story = ({ noun, noun2, adjective, color}) => {



    return (
        <div>
            {noun && noun2 && adjective && color ?
                <h1> There was a {color} {noun} who loved a {adjective} {noun2} </h1>
                : <h3>Please Fill out the Form</h3>}

        </div>
    )
}

export default Story