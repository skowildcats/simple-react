import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Input from '../components/input'
import App from '../App'

describe('Input component', () => {
  test('renders input component', () => {
    render(<Input />)
  });

  test('user can type into input field', () => {
    const util = render(<Input />)
    const input = util.getByLabelText("user-input")

    fireEvent.change(input, {target: {value: "23"}})
    expect(input.value).toBe("23")
  })

  test('input field clears on submit', () => {
    const util = render(<App />)
    const input = util.getByLabelText("user-input")

    fireEvent.change(input, {target: {value: "23"}})
    expect(input.value).toBe("23")
    fireEvent.click(screen.getByText("Add item"))
    expect(input.value).toBe("")
  })
});