console.log('App.js is running!');

const removeAll = (e) =>
{
    app.options = [];
    renderApp();
}

// e contains various information about the event
const onFormSubmit = (e) => 
{
    // Stop full page refresh
    e.preventDefault();

    /* e.target points to the element that the event started on.
    e.target.elements to access the elements in that element.
    elements is a list of the elements. option is the name of the 
    form element and value is the input value. */ 
    const option = e.target.elements.option.value;

    // if there is anything in option input box
    if(option)
    {
        // push onto theapp object's options array
        app.options.push(option);
        e.target.elements.option.value = '';
        // call render function
        renderApp();
    }
}


// App Object
const app = 
{
    title: "Indecision App",
    subtitle: "No more need to make your own decisions!!!",
    options: []
};

const onMakeDecision = () => 
{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

// Finds the div identified by 'app' in index.html
const appRoot = document.getElementById('app');

const renderApp = () =>
{
    // JSX - JavaScript XML
    const template =
    <div>
        <h1 id="title">{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{(app.options.length > 0) ? "Here are your options" : "There are no options"}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>

        <ol>
        {
            // Shorthand arrow function
            // map creates a new array calling each element once
            // In this example we call an annonymous function each
            // time we call an element
            app.options.map((option) => <li key={option}>{option}</li>)
        }
        </ol>
        {/*Reference onFormSubmit instead of calling it. Otherwise 
        you'll get the returned value which is undefined which will
        make the form not print out*/}
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>;
    // Render template
    ReactDOM.render(template, appRoot);
}

// call render function
renderApp();