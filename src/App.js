import './App.css';
import { useState } from 'react'; // call the funtion from react
import { Task } from "./Task" 

function App() {
  //useState function use empty arry to add the input
  const [todoList, setTodoList] = useState([]);
  // an other useState funftion for adding a new task in empty string 
  const [newTask, setNewTask] = useState ("");
  // use a handleChange function to make any change in the input 
  const handleChange = (event) => {
    setNewTask(event.target.value)
  };
// make a addtask function
  const addTask = () => {
    const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    taskName: newTask
    }
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList)
  };
 // make a deleteTask function
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
  // make a componet first div class name 
  // then inside make input button add task 
    <div className='App'> 
      <div className='Add Task'> 
        <input onChange={handleChange}/>
  {/* whenever click on buton add task function call */}
        <button onClick={addTask}> Add Task</button> 
      </div>
      <div className='List'> 
      {/* add a map function for whenhver you add input add to the list     */}
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
         );
}

export default App;
