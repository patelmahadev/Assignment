import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import IndexRoutes from "./routes/indexRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
