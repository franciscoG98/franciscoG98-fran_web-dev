import React, { createElement, createRef } from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const div = document.createElement("div");

  // const linkElement = getElementById('App')
  // expect(linkElement).toBeInTheDocument();
  // render(<App />, div);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode;
});
