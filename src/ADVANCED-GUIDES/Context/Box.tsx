import { ThemeContextProvider } from "./ThemeContext";
import BoxChild1 from "./BoxChild1";


export const Box = ()=>{
    return(
        <>
            <h1>Headline</h1>
            <ThemeContextProvider>
                <BoxChild1 />
            </ThemeContextProvider>
        </>
    );
}