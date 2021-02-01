/**
 * OLD EXAMPLE
 */ 

const appRoot = document.getElementById('app');

// app object
const app = 
{
    title: "Visibility Toggle",
    details: "Super secret message"
}

let visible = false;

const toggleVisibility = () =>
{
    // sets visible to be opposite of what it currently is
    visible = !visible;
    renderApp();
}

const renderApp = () =>
{
    const template = 
    (<div>
        <h1 id='title'>{app.title}</h1>
        {/* button changes visible from true to false and vis versa */}
        <button onClick={toggleVisibility}>
            {(visible) ? 'Hide Details' : 'Show Details'}
        </button>
        {
            /*Show app.details if visible is true*/
            (visible) && 
            (<div>
                <p>{app.details}</p>
            </div>)
        }
    </div>);

    // Render template
    ReactDOM.render(template, appRoot);
}

// Call render function
renderApp();