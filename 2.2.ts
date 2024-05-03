{
    type User1 = {
        name: string,
        age: number
    }

    type userWithrole1 = User1 & { role: string }

    interface User2 {
        name: string,
        age: number
    }

    interface userWithrole2 extends User2 { role: string }


    const user: userWithrole2 = {
        name: 'John',
        age: 36,
        role: 'admin'
    }


    type roleNumber1 = number[]
    interface roleNumber2 {
        [index: number]: number
    }

    const add: roleNumber2 = [1, 2, 3]
    
    type roleNumber3 = (add1 : number, add2 : number,) => number
     interface roleNumber4 {
        (add1 : number, add2 : number): number
     }


    const addRole: roleNumber4 = (add1 , add2) => add1 + add2

}