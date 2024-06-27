import "./App.css";
import { JobPage } from "./components/JobPage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <JobPage />
      </div>
    </>
  );
}

export default App;
