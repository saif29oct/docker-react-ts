import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import { APIComponent } from '../../Components/APIComponent'

const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/todos/1",(req, res, ctx)=>{
        return res(ctx.json({title: "Hu Hu"}))
    })
)

beforeAll(()=>server.listen())
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())


test('Gets the data', async()=>{
    render(<APIComponent />)

    const toDoDiv = await waitFor(()=>screen.getByRole('contentinfo'))

    expect(toDoDiv).toHaveTextContent("To Do: Hu Hu")

})
