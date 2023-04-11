import React,{useState, useEffect} from 'react'



const Practice = () => {
    const MAX_CAPACITY = 10;
    const [count, setCount] = useState(0);
    const [isFull, setIsFull] = useState("false");
    const addCount = () => setCount((count)=> count + 1);



    useEffect(() =>{
        setIsFull(count>=MAX_CAPACITY)
    },[count])
  return (
    <div>
        <p>{count}</p>
      <button onClick={addCount} disabled={isFull}>증가</button>
      {isFull ? <p>정원 초과</p> :<p>정원 </p>}
    </div>
  )
}

export default Practice;
