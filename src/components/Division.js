import React, { useState, useEffect } from "react";

function Division() { 

  const [division, setDivision] = useState(0);



  function divideNum(e) { 
    e.preventDefault();
    
    let num5 = document.querySelector("#num5").value;
    let num6 = document.querySelector("#num6").value;

    console.log(num5, num6)

    if (num5 === "" || num6 === "") { 
      return;
    }

    let dividing = parseInt(num5) / parseInt(num6);
    setDivision(dividing);

  }


  function clearInput(e) { 
    e.preventDefault();

    document.querySelector("#num5").value = "";
    document.querySelector("#num6").value = "";
    
    setDivision(0);
  }


  useEffect(() => { 
    document.querySelector('#result3').value = "0";
  }, [])


  return (
    <div>
      <input type="text" id="num5" placeholder="enter number" />
      <span>÷</span>
      <input type="text" id="num6" placeholder="enter number" />
      <span>=</span>
      <input type="text" id="result3" readOnly value={division} />
      <button onClick={(e) => divideNum(e)}>÷</button>
      <button onClick={(e) => clearInput(e)}>Clear</button>
    </div>
  );
}


export default Division;