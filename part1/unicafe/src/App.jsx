import { useState } from 'react'

const Buton = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  );
}

const StatistcLine = (props) =>{
  return(
    <p>{props.text} {props.value}{props.unit}</p>
  );
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
  <tbody>
      <tr><td><StatistcLine text="good" value={props.good} /></td></tr>
      <tr><td><StatistcLine text="neutral" value={props.neutral} /></td></tr>
      <tr><td><StatistcLine text="bad" value={props.bad} /></td></tr>
      <tr><td><StatistcLine text="average" value={props.average} /></td></tr>
      <tr><td><StatistcLine text="positive" value={props.positive} unit="%" /></td></tr>
  </tbody>
</table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Buton onClick = {() => setGood(good + 1)} text="good" />
      <Buton onClick = {() => setNeutral(neutral + 1)} text = "neutral"/>
      <Buton onClick = {() => setBad(bad + 1)} text = "bad"/>
      <h1>statistics</h1>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        average={average} 
        positive={positive} 
        total={total} 
      />
    </div>
  )
}

export default App