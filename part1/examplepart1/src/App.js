const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age}! Nice to meet you
      </p>
    </div>
  );
};

function App() {
  const name = "Nelson";
  const age = 20;

  return (
    <div className="App">
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Sam" age={age + 10} />
      <Hello name="John" age={age * 2} />
    </div>
  );
}

export default App;
