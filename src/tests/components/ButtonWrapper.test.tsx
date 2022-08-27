import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonWrapper } from '../../Components/ButtonWrapper'

test('Handle on Click', ()=>{
    const onClick = jest.fn() // Track how often is called & what is called with
    render(<ButtonWrapper onClick={onClick} title='Add Item' />)
    const buttonElement = screen.getByText('Add Item');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1)
})
