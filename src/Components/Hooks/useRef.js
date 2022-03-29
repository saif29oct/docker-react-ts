/**
 * The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 
 * 
 * One of the most common use case of useRef hook is to access DOM elements (NOT custom React component). For example if you want to access an input element after it has been mounted to the DOM, instead of using document.
 * 
 * The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
 */