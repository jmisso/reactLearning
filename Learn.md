# `Virtual Dom`
React virtual DOM to enhance its performance. React can get the different of each virtual dom and then render into real DOM.
# `ReactDOM & JSX`
  - $ ReactDOM.render(what do i want to render, where do i want to render it)
  - where do i want to render: document.getElementByID("root")
  - React can detect JSX
  - JSX cannot 2 HTML element which means we need to add <div> to render
# `Functional Component`
  - always return the component you want to render
  - component need to return a single element.
  - the functional component can be rendered into _ReactDOM.redner_
# `Move Component into seperate files`
  - every file we need JSX, we need to import React
  - component need to be exported in the files.
# `Parent/Child components`
  - element is the the break down to regular HTML code.
  - component can be a parent component which contains multiple child components.
  - the leaf component need to end up as regular HTML element.
# `ToDo List (Practice Example)`
  - Styling: use "className" in js file.
# `Some Caveats`
  - when we want to use javascript instead of JSX, we need {} to wrap the variable.
  - {firstName +" " +lastName}
# `Inline Styles with the Style Property`
  - in JS, style need to be an object instead of string in HTML.
  - style={{color: "#FF8C00", , backgroundColor: "#FF2D00"}}}; {{}} is needed because in JSX into JS we need to wrap in one {}; backgroundColor is equal to background-color, because in JS there's no -. so JS cannot recognize backgroubnd-color
  - fontSize: "200px"; the "" is needed to make into string.
# `Props`
  - just like functional input variables.
  - we can pass an object instead of each property in element
  - inline styling canbe used when we choose to hide un-input variables.
# Mapping Components
  - higher order array method
    - map: return an object
# Class Based Components
  - class need to extend _React.Component_; render() method is a must
  - everytime we need to use props, we ned to use as {this.props}
# State
  - state is the data that component maintains
  - if we need to use _State_, it need to be class based components.
  - if we have a constructor in class, always add _super()_
# Handling Events in React
  - all the event handlers are going to Javascript version
# Changing State
  - <button onClick={this.handleClick}>Change!</button>; add a function as "handleClick"; this keyword is required when you defined the function in the class.
  - everytime you want to use _setState_ method, you need to bind the method in the constructor; this.handleClick = this.handleClick.bind(this)
  - if you need to know the previous state, always pass "prevState", and return new state. do not use prevState.count++ because it will changed the prevState; prevState is an object that's why you can access it.
  this.setState((preState) => {
      return {
        count: preState.count + 1
      }
    })
  - to change state, there're 2 ways
    - define a function in the component in render method.
    - define a function outside of render() method and use this.setState() method and bind the method in the constructor.
# Lifecycle Method
  - everytime React detects any changes will effect the render() method, it will re-render it.
  - componentDidMount(), it means the component just be mounted to the screen. It will only run once when the component created.
  - componentWillReceiveProps(), it will run when the component mount and also when the component receive props.
  - shouldComponentUpdate(): decide wether you need to change your cloth or not.
  - componentWillUnmount(): when to do some clean up or tear down.
# Conditional Render
  - condition statement ? if true : if false
  - condition statement && if true
# Fetching Data from an API
  - use "fetch()" to fetch data
  - good to do in componentDidMount()
# Forms
  - 