import "./style/App.css";
import "./style/reservation.css"
import { Routes, Route } from "react-router-dom";
import {
  TopNav,
  HomePage,
  Login,
  About,
  OrderOnline,
  Contact,
} from "./components/main";
import { Reservations } from "./components/reservation";
function App() {
  return (
    <body id="pageLayout">
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </body>
  );
}

export default App;
