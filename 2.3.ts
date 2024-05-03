{
    // Generics type

    // type number1 = number[]

    type genericsArray<T> = Array<T>


    // const num: number1 = [1, 2, 3, 4]
    const num0 : Array<number> = [1, 2, 3, 4]
    const num: genericsArray<number> = [1, 2, 3, 4]

    const str: genericsArray<string> = ['ms', 'us', 'gk']

    const bool : genericsArray<boolean> = [true, false, false]

    type usee = object[]

    const user : usee  = [
        { name: 'ms', age: 36},
        { name: 'us', age:"36" },
        {role: 'admin'}
    ]

    const user2 : genericsArray<{ name: string , age: number }>  = [
        { name: 'ms', age: 36},
        { name: 'us', age:22 },
    ]


}