# 🌡️ Temperature Converter

A beginner-friendly React application for converting temperatures between **Celsius, Fahrenheit, and Kelvin**.

This project is part of the **React Learning Projects** roadmap and focuses on React state, forms, controlled inputs, calculations, validation, and event handling.

---

## 📌 Project Information

| Item           | Details               |
| -------------- | --------------------- |
| Project        | Temperature Converter |
| Level          | Basic                 |
| Project Number | 02                    |
| Framework      | React                 |
| Build Tool     | Vite                  |
| Language       | JavaScript            |
| Styling        | CSS                   |
| Status         | ✅ Completed           |

---

## 🎯 Learning Objectives

This project was created to practice:

* React components
* JSX
* `useState`
* State management
* Controlled inputs
* Controlled `<select>` elements
* Form handling
* `onChange`
* `onSubmit`
* Event handling
* Conditional rendering
* Array `.map()`
* Reusable functions
* Input validation
* Temperature calculations
* Reset functionality
* Swap functionality

---

## ✨ Features

* Convert between Celsius, Fahrenheit, and Kelvin
* Select source temperature unit
* Select target temperature unit
* Convert temperature values
* Swap source and target units
* Reset the converter
* Validate empty input
* Validate invalid numbers
* Prevent Kelvin values below absolute zero
* Display results with two decimal places

---

## 🌡️ Supported Units

### Celsius

```text
°C
```

### Fahrenheit

```text
°F
```

### Kelvin

```text
K
```

---

## 🔄 Supported Conversions

The application supports all combinations:

```text
Celsius      → Celsius
Celsius      → Fahrenheit
Celsius      → Kelvin

Fahrenheit   → Celsius
Fahrenheit   → Fahrenheit
Fahrenheit   → Kelvin

Kelvin       → Celsius
Kelvin       → Fahrenheit
Kelvin       → Kelvin
```

---

## 🧮 Conversion Formulas

### Celsius → Fahrenheit

```text
°F = (°C × 9 / 5) + 32
```

### Fahrenheit → Celsius

```text
°C = (°F - 32) × 5 / 9
```

### Celsius → Kelvin

```text
K = °C + 273.15
```

### Kelvin → Celsius

```text
°C = K - 273.15
```

---

## 🏗️ Application Flow

The application converts through Celsius as the intermediate value.

```text
                 Input
                   │
                   ▼
             Source Unit
                   │
                   ▼
              To Celsius
                   │
                   ▼
               Celsius
                   │
                   ▼
            Target Unit
                   │
                   ▼
                Result
```

For example:

```text
77°F
 ↓
25°C
 ↓
298.15K
```

Therefore:

```text
77°F → 298.15K
```

---

## 🧠 React Concepts

### State

The application uses React state for:

```jsx
const [temperature, setTemperature] = useState("");
const [result, setResult] = useState("");
const [error, setError] = useState("");

const [fromUnit, setFromUnit] = useState("C");
const [toUnit, setToUnit] = useState("F");
```

---

### Controlled Input

```jsx
<input
  value={temperature}
  onChange={(event) =>
    setTemperature(event.target.value)
  }
/>
```

The input value is controlled by React state.

```text
User Input
    ↓
onChange
    ↓
setTemperature()
    ↓
React State
    ↓
Input Value
```

---

### Controlled Select

```jsx
<select
  value={fromUnit}
  onChange={(event) =>
    setFromUnit(event.target.value)
  }
>
```

The selected unit is also controlled by React state.

---

### Form Handling

```jsx
<form onSubmit={handleSubmit}>
```

The form submission is handled inside React.

```jsx
event.preventDefault();
```

prevents the browser from refreshing the page.

---

## 🔧 Main Functions

### `toCelsius()`

Converts the input value to Celsius.

```text
C → C
F → C
K → C
```

### `fromCelsius()`

Converts Celsius to the selected target unit.

```text
C → C
C → F
C → K
```

### `getUnitName()`

Returns the full unit name.

```text
C → Celsius
F → Fahrenheit
K → Kelvin
```

### `getUnitSymbol()`

Returns the unit symbol.

```text
C → °C
F → °F
K → K
```

### `handleSubmit()`

Handles:

```text
Validation
   ↓
Number conversion
   ↓
Temperature conversion
   ↓
Result update
```

### `handleSwap()`

Swaps:

```text
From Unit ↔ To Unit
```

### `handleReset()`

Resets the application to its initial state.

---

## 🛡️ Validation

### Empty input

```text
Please enter a temperature.
```

### Invalid number

```text
Please enter a valid number.
```

### Invalid Kelvin

Kelvin cannot be below absolute zero:

```text
0 K
```

For example:

```text
-1 K
```

produces:

```text
Kelvin cannot be below 0 K.
```

---

## 📁 Project Structure

```text
02-temperature-converter/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation

From the project directory:

```bash
npm install
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

Vite will provide a local development URL.

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## 👀 Preview Production Build

```bash
npm run preview
```

---

## 🧪 Example Conversions

|  Input | From       | To         |   Result |
| -----: | ---------- | ---------- | -------: |
|     25 | Celsius    | Fahrenheit | 77.00 °F |
|     25 | Celsius    | Kelvin     | 298.15 K |
|     77 | Fahrenheit | Celsius    | 25.00 °C |
|     77 | Fahrenheit | Kelvin     | 298.15 K |
| 298.15 | Kelvin     | Celsius    | 25.00 °C |
| 298.15 | Kelvin     | Fahrenheit | 77.00 °F |


---
## 📄 License

This project is created for learning and practice purposes.
