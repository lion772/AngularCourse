export class Ingredient {
  constructor(public name: string, public amount: number) {}
}

/* For defining a model you can use either a class or an interface.

A class gives you a complete blueprint for instances of the same type, which can be created with the new keyword, possibly passing arguments to the constructor (like in our project with the recipes).

An interface on the other hand only describes the structure of an object. It doesn't allow you to create a new object.

An interface is the right choice if you just want to create your own type which enforces its structure (it's like a contract). If you don't just want to have a type but also a way of initializing pre-defined objects, a class would be the right choice.

*/
