import React,{useState} from 'react'
import DetailTask from './DetailTask/DetailTask'
import styled from 'styled-components'
//responsive
import { mobile } from '../../../responsive'

const TaskCard = ({task,removeTask,updateTask,isCheckedTask}) => {
    const [toggleDetail,setToggleDetail] = useState(false)
    const {id,name,isChecked} = task
    const handleChange = () => {
      isCheckedTask(id)
      setToggleDetail(false)
    }
    return (
        <Container style = {{backgroundColor : `${isChecked && '#E0E0E0'}`}} >
         <Wrapper>
          <ContainerLeft>
              <input 
               type="checkbox" 
               onChange = {handleChange} 
               className = {`${isChecked && 'done'}`}
               />
               <h4>{name}</h4>
           </ContainerLeft>
           <ContainerRight>
                <button 
                 disabled = {isChecked}
                 className = {`${toggleDetail ? 'close' : isChecked ? 'done' : 'detail'}`}
                 onClick = {() => setToggleDetail(!toggleDetail)}
                >
                  {`${toggleDetail ? 'Close' : isChecked ? 'Done' : 'Detail'}`}
                </button>
                <button className = 'remove' onClick = {() => removeTask(id)}>Remove</button>
           </ContainerRight>
         </Wrapper>
         {(toggleDetail) && (
           <DetailTask task = {task} updateTask = {updateTask} setToggleDetail = {setToggleDetail} />
         )}
        </Container>
    )
}

export default TaskCard

const Container = styled.div`
 
 margin : 20px 0;

`
const Wrapper = styled.div`
display : flex;
justify-content: space-between;
align-items: center;
border : 1px solid black;
padding : 20px;
`
const ContainerLeft = styled.div`
 display: flex;
 align-items :center;
 > h4 {
     margin : 0 17px
 }
 > input {
   cursor : pointer
 }
 .done {
   display : none
 }
`
const ContainerRight = styled.div`
 margin-right: -15px;
 display : flex;
 > button {
     margin-right: 15px;
     border : none;
     cursor : pointer;
     width : 100px;
     display : flex;
     align-items: center;
     justify-content: center;
     height : 30px;
     color : white;
     border-radius: 5px;
     ${mobile({width : '70px'})}
 }
 .detail {
   background-color: #00BCD4;
 }
 .remove {
   background-color: #D9534F;
 }
 .close {
   background-color: #cac8c8;
 }
 .done {
   background-color: #2196F3;
 }
`