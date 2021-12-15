import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";

import { render, cleanup } from "@testing-library/react";
// import "jest-dom/extend-expect";
import renderer from "react-test-renderer"

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="clic me"></Button>);
  expect(getByTestId("button")).toHaveTextContent("clic me");
});

// it("should fail", () => {
//   const { getByTestId } = render(<Button label="save"></Button>);
//   expect(getByTestId("button")).toHaveTextContent("peda<o de trola");
// });

// it("matches snapshot", () => {
//     const tree = renderer.create(<Button label="save"></Button>).toJSON
//     expect(tree).toMatchSnapshot();
// })
