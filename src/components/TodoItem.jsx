function TodoItem(props){
    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    function handleClick(deleteid){
        
        var temparr=activityArr.filter(function(item){
            if(item.id===deleteid){
                return false
            }
            else{
                return true
            }
        })

        setactivityArr(temparr)
    }

return(
    <div className="flex justify-between">
 <p>{props.index+1}.{props.item.activity}</p>
 <button className="text-red-500" onClick={()=>handleClick(props.id)}>Delete</button>
    </div>
   

)

}
export default TodoItem