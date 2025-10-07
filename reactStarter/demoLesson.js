import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"First Child sibling"),
//         React.createElement("h2",{},"2nd Child sibling"),
//         React.createElement("h3",{},"3rd Child sibling")
//     ]));// a js Object(a react element(first is tag , 2nd is attribute, 3rd is children) )(when we render it become html element)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

//react element
const jsxheading = <h1>Hello From JSX</h1>;

//React functional component
//1st way 
const Title = ()=>{
    return (
        <h1>This is title 🎊</h1>
    );
}
//2nd way without return
const Body = ()=>( 
    <div>
    {/* satitize incoming data */}
        {jsxheading} 
        {1 + 1}
        <Title />
        <h3 className="heading">Hello From Functional Component</h3>
    </div>
    
 );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
