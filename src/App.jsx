import "./App.css";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <div className="container">
        <Users name="fpogs" lastname="pogoy" address="putohan" />
      </div>
      <div className="container">
        <Users name="" lastname="" address="" />
      </div>
      <div className="container">
        <Users name="chadie gil" lastname="augis" address="tubigon" />
      </div>
      <div className="container">
        <Users name="" lastname="" address="" />
      </div>
    </div>
  );
}

export default App;
