Pure Component: (Only works with premitive data type)
    Pure component in React are the components which do not re-renders when the value of state and props has been updated with the same values.

React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

What is Shallow Comparison?
Shallow comparison happens between the primitive Data types(String, boolean, numbers) and non-premitive Data types.