import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Namaste React using JSX 😎</h1>;

const fn = () => <h1>Hello Function</h1>;

// Functional Component
// const Title = () => {
//   return (
//     <h1 className="head" tabIndex="5">
//       Namaste React using JSX 🚀
//     </h1>
//   );
// };

const elm = <span>This is a react element</span>;

const title = (
  <h1 className="head" tabIndex="5">
    {elm}
    Namaste React using JSX 🚀
  </h1>
);

const number = 10000;

// Both HeadingComponent and HeadingComponent2 are React Functional Component
// Component Composition => Component inside a component
const HeadingComponent = () => (
  <div className="container">
    {/* <h2>{number}</h2> */}
    {/* <Title /> */}
    {title}
    <h1>Namaste React from Functional Component</h1>
  </div>
);

// const HeadingComponent2 = () => {
//   return <h1>Namaste React from Functional Component</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
