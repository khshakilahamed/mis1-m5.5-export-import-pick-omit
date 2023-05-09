// Pick
interface Person {
    name: string;
    email?: string;
    contactNo: string;
}

type Email = Pick<Person, 'email'>;
type Contact = Pick<Person, 'contactNo' | 'email'>; // we take these property from Contact

// Omit
type Name = Omit<Person, 'email' | 'contactNo'> // we remove these property from Name

// Partial
// to make all the properties be optional type
type Optional = Partial<Person>;

// Require
type RequiredProps = Required<Person>;

const person: Readonly<Person> = {
    name: "kh. shakil",
    email: 'kh@gmail.com',
    contactNo: '29424334'
}

// person.name = "Ahamed"; // could not be access

// Record Type
// type myObj = {
//     a: string;
//     b: string;
//     c: string;
// }

// using index signature
// type myObj = {
//     // [key: string]: string;
//     [key: 'a' | 'b' | 'c']: string;

// }



// Record   'a' | 'b' | 'c'
// type myObj = Record<string, string>;
type myObj = Record<'a' | 'b' | 'c' | 'd', string>;

const obj: myObj = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
}
