/**
 * OLD EXAMPLE
 */
let count = 0;
const addOne = () =>
{
    count++;
    renderCounterApp();
}

const minusOne = () =>
{
    count--;
    renderCounterApp();
}

const reset = () =>
{
    count = 0;
    renderCounterApp();
}


const renderCounterApp = () => 
{
    const templateTwo =
        (
            <div>
                <h1>Count: {count}</h1>
                {/* className needs to be used instead of class in JSX 
            This is because class is a reserved name for creating 
            classes in es6*/}
                {/* Most DOM elements are camelCased but some are not
            like placeholder */}
                <button onClick={addOne}>+1</button><br />
                <button onClick={minusOne}>-1</button><br />
                <button onClick={reset}>reset</button><br />
            </div>
        );

    // Render template
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();