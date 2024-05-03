{

    type Developer<T , X = null> = {
        name: string;
        computer: {
            brand: string;
            model: string;
            prices: number;
        };
        smartWatch: T ;
        flashs ?: X ;
    }

    interface Watch {
        model: string;
        brand: string;
        display: string;
    }

    const poorDevelopers : Developer<Watch> = {
        name: 'Alias',
        computer :{
            model:'as-x33',
            brand: 'Microsoft',
            prices: 250000
        },
        smartWatch: {
            model:'as-x',
            brand: 'Microsoft',
            display:'inline'

        },
    }

    interface WatchRich {
        model: string;
        brand: string;
        display: string;
        prices: number
    }

    interface flash0 {
        flash: string;
    }

    const richDevelopers : Developer<WatchRich , flash0> = {
        name: 'Richman',
        computer :{
            model:'as-x33',
            brand: 'Microsoft',
            prices: 250000
        },
        smartWatch: {
            model:'as-x',
            brand: 'Microsoft',
            display:'inline',
            prices: 250000
        },
        flashs: { flash : 'jack'}
    }

}