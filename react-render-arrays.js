import React from "react"
import Joke from "./Joke"

export default function App() {
    const colors = {["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]}
    return (
        <div>
            {colors}
        </div>
    )
}
   
//OR

export default function App() {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    return (
        <div>
            {colors}
        </div>
    )
}
   

import React from "react"
import Joke from "./Joke"

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function App() {
    const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>,
            <h3>Green</h3>,
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            {colors}
        </div>
    )
}

//Above is preferred
//or

import React from "react"
import Joke from "./Joke"

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function App() {
    const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>,
            <h3>Green</h3>,
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            <h3>Red</h3>
            <h3>Orange</h3> 
            <h3>Yellow</h3>
            <h3>Green</h3>
            <h3>Blue</h3>
            <h3>Indigo</h3>
            <h3>Violet</h3>
        </div>
    )
}
