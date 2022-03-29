import UseStateHook from "./Components/Hooks/UseStateHook";
import TestComponent from "./Components/testComponent";
import CustomHook from "./Components/Hooks/customHooks/useFetchCustomHook";
import ContextTest from "./Components/Hooks/contextHook/parent"
import SampleUseReducer from "./Components/Hooks/useReducerHook/mainReducer";
import UseCallbackHook from "./Components/Hooks/useCallbackHook/UseCallbackHook";

function App() {
  return (
    // <UseStateNestedObject />
    // <TestComponent />
    // <CustomHook />
    // <ContextTest />
    // <SampleUseReducer />
    <UseCallbackHook />
  )
}

export default App;
