{
    type User1 = {
        name: string,
        age: number
    }

    type userWithrole1 = User1 & {role: string}

    interface User2 {
        name: string,
        age: number
    }

    interface userWithrole2 extends User2 {role: string}


    const user: userWithrole2 = {
        name: 'John',
        age: 36,
        role: 'admin'
    }
}