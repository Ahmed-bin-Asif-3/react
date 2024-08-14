import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState({
    color: "#000",
    backgroundColor: "#fff",
  });
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTheme({
        color: "#fff",
        backgroundColor: "#000",
      });
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setTheme({
        color: "#000",
        backgroundColor: "#fff",
      });
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    {/* <BrowserRouter> */}
     <Header blogText="Testimonials" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
    {/* <Routes> */}
      {/* <Route exact path="/" element={ <section className="text-form pt-5">
            <div className="container">
              <TextForm heading="Write the text to convert" showAlert={showAlert} mode={mode}/>
            </div>
          </section>} /> */}
      {/* <Route exact path="/aboutus" element={<AboutUs mode={mode} theme={theme} />} /> */}
      <section className="text-form pt-5">
            <div className="container">
              <TextForm heading="Write the text to convert" showAlert={showAlert} mode={mode}/>
            </div>
          </section>
      <AboutUs mode={mode} theme={theme} />
    {/* </Routes> */}
  {/* </BrowserRouter> */}
  </>

  );
}

export default App;
