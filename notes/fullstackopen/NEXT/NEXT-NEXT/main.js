// ## !mperative ##
// const app = document.getElementById("app"); // Select
// const header = document.createElement("h1"); // Create
// const headerContent = document.createTextNode("Develop. Preview. Ship");
// header.appendChild(headerContent); // Append
// app.appendChild(header);

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   btn.classList.toggle("clicked");
//   if (btn.classList.contains("clicked")) {
//     btn.style.backgroundColor = "aqua";
//     btn.style.color = "white";
//   } else {
//     btn.style.backgroundColor = "white";
//     btn.style.color = "white";
//   }
// });

// ## Declarative ##
const rootElement = document.getElementById("root");

// A component is a function that returns ui elements
function Header({ title }) {
  // console.log(props.title)
  return <h1>{title ? title : "Default title"}</h1>;
}

// Nesting components
// function HomePage() {
//   // const [likes, setLikes] = React.useState(null);
//   const names = ["Ada Lovellace", "Grace Hopper", "Margaret Hamilton"];
//
//   // function handleClick() {
//   //   // console.log("increment like count");
//   //   setLikes((prev) => prev + 1);
//   // }
//
//   return (
//     <div>
//       <Header title="Develop. Preview. Ship" />
//       <ul>
//         {names.map((name) => {
//           <li key={name}>{name}</li>;
//         })}
//       </ul>
//       {/* <button onClick={handleClick}>Like {likes}</button> */}
//     </div>
//   );
// }

const reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(
  <>
    <HomePage />
  </>,
);
