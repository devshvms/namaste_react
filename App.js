import React from 'react';
import ReactDOM from 'react-dom/client';

//  React Element => Object => HTMLElement(render) while convert this react element into HTML

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Namaste React 🤖");

// JSX in no ta HTML but syntex like HTML, XML
// JSX --transpiled by Babel--> JS object
const jsxHeading = (<h1 id="heading">Namaste React from JSX 🤖</h1>);
const one = 1;
const SpanComponent = () =>(
    <span className="spanComponent">
        {one}+{one}={one+one}
    </span>
);

// React Functional component
const HeadingComponent = () => (
    <div className='head'>
        {jsxHeading}
        {SpanComponent()}
        <br></br>
        <SpanComponent/>
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(<HeadingComponent/>);