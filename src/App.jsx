import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //state to hold value
  const [principle, setPrinciple]= useState(0)
  const [rate, setRate]= useState(0)
  const [year, setYear]= useState(0)
  const [interest, setInterest] = useState(0)
  
  //conditionally render
  const [isPrinciple, setIsPrinciple]= useState(true)
  const [isRate, setIsRate]= useState(true)
  const [isYear, setIsYear]= useState(true)
  

  const validate=(e)=>{
    const {name , value}= e.target
    console.log(name);
    console.log(value);

    //regular expression
    // value.match(/^[0-9]*$/)
    /*console.log(!!value.match(/^[0-9]*$/)); */  // !! returns boolean
    if(!!value.match(/^[0-9]*$/)){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }

  }

  //function to reset
  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  
  //function to calculate SI
  const handleCalculate = ()=>{
     setInterest((principle*rate*year)/100)

  }

  return (
    <>
      <div className='main'>
        <div className='sub p-5'>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>

          <div className='w-100 d-flex justify-content-center align-items-center result rounded mt-5 shadow flex-column'>
            <h1>₹ {interest}</h1>
            <p>Total simple interest</p>

          </div>

        <form action="" className='mt-4'>
           <TextField id="outlined-basic" name='principle' value={principle ||""} label="₹ Principle Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
           {!isPrinciple && <p className='text-danger'>Invalid Input </p>}
           <TextField id="outlined-basic" name='rate' value={rate ||""} label="Rate of Interest (p.a) %" variant="outlined" className='w-100 mt-3'  onChange={(e)=>validate(e)} />
           {!isRate && <p className='text-danger'>Invalid Input</p>}
           <TextField id="outlined-basic" name='year' value={year ||""} label="Year (Yr)" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)} />
           {!isYear && <p className='text-danger'>Invalid Input</p>}

           <div className='d-flex mt-3'>
           <Button onClick={handleCalculate} className='w-50 p-3 me-3' variant="contained" color='success' disabled={isPrinciple && isRate && isYear ?false:true}>CALCULATE</Button>
           <Button onClick={handleReset} className='w-50 p-3' variant="outlined" color='primary'>RESET</Button>
           </div>
        </form>

        </div>
      </div>
    </>
  )
}

export default App

/* simple interest(SI)=(P*R*Y)/100*/