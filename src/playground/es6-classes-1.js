// Comment convention to use a capital letter for a class so we 
// know it's a class

// We use backticks `` to return template strings in this example
// so we can inject values 

// this is a reference to the current instance of a component
class Person 
{
    // You can create default values like name = 'Anonymous'
    constructor(name = 'Anonymous', age = 0)
    {
        this.name = name;
        this.age = age;
        console.log('test');
    }

    getGreeting()
    {
        // Using backticks to inject class properties
        return `Hi my name is ${this.name}.`;
    }

    getDescription()
    {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person
{
    // You don't have to set up defaults for name and age as 
    // they're already set in the Person constructor
    constructor(name, age, major)
    {
        // calling the parent constructor i.e. Person constructor
        super(name, age);
        this.major = major; 
    }

    hasMajor()
    {
        // if this.major is empty it fails and gives undefined.
        // We can flip undefined or an emptiy string twice with
        // the not ! boolean valuse to return false
        return !!this.major;
    }

    getDescription()
    {
        let description = super.getDescription();

        if(this.hasMajor())
        {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person
{
    constructor(name, age, homeLocation)
    {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation()
    {
        return !!this.homeLocation;
    }

    getGreeting()
    {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation())
        {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        } 

        return greeting;
    }
}

const me = new Student('Luke Marvelly', 32, 'Computer Science');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());

const traveler1 = new Traveler('Owen Marvelly', 53, 'Aberystwyth');
console.log(traveler1.getGreeting());
const traveler2 = new Traveler('Anne Marvelly', 53);
console.log(traveler2.getGreeting());

// Bindings
const obj =
{
   name: 'Vikram',
   getName() 
   {
      return this.name;
   }
}


/**
 * To bind() functions to a classes children
 */
 class IndecisionApp extends React.Component
{
   constructor(props)
   {
      super(props);
      /**  
       * 1. Binding function here is important otherwise these
       * functions won't work in other classes 
       */
      this.handleAddOption = this.handleAddOption.bind(this);
      // App state
      this.state =
      {
         options: ['Option 1', 'Option 2', 'Option 3']
      }
   }

   /**
    * 2. Create function in the class
    * @param option new option passed down
    * 
    */
   handleAddOption(option)
   {
      this.setState((prevState) =>
      {
         /** 
          * To concat a new option into the options array. You can
          * just add the option string using concat()
          * NOTE you don't want to
          * manipulate the old array here hence we create a new
          * one 
          */
         return {
            options: prevState.options.concat([option])
         };
      });
   }

   /**
    * When render() gets called it causes child components to 
    * rerender as well.
    */
   render()   
   {
      return (
         <div>
            <AddOption
               /**
                * 3. adding handleAddOption() to the 
                * handleAddOption.props 
                */
               handleAddOption={this.handleAddOption}
            />
         </div>
      );
   }
}

class AddOption extends React.Component
{
   // need simple constructor for this keyword to work
   constructor(props)
   {
      super(props);
      // 7. bind function to this class
      this.handleAddOption = this.handleAddOption.bind(this);
   }

   // 6. Create handleAddOptions() function
   handleAddOption(e)
   {
      // Prevent full refresh
      e.preventDefault();

      const option = e.target.elements.option.value.trim();

      if(option)
      {
         this.props.handleAddOption(option);
      }
   }

   render()
   {
      return (
         <div>
            {
               /**  
                * 5. add handleAddOption to form to be executed
                *    when submitted 
                */
            }
            <form onSubmit={this.handleAddOption}>
               <input type='text' name='option' />
               <button type='submit'>Add Option</button>
            </form>
         </div>
      );
   }
}