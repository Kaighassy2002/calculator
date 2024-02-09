

import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setprinciple] = useState(0)
  const [rate,setrate] = useState(0)
  const [year,setyear] = useState(0)
   
  const [principleAmountValid,SetprincipleAmountValid] = useState(true)
  const [rateAmountValid,SetrateAmountValid] = useState(true)
  const [yearAmountValid,SetyearAmountValid] = useState(true)

  console.log(principle);
 
  const handleReset =()=>{
    setInterest(0)
    setprinciple(0)
    setrate(0)
    setyear(0)
    SetprincipleAmountValid(true)
    SetrateAmountValid(true)
    SetyearAmountValid(true)

  }
  const handleValidation =(tag)=>{
    console.log("inside handlevalidatipon");
    const {value,name} = tag
    console.log(value,name);
   console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
   if(!!value.match(/^\d*\.?\d+$/)){
    //valid
    if (name=="principle") {
      setprinciple(value)
      SetprincipleAmountValid(true)
    }else if (name=="rate") {
      setrate(value)
      SetrateAmountValid(true)
    }else{
      setyear(value)
      SetyearAmountValid(true)
    }
//invalid
   }else{
    if (name=="principle"){
      setprinciple(value)
      SetprincipleAmountValid(false)
    }else if (name=="rate") {
      setrate(value)
      SetrateAmountValid(false)
    }else{
      setyear(value)
      SetyearAmountValid(false)
    }
   }
  }

  const handleCalculate =()=>{
    if (principle && rate && year) {
      setInterest(principle*rate*year/100)
    }else{
      alert("please fill the form completely!!!")
    }
  }

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light p-5 rounded shadow'>
        <h2 >Simple Interest App</h2>
        <p>Calculate your simple interset Easily</p>
        <div className="d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow flex-column text-light">
        <h1>₹  {interest}</h1>
        <div className="fw-bolder">Total Simple Interest
        </div>
        
        </div>
        <form className='mt-5 '>
          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-principle" label="₹Principle Amount" variant="outlined" value={principle || ""} name='principle' onChange={e=>handleValidation(e.target)} />
          </div>
          
          {!principleAmountValid &&<div className='text-danger mb-5'>*Invalid Principle Amount</div>}
          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-rate" label="Rate of interest (p.a) %" variant="outlined" value={rate || ""}  name='rate' onChange={e=>handleValidation(e.target)}/>
          </div>
          {!rateAmountValid &&<div className='text-danger mb-5'>*Invalid Rate Amount</div>}
          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant="outlined" value={year || ""} name='year' onChange={e=>handleValidation(e.target)} />
          </div>
          {!yearAmountValid &&<div className='text-danger mb-5'>*Invalid Year</div>}

          <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">CALCULATE</Button>
           <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</Button>
         </Stack>
        </form>
        </div>
    </div>
  )
}

export default App
