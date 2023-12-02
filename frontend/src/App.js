import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/Index";
import Notification from "./pages/Notification/Index";
import Login from "./pages/Login/Index";
import Error404 from "./pages/404/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);