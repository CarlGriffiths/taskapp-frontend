import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'buy banna',
        day: 'feb 5th at 4pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'buy ornage',
        day: 'feb 5th at 4pm',
        reminder: true,
    }
])


//toggle reminder
const toggleReminder = (id) => {
  console.log('toggle' + id)
  setTasks(tasks.map((task) => task.id === id
  ? { ...task, reminder: !task.reminder } : task))
}

//add task
const addTask = (task) => {
  //console.log(task)
  const id = Math.floor(Math.random() * 1000) + 1


  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}

//delete task
const deleteTask = (id, text) => {
  //console.log('delete' + id + text)
  setTasks(tasks.filter((task) => task.id !== id))

}
  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} displayAddButton={showAddTask}  />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  /> : 'no tasks'}
      
      </div>
  );
}

export default App;
