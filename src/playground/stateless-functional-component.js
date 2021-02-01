/**
 * Stateless Functional Component
 * they are not like classes. They do not use the 'this' keyword
 * These are good to use as much as you can in a project because
 * they are much faster than classes because they don't deal with
 * things like state and life cycle
 * @REMEMBER to add props as an argument
 */
const User = (props) => 
{
   return (
      <div>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
      </div>
   );
};

ReactDOM.render(<User name='Luke' age={32} />, document.getElementById('app'));