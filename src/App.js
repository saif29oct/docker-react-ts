import UseStateHook from "./Components/Hooks/UseStateHook";
import TestComponent from "./Components/testComponent";
import CustomHook from "./Components/Hooks/customHooks/CustomHook";
import ContextTest from "./Components/Hooks/contextHook/parent"
import SampleUseReducer from "./Components/Hooks/useReducerHook/mainReducer";
import UseCallbackHook from "./Components/Hooks/useCallbackHook/UseCallbackHook";
import HOC from "./Components/Advanced/HOC/HOC";
import Q21 from './Components/TuringTests/Q21'
import StateExperiment from "./Components/classComponents/stateExperiment";
import ReactMemo from "./Components/apiReferenc/ReactMemo";

function App() {
  return (
    // <UseStateHook />
    // <TestComponent />
    // <CustomHook />
    // <ContextTest />
    // <SampleUseReducer />
    // <UseCallbackHook />
    // <HOC />
    // <Q21 />
    // <StateExperiment increment={3} />
    <ReactMemo />
  )
}

export default App;
