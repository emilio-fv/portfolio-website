import { render, screen } from "@testing-library/react";

import App from './App';

describe('Testing example', () => {
    test("Renders count of 0", async () => {
        render(<App />)

        const counterText = screen.getByText('Count is 0');

        expect(counterText).toBeInTheDocument();
    })
})