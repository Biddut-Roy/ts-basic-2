{
    // function with generic parameters

    const createArray = (param : string): string[] => {
        return [param]
    }

    const res1 = createArray('bangladesh')

    const createArrayWithGeneric = <T>(param : T): T[]=>{
        return [param]
    }

    const res2 = createArrayWithGeneric<string>('bangladesh')

  
    const res3 = createArrayWithGeneric<{ id: number; name: string; }>({
        id: 222,
        name: "Mr. jones"
    })
}