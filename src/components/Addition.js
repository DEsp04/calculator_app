import React, { useState, useEffect } from "react";


function Addition() { 
  const [sum, setSum] = useState(0);





  function addNum(e) { 
    e.preventDefault();
    
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;

    console.log(num1, num2)

    if (num1 === "" || num2 === "") { 
      return;
    }

    let summation = parseInt(num1) + parseInt(num2);
    setSum(summation);

  }

  function clearInput(e) { 
    e.preventDefault();

    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
 
    setSum(0);
  }

  useEffect(() => { 
    document.querySelector('#result').value = "0";
  }, [])

 

  



  return (
    <div>
      <input type="text" id="num1" placeholder="enter number" />
      <span>+</span>
      <input type="text" id="num2" placeholder="enter number" />
      <span>=</span>
      <input type="text" id="result" readOnly value={sum} />
      <button onClick={(e) => addNum(e)}>+</button>
      <button onClick={(e) => clearInput(e)}>Clear</button>
    </div>
  )
}


export default Addition;