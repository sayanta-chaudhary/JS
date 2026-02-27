const app = document.querySelector("#app");

function Header({ title }) {
  return <h1>{title}</h1>;
}

function HomePage() {
  const names = ["A", "B", "C"];
  const [likes, setLikes] = React.useState(0);
  // The second item in the array is a function to update the value

  function handleClick() {
    console.log("increment like count");
    setLikes((likes) => likes + 1);
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship" />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>👍 {likes}</button>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);

// const object = {
//   name: "John",
//   surname: "Smith",
//   age: 30,
//   isAdmin: true,
// };
// user.email = "sayanta@gmail.com" // Create
// user.name = "Pete"; // Update
// delete user.name; // Delete
// console.log(object.email); // Read

// for (const key in object) {
//   console.log(key, object[key]);
// }

// Object.entries(object).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// Array
// const obj = ["apple", "banana", "mango"];
// for (const i of obj) {
//   console.log([i]);
//   console.log([i]);
// }
//
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     const element = object[key];
//   }
// }
