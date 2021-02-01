/**
 * @author Luke Marvelly
 * @version 1.0
 *
 * @class IndecisionApp @extends React.Component
 * @description the main class in this project
 *
 * @constructor Binding here is important otherwise these functions 
 *    won't work in other classes
 *    @example this.handlePick = this.handlePick.bind(this);
 *
 * @param props are like html key-values e.g. id='name'
 *    They CANNOT be changed by the component. Only the parent of
 *    that component can do so.
 *
 * @param state The App state. if you cant to make changes using  
 *    dynamic attribues you can use state. It constains the 
 *    @param options[] list
 * 
 * @function handleDeleteOptions() @returns an empty array to  
 *    options[] to replace the array of options using the setState 
 *    callback
 * @function handleDeleteOption() handles deleting a single option
 *    from the options array
 * @function handlePick() Randomly pick an option from the array of
 *    options which is initialized with no options
 * @function handleAddOption(option) handles when an option is being
 *    submitted. If nothing was submitted or if option submitted 
 *    already exists an error is generated
 *    @param prevState is an argument passed to setState callback
 *    function. We could call it anything
 *    @param option value is retreived from the form text box named
 *    option
 *    @param options[] option added into this array using concat()
 *    (much like a string is added onto another string)
 * @function render() We use this to render the app onto the HTML 
 *    page. When this gets called it causes child components to 
 *    rerender as well. We bind functions to the component we wish to
 *    use them with in here. They can then be accessed by the props 
 *    attribute.
 *    @example handlePick={this.handlePick}
 */ 
class IndecisionApp extends React.Component
{
   constructor(props)
   {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      
      this.state =
      {
         options: []
      };
   }

   componentDidMount()
   {
      // console.log('fetching data');
      try 
      {
         const json = localStorage.getItem('options');
         const options = JSON.parse(json);
         /**
          * Only change state if there are options. 
          */
         if(options)
         {
            // options is shorthand for options : options
            this.setState(() => ({ options }))
         }
      } 
      catch (error) 
      {
         
      }
   }
   componentDidUpdate(prevProps, prevState)
   {
      /**
       * Condition stop saving redundant data. This will be
       * handy in the future so we're not adding usless data to
       * the database
       */
      if(prevState.options.length !== this.state.options.length)
      {
         // console.log('saving data'); 
         const json = JSON.stringify(this.state.options);
         localStorage.setItem('options', json);
      }
   }
   componentWillUnmount()
   {
      console.log('componentWillUnmount');
   }

   handleDeleteOptions()
   {
      this.setState(() => ({ options: [] }));
   }
   handleDeleteOption(optionToRemove)
   {
      // console.log('handleDeleteOption', option);
      // returns true or false if we want to keep item in array
      this.setState((prevState) => 
      ({
         // filter used each option like for-each()
         options: prevState.options.filter((option) => optionToRemove !== option)
      }));
      
   }
   handlePick()
   {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
   }
   handleAddOption(option)
   {
      if(!option)
      {
         return "Enter valid value to add item";
      }
      else if(this.state.options.indexOf(option) > -1)
      {
         return "This option already exists";
      }
      /**
       * This effectively is equivalent to else
       * @returns a new array with the new object concatinated onto
       * it
       * NOTE you don't want to manipulate the old array here hence
       * creating a new one using concat()
       */ 
      this.setState((prevState) => 
      ({ 
         options: prevState.options.concat(option) 
      }));
   }

   render()   
   {
      const subtitle = 'Put your life in the hand of a computer';

      return (
         <div>
            <Header subtitle={subtitle}/>
            <Action 
               hasOptions={this.state.options.length > 0}
               handlePick={this.handlePick}
            />
            <Options 
               options={this.state.options}
               handleDeleteOptions={this.handleDeleteOptions}
               handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
               handleAddOption={this.handleAddOption}
            />
         </div>
      );
   }
}

/**
 * @React components require one method to be defined
 */

/**
 * @constant Header
 * @description returns the header and the subtitle of the app
 * @returns returns the header and the subtitle of the app
 * 
 * @param props an array of properties passed into the variable
 * @param props.title the title
 * @param props.subtitle the subtitle
 */
const Header = (props) =>
{
   return(
      <div>
         <h1>{props.title}</h1>
         {
            // return props.subtitle or false
            props.subtitle && <h2>{props.subtitle}</h2>
         }
      </div>
   );
};

/**
 * @property Setting the defaultProps for Header
 */
Header.defaultProps =
{
   title: 'Indecision'
};

/**
 * @constant Action 
 *
 * @description returns a button that chooses an option from the 
 *    list
 * @returns a button that chooses an option from the list.
 *    The button has two functions attached to it
 * @param props an array of properties passed into the variable
 * @param props.handlePick is a callback to the function handlePick()
 *    in IndecisionApp class
 * @param props.hasOptions is a callback to the function hasOptions()
 *    in IndecisionApp class
 */
const Action = (props) =>
{
   return (  
      <div>
         {/** Do ... when clicked */}
         <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
         >
            What should I do
         </button>
      </div>
   );
};

/**
 * @constant Options
 * @description handles adding new options
 * @returns a button that removes all options
 *
 * @param props an array of properties passed into the variable
 * @param options is an array of options
 * @param props.handleDeleteOptions is a callback to the function 
 * handleDeleteOptions() in IndecisionApp class
 * @param props.handleDeleteOption is a callback to the function 
 * handleDeleteOption() in IndecisionApp class
 */
const Options = (props) =>
{
   return(
   <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
         // add a little message when there is not data
         props.options.length === 0 && <p>Please add an option to get started</p>
      }
      {
         props.options.map((option) => 
         (
            <Option 
               key={option}
               optionText={option} 
               handleDeleteOption={props.handleDeleteOption}
            />
         ))
      }
   </div>
   );
}

/**
 * @constant option
 * @description returns an option
 * @returns an option
 *
 * @param props an array of properties passed into the variable
 * @param props.handleDeleteOption is a callback to the function
 * handleDeleteOption() from the Options constant using the 
 * props.optionsText
 * @param props.optionText is a callback to the function optionText()
 * in the Options constant to retreive the option text
 */
const Option = (props) =>
{
   return(
      <div>
         {props.optionText}
         <button 
            onClick={(e) =>
            {
               props.handleDeleteOption(props.optionText)
            }}
         >
            remove
         </button>
      </div>
   );
}

class AddOption extends React.Component
{
   // need simple constructor for this keyword to work
   constructor(props)
   {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = 
      {
         // By default there is no error
         error: undefined 
      };
   }

   /**
    * @param e @todo
    *
    * @const option this is a new option to add to the options array
    * @const error a generated error message. It's set to undefine
    * by detault if there is no error
    */
   handleAddOption(e)
   {
      // Prevent full refresh
      e.preventDefault();

      // Use trim() to get rid of spaces
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);

      // Input gets wiped from input box when option is entered
      if(!error)
      {// finds the input element
         e.target.elements.option.value = '';
      }

      /**  
       * @function setState() Change the state of error if there 
       * is an error
       * @param error this is shorthand for the 'error: error' state
       * value (see react-state.js for more details)
       */ 
      this.setState(() => ({ error }));
   }

   render()
   {
      // Form static text
      return (
         <div>
         {
            /**
             * This is where the new option errors are displayed
             * The error will render in a <p> if there is one
             * otherwise nothing will be displayed
             */
            this.state.error && <p>{this.state.error}</p>
         }
            <form onSubmit={this.handleAddOption}>
               <input type='text' name='option' />
               <button type='submit'>Add Option</button>
            </form>
         </div>
      );
   }
}

// Render jsx app but using the IndecisionApp component as an 
// argument
ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'));