import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";

export const InputContext = createContext();
function App() {
  const [inputVal, setInputVal] = useState("");
  const value = { inputVal, setInputVal };
  return (
    <>
      <InputContext.Provider value={value}>
        <div>
          <Header />
          <Result />
        </div>
      </InputContext.Provider>
    </>
  );
}

export default App;
