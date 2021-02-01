// This get fired from within the compondent when it first gets 
// mounted to the DOM
componentDidMount()
{
   console.log('fetching data');
}

/**
 * This get fired from within the compondent when it gets updated
 * Arguments can be called whatever you want. They can be used to
 * check if props or state has been updated. Like you could check
 * an array to see if anything has been added to it by comparing 
 * the length before and after
 */
componentDidUpdate(prevProps, prevState)
{
   console.log('saving data');
}

/**
 * Fires when stuff gets unmounted like out component options
 * in the project
 */
componentWillUnmount()
{
   console.log('componentWillUnmount')
}
// You can see this if you run this line in the browser, replacing
// our projects apps class with a paragraph
ReactDOM.render(React.createElement('p'), document.getElementById('app'));