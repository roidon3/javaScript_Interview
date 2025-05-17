// 1. What is TypeScript?
// Answer:
// TypeScript is a superset of JavaScript that adds static typing, allowing you to define types for variables, 
// function parameters, and return values. It helps developers catch errors at compile-time rather than runtime, 
// providing a more robust development experience. It also includes features like interfaces, enums, and advanced 
// type manipulation that help build large-scale applications.

// 2. What are the advantages of using TypeScript?
// Answer:

// Static Typing: Detects errors at compile time.
// Intellisense/Autocompletion: Offers better tooling and autocompletion due to type information.
// Better Refactoring: Ensures safe code refactoring by understanding type dependencies.
// Readability and Maintainability: Improves code readability with explicit types.
// Large-Scale Development: Ideal for larger codebases where structure and consistency are essential.

// 3. What is the difference between interface and type in TypeScript?
// Answer:

// Interface: Used to define the shape of an object, and it can be extended using extends. Interfaces are generally preferred 
// for object definitions and when using classes.

// interface User {
//     name: string;
//     age: number;
//   }

  
//   Type: More flexible, allowing you to create unions, intersections, and primitive types. It can also be used to define function signatures.
// typescript

// type User = {
//   name: string;
//   age: number;
// };
// Key Difference: You can merge multiple interfaces with the same name, but you can't do that with types.

// 6. How does TypeScript handle optional parameters in functions?
// Answer:
// In TypeScript, you can mark a function parameter as optional by using a ?.
//  This tells TypeScript that the parameter may or may not be provided.