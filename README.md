This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#Debuggging React - Discussion Question

## Setup

Clone the directory and run 
`npm install`

## Background

We have a fully functional React App (JK, we have some debugging to do). 
We are presented with some errors.
In your groups, discuss and determine how to fix the errors.

We have 3 components that we are utilizing:
* App
* InstructorContainer
* InstructorCard


Let's discuss the structure. 

In App.js, we have our information of mod4instructors. 
We want to pass this information down as props to the InstructorContainer component. 
Finally, within the InstructorContainer component, <br/> 
we want an IntructorCard component to be generated for each of the instructor.


### `Debugging Tools`

Please utilize the tools you were presented in Javascript to help debug the errors.
`console.log()`
`debugger`

When debugging in React, start from the top most component and work your way down.
An appropriate placement of `console.log()` in a Class Component would be between the render block but outside of the return

