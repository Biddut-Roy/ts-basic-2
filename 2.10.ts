{
    // Mapped Types
     const arrOfNumber: number[] = [1, 2, 3, 4, 5];

     const arrOfString : string[] = arrOfNumber.map((number) => number.toString())
     console.log(arrOfString);
     

    //  
    type areNumber = {
        height: number;
        width: number;
    }
    
    type AreaString = {
        [key in keyof areNumber]: String
    }

    type AreaString1<T> = {
        [key in keyof T]: T[key]
    }

    const area1 : AreaString1<{height:string, width:number}> = {
        height : '100%',
        width: 50
    }

}