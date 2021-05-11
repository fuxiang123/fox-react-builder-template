import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderRoutes from "./utils/renderRouteConfig";
import { Header, PageNotFound } from "./features/common";
import homeRoute from "./features/home/route";
import examplesRoute from "./features/examples/route";

const childRoutes = [homeRoute, examplesRoute];

const routeConfig = [
  {
    path: "/",
    childRoutes: [
      ...childRoutes,
      {
        path: "*",
        name: "Page not found",
        component: PageNotFound,
      },
    ].filter(
      (r) =>
        r.component ||
        (r.childRoutes && r.childRoutes.length > 0)
    ),
  },
];

function App() {
  const children = renderRoutes(routeConfig, "/");
  return (
    <div>
      <Header />
      <BrowserRouter>{children}</BrowserRouter>
    </div>
  );
}

export default App;
