import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"

const TodoItems = ({onDeleteClick}) =>{
     
  const todoItems = useContext(TodoItemsContext);
  
    return(
<div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoclassName={item.className}  onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>

    );
};

export default TodoItems