import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/Index";
import Notification from "./pages/Notification/Index";
import Login from "./pages/Login/Index";
import Error404 from "./pages/Errors/404";
import Error403 from "./pages/Errors/403";
import ShelterList from "./pages/ShelterList/Index";
import ShelterDetails from "./pages/ShelterDetails/Index";
import ShelterReviews from "./pages/ShelterReviews/Index";
import BlogList from "./pages/BlogList/Index";
import BlogDetails from "./pages/BlogDetails/Index";
import BlogCreate from "./pages/BlogCreate/Index";

import ListingPage from "./pages/Listings/Index";
import Listing from "./pages/Listings/Listing";
import Search from "./pages/Search/Index";
import SearchResults from "./pages/Search/Results";
import Register from "./pages/Register/Index";
import Update from "./pages/Update/Index";

import ApplicationDetails from "./pages/ApplicationViewUpdate/Index";
import CreateApplication from "./pages/ApplicationCreate/Index";
import ListApplications from "./pages/ApplicationList/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Notifications pages */}
          <Route path="notifications" element={<Notification />} />
          {/* Notifications pages */}

          {/* Accounts pages */}
          <Route path="accounts" element={<Login />} />
          <Route path="accounts/registration" element={<Register />} />
          <Route path="accounts/:id" element={<Update />} />
          <Route path="accounts/shelters" element={<ShelterList />} />
          <Route path="accounts/shelters/:id" element={<ShelterDetails />} />
          <Route path="accounts/shelters/:id/reviews" element={<ShelterReviews />} />
          <Route path="accounts/blogs" element={<BlogList />} />
          <Route path="accounts/blogs/:id" element={<BlogDetails />} />
          <Route path="accounts/blogs/create" element={<BlogCreate />} />
          {/* Accounts pages */}

          {/* Listings pages */}
          <Route path="search" element={<Search />} />
          <Route path="listings" element={<SearchResults />} />
          <Route path="listings/create" element={<ListingPage />} />
          <Route path="listings/:id/update" element={<ListingPage />} />
          <Route path="listings/:id" element={<Listing />} />
          {/* Listings pages */}

          {/* Application Pages */}
          <Route path="applications/new/:petId" element={<CreateApplication />} />
          <Route path="applications/details/:id" element={<ApplicationDetails />} />
          <Route path="applications/editor/:id" element={<ApplicationDetails />} />
          <Route path="applications/" element={<ListApplications />} />

          {/* ERROR404 MUST BE THE LAST ROUTE!!! PUT ALL OF YOUR ROUTES ABOVE THIS!!! */}
          {/* TODO MAKE 403 UNAUTHORIZED AND REROUTE ACCOUNTTYPES TO THERE */}
          <Route path="unauthorized" element={<Error403 />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);