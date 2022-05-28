import UseStateHook from "./Components/Hooks/UseStateHook";
import TestComponent from "./Components/testComponent";
import CustomHook from "./Components/Hooks/customHooks/CustomHook";
import ContextTest from "./Components/Hooks/contextHook/parent"
import SampleUseReducer from "./Components/Hooks/useReducerHook/mainReducer";
import UseCallbackHook from "./Components/Hooks/useCallbackHook/UseCallbackHook";
import HOC from "./Components/Advanced/HOC/HOC";
import Q21 from './Components/TuringTests/Q21'
import StateExperiment from "./Components/classComponents/stateExperiment";
import Login from './Components/login'
import CustomHookToCalculateWindowSize from "./Components/TuringTests/customHookToCalculateWindowSize";
import LazyStateInitialization from "./Components/Advanced/performanceTechniques/lazyStateInitialization";
import GetMousePosition from "./Components/TuringTests/MousePosition/getMousePosition";

function App() {
  return (
    // <CustomHookToCalculateWindowSize />
    // <LazyStateInitialization />
    <GetMousePosition />
  )
}

export default App;
