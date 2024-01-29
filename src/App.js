import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Mainpage from "./pages/Mainpage";
import RandomPage from "./pages/RandomPage";

function App() {
  return (
    <>
      <RouterComponent />
    </>
  );
}

export default App;

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/random/:time" element={<RandomPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
