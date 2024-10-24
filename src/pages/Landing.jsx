import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";

function Landing(){
    const data=useLocation()

    return(
    <div className='bg-black p-16'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md ' >
          <Header username={data.state.user}></Header>
          <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"Yellow"} title={"23"} subtitle={"Chennai"}></Card>
          <Card bgcolor={"Orange"} title={"Department"} subtitle={"IT"}></Card>
          <Card bgcolor={"purple"} title={"Build with"} subtitle={"React"}></Card>
        
    
          </div>
          <Todocontainer></Todocontainer>
        
        </div>
       </div>
       )
}
export default Landing
