# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
 - A stateful component is a component that holds some state. While functional component which also known as stateless component doesn't hold any state nor it watches any reactive data for changes, simply accept data and display them.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
- componentWillMount function is called right before a component is removed from the DOM.
- componentWillUpdate function is called whenever new props are passed to the component.

3. Define stateful logic.
 - Any code that involve with the creation and manipulation of the state logic data.

4. What are the three step of creating a successful test? What is done in each phase?
- Arrange, setup: Perform the setup and initialization required for the test.

- Act, execute: Take action required for the test.

- Assert, extract: Verify the outcome of the test.
