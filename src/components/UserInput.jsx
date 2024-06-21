export default function UserInput({userInput, changeInputValue}) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => changeInputValue("initialInvestment", event)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => changeInputValue("annualInvestment", event)}
          />
        </p>
        <p>
          <label>Xxpected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => changeInputValue("expectedReturn", event)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => changeInputValue("duration", event)}
          />
        </p>
      </div>
    </section>
  );
}
