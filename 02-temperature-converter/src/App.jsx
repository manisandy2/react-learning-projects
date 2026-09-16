import { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const [fromUnit, setFromUnit] = useState("C");
  const [toUnit, setToUnit] = useState("F");

  const units = [
    { value: "C", label: "Celsius" },
    { value: "F", label: "Fahrenheit" },
    { value: "K", label: "Kelvin" },
  ];

  const toCelsius = (value, unit) => {
    switch (unit) {
      case "C":
        return value;

      case "F":
        return ((value - 32) * 5) / 9;

      case "K":
        return value - 273.15;

      default:
        return value;
    }
  };

  const fromCelsius = (celsius, unit) => {
    switch (unit) {
      case "C":
        return celsius;

      case "F":
        return (celsius * 9) / 5 + 32;

      case "K":
        return celsius + 273.15;

      default:
        return celsius;
    }
  };

  const getUnitName = (unit) => {
    switch (unit) {
      case "C":
        return "Celsius";

      case "F":
        return "Fahrenheit";

      case "K":
        return "Kelvin";

      default:
        return "";
    }
  };

  const getUnitSymbol = (unit) => {
    switch (unit) {
      case "C":
        return "°C";

      case "F":
        return "°F";

      case "K":
        return "K";

      default:
        return "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (temperature === "") {
      setError("Please enter a temperature.");
      setResult("");
      return;
    }

    const value = Number(temperature);

    if (Number.isNaN(value)) {
      setError("Please enter a valid number.");
      setResult("");
      return;
    }

    if (fromUnit === "K" && value < 0) {
      setError("Kelvin cannot be below 0 K.");
      setResult("");
      return;
    }

    const celsius = toCelsius(
      value,
      fromUnit
    );

    const convertedValue = fromCelsius(
      celsius,
      toUnit
    );

    setError("");
    setResult(convertedValue);
  };

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult("");
    setError("");
  };

  const handleReset = () => {
    setTemperature("");
    setResult("");
    setError("");
    setFromUnit("C");
    setToUnit("F");
  };

  return (
    <div className="container">

      <h1>Temperature Converter</h1>

      <p className="conversion-info">
        {getUnitName(fromUnit)} → {getUnitName(toUnit)}
      </p>

      <form onSubmit={handleSubmit}>

        <label htmlFor="fromUnit">
          Convert From
        </label>

        <select
          id="fromUnit"
          value={fromUnit}
          onChange={(event) => {
            setFromUnit(event.target.value);
            setResult("");
            setError("");
          }}
        >
          {units.map((unit) => (
            <option
              key={unit.value}
              value={unit.value}
            >
              {unit.label}
            </option>
          ))}
        </select>

        <label htmlFor="toUnit">
          Convert To
        </label>

        <select
          id="toUnit"
          value={toUnit}
          onChange={(event) => {
            setToUnit(event.target.value);
            setResult("");
            setError("");
          }}
        >
          {units.map((unit) => (
            <option
              key={unit.value}
              value={unit.value}
            >
              {unit.label}
            </option>
          ))}
        </select>

        <label htmlFor="temperature">
          Temperature
        </label>

        <input
          id="temperature"
          type="number"
          step="any"
          value={temperature}
          onChange={(event) => {
            setTemperature(event.target.value);
            setResult("");
            setError("");
          }}
          placeholder="Enter temperature"
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <div className="buttons">

          <button type="submit">
            Convert
          </button>

          <button
            type="button"
            onClick={handleSwap}
          >
            ⇅ Swap
          </button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

      </form>

      {result !== "" && (
        <h2>
          Result: {result.toFixed(2)}{" "}
          {getUnitSymbol(toUnit)}
        </h2>
      )}

    </div>
  );
}

export default App;