import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Admin = lazy(() => import("./Admin"));

const LazyLoadingExample = () => {
  return (
    <BrowserRouter>
      <h1>Home Page</h1>
      <Link to={"/admin"}>Admin</Link>
      <Routes>
        <Route
          path="/admin"
          element={
            <Suspense>
              <Admin />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default LazyLoadingExample;
