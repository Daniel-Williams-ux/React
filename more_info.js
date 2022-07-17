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
import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    
    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */
    
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
