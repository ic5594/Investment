import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

let CALCULATE_TH = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          {CALCULATE_TH.map((item, index) => (
            <td key={index}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {resultData.map((item, index) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initInvestment;
            const totalAmountInvested = item.valueEndOfYear - totalInterest
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
