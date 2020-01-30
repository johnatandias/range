import React from "react";
import { Range } from "./components";
import "./App.scss";

const App: React.FC = () => (
  <div className="app">
    <Range min={1962} max={2018} value={1990} label="Year" />
  </div>
)

export default App;
