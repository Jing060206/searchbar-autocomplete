import React from "react";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Searchbook from "./pages/Searchbook";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/searchbook" replace={true} />}
        />
        <Route path="/searchbook" element={<Searchbook />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
