import AddTodoForm from "./AddTodoForm"
import AddtodoList from "./AddTodoList"
import { useState } from "react" 

function Todocontainer(){
    const [activityArr,setactivityArr]=useState([
        {
            id:1,
            activity:"Go for walk"
        },
        {
            id:2,
            activity:"Go for sleep"
        }
    ]
            
)
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
            <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}></AddTodoForm>
            <AddtodoList activityArr={activityArr} setactivityArr={setactivityArr}></AddtodoList>
            </div>
            
        </div>
    )
}
export default Todocontainer