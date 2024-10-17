import { useGlobalContext } from "../context/GlobalContext";

function Result() {
  const { tip, total, resetForm } = useGlobalContext();
  return (
    <article className="all-result">
      <div className="calc-data">
        <div className="result-data">
          <div className="text-container">
            <p className="normal-txt">Tip Amount</p>
            <p className="small-txt">/ person</p>
          </div>
          <p className="result">${parseInt(tip).toFixed(2)}</p>
        </div>
        <div className="result-data">
          <div className="text-container">
            <p className="normal-txt">Total</p>
            <p className="small-txt">/ person</p>
          </div>
          <p className="result">${parseInt(total).toFixed(2)}</p>
        </div>
      </div>
      <button className="reset-btn" onClick={resetForm}>
        reset
      </button>
    </article>
  );
}

export default Result;
