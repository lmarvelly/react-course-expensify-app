// COMPONENT STATE (See picture for more explaination)
// 1. Setup default state object
// 2. Component rendered with default state values *
// 3. Change state based on event
// 4. Component re-rendered using new state values *
// 5. Start again at step 3

// The Old way to update state syntax. This may become obsolete
handleReset()
{
   /**
    * this works but the calls are asynchronous (not occuring 
    * at the same time). So when we call the second setState
    * below it grabs the value before it gets set to zero and
    * adds one to it.
    * Essentually it's accessing outdated data and gets the 
    * state.count, say it was 15. It tries to set it to zero
    * but before it can finish it gets set to the original state
    * + 1
    */
   this.setState
   ({
      count: 0
   });

   this.setState
   ({
      count: this.state.count + 1
   });
}

// The new way
handleReset()
{
   /**
    * This is the new way to set state that works better and 
    * avoids accessing outdated data
    */
   this.setState(() =>
   {
      return {
         count: 0
      }
   });

   /**
    * prevState is a name that you have given to the argument passed 
    * to setState callback function. We could call it anything
    */
   this.setState((prevState) => 
   {
      return {
         count: prevState.count + 1
      };
   });
}



   
/**
 * When render() gets called it causes child components to 
 * rerender as well.
 *
 * Note that a component like Options cannot change it's own 
 * props. It's valid for a parent to sent new prop values and 
 * those will trigger a rerender
 * 
 * e.g. when the handleDeleteOptions() function in the
 * IndecisionApp calls changes the value of the options array
 * the Options component gets rerendered.
 */
handleDeleteOptions()
{
   this.setState(() =>
   {
      return {
         options: []
      };
   });
}

render()   
{
   const title = 'Indecision App';
   const subtitle = 'Put your life in the hand of a computer';

   return (
      <div>
         <Header title={title} subtitle={subtitle}/>
         <Action hasOptions={this.state.options.length > 0} />
         <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
         />
         <AddOption />
      </div>
   );
}


/**
 * Shorthand @param this.state
 *
 * there is shorthand for the 'error: error' state value if we have a
 * property that comes from a variable with the exact same name
 * error
 */
class AddOption extends React.Component
{
   // need simple constructor for this keyword to work
   constructor(props)
   {
      super(props);
      this.state = 
      {
         // By default there is no error
         error: undefined 
      };
   }

   handleAddOption(e)
   {
      const error = this.props.handleAddOption(option);

      this.setState(() => 
      {
         /**
          * @param error
          * this is shorthand for the error: error
          */
         return { error };
      });
   }