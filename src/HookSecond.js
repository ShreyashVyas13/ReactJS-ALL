import { useEffect, useState } from "react";

const HookSecond = () =>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title =`${count} new messages!`
    })
    return(
        <div>
            <h3>{count} new Messages</h3>
            <button onClick={()=> setCount(count +1)}>Add</button>
        </div>
    )
}
export default HookSecond;