import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Pizza from "./Pizza";
import Users from "./users";
import Friends from "./Friends";



function App() {
  function handelClick() {
    alert("btn click");
  }
  const handelClick2 = () => {
    alert("btn click2");
  };
  const addFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concept </h3>
      <Friends></Friends>
     <Users></Users>
      <Pizza></Pizza>
      <Team></Team>
      <Counter></Counter>

      {/* old  */}
      {/* <button onclick="handelClick()">Click Me</button> */}
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me2</button>
      <button
        onClick={() => {
          alert("third ckicked");
        }}
      >
        Click Me3
      </button>
      <button onClick={() => addFive(3)}>AddFive</button>
    </>
  );
}

export default App;
