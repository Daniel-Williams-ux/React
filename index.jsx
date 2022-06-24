ReactDOM.render(<h1>Hello, everyone</h1>, document.getElementById("root"))

ReactDOM.render(<p>Hi, am devdan</p>, document.querySelector('#root'))

/*Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
ReactDOM.render(
  <ul><li>first item</li><li>second item</li></ul>,
document.getElementById("root")) 

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
const h1 = document.createElement("h1")
const textContent = "This is an imperative way to program";
const className = header;
document.getElementById("root").append(h1)

//using react
ReactDom.render(
  <h1 className="header">This is a declarative way to program</h1>,
  document.getElementById("root"))

//Introducing JSX
const h1 = document.createElement("h1")
const className = header;
const textContent ="This is an imperative way to program";
document.getElementById("root").append(h1)
console.log(h1);

//JSX allows us to write declarative program
const element = <h1 class="header">This is JSX</h1>
console.log(element);
ReactDOM.render(element, document.getElementById("root"))

//In react you can not render two siblings side by side except you put them in a div/parent element
ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)
