/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react'
import Checkboxes from './components/Checkboxes.jsx'

function App() {

  const [password, setpassword] = useState('') //will show the password

  const [passwordLength, setpasswordLength] = useState(10) //will fetch the length of the password to generate

  const [uppercaseState, setuppercaseState] = useState(true)  //will check for the uppercase check input to be checked or not

  const [lowercaseState, setlowercaseState] = useState(false)  //will check for the lowercase check input to be checked or not

  const [numberState, setnumberState] = useState(false)   //will check for the numbers check input to be checked or not

  const [symbolState, setsymbolState] = useState(false)  //will check for the symbols check input to be checked or not


  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // all the datasets
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "~!@#$%^&*()_+/";

  //for init call
  useEffect(() => {

    generatepassword()

  }, [])



  //these functions are passed to the checkboxes component so that when the user clicks the checkboxes, then the state will be updated
  function handleUppercaseState() {
    setuppercaseState(!uppercaseState)
  }

  function handleLowercaseState() {
    setlowercaseState(!lowercaseState)
  }

  function handleNumberState() {
    setnumberState(!numberState)
  }

  function handleSymbolState() {
    setsymbolState(!symbolState)
  }

  //this function will generate the upper || lower || number || symbol randomly from the datasets
  function randomDataset(dataset) {
    return dataset[Math.floor(Math.random() * dataset.length)]
  }

  //here the whole password will be generated
  function generatepassword() {
    let pass = ''

    while (pass.length < passwordLength) {
      if (uppercaseState) pass += randomDataset(uppercase);
      if (lowercaseState) pass += randomDataset(lowercase);
      if (numberState) pass += randomDataset(numbers);
      if (symbolState) pass += randomDataset(symbols);
    }

    setpassword(shrinkPassword(pass));
  }

  function shrinkPassword(pass) {

    if (pass.length === passwordLength) {
      return pass
    }

    while (pass.length > passwordLength) {
      const arr = pass.split("")
      arr.pop()
      pass = arr.join("")
    }
    return pass

  }

  console.log(password)

  return (
    <div className='w-[80vw] sm:basis-[400px] bg-[#2980b9] rounded-md p-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex flex-col gap-y-3'>

      <span className='w-full h-[50px] text-black bg-white rounded-md text-[30px] p-[7px] flex justify-start items-center'>{password}</span>

      <div className='flex justify-between'>

        <label className='text-white text-[20px]' htmlFor="passLength">Password Length</label>
        <input className='w-[50px]' type="number" id='passLength' name='passLength' onChange={(e) => setpasswordLength(parseFloat(e.target.value))} value={passwordLength} min={10} max={20}/>

      </div>

      <Checkboxes onchange={handleUppercaseState} state={uppercaseState} id="uppercase" contains="Contains Uppercase" />
      <Checkboxes onchange={handleLowercaseState} state={lowercaseState} id="lowercase" contains="Contains Lowercase" />
      <Checkboxes onchange={handleNumberState} state={numberState} id="numbers" contains="Contains Numbers" />
      <Checkboxes onchange={handleSymbolState} state={symbolState} id="symbols" contains="Contains Symbols" />

      <button onClick={generatepassword} className='bg-[rgb(52,_73,_94)] text-white w-full rounded-md py-[10px] text-[20px] hover:bg-[silver] hover:text-black'>Generate</button>

    </div>

  )
}

export default App
