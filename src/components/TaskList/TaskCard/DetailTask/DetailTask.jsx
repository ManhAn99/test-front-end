import React,{useState} from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker";

const DetailTask = ({task,updateTask,setToggleDetail}) => {
    const [editTask,setEditTask] = useState(task)
    const {name,description,dueDate,piority} = editTask
    
    const handleChange = (e) => {
       const {name,value} = e.target;
       setEditTask({
           ...editTask,
           [name] : value
       })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        updateTask(editTask)
        setToggleDetail(false)
    }

    return (
        <Container onSubmit = {handleSubmit}>
        <input 
         type="text" 
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
            onChange = {date => setEditTask({...editTask,dueDate : date})}
       
            className = 'date'/>
         </div>
         <div className="select">
            <label>Piority</label>
            <select 
             value = {piority} 
             onChange = {e => setEditTask({...editTask,piority : e.currentTarget.value})}>
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
            </select>
         </div>
        </SelectionContainer>
        <button type = 'submit'>Update</button>
    </Container>
    )
}

export default DetailTask

const Container = styled.form`
 
  border : 1px solid black;
  border-top : none;
  padding : 20px;
  > input {
      margin : 5px 0 20px 0;
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