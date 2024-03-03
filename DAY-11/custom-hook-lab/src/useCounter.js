import {useState} from 'react'
const useCounter = (intialValue=0)=>{
    const [count, setCount]= useState(intialValue);

    const increment =()=>setCount(count+1);
    const decrement =()=>setCount(count-1);

    return{
        count,
        increment,
        decrement
    }
}
export default useCounter;