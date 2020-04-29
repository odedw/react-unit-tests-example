## DateClicker unit tests demo

Check out the branches to see each iteration

`iteration-1-dont-test-implemenetation-details`

`iteration-2-dont-use-variable-values-in-tests-1`

`iteration-3-dont-use-variable-values-in-tests-2`

## First Iteration

_Good tests verify that the external behavior is correct but don’t know any implementation details._

The current test tests internal details - it searches an element by it's class name. A class name could change for reasons that will not affect the logic (e.g a styling change). One way to overcome this is by using the helper method `getByText` to find an element with the text "Click Me". This is something that is an external behavior - having an element with that text.

Finding the date element is a bit trickier since we don't have a static string we could search for (yet, that will come in later iterations). For this we can use the helper method `getByTestId` and add a `data-testid` attribute to that element. This is not cheating - _it is ok for your unit to contain code with the sole purpose of making it easier to test_. That attribute has only one reason to change - if the test changes.

## Second Iteration

If your unit fetches information from an external source (think APIs, random values or classes like `Date`) and this happens during the test, this essentially means that _it's a different test every time it runs_. This makes it harder to debug, simulate and might make the test flaky. To show this, I introduced a short delay (150 ms) that already causes the test to be flaky and fail at times.

One way to overcome this is to extract the value supplier to an external unit and fake it in the test. In this iteration I'm using the `DateFactory` module to supply the date string, and I'm faking it in the test using `jest.mock`.

You'll also notice that this helps us revise the first iteration if we want to, since we know what text the date element will contain.
