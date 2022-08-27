
export type TItem = {
    name: string,
    href: string
}

export interface IItems{
    items: TItem[]
}


export const Sidebar = ({items}: IItems)=>(
    <div>
        {items.map(item=>(
            <div key={item.href}>
                <a role='navigation' href={item.href}>{item.name}</a>
            </div>
        ))}
    </div>
)