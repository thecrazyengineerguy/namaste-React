const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent); //ths is an object not a tag.

root.render(parent);
