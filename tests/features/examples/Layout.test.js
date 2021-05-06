import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../../src/features/examples/Layout";

it("examples/Layout snapshot", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  // 快照
  expect(asFragment()).toMatchSnapshot();
});
