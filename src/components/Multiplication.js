import React, { useState, useEffect } from "react";



function Multiplication() { 

  const [multiplication, setMultiplication] = useState(0);


  function multiplyNum(e) { 
    e.preventDefault();
    
    let num7 = document.querySelector("#num7").value;
    let num8 = document.querySelector("#num8").value;

    console.log(num7, num8)

    if (num7 === "" || num8 === "") { 
      return;
    }

    let multiplying = parseInt(num7) * parseInt(num8);
    setMultiplication(multiplying);

  }

  function clearInput(e) { 
    e.preventDefault();

    document.querySelector("#num7").value = "";
    document.querySelector("#num8").value = "";
    
    setMultiplication(0);
  }

  useEffect(() => { 
    document.querySelector('#result4').value = "0";
  }, [])


  return (
    <div>
      <input type="text" id="num7" placeholder="enter number" />
      <span>×</span>
      <input type="text" id="num8" placeholder="enter number" />
      <span>=</span>
      <input type="text" id="result4" readOnly value={multiplication} />
      <button onClick={(e) => multiplyNum(e)}>×</button>
      <button onClick={(e) => clearInput(e)}>Clear</button>
    </div>
  )
};

export default Multiplication;