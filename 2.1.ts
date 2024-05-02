{
    // Type Assertion / Type Narrowing

    let anyThink: any ;

    anyThink = "this is a thinking a lot of got"

    (anyThink as String)


    const kgTograms = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
         const conVersionValue = parseFloat(value)*1000;
         return `Value is conversion value ${conVersionValue}`;
        }
        if (typeof value === "number") {
            return value *1000;
            
        }

        const result1 = kgTograms(1000) as number;

        type errorMessage = {
            message: string
        }

        try {
            
        } catch (error) {
            console.log((error as errorMessage).message);
            
        }
    }

}