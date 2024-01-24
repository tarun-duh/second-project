import { useState } from "react";

import "./App.css";

function App() {
  let [result, setResult] = useState(0);
  let [from, setFrom] = useState("usd");

  let allData;

  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
  )
    .then((data) => data.json())
    .then((data) => {
      allData = data;
      console.log(allData); // Move the console.log inside this block
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  function Convert() {
    let amt = document.getElementById("amt");
    console.log(amt.value);
  }

  return (
    <>
      <div
        style={{
          backgroundImage: 'url("../public/currency.jpg")',
        }}
        className="mainDiv h-screen w-screen bg-center bg-cover  flex flex-col justify-center items-center"
      >
        <div
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          className="w-2/3 h-2/5 p-3 rounded-lg overflow-hidden "
        >
          <h1 className="text-3xl font-bold underline text-blue-500 text-center">
            Currency project
          </h1>
          <div className="flex h-auto">
            <div className=" w-1/3 h-1/3  flex flex-col p-3 justify-center my-4">
              <h3 className="text-xl my-2">Amount</h3>
              <input
                className="h-12 cursor-pointer border-2 rounded-md p-1 border-blue-500 "
                type="text"
                name=""
                id="amt"
                placeholder="$5.00"
              />
            </div>
            <div className="w-1/3 h-1/3  flex flex-col p-3 justify-center my-4">
              <h3 className="text-xl my-2">From</h3>
              <input
                className="h-12 cursor-pointer border-2 rounded-md p-1 border-blue-500 "
                type="text"
                name=""
                id=""
                placeholder="search"
              />
              <div
                id="hidden1"
                className="hide max-h-40 overflow-y-auto border p-4 shadow-2xl"
              ></div>
            </div>
            <div className="w-1/3 h-1/3  flex flex-col p-3 justify-center my-4">
              <h3 className="text-xl my-2">To</h3>
              <input
                className="h-12 cursor-pointer border-2 rounded-md p-1 border-blue-500 "
                type="text"
                name=""
                id=""
                placeholder="search"
              />
              <div
                id="hidden2"
                className="hide max-h-40 overflow-y-auto border p-4 shadow-2xl"
              ></div>
            </div>
          </div>
          <div className="flex p-3 justify-between h-auto w-full ">
            <div className="flex justify-center items-center">
              <h2>Result : {result}</h2>
            </div>
            <div>
              <button className="bg-blue-600 text-white h-12 w-32 rounded-md shadow-xl mx-3">
                Swap
              </button>
              <button
                onClick={Convert}
                className="bg-blue-600 h-12 w-32 text-white rounded-md shadow-xl"
              >
                Convert
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
