import {useState} from 'react';

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if(good + neutral + bad === 0) {
    return (
      <div>
        <h1>No feedback was given</h1>
      </div>
    )
  } else {
    const positive = good / (good + neutral + bad);
    const average = (good - bad) / (good + neutral + bad);

    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="Total" value={good + bad + neutral} />
            <Statistic text="average" value={average} />
            <Statistic text="positive Feedback" value={positive} />
          </tbody>
        </table>
      </div>
    );
  }
  
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  }

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button text="good" handleClick={handleClickGood} />
        <Button text="neutral" handleClick={handleClickNeutral} />
        <Button text="bad" handleClick={handleClickBad} />
      </div>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
