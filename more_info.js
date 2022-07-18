
/*
Static Web pages
1. Read-only, no changes to data.
Examples:
   blogs, news sites, recipes etc
  
Dynamic Web Apps
1. Read-write: ability to change data
2. Highly interactive
3. displays your data
Examples:
   bank websites, airbnb, social media websites, online games etc
*/

/* Event Listener*/

//index.html file
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

//css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 30px;
    background-color: whitesmoke;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container > img {
    width: 100%;
    border-radius: 10px;
    transition: filter .1s ease-in-out;
}

.container > img:hover {
    filter: brightness(50%);
}

.container > button {
    width: 100%;
    border-radius: 10px;
    padding: 1rem;
    border: 2px solid lightgray;
    background-color: white;
    cursor: pointer;
    margin-top: 20px;
    font-family: 'Karla', sans-serif;
    font-size: 1.3rem;
}

//app.jsx file
import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
   
     /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */
   
   function handleOnMouseOver() {
        console.log("MouseOver")
    }
    
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360"
              onMouseOver={handleOnMouseOver}
/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}




//part two
//index file
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>


//css file
* {
    box-sizing: border-box;
}

body {
    background-color: #70B85D;
    color: white;
    padding: 20px;
    font-family: 'Karla', sans-serif;
    font-size: 1.3rem;
}

button {
    width: 100%;
    background-color: transparent;
    padding: 1rem;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
    cursor: pointer;
    font-family: 'Karla', sans-serif;
    margin-bottom: 20px;
}

button:hover {
    background-color: #FFFEF1;
    color: #2C5E2E;
}

button:focus {
    outline: 0;
}


//app
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//the key gets rid of the warning sign
    
    return (
        <div>
            <button>Add Item</button>
            {thingsElements}
        </div>
    )
}




import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        console.log(thingsArray)
    }
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
