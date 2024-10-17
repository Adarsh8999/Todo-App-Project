import "bootstrap/dist/css/bootstrap.min.css"

import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/TodoItemsContext";

function App() {
  // const initialTodoItems = [
  //   {
  //     className: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     className: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     className: "Like this video",
  //     dueDate: "right now",
  //   },
  // ];

    const [todoItems , setTodoItems] = useState([]);

    const handleNewItem = (itemclassName, itemDueDate) =>{
        // console.log(`New Item Added: ${itemclassName} Date:${itemDueDate}`);
        // const newTodoItems = [...todoItems,  
        //   {className: itemclassName, dueDate: itemDueDate}
        // ];
          setTodoItems((currValue)=>[
            ...currValue,
            {className: itemclassName,dueDate:  itemDueDate},
          ]);
    };
    

    const handleDeleteItem = (todoItemclassName)=>{
      const newTodoItems = todoItems.filter(item=>item.className !== todoItemclassName);
      setTodoItems(newTodoItems);
      //console.log(`Item Deleted:${todoItemclassName}`);
      
    }

   
  return (
    <TodoItemsContext.Provider value={todoItems}>
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem = {handleNewItem } />
       <WelcomeMessage ></WelcomeMessage>
      <TodoItems   onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
    </TodoItemsContext.Provider> 
  );
}

export default App;

