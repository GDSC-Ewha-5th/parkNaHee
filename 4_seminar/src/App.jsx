import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CountResult from './component/CountResult'
import styled from 'styled-components'

function App() {
  const [count, setCount] = useState(0) //초기값 세팅 -> 0
  const [whatButton, setWhatButton] = useState('plus') //초기값 세팅 -> 0
  // let count2 = 0

  const handlePlusCount = () => {
    setCount((prev) => prev + 1)
    setWhatButton('plus')
    // count2 = count2 + 1
    // console.log(count2)
  } 

  const handleMinusCount = () => {
    setCount((prev) => prev - 1)
    setWhatButton('minus')
    // count2 = count2 - 1
    // console.log(count2)
  }

  useEffect(()=>{
    console.log('whatButton',whatButton)
  },[whatButton])


  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      <div>
        <StButton onClick={handlePlusCount}>
          Plus : Current Count {count}
        </StButton>
        <StButton onClick={handleMinusCount}>
          Minus : Current Count {count}
        </StButton>
        {/*  Props */}
        <CountResult count={count}/>
      </div>
    </>
  )
}

export default App

const StButton = styled.button` 
  background-color: #6a00ff;
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px;
  font-size: 20px;
  &:hover {
    transform: scale(1.1);
  }
`