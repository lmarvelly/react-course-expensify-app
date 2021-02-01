/**
 * CREATE functions: render, constructor, handleToggleVisibilityVisibility
 * variable visibility -> start at FALSE
 *  
 */

class VisibilityToggle extends React.Component
{
   // Override constructor
   constructor(props)
   {
      // set props 
      super(props);

      // bind toggle handler function
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

      this.state = 
      {
         visibility: false
      };
   }

   handleToggleVisibility()
   {
      this.setState((prevState) =>
      {
         // console.log(!prevState.visibility);
         return {
            visibility: !prevState.visibility
         }
      })
   }

   render()
   {
      this.title = "Visibility Toggle";
      this.details = "Psst do not tell anyone about this";

      return(
         <div>
            <h1>{this.title}</h1>
            <button onClick={this.handleToggleVisibility}>Show Details</button>
            {
               // if visibility show text
               (this.state.visibility) &&
               (
                  <p>{this.details}</p>
               )
            }
         </div>
      )
   }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
