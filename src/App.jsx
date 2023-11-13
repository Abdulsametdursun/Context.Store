import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
