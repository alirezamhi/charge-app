import "./App.css";
import PhoneProvider from "./context/PhoneProvider";
import PhoneNumber from "./components/index"


function App() {
  return (
    <div className="app bg-light
    ">
      <PhoneProvider>
        <PhoneNumber></PhoneNumber>
      </PhoneProvider>
    </div>
  );
}

export default App;
