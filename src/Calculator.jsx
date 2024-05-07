import { useState,useEffect } from "react";

export default function Calculator(){

    const[intialHeight,setHeight] = useState("")
    const[intialWeight,setWeight] =useState("");
    const[result,setResult] = useState(null);
    const[BmiResult,setbmiResult] = useState("");

    let CalculateBmi = (event) => {
        event.preventDefault();
        let heightinmeter = intialHeight / 100;
        let height = heightinmeter ** 2;
        let calc = intialWeight / height ; 
        let clc = Math.floor(calc);
        console.log(clc);
        setResult(clc);
        
    }
    let Userinput = (event) =>{
        setHeight(event.target.value);
    }

    let Userinput2= (event) =>{
        setWeight(event.target.value);
    }
    useEffect(()=>{
        if (result !== null) {
        let res = "";
        if(result<19){
            res+="You are underweight"
            
        }
        else if (result>19 && result<25){
            res+="You are healthy";
      
        }
        else if(result>25 && result <30){
            res+="You are overweight";
            
        }
        else{
            res+="you are obesity";
           
        }
        
        setbmiResult(res);
    }},[result])
   
    
    // res += (result < 19) ? "You are underweight" : (result>19 && result<25) ? "You are healthy" : (result>25 && result <30) ? "You are overweight" : (result>30) ? "you are obesity" : "";
  
    return(
        <>
        <h1>Bmi Calculator</h1>
        <div className="input-field">
            <input type="number" placeholder="Enter ur height" name="height" id="height" value={intialHeight} onChange={Userinput}/>
            <br /><br />
            <input type="number"  placeholder="Enter ur weight" value={intialWeight}  onChange={Userinput2}/>
            <br /><br />
            <button onClick={CalculateBmi}>Calculate</button>
            <h3>Your BMI score is: {result !== null ? result : "N/A"}{result}</h3>
            <h2>{BmiResult}</h2>
        </div>
        </>
    )
}