import { useState } from "react";
import { Login } from "./components/Login";
// import { Register } from "./components/Register";
import { TodoList } from "./components/TodoList";

function App() {
  const [stage, setStage] = useState("login");
  return (
    <div className="App">
      {stage === "login" ? <Login setStage={setStage} /> : <TodoList />}
    </div>
  );
}

export default App;
