const getName = obj.getName;
// Doesn't work because getName loses it's binding 
console.log(getName());

// What's happening? It becomes like a normal function and because
// of the context it loses it's binding.
const func = function () {
   console.log(this);
}

func();

// The bind() method 
const getName2 = obj.getName.bind(obj);
// You can even set up and inline object in bind()
const getName3 = obj.getName.bind({ name: 'Luke' });

/**
 * Component class taken from app.js as example
 * Contains a list of all the current available options
 */
class Options extends React.Component
{
   // Override the constructor for React.Component so we don't have
   // to keep using the bind() to fix binding outside of render.
   // Props refers to the same props that we've already been using in
   // this project
   constructor(props)
   {
      // Call super in insure props values still gets set otherwise
      // we won't be able to access them
      super(props);

      // bind handlers to the current component instant.
      // This not only saves us writing lots of the same reference 
      // code but makes it more efficient as well. The binding only
      // runs once when it gets initialized and not every time the 
      // component gets rendered
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
   }

   handleRemoveAll()
   {
      console.log(this.props.options);
      // alert('Remove All Objects');
   }

   render()
   {
      // Render static text
      return(
      <div>
         <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
         {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
         }
      </div>
      );
   }
}