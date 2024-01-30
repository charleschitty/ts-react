import React from "react";
import { render, fireEvent, queryByLabelText, queryByText } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import { mock } from "node:test";

describe("NewBoxForm tests", function () {
  it("renders without crashing", function () {
    render(<NewBoxForm />);
  });

  it("renders with correct input fields", function () {
    const { queryByLabelText, queryByText } = render(<NewBoxForm createBox={jest.fn()}/>);
    expect(queryByLabelText("Height")).toBeInTheDocument();
    expect(queryByLabelText("Width")).toBeInTheDocument();
    expect(queryByLabelText("Background Color")).toBeInTheDocument();
    expect(queryByText("Add a new box!")).toBeInTheDocument();
  });

  it("calls the createBox fn when submitted", function () {
    const mockCreate = jest.fn();
    const { container } = render(<NewBoxForm createBox={mockCreate} />);
    const submitBtn = container.querySelector(".NewBoxForm-addBtn");
    fireEvent.click(submitBtn);
    expect(mockCreate).toHaveBeenCalled(); // before, expect to be called 0 times -> now called 1x
  })
  //test that fields reset to default after submitting, fill out inputs before
  //snapshot 
});



