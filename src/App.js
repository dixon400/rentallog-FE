import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Item from "./pages/Item";
import RentalLogs from "./pages/RentalLogs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid mt-2"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/item" element={<Item />} />
          <Route path="/rentalLog" element={<RentalLogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
