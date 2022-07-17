
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
