import {useState,useEffect} from 'react'
import styled from 'styled-components'
//components
import AddForm from './components/AddForm/AddForm';
import TaskList from './components/TaskList/TaskList';

//responsive
import { mobile } from './responsive';

const App = () =>  {
  const [tasks,setTasks] = useState([])
  const getTasks = JSON.parse(localStorage.getItem("tasks"));
  //add task
  const addTask = (newTask) => {
    setTasks([...tasks,newTask])
  }
  //remove task
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  //edit task
  const updateTask = updatedTask => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask :task ))
  }
  //checked task
  const isCheckedTask = id => {
     setTasks(tasks.map(task => task.id === id ? {...task,isChecked : true} : task))
  }
  
  // saving tasks
  useEffect(() => {
      localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])
  // get taks

    useEffect(() => {
    if (getTasks == null) {
        setTasks([])
    } else {
        setTasks(getTasks.map(task => true ? {...task,dueDate : new Date(task.dueDate)} : task));
      
    }
}, [])
 
  console.log(getTasks)

  return (
      <Container>
          <AddForm addTask = {addTask} />
            <TaskList 
            tasks = {tasks}
            removeTask = {removeTask} 
            updateTask = {updateTask}  
            isCheckedTask = {isCheckedTask}
            />
      </Container>
  );
}

export default App
const Container = styled.div`
 padding : 70px;
 display: flex;
 ${mobile({flexDirection : 'column',padding : '20px'})}
`