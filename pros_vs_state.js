/*
"Props" refer to the properties being passed into a component in order for it to work correctly, similarly to how a function receives parameters:"from above"
A component receiving props is not allowed to modify those props.(i.e. they are "immutable.")
*/

function addTwoNumbers(a, b) {
    a = 42 //In the body we can't just modify parameters even though when you run it it gives you 44 as against 3.
    return a + b //this is how a function receives parameters "from above".
}

addTwoNumbers(1, 2)

//Simillarl in react
function Navbar(props) {
    props.coverImage = "something else" // this is a red flag because it should be immutable
}
//Note that from within the body of your function you should never change your props.


/*
"State" refers to values that are defined within the component, similar to variables defined inside a function.
Anytime you have changing values that should be saved/displayed, you will likely be using state.
*/

function addTwoNumbers(a, b) {
    a = 42  // Don't do this!
    return a + b
}

addTwoNumbers(1, 2)

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))

/* 
QUIZ

1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.
*/
