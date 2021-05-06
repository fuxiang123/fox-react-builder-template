import React from "react";
import { render } from "@testing-library/react";
import { PageNotFound } from "../../../src/features/common";

it("common/PageNotFound snapshot", () => {
  const component = render(<PageNotFound />);
  // 快照
  expect(component.asFragment()).toMatchSnapshot();
});
