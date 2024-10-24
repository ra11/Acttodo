import { useState } from "react"

function AddTodoForm(props){
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    const [addactivity,setactivity]=useState("")

    function handleactivity(evt)
    {
        setactivity(evt.target.value)
    }
    function handleadd(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:addactivity}])
        setactivity("")
    }
return(
    <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-medium">Manage Activities</h1>
                <div>
                <input value={addactivity} onChange={handleactivity} className="border border-black bg-transparent p-1" type="text" placeholder="Next Activity?"></input>
                <button onClick={handleadd} className="bg-black text-white p-1 border border-black">Add</button>
                </div>
               
            </div>
)
}
export default AddTodoForm