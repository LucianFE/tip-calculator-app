import iconDollar from "../assets/images/icon-dollar.svg";
import iconPerson from "../assets/images/icon-person.svg";
import { useGlobalContext } from "../context/GlobalContext";

function FormData() {
  const {
    bill,
    setBill,
    tipPercentage,
    setTipPercentage,
    people,
    setPeople,
    isCustomTip,
    setIsCustomTip,
  } = useGlobalContext();
  console.log(Boolean(people));

  return (
    <article className="all-data">
      <form>
        <div className="form-field">
          <label htmlFor="bill">Bill</label>
          <div className="input-container">
            <img src={iconDollar} className="symbol" alt="icon dollar" />
            <input
              type="number"
              placeholder="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="tip">Select tip %</label>
          <div className="tip-percentage">
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                setTipPercentage(5);
              }}
            >
              5%
            </button>
            <button
              className="btn"
              type="btn"
              onClick={(e) => {
                e.preventDefault();
                setTipPercentage(10);
              }}
            >
              10%
            </button>
            <button
              className="btn"
              type="btn"
              onClick={(e) => {
                e.preventDefault();
                setTipPercentage(15);
              }}
            >
              15%
            </button>
            <button
              className="btn"
              type="btn"
              onClick={(e) => {
                e.preventDefault();
                setTipPercentage(25);
              }}
            >
              25%
            </button>
            <button
              className="btn"
              type="btn"
              onClick={(e) => {
                e.preventDefault();
                setTipPercentage(50);
              }}
            >
              50%
            </button>
            <input
              type="number"
              className="btn custom"
              value={isCustomTip ? tipPercentage : ""}
              placeholder="Custom"
              onChange={(e) => {
                e.preventDefault();
                setIsCustomTip(true);
                setTipPercentage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`"form-field ${Number(people) === 0 && "show-error"}`}>
          <label htmlFor="people">
            Number of People <span className="error ">Can`t be zero</span>{" "}
          </label>

          <div className="input-container">
            <img src={iconPerson} className="symbol" alt="icon person" />
            <input
              type="text"
              placeholder="1"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>
        </div>
      </form>
    </article>
  );
}

export default FormData;
