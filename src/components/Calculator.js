import Addition from "./Addition";
import Substraction from "./Substraction";
import Division from "./Division";
import Multiplication from "./Multiplication";




function Calculator() { 

  


  return (
    <form> 
      <Addition />  
      <Substraction />
      <Multiplication />
      <Division />
    </form>
  );
}

export default Calculator;