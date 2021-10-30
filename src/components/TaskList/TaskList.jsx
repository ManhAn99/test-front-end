import React,{useState} from 'react'
import styled from 'styled-components'
import TaskCard from './TaskCard/TaskCard'
//responsive
import { mobile } from '../../responsive'

const TaskList = ({tasks,removeTask,updateTask,isCheckedTask}) => {
    const [search,setSearch] = useState('')
    const allTasks = tasks.filter(task => task.name.toLowerCase().includes(search.toLowerCase()))

    const handleChange = (e) => {
         setSearch(e.target.value)
    }

    const handleOnclick = () => {
        setSearch('')
    }

 
    
    return (
        <Container>
            <h3>Task List</h3>
            <SearchContainer>
              <input 
              placeholder = 'Search...'
              type="text" 
              value = {search}
              onChange = {handleChange}
              />
              <span 
               style = {{display : `${search ? 'block' : 'none'}`}}
               onClick = {handleOnclick}
               >X</span>
            </SearchContainer>
            <TasksContainer>
                {allTasks
                .sort((a,b) => a.dueDate.getTime() - b.dueDate.getTime())
                .map(task => (
                    <TaskCard 
                      task = {task} 
                      key = {task.id} 
                      removeTask = {removeTask}
                      updateTask = {updateTask}
                      isCheckedTask = {isCheckedTask}
                      />
                ))}
            </TasksContainer>
        </Container>
    )
}

export default TaskList
const Container = styled.div`
 flex : 1.4;
 border : 1px solid gray;
 border-left: none;
 padding : 20px 50px 60px 50px;
 >h3 {
      text-align : center
  }
 ${mobile({border : '1px solid black', borderTop : 'none', padding : '20px'})}
`

const SearchContainer = styled.div`
 display: flex;
 align-items: center;
 margin : 50px 0 20px 0;
 border : 1px solid #c0bfbf;
    font-weight: 700;
      width : 100%;
      padding : 7px 10px;
  > input {
      flex : 1;
      border : none;
      &:focus{
          outline : none
      }
  }
  > span {
      color : red;
      cursor : pointer;

  }
`
const TasksContainer = styled.div``
