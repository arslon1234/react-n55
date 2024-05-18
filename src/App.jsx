import { useState } from "react"
function App(){
  // const [count,setCount] = useState(0)
  // const [step,setStep] = useState(0)
  const [counter,setCounter] = useState([])
  const addCounter =(item)=>{
    counter.push(item)
    setCounter([...counter])
  }
  const increaseItem =(index)=>{
    counter[index] += 1
    setCounter([...counter])
  }
  const decreaseItem =(index)=>{
    counter[index] -= 1
    setCounter([...counter])
  }
  return (
    <>
     <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-3 text-center">
         {/* <h1>Count: {count}</h1>
         <h1>Step: {step}</h1>
          <button className="btn btn-success m-3" onClick={()=>setStep(prev => prev + 1)}>step</button>
          <button className="btn btn-info m-3" onClick={()=>setCount(prev => prev + step)}>count</button> */}
          <button onClick={()=>addCounter(1)}>add counter</button>
          {
            counter.map((item,index)=>{
              return (
                <div key={index}>
                <button onClick={()=>increaseItem(index)}>+</button>
                <span>{item}</span>
                <button onClick={()=>decreaseItem(index)}>-</button>
                </div>
              )
            })
          }
        </div>
      </div>
     </div>
    </>
  )
}
export default App