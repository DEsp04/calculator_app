import React, { useState } from 'react';





function Calculator() { 


  return (
    <form>
      <input type="text" id="result" />
      <input type="text" id="num" placeholder="number entered" />
      <button>+</button>
      <button>Clear</button>
    </form>
  );
}

export default Calculator;