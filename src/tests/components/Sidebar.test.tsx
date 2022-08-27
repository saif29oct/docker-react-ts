import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../Components/Sidebar';

test('render item with href', ()=>{
    const items = [{name: 'Najnin Ahmed', href: "n-href"},{name: 'Saiful Islam', href: 's-href'},{name: "Safinaz Islam", href: "sn-href"}]
    render(<Sidebar items={items} />)
    const anchorElements = screen.getAllByRole('navigation');
    expect(anchorElements[0]).toHaveTextContent(items[0].name)
    expect(anchorElements[0]).toHaveAttribute('href', items[0].href)
})