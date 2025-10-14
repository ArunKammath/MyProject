import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  TopNav,
  HomePage,
  Login,
  About,
  Reservations,
  OrderOnline,
  Contact,
} from "./components/main";
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
