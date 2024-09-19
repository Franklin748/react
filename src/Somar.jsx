import React, {useState} from "react"

export default function somar () {

   const [inputA, setinputA] = useState(0);
   const [inputB, setinputB] = useState(0);
   const [resultado,setResultado] = useState(0);

const somar = () => {
    const numA = parseFloat (inputA);
    const numB = parseFloat (inputB);

       setResultado (numA + numB);
}

    return(
       <div>
        <h3>Somador</h3>
        <input 
        type="number"
        value={inputA}
        onChange={(e)=>setinputA(e.target.value)}
        placeholder="Digite um número" 
        />
    
       <input 
       type="number"
       value={inputB}
       onChange={(e)=>setinputB(e.target.value)}
       placeholder="Digite outro número"
       />

       <button onClick={somar}>somar</button>

       <p>{resultado}</p>
      </div>
    )
}