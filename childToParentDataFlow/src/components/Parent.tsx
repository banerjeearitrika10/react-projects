import { useState} from "react"
import Child from "./Child"


function Parent() {
    const [data,setData] = useState('');
    const onClick = (data: string)=>{
        setData(data)
    }
  return (
    <>
    <div>Child data = {data}</div>
    <Child onClick = {onClick} name='Hiiiii'/>
    </>
  )
}

export default Parent