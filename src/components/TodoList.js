import styles from "./style.module.css";
import write from "../write1.png";
import del from "../delete1.png";
import { useState } from "react";

// const items = ["tomato", "sugar", "onions"];
export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, todo]);
    setTodo("");
  };

  const deleteList = (item) => {
    setList(list.filter((list) => list !== item));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.Upperform}>
        <input
          value={todo}
          onChange={handleChange}
          placeholder="Create Todo-Task"
          className={styles.firstInput}
        />
        <button type="submit" className={styles.firstButton}>
          Add
        </button>
      </form>

      {list.map((item) => (
        <div className={styles.listForm}>
          <div className={styles.writeList}>
            <div className={styles.listInput}>
              <p>{item}</p>
            </div>
            <img src={write} className={styles.writeIcon} />
          </div>
          <img
            src={del}
            onClick={() => deleteList(item)}
            className={styles.deleteIcon}
          />
        </div>
      ))}
    </div>
  );
};
