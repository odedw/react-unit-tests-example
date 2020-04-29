## DateClicker unit tests demo

Check out the branches to see each iteration

`iteration-1-dont-test-implemenetation-details`

`iteration-2-dont-use-variable-values-in-tests-1`

`iteration-3-dont-use-variable-values-in-tests-2`

## First Iteration

_Good tests verify that the external behavior is correct but don’t know any implementation details._

The current test tests internal details - it searches an element by it's class name. A class name could change for reasons that will not affect the logic (e.g a styling change). One way to overcome this is by using the helper method `getByText` to find an element with the text "Click Me". This is something that is an external behavior - having an element with that text.

Finding the date element is a bit trickier since we don't have a static string we could search for (yet, that will come in later iterations). For this we can use the helper method `getByTestId` and add a `data-testid` attribute to that element. This is not cheating - _it is ok for your unit to contain code with the sole purpose of making it easier to test_. That attribute has only one reason to change - if the test changes.
