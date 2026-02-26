// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DebugVibe title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DebugVibe/i);
    expect(titleElement).toBeInTheDocument();
});
