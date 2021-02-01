class Counter extends React.Component
{
   // Override constructer 
   constructor(props)
   {
      super(props);
      // bind handlers to the current component instant
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);

      // This is like setting up state values of a class 
      this.state =
      {
         count: 0
      };
   }

   componentDidMount()
   {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if(!isNaN(count))
      {
         // count is shorthand for count : count
         this.setState(() => ({ count }))
      } // default count: 0 is used otherwise 
   }
   componentDidUpdate(prevProps, prevState)
   {
      if(prevState.count != this.state.count)
      {
         // const json = JSON.stringify(this.state.count);
         localStorage.setItem('count', this.state.count);
      }
   }
   componentWillUnmount()
   {
      console.console.log('componentWillUnmount');
   }

   handleAddOne()
   {
      this.setState((prevState) =>
      {
         return {
            count: prevState.count + 1
         };
      });
   }

   handleMinusOne()
   {
      this.setState((prevState) =>
      {
         return {
            count: prevState.count - 1
         }
      });
   }

   handleReset()
   {
      // Don't include prevState because we are reseting the state
      this.setState(() =>
      {
         return {
            count: 0
         };
      });
   }

   render()
   {
      return (
         <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
         </div>
      )
   }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// You can change the value of count inside <Counter />
// ReactDOM.render(<Counter count={10} />, document.getElementById('app'));