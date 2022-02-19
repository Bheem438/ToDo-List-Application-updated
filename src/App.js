import { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  const [inputChange, setInputChange] = useState("");
  const [items, setItems] = useState([]);
  const [phase, setPhase] = useState(false);
  const clickHandler = () => {
    if (inputChange.length <= 3) {
      setPhase(true);
    } else {
      setItems((prevItems) => {
        return [inputChange, ...prevItems];
      });
      setInputChange("");
      setPhase(false);
    }
  };

  const removeHandler = (id) => {
    console.log("deleted");
    setItems((prevItems) => {
      return prevItems.filter((arr, index) => {
        return id !== index;
      });
    });
  };
  return (
    <div className="todo">
      <h1>ToDO LIST </h1>
      <input
        type="text"
        className="input"
        value={inputChange}
        onChange={(e) => setInputChange(e.target.value)}
      />
      <button className="button" onClick={clickHandler}>
        ADD
      </button>
      {phase && <p className="phase">Please Enter Valid Task</p>}
      {/* <ToDo text="hi Bheemesh" /> */}
      {items.map((item, index) => {
        return (
          <ToDo key={index} text={item} id={index} onClick={removeHandler} />
        );
      })}
    </div>
  );
}

export default App;
