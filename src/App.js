import React ,{ useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; //'#191919'
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about = "About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode= {mode} />} />
          </Routes>
          <Routes>
            <Route
              path = "/" element =
              {
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to Analayse"
                  mode={mode}
                />
              }
           />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
