import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Namaste React using JSX 😎</h1>;

const fn = () => <h1>Hello Function</h1>;

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React using JSX 🚀
    </h1>
  );
};

// Both HeadingComponent and HeadingComponent2 are React Functional Component
const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h1>Namaste React from Functional Component</h1>
  </div>
);

// const HeadingComponent2 = () => (
//   <h1>Namaste React from Functional Component</h1>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
