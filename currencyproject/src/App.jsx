import { useState } from "react";

import "./App.css";

function App() {
  const countries = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "India",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
    // Add more countries as needed
  ];

  let [searchTerm, setSearchTerm] = useState("");
  let [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filteredResults = countries.filter((country) =>
      country.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  function unhide() {
    let hidden1 = document.getElementById("hidden1");
    if (searchTerm.length > 0) {
      hidden1.classList.remove("hide");
    }
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
          className="w-2/3 h-3/5 p-3 rounded-lg overflow-hidden"
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
                id=""
                placeholder="amount"
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
                onChange={handleInputChange}
                value={searchTerm}
                onClick={unhide()}
              />
              <div
                id="hidden1"
                className="hide max-h-40 overflow-y-auto border p-4 shadow-2xl"
              >
                <ul>
                  {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-1/3 h-1/3  flex flex-col p-3 justify-center my-4">
              <h3 className="text-xl my-2">To</h3>
              <input
                className="h-12 cursor-pointer border-2 rounded-md p-1 border-blue-500 "
                type="text"
                name=""
                id=""
                placeholder="search"
                onChange={handleInputChange}
                onClick={unhide("hidden2")}
              />
              <div
                id="hidden2"
                className="hide max-h-40 overflow-y-auto border p-4 shadow-2xl"
              >
                <ul>
                  {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
