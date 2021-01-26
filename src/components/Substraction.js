import React, { useState, useEffect } from "react";



function Substraction() { 

  const [substraction, setSubstraction] = useState(0);


  function substractNum(e) { 
    e.preventDefault();
    
    let num3 = document.querySelector("#num3").value;
    let num4 = document.querySelector("#num4").value;

    console.log(num3, num4)

    if (num3 === "" || num4 === "") { 
      return;
    }

    let subtracting = parseInt(num3) - parseInt(num4);
    setSubstraction(subtracting);

  }

  function clearInput(e) { 
    e.preventDefault();

    document.querySelector("#num3").value = "";
    document.querySelector("#num4").value = "";
    
    setSubstraction(0);
  }

  useEffect(() => { 
    document.querySelector('#result2').value = "0";
  }, [])


  return (
    <div>
      <input type="text" id="num3" placeholder="enter number" />
      <span>-</span>
      <input type="text" id="num4" placeholder="enter number" />
      <span>=</span>
      <input type="text" id="result2" readOnly value={substraction} />
      <button onClick={(e) => substractNum(e)}>-</button>
      <button onClick={(e) => clearInput(e)}>Clear</button>
    </div>
  )
}

export default Substraction;