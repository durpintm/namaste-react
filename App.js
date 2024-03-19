// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World! from React"
// );

// ReactElement(Object) => HTML(Browser Understands)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
]);

// The above code is messed up so JSX can make it simpler

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
