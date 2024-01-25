import { useState, useId, useEffect } from "react";
import InputBox from "./assets/components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
    )
      .then((res) => {
        // console.log(res, "hello", res.json());
        return res.json();
      })
      .then((res) => {
        let data = res.usd;
        let newdata = Object.keys(data);
        // console.log(newdata, data, "hello");
        setData(newdata);
      });
  }, []);

  //nakli
  const [currencyOpt, setCurrencyOpt] = useState([]);

  const [amount, setAmount] = useState(0);
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [ConvertedAmount, setConvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(ConvertedAmount);
  }

  function Convert() {
    setConvertedAmount(amount * CurrencyInfo[to]);
  }
  function handleSearch(val) {
    let filterdrst = data.filter((item) => item.includes(val));
    if (val.length < 1) {
      setCurrencyOpt([]);
    } else {
      for (let i in filterdrst) {
        console.log(filterdrst[i], i);
        if (filterdrst[i] == val) {
          console.log("yes");
          let temvalue = filterdrst[i];
          filterdrst.splice(i, 1);
          filterdrst.unshift(temvalue);
          setCurrencyOpt(filterdrst);
        }
      }
      setCurrencyOpt(filterdrst);
    }
    console.log(val);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: 'url("../public/currency.jpg")',
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={ConvertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      {/* <div className="h-48 w-full bg-slate-400 flex flex-col items-center justify-center overflow-hidden">
        <input
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
          name=""
          id=""
          placeholder="search your currency"
        />
        <div className="overflow-y-auto h-64 w-60 bg-slate-400">
          {currencyOpt.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </div>
        
      </div> */}
    </div>
  );
}

export default App;
