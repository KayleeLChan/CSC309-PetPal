import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/Index";
import Notification from "./pages/Notification/Index";
import Login from "./pages/Login/Index";
import Error404 from "./pages/404/Index";
import RegisterSeeker from "./pages/RegisterSeeker/Index";
import RegisterShelter from "./pages/RegisterShelter/Index";
import ShelterList from "./pages/ShelterList/Index";
import ShelterDetails from "./pages/ShelterDetails/Index";
import UpdateSeeker from "./pages/Update/Index";

import ListingPage from "./pages/Listings/Index";
import Listing from "./pages/Listings/Listing";
import UpdateShelter from "./pages/UpdateShelter/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="accounts" element={<Login />} />
          <Route path="accounts/registration/seeker" element={<RegisterSeeker />} />
          <Route path="accounts/registration/shelter" element={<RegisterShelter />} />
          <Route path="accounts/shelters/all" element={<ShelterList />} />
          
          <Route path="accounts/shelter/:id/details" element={<ShelterDetails />} />
          <Route path="accounts/seeker/:id/profile" element={<UpdateSeeker />} />
          <Route path="accounts/shelter/:id/profile" element={<UpdateShelter />} />
          <Route path="listings/update/:id" element={<ListingPage />} />
          <Route path="listings/view/:id" element={<Listing />} />
          <Route path="listings/create" element={<ListingPage />}>
          </Route>


          {/* ERROR404 MUST BE THE LAST ROUTE!!! PUT ALL OF YOUR ROUTES ABOVE THIS!!! */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);