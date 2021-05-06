import React from "react";
import { Route, Switch } from "react-router-dom";
import renderRouteConfig from "./renderRouteConfig";

export default function renderReactRoute(
  routes,
  contextPath
) {
  const handleChildRoutes = (
    path,
    Layout,
    children,
    otherProps
  ) => {
    return (
      <Route
        key={path}
        path={path}
        render={(props) => (
          <Layout {...props}>{children}</Layout>
        )}
        {...otherProps}
      />
    );
  };
  const handleRoutes = (path, component, otherProps) => {
    return (
      <Route
        key={path}
        path={path}
        component={component}
        {...otherProps}
      />
    );
  };
  const render = (children) => {
    return <Switch>{children}</Switch>;
  };

  return renderRouteConfig(
    routes,
    contextPath,
    handleChildRoutes,
    handleRoutes,
    render
  );
}
