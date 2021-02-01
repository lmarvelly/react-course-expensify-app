// return shorthand
this.setState(() => 
{
   return { error }
});

// becomes this using () instead of {}
this.setState(() => 
(
   { error }
));

// then become
this.setState(() => ({ error })); 
// You need to keep the error object in the {} as it's a javascript
// object