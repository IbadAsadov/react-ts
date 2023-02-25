import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("renders a greeting", () => {
        render(<App />);
        const greetingElement = screen.getByText(/Hello, World!/i);
        expect(greetingElement).toBeInTheDocument();
    });
});
