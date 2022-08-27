import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from '../../HOOKS/Counter';


test('Handle on Click', ()=>{
    render(<Counter />)
    const divElement = screen.getByRole('countinfo')
    expect(divElement).toHaveTextContent("Count is 0")

    const buttonElement = screen.getByText('Add Count');
    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent("Count is 1");

    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent("Count is 2");
})
