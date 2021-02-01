/**
 * New syntax when babel-plugin-transform-class-properties@6.24.1
 * is installed
 */

/**
 * OLD SYNTAX
 *
 */
class OldSyntax
{
	constructor()
	{
		this.name = 'Mike';
		// We used to have to bind functons and properties like this
		this.getGreeting = this.getGreeting.bind(this);
	}

	getGreeting()
	{
		return `Hi. my name is ${this.name}.`;
	}
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//------------------------------------------------------

/**
 * NEW SYNTAX
 *
 * You'll notice that the printout in the is exactly the same
 */
class NewSyntax
{
	name = 'Jen';
	getGreeting = () =>
	{
		return `Hi. my name is ${this.name}.`;
	}
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());