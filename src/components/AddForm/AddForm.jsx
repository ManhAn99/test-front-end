import React,{useState} from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';

const initialState = { 
    name : '',
    description : '',
    piority : 'Low',
    dueDate : new Date(),
    isChecked : false
}

const AddForm = ({addTask}) => {
    const [newTask,setNewTask] = useState(initialState)
    
    const {name,description,piority,dueDate} = newTask
    const handleChange = e => {
        const {name,value} = e.target;
        setNewTask({
            ...newTask,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask({...newTask,id : uuidv4()})
        setNewTask(initialState)
    }

    return (
        <Container onSubmit = {handleSubmit}>
            <h3>New Task</h3>
            <input 
             type="text" 
             placeholder = 'Add new task ...'  
             value = {name}
             onChange = {handleChange}
             name = 'name'
             required
             />
            <div className="textarea-container">
               <label>Description</label>
               <textarea 
               value = {description}
               onChange =  {handleChange}
               name = 'description'
               required></textarea>
            </div>
            <SelectionContainer>
             <div className="select">
                <label>Due Date</label>
               <DatePicker 
                selected = {dueDate}
                dateFormat = 'dd/MM/yyyy'
                minDate = {new Date()}
                onChange = {date => setNewTask({...newTask,dueDate : date})}
           
                className = 'date'/>
             </div>
             <div className="select">
                <label>Piority</label>
                <select value = {piority} onChange = {e => setNewTask({...newTask,piority : e.currentTarget.value})}>
                    <option value="Low">Low</option>
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                </select>
             </div>
            </SelectionContainer>
            <button type = 'submit'>Add</button>
        </Container>
    )
}

export default AddForm
const Container = styled.form`
  flex : 1;
  border : 1px solid black;
  padding : 20px 50px 60px 50px;
  >h3 {
      text-align : center
  }
  > input {
      margin : 50px 0 20px 0;
      border : 1px solid #c0bfbf;
      font-weight: 700;
  }
  > input,textarea {
      width: 100%;
      padding : 7px 10px
  }
  .textarea-container {
    label {
        font-weight: 700;
        font-size : 13px;
        
    }
    textarea {
      height : 130px;
      margin : 5px 0
    }
  }
  
  > button {
      width : 100%;
      border : none;
      cursor : pointer;
      color : white;
      background-color: #5CB85C;
      padding : 10px 0;
      border-radius : 5px;
      font-size : 15px;
      transition : 0.4s;
      &:hover {
          opacity : 0.7
      }
  }
 
`

const SelectionContainer = styled.div`
  display : flex;
  justify-content: space-between;

  margin: 20px 0 60px -35px;
  .select {
      display : flex;
      flex-direction: column;
      flex : 1;
      margin-left: 35px;
  
      label {
        font-weight: 700;
        font-size : 13px;
        display: block;
        margin : 5px 0
    }
      .date {
          width : 100%;
          padding : 7px 10px;
          cursor: pointer;
      }
      select {
          padding : 7px 10px;
          cursor: pointer;
      }
  }

`