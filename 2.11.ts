{
    // utility types
    // Pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactInfo: string;
    }

    // pick type
    type NameAge = Pick<Person , "name" | "age" >

    // Omit
    type contactInfo = Omit<Person , "name" | "age" >

    //   Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // ReadOnly
    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly = {
        name: "John",
        age: 20,
        contactInfo: "John017",
    }

    // Record Types
    type Myobject = Record<string,string>

    const obj1 = {
        a: "aa",
        b: "bb",
        c: "cc",
    }

}