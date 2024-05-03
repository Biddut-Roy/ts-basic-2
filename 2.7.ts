{
    // Constraint Using Key Of
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"       //manually set

    type Owner2 = keyof Vehicle;


    const gePropertyValue = <X, Y extends keyof X>(obj: X , key: Y) =>{
        return obj[key];
    }


    const user = {
        name: " mr. parsiyal",
        age: 26,
        address: 'ctg'
    }

    const Result1 = gePropertyValue(user, "name")

}