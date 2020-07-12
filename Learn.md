# Virtual Dom
React virtual DOM to enhance its performance. React can get the different of each virtual dom and then render into real DOM.
# ReactDOM & JSX
  - $ ReactDOM.render(what do i want to render, where do i want to render it)
  - where do i want to render: document.getElementByID("root")
  - React can detect JSX
  - JSX cannot 2 HTML element which means we need to add <div> to render
# Functional Component
  - always return the component you want to render
  - component need to return a single element.
  - the functional component can be rendered into _ReactDOM.redner_
# Move Component into seperate files
  - every file we need JSX, we need to import React
  - component need to be exported in the files.
# Parent/Child components
  - element is the the break down to regular HTML code.
  - component can be a parent component which contains multiple child components.
  - the leaf component need to end up as regular HTML element.
# ToDo List (Practice Example)
  - Styling: use "className" in js file.
# Some Caveats