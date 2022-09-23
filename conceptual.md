### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a a JavaScript library for building user interfaces. Its makes it painless to creat interactive UIs.

- What is Babel?

Babel is a free and open-source JavaScript transcompiler

- What is JSX?

It is called JSX, and it is a syntax extension to JavaScript. 

- How is a Component created in React?

React is all about re-using code, and it is recommended to split your components into separate files. To do that, create a new file with a . js file extension and put the code inside it: Note that the filename must start with an uppercase character.

- What are some difference between state and props?

state is used when something has to change, ex. Form data

- What does "downward data flow" refer to in React?

The first and more simple concept, “data down,” refers to the passing of data and/or functions via props from parent to child components. These props are passed down when a child component gets created. We pass data down to child components so they can render them on to the DOM

- What is a controlled component?

In React, Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc

- What is an uncontrolled component?

Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model).

- What is the purpose of the `key` prop when rendering a list of components?

eact's key prop gives you the ability to control component instances. Each time React renders your components, it's calling your functions to retrieve the new React elements that it uses to update the DOM.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect.  What use cases is it used for in React components?

What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

React's useRef hook, short for reference, allows us to persist data across renders without causing the component to rerender.

- When would you use a ref? When wouldn't you use one?

hey are used in cases where we want to change the value of a child component, without making use of props and all.

- What is a custom hook in React? When would you want to write one?

you should use a custom hook to reduce repetitive code. For example, you can use customer hook for handleform when working with forms.
